// QA móvil de los demos en vivo (390×844). Solo mide, no arregla.
// Uso: node scripts/qa-movil-cloud.mjs [--base https://sitiazo.cl] [--slugs a,b] [--concurrency 4]
import { chromium } from 'playwright';
import { readdirSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : d; };
const BASE = arg('--base', 'https://sitiazo.cl');
const CONCURRENCY = Number(arg('--concurrency', 4));
const SETTLE_MS = 3500;
const VIEWPORT = { width: 390, height: 844 };
const MAX_BUTTON_H = 52;
const MAX_FOOTER_PCT = 40;
const MIN_CONTRAST = 4.5;

const demosDir = join(process.cwd(), 'app', 'demos');
const slugs = arg('--slugs')?.split(',') ??
  readdirSync(demosDir).filter((n) => !n.startsWith('[') && statSync(join(demosDir, n)).isDirectory()).sort();

// Se ejecuta dentro de la página.
function measure({ MAX_BUTTON_H, MIN_CONTRAST }) {
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.display !== 'none' && cs.visibility !== 'hidden';
  };
  const label = (el) => (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);
  const sel = (el) => {
    const id = el.id ? `#${el.id}` : '';
    const cls = typeof el.className === 'string' ? el.className.split(/\s+/).filter(Boolean).slice(0, 3).join('.') : '';
    return `${el.tagName.toLowerCase()}${id}${cls ? '.' + cls : ''}`;
  };

  // 1. Botones
  const botones = [];
  for (const el of document.querySelectorAll('a,button,[role="button"]')) {
    if (!visible(el) || !label(el)) continue;
    const h = Math.round(el.getBoundingClientRect().height);
    if (h > MAX_BUTTON_H) botones.push({ alto: h, texto: label(el), sel: sel(el) });
  }

  // 2. Footer
  const footer = document.querySelector('footer');
  const footerPx = footer ? Math.round(footer.getBoundingClientRect().height) : 0;
  const footerPct = Math.round((footerPx / vh) * 1000) / 10;

  // 3. Contraste
  const parse = (c) => {
    const m = c.match(/rgba?\(([^)]+)\)/);
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
  // Fondo efectivo: sube por los ancestros acumulando capas. Si hay imagen/degradado devuelve null (no medible).
  const background = (el) => {
    const layers = [];
    for (let n = el; n; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage !== 'none') return null;
      const bg = parse(cs.backgroundColor);
      if (!bg) return null; // color-mix()/lab(): no interpretable
      if (bg.a > 0) layers.push(bg);
      if (bg.a >= 1) break;
    }
    let out = { r: 255, g: 255, b: 255, a: 1 };
    for (const l of layers.reverse()) out = blend(l, out);
    return out;
  };
  const contraste = [];
  const seen = new Set();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let t = walker.nextNode(); t; t = walker.nextNode()) {
    const txt = t.textContent.trim();
    if (txt.length < 2) continue;
    const el = t.parentElement;
    if (!el || seen.has(el) || !visible(el)) continue;
    if (/^(SCRIPT|STYLE|NOSCRIPT)$/.test(el.tagName)) continue;
    seen.add(el);
    const cs = getComputedStyle(el);
    if (Number(cs.opacity) === 0) continue;
    const fg = parse(cs.color);
    const bg = background(el);
    if (!fg || !bg) continue;
    const fgSolid = fg.a < 1 ? blend(fg, bg) : fg;
    const r = Math.round(ratio(fgSolid, bg) * 100) / 100;
    const size = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight, 10) >= 700;
    const large = size >= 24 || (size >= 18.66 && bold);
    const min = large ? 3 : MIN_CONTRAST;
    if (r < min) contraste.push({ ratio: r, minimo: min, texto: txt.slice(0, 60), color: cs.color, fondo: `rgb(${Math.round(bg.r)},${Math.round(bg.g)},${Math.round(bg.b)})`, sel: sel(el) });
  }

  // 4. Desborde horizontal
  const scrollWidth = document.documentElement.scrollWidth;
  const desborde = scrollWidth > vw;
  const culpables = [];
  if (desborde) {
    for (const el of document.body.querySelectorAll('*')) {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.right > vw + 1 || r.left < -1) && culpables.length < 10) culpables.push({ sel: sel(el), left: Math.round(r.left), right: Math.round(r.right) });
    }
  }

  // 5. Contenido invisible (opacity 0 tras la espera)
  const invisibles = [];
  for (const el of document.body.querySelectorAll('*')) {
    const cs = getComputedStyle(el);
    if (Number(cs.opacity) !== 0) continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const texto = label(el);
    if (!texto && !el.querySelector('img,svg,video')) continue;
    invisibles.push({ sel: sel(el), texto, top: Math.round(r.top + window.scrollY), alto: Math.round(r.height) });
    if (invisibles.length >= 25) break;
  }

  return {
    botones, footerPx, footerPct, contraste, desborde, scrollWidth, clientWidth: vw, culpables, invisibles,
  };
}

