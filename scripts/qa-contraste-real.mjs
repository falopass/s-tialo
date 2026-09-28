// QA contraste real de los demos (390×844). Re-mide contraste y, para cada
// hallazgo, detecta lo que realmente está pintado detrás del texto:
// - imágenes/video/canvas hermanos (elementsFromPoint)
// - background-image/gradientes en el stack o en ::before/::after
// - color transparente con -webkit-text-stroke o background-clip:text
// - captura un crop PNG por hallazgo para revisión visual
// Uso: node scripts/qa-contraste-real.mjs [--base http://localhost:3210] [--slugs a,b] [--out cache/contraste-real.json]
import { chromium } from 'playwright';
import { readdirSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : d; };
const BASE = arg('--base', 'http://localhost:3210');
const CONCURRENCY = Number(arg('--concurrency', 4));
const SETTLE_MS = 3500;
const VIEWPORT = { width: 390, height: 844 };
const MIN_CONTRAST = 4.5;
const OUT = arg('--out', 'cache/contraste-real.json');
const CROPS = arg('--crops', 'cache/crops');
const FULL_SCAN = process.argv.includes('--full');

const demosDir = join(process.cwd(), 'app', 'demos');
const slugs = arg('--slugs')?.split(',') ??
  readdirSync(demosDir).filter((n) => !n.startsWith('[') && statSync(join(demosDir, n)).isDirectory()).sort();

function measure({ MIN_CONTRAST }) {
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.display !== 'none' && cs.visibility !== 'hidden';
  };
  const label = (el) => (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);
  const sel = (el) => {
    const id = el.id ? `#${el.id}` : '';
    const cls = typeof el.className === 'string' ? el.className.split(/\s+/).filter(Boolean).slice(0, 4).join('.') : '';
    return `${el.tagName.toLowerCase()}${id}${cls ? '.' + cls : ''}`;
  };
  const parse = (c) => {
    const m = (c || '').match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[\s,\/]+/).filter(Boolean).map(Number);
    if (p.length < 3 || p.some(Number.isNaN)) return null;
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const blend = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1,
  });
  const lum = ({ r, g, b }) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => { const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x); return (l1 + 0.05) / (l2 + 0.05); };
  const fmt = (c) => c ? `rgb(${Math.round(c.r)},${Math.round(c.g)},${Math.round(c.b)})` : null;

  // Fondo por cadena de ancestros (igual que el QA original).
  const ancestorBg = (el) => {
    const layers = [];
    for (let n = el; n; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage !== 'none') return { kind: 'ancestor-image', color: null };
      const bg = parse(cs.backgroundColor);
      if (!bg) return { kind: 'unparseable', color: null };
      if (bg.a > 0) layers.push(bg);
      if (bg.a >= 1) break;
    }
    let out = { r: 255, g: 255, b: 255, a: 1 };
    for (const l of layers.reverse()) out = blend(l, out);
    return { kind: 'solid', color: out };
  };

  // Qué hay pintado detrás del texto: muestrea puntos del rect y mira el stack
  // de hit-testing por debajo del elemento de texto.
  const backdrop = (el) => {
    const r = el.getBoundingClientRect();
    const pts = [
      [r.left + r.width / 2, r.top + r.height / 2],
      [r.left + Math.min(6, r.width / 4), r.top + r.height / 2],
      [r.right - Math.min(6, r.width / 4), r.top + r.height / 2],
      [r.left + r.width / 2, r.top + Math.min(4, r.height / 4)],
      [r.left + r.width / 2, r.bottom - Math.min(4, r.height / 4)],
    ];
    const inside = new Set([el, ...el.querySelectorAll('*'), ...(() => { const s = []; for (let n = el; n; n = n.parentElement) s.push(n); return s; })()]);
    const seen = new Set();
    let media = null, imgBg = null, solidBg = null;
    for (const [x, y] of pts) {
      if (x < 0 || y < 0 || x > innerWidth || y > innerHeight) continue;
      const stack = document.elementsFromPoint(x, y);
      // primer elemento del stack que no sea el propio texto ni sus ancestros/descendientes
      let idx = stack.findIndex((n) => !inside.has(n));
      if (idx === -1) continue;
      for (let i = idx; i < stack.length; i++) {
        const n = stack[i];
        if (seen.has(n)) continue;
        seen.add(n);
        const cs = getComputedStyle(n);
        const tag = n.tagName;
        if (/^(IMG|VIDEO|CANVAS|PICTURE)$/.test(tag)) media = media || { sel: sel(n), tag };
        if (cs.backgroundImage !== 'none') imgBg = imgBg || { sel: sel(n), img: cs.backgroundImage.slice(0, 60) };
        for (const p of ['::before', '::after']) {
          const ps = getComputedStyle(n, p);
          if (ps.content !== 'none' && ps.backgroundImage !== 'none') imgBg = imgBg || { sel: sel(n) + p, img: ps.backgroundImage.slice(0, 60) };
        }
        const bg = parse(cs.backgroundColor);
        if (bg && bg.a >= 1) { solidBg = solidBg || bg; break; }
      }
    }
    return { media, imgBg, solidBg: solidBg ? fmt(solidBg) : null };
  };

  const contraste = [];
  const seenEl = new Set();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let t = walker.nextNode(); t; t = walker.nextNode()) {
    const txt = t.textContent.trim();
    if (txt.length < 2) continue;
    const el = t.parentElement;
    if (!el || seenEl.has(el) || !visible(el)) continue;
    if (/^(SCRIPT|STYLE|NOSCRIPT)$/.test(el.tagName)) continue;
    seenEl.add(el);
    const cs = getComputedStyle(el);
    if (Number(cs.opacity) === 0) continue;
    const fg = parse(cs.color);
    if (!fg) continue;
    const anc = ancestorBg(el);
    const size = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight, 10) >= 700;
    const large = size >= 24 || (size >= 18.66 && bold);
    const min = large ? 3 : MIN_CONTRAST;
    let r = null;
    if (anc.kind === 'solid') {
      const fgSolid = fg.a < 1 ? blend(fg, anc.color) : fg;
      r = Math.round(ratio(fgSolid, anc.color) * 100) / 100;
    }
    const fails = r !== null && r < min;
    if (!fails) continue;
    el.setAttribute('data-qa-crop', String(contraste.length));
    const r0 = el.getBoundingClientRect();
    contraste.push({
      ratio: r, minimo: min, texto: txt.slice(0, 60),
      color: cs.color, fontSize: cs.fontSize, fontWeight: cs.fontWeight,
      textStroke: cs.webkitTextStrokeWidth !== '0px' ? `${cs.webkitTextStrokeWidth} ${cs.webkitTextStrokeColor}` : null,
      textFill: cs.webkitTextFillColor !== cs.color ? cs.webkitTextFillColor : null,
      bgClip: (cs.webkitBackgroundClip === 'text' || cs.backgroundClip === 'text') ? 'text' : null,
      textShadow: cs.textShadow !== 'none' ? cs.textShadow.slice(0, 60) : null,
      fondo: anc.kind === 'solid' ? fmt(anc.color) : anc.kind,
      backdrop: backdrop(el),
      sel: sel(el),
      rect: { x: Math.round(r0.x), y: Math.round(r0.y), w: Math.round(r0.width), h: Math.round(r0.height) },
    });
  }
  return contraste;
}

