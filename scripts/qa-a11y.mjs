// Auditoria de accesibilidad de demos (390x844 por defecto).
// Uso: node scripts/qa-a11y.mjs --base http://localhost:4800 --slugs a,b [--width 1440] [--json]
// Sin --slugs audita todas las carpetas con index.html bajo out/demos (requiere --out).
import { chromium } from 'playwright';
import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : d; };
const flag = (k) => process.argv.includes(k);
const BASE = arg('--base', 'http://localhost:4800');
const WIDTH = Number(arg('--width', 390));
const OUT = arg('--out', 'out');
const JSON_OUT = flag('--json');
const CONC = Number(arg('--conc', 6));

let slugs = arg('--slugs', '').split(',').filter(Boolean);
if (!slugs.length) {
  slugs = readdirSync(join(OUT, 'demos'), { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(OUT, 'demos', d.name, 'index.html')))
    .map((d) => d.name);
}

function audit() {
  const norm = (s) => (s || '').replace(/\s+/g, ' ').trim();
  const sel = (el) => {
    const id = el.id ? `#${el.id}` : '';
    const cls = typeof el.className === 'string'
      ? el.className.split(/\s+/).filter(Boolean).slice(0, 3).join('.')
      : '';
    return `${el.tagName.toLowerCase()}${id}${cls ? '.' + cls : ''}`;
  };
  const accName = (el) => norm(
    el.getAttribute('aria-label')
    || (el.getAttribute('aria-labelledby')
      ? el.getAttribute('aria-labelledby').split(/\s+/).map((i) => document.getElementById(i)?.textContent).join(' ')
      : '')
    || el.getAttribute('title')
    || el.textContent
    || el.querySelector('img[alt]')?.getAttribute('alt')
    || '',
  );
  const visible = (el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) > 0 && r.width > 0 && r.height > 0;
  };
  const isInline = (el) => {
    // Enlaces en linea dentro de texto corrido quedan exentos de tamano tactil (WCAG 2.5.8).
    const cs = getComputedStyle(el);
    if (cs.display !== 'inline' && cs.display !== 'inline-block') return false;
    const p = el.parentElement;
    return !!p && ['P', 'LI', 'SPAN', 'SMALL', 'EM', 'STRONG', 'TD', 'ADDRESS', 'FIGCAPTION', 'DD', 'DT'].includes(p.tagName);
  };
  // Area efectiva: el elemento puede expandir su zona tactil con ::before absoluto (clase tap-44).
  const tapRect = (el) => {
    const r = el.getBoundingClientRect();
    const pb = getComputedStyle(el, '::before');
    if (pb.content !== 'none' && pb.content !== 'normal' && pb.position === 'absolute') {
      const t = Math.min(0, parseFloat(pb.top) || 0);
      const l = Math.min(0, parseFloat(pb.left) || 0);
      return { width: r.width - 2 * l, height: r.height - 2 * t };
    }
    return { width: r.width, height: r.height };
  };

  const f = { imgSinAlt: [], sinNombre: [], tactilChico: [], inputSinLabel: [], sinFoco: [], headings: [], landmarks: [] };

  // 1. <img> sin alt (alt ausente). alt="" en imagen >=48px no decorativa tambien cuenta.
  for (const img of document.querySelectorAll('img')) {
    if (!visible(img)) continue;
    const alt = img.getAttribute('alt');
    const decorativa = img.getAttribute('role') === 'presentation' || img.closest('[aria-hidden="true"]');
    const r = img.getBoundingClientRect();
    if (alt === null) f.imgSinAlt.push(`${sel(img)} src=${(img.getAttribute('src') || '').split('/').pop()}`);
    else if (alt === '' && !decorativa && r.width >= 48 && r.height >= 48)
      f.imgSinAlt.push(`${sel(img)} (alt vacio) src=${(img.getAttribute('src') || '').split('/').pop()}`);
  }

  // 2. Clickables sin nombre accesible.
  const clickables = document.querySelectorAll('a[href], button, [role="button"], [role="link"], summary, input[type="submit"], input[type="button"]');
  for (const el of clickables) {
    if (!visible(el)) continue;
    if (!accName(el)) f.sinNombre.push(sel(el));
  }

  // 3. Area tactil < 44x44 (salvo enlaces inline en texto y skip-links sr-only).
  for (const el of clickables) {
    if (!visible(el) || isInline(el)) continue;
    if (el.classList.contains('sr-only') || el.closest('[aria-hidden="true"]')) continue;
    const r = tapRect(el);
    if (r.width < 44 || r.height < 44) f.tactilChico.push(`${sel(el)} ${Math.round(r.width)}x${Math.round(r.height)} "${norm(el.textContent).slice(0, 30)}"`);
  }

  // 4. Inputs sin label asociado.
  for (const el of document.querySelectorAll('input, select, textarea')) {
    const t = el.getAttribute('type') || 'text';
    if (['hidden', 'submit', 'button', 'image'].includes(t) || !visible(el)) continue;
    const id = el.id;
    const ok = (id && document.querySelector(`label[for="${CSS.escape(id)}"]`))
      || el.closest('label')
      || el.getAttribute('aria-label')
      || el.getAttribute('aria-labelledby');
    if (!ok) f.inputSinLabel.push(`${sel(el)} type=${t} name=${el.getAttribute('name') || ''}`);
  }

  // 6. Jerarquia de encabezados.
  const hs = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(visible);
  const h1s = hs.filter((h) => h.tagName === 'H1');
  if (h1s.length === 0) f.headings.push('sin h1');
  if (h1s.length > 1) f.headings.push(`${h1s.length} h1: ${h1s.map((h) => `"${norm(h.textContent).slice(0, 40)}"`).join(', ')}`);
  let prev = 0;
  for (const h of hs) {
    const lvl = Number(h.tagName[1]);
    if (prev && lvl > prev + 1) f.headings.push(`salto h${prev} -> h${lvl}: "${norm(h.textContent).slice(0, 40)}"`);
    prev = lvl;
  }

  // 7. Landmarks.
  for (const [tag, role] of [['header', 'banner'], ['main', 'main'], ['footer', 'contentinfo']]) {
    const found = document.querySelector(`${tag}, [role="${role}"]`);
    const vis = found && [...document.querySelectorAll(`${tag}, [role="${role}"]`)].some(visible);
    if (!vis) f.landmarks.push(`falta <${tag}>`);
  }

  return f;
}