async function run() {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: VIEWPORT, deviceScaleFactor: 3, isMobile: true, hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });
  const results = {};
  const queue = [...slugs];
  const worker = async () => {
    const page = await ctx.newPage();
    for (let slug; (slug = queue.shift());) {
      const url = `${BASE}/demos/${slug}/`;
      const t0 = Date.now();
      try {
        const res = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
        // Sin scroll: medimos lo que ve el usuario al cargar, así detectamos revelados que no disparan.
        await page.waitForTimeout(SETTLE_MS);
        const m = await page.evaluate(measure, { MAX_BUTTON_H, MIN_CONTRAST });
        results[slug] = { url, status: res?.status() ?? 0, ...m, ms: Date.now() - t0 };
      } catch (e) {
        results[slug] = { url, error: String(e.message || e).split('\n')[0], ms: Date.now() - t0 };
      }
      const r = results[slug];
      console.log(`${slug.padEnd(50)} ${r.error ? 'ERROR ' + r.error : `btn>${MAX_BUTTON_H}:${r.botones.length} footer:${r.footerPct}% contraste:${r.contraste.length} desborde:${r.desborde ? r.scrollWidth : 'no'} invisibles:${r.invisibles.length}`}`);
    }
    await page.close();
  };
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  await browser.close();
  return results;
}

function severity(r) {
  if (r.error) return 100;
  return (r.desborde ? 40 : 0) + Math.min(r.invisibles.length, 5) * 8 + Math.min(r.botones.length, 5) * 4 +
    (r.footerPct > MAX_FOOTER_PCT ? 10 + Math.min(r.footerPct - MAX_FOOTER_PCT, 30) : 0) + Math.min(r.contraste.length, 10) * 2;
}