// placeholder trick: inyectar FULL_SCAN en la función serializada
const measureSrc = measure.toString().replace('FULL_SCAN_PLACEHOLDER', 'false');

const browser = await chromium.launch();
mkdirSync(CROPS, { recursive: true });
const results = {};
const queue = [...slugs];
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const slug = queue.shift();
    const page = await browser.newPage({ viewport: VIEWPORT });
    try {
      await page.goto(`${BASE}/demos/${slug}/`, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(SETTLE_MS);
      const findings = await page.evaluate(`(${measureSrc})({ MIN_CONTRAST: ${MIN_CONTRAST} })`);
      // crop por hallazgo (scrollIntoView + clip en coords de viewport)
      for (let i = 0; i < findings.length; i++) {
        const f = findings[i];
        try {
          const loc = page.locator(`[data-qa-crop="${i}"]`);
          await loc.scrollIntoViewIfNeeded();
          const box = await loc.boundingBox();
          if (!box) continue;
          const pad = 12;
          const clip = {
            x: Math.max(0, box.x - pad), y: Math.max(0, box.y - pad),
            width: Math.min(box.width + pad * 2, VIEWPORT.width),
            height: Math.min(box.height + pad * 2, 300),
          };
          if (clip.y + clip.height > VIEWPORT.height) clip.height = VIEWPORT.height - clip.y;
          f.crop = `${CROPS}/${slug}-${i}.png`;
          await page.screenshot({ path: f.crop, clip });
        } catch { /* elemento no localizable */ }
      }
      results[slug] = findings;
      if (findings.length) console.log(`${slug}: ${findings.length} hallazgos`);
    } catch (e) {
      results[slug] = { error: String(e).slice(0, 200) };
      console.log(`${slug}: ERROR ${e.message?.slice(0, 80)}`);
    }
    await page.close();
  }
}));
await browser.close();
writeFileSync(OUT, JSON.stringify(results, null, 1));
console.log(`\n${Object.keys(results).length} demos → ${OUT}`);