// 5. Foco visible: se mide aparte porque hay que enfocar cada elemento.
async function focoVisible(page) {
  return page.evaluate(async () => {
    const norm = (s) => (s || '').replace(/\s+/g, ' ').trim();
    const sel = (el) => {
      const id = el.id ? `#${el.id}` : '';
      const cls = typeof el.className === 'string'
        ? el.className.split(/\s+/).filter(Boolean).slice(0, 3).join('.') : '';
      return `${el.tagName.toLowerCase()}${id}${cls ? '.' + cls : ''}`;
    };
    const malos = [];
    const els = [...document.querySelectorAll('a[href], button, [role="button"], input, select, textarea, summary, [tabindex]:not([tabindex="-1"])')];
    for (const el of els) {
      if (el.classList.contains('sr-only') || el.closest('[aria-hidden="true"]')) continue;
      const r = el.getBoundingClientRect();
      const cs0 = getComputedStyle(el);
      if (cs0.display === 'none' || cs0.visibility === 'hidden' || r.width === 0) continue;
      el.focus();
      await new Promise((res) => requestAnimationFrame(res));
      const cs = getComputedStyle(el);
      const outline = cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0;
      const ring = cs.boxShadow !== 'none';
      const deco = cs.textDecorationLine.includes('underline');
      if (!outline && !ring && !deco) malos.push(`${sel(el)} "${norm(el.textContent || el.getAttribute('aria-label') || '').slice(0, 30)}"`);
    }
    document.activeElement?.blur?.();
    return malos;
  });
}

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: WIDTH, height: WIDTH < 500 ? 844 : 900 }, deviceScaleFactor: 1, isMobile: WIDTH < 500, hasTouch: WIDTH < 500,
});
const results = {};
const queue = [...slugs];
await Promise.all(Array.from({ length: CONC }, async () => {
  while (queue.length) {
    const slug = queue.shift();
    const page = await ctx.newPage();
    try {
      await page.goto(`${BASE}/demos/${slug}/`, { waitUntil: 'networkidle', timeout: 45000 });
      // Recorrer para disparar animaciones lazy.
      await page.evaluate(async () => {
        await new Promise((res) => {
          let y = 0;
          const t = setInterval(() => {
            y += 600; window.scrollTo(0, y);
            if (y >= document.body.scrollHeight) { clearInterval(t); res(); }
          }, 60);
        });
      });
      await page.waitForTimeout(1200);
      const f = await page.evaluate(audit);
      f.sinFoco = await focoVisible(page);
      results[slug] = f;
      const total = Object.values(f).reduce((a, v) => a + v.length, 0);
      if (!JSON_OUT) {
        console.log(`\n=== ${slug} — ${total} hallazgo(s)`);
        for (const [k, v] of Object.entries(f)) for (const item of v) console.log(`  [${k}] ${item}`);
      }
    } catch (e) {
      results[slug] = { error: String(e.message || e).split('\n')[0] };
      if (!JSON_OUT) console.log(`\n=== ${slug} — ERROR ${results[slug].error}`);
    }
    await page.close();
  }
}));
await browser.close();
if (JSON_OUT) console.log(JSON.stringify(results, null, 1));