function markdown(results) {
  const entries = Object.entries(results).map(([slug, r]) => [slug, r, severity(r)]).sort((a, b) => b[2] - a[2]);
  const ok = (r) => !r.error && !r.botones.length && r.footerPct <= MAX_FOOTER_PCT && !r.contraste.length && !r.desborde && !r.invisibles.length;
  const count = (f) => entries.filter(([, r]) => !r.error && f(r)).length;
  const L = [];
  L.push(`# QA móvil (cloud) — ${BASE}/demos/`, '', `Fecha: ${new Date().toISOString()} · Viewport ${VIEWPORT.width}×${VIEWPORT.height} · espera ${SETTLE_MS} ms tras networkidle · sin scroll.`, '');
  L.push('## Resumen', '');
  L.push(`| Métrica | Demos afectados |`, `|---|---|`);
  L.push(`| Demos revisados | ${entries.length} |`);
  L.push(`| Con error de carga | ${entries.filter(([, r]) => r.error).length} |`);
  L.push(`| Botones > ${MAX_BUTTON_H}px | ${count((r) => r.botones.length)} |`);
  L.push(`| Footer > ${MAX_FOOTER_PCT}% | ${count((r) => r.footerPct > MAX_FOOTER_PCT)} |`);
  L.push(`| Contraste < ${MIN_CONTRAST}:1 (3:1 en texto grande) | ${count((r) => r.contraste.length)} |`);
  L.push(`| Desborde horizontal | ${count((r) => r.desborde)} |`);
  L.push(`| Contenido invisible (opacity 0 a ${SETTLE_MS} ms) | ${count((r) => r.invisibles.length)} |`);
  L.push(`| Sin hallazgos | ${entries.filter(([, r]) => ok(r)).length} |`, '');
  L.push('## Los 5 peores', '');
  for (const [slug, r, s] of entries.slice(0, 5)) L.push(`- **${slug}** (gravedad ${s}): ${r.error ? r.error : `${r.botones.length} botones, footer ${r.footerPct}%, ${r.contraste.length} contrastes, ${r.desborde ? 'desborde ' + r.scrollWidth + 'px' : 'sin desborde'}, ${r.invisibles.length} invisibles`}`);
  L.push('', '## Tabla por gravedad', '', `| # | Demo | Grav. | Btn>${MAX_BUTTON_H} | Footer % | Contraste | Desborde | Invisibles |`, '|---|---|---|---|---|---|---|---|');
  entries.forEach(([slug, r, s], i) => L.push(r.error
    ? `| ${i + 1} | [${slug}](${r.url}) | ${s} | ERROR | ${r.error} | | | |`
    : `| ${i + 1} | [${slug}](${r.url}) | ${s} | ${r.botones.length} | ${r.footerPct}${r.footerPct > MAX_FOOTER_PCT ? ' ⚠' : ''} | ${r.contraste.length} | ${r.desborde ? r.scrollWidth + 'px' : '—'} | ${r.invisibles.length} |`));
  L.push('', '## Detalle por demo (solo con hallazgos)', '');
  for (const [slug, r, s] of entries) {
    if (ok(r)) continue;
    L.push(`### ${slug} — gravedad ${s}`, '', r.url, '');
    if (r.error) { L.push(`- ERROR: ${r.error}`, ''); continue; }
    if (r.botones.length) { L.push(`**Botones > ${MAX_BUTTON_H}px (${r.botones.length})**`); r.botones.forEach((b) => L.push(`- ${b.alto}px · "${b.texto}" · \`${b.sel}\``)); L.push(''); }
    if (r.footerPct > MAX_FOOTER_PCT) L.push(`**Footer ${r.footerPx}px = ${r.footerPct}% de la pantalla**`, '');
    if (r.contraste.length) { L.push(`**Contraste bajo (${r.contraste.length})**`); r.contraste.slice(0, 15).forEach((c) => L.push(`- ${c.ratio}:1 (mín ${c.minimo}) · "${c.texto}" · ${c.color} sobre ${c.fondo} · \`${c.sel}\``)); if (r.contraste.length > 15) L.push(`- … y ${r.contraste.length - 15} más (ver JSON)`); L.push(''); }
    if (r.desborde) { L.push(`**Desborde horizontal: scrollWidth ${r.scrollWidth} > ${r.clientWidth}**`); r.culpables.forEach((c) => L.push(`- \`${c.sel}\` left ${c.left} right ${c.right}`)); L.push(''); }
    if (r.invisibles.length) { L.push(`**Contenido invisible (${r.invisibles.length})**`); r.invisibles.slice(0, 10).forEach((v) => L.push(`- top ${v.top}px alto ${v.alto}px · "${v.texto}" · \`${v.sel}\``)); L.push(''); }
  }
  return L.join('\n');
}

const results = await run();
mkdirSync('cache', { recursive: true });
writeFileSync('cache/qa-movil-cloud.json', JSON.stringify({ base: BASE, fecha: new Date().toISOString(), viewport: VIEWPORT, umbrales: { MAX_BUTTON_H, MAX_FOOTER_PCT, MIN_CONTRAST, SETTLE_MS }, demos: results }, null, 2));
writeFileSync('cache/qa-movil-cloud.md', markdown(results));
console.log('\nEscrito cache/qa-movil-cloud.json y cache/qa-movil-cloud.md');
