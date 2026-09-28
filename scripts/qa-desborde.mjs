// Mide desborde horizontal real (390×844) y lista los culpables raíz.
// Uso: node scripts/qa-desborde.mjs --base https://sitiazo.cl --slugs a,b [--width 1440]
import { chromium } from 'playwright';

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : d; };
const BASE = arg('--base', 'https://sitiazo.cl');
const WIDTH = Number(arg('--width', 390));
const slugs = arg('--slugs', '').split(',').filter(Boolean);

function measure() {
  const vw = document.documentElement.clientWidth;
  const sw = document.documentElement.scrollWidth;
  const sel = (el) => {
    const id = el.id ? `#${el.id}` : '';
    const cls = typeof el.className === 'string' ? el.className.split(/\s+/).filter(Boolean).slice(0, 4).join('.') : '';
    return `${el.tagName.toLowerCase()}${id}${cls ? '.' + cls : ''}`;
  };
  const inScrollContainer = (el) => {
    for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
      const cs = getComputedStyle(n);
      const ox = cs.overflowX;
      if (ox === 'auto' || ox === 'scroll' || ox === 'hidden' || ox === 'clip') return sel(n);
    }
    return null;
  };
  const culpables = [];
  if (sw > vw) {
    for (const el of document.body.querySelectorAll('*')) {
      const r = el.getBoundingClientRect();
      if (r.width === 0) continue;
      if (r.right <= vw + 0.5 && r.left >= -0.5) continue;
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') continue;
      const scrollParent = inScrollContainer(el);
      // Guarda solo los que no tienen un padre ya listado (raíz del problema).
      culpables.push({
        sel: sel(el), left: Math.round(r.left * 10) / 10, right: Math.round(r.right * 10) / 10,
        w: Math.round(r.width * 10) / 10, pos: cs.position, scrollParent,
        texto: (el.childElementCount === 0 ? (el.textContent || '') : '').trim().replace(/\s+/g, ' ').slice(0, 60),
      });
    }
  }
  return { clientWidth: vw, scrollWidth: sw, desborde: sw > vw, culpables };
}

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: WIDTH, height: 844 }, deviceScaleFactor: 3, isMobile: WIDTH < 500, hasTouch: WIDTH < 500,
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
});
for (const slug of slugs) {
  const page = await ctx.newPage();
  const url = `${BASE}/demos/${slug}/`;
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(3500);
    const m = await page.evaluate(measure);
    console.log(`\n=== ${slug} @ ${WIDTH}px — scrollWidth ${m.scrollWidth} / clientWidth ${m.clientWidth} → ${m.desborde ? 'DESBORDE' : 'ok'}`);
    for (const c of m.culpables) console.log(`  ${c.sel} [${c.left} → ${c.right}] w=${c.w} pos=${c.pos}${c.scrollParent ? ` (dentro de overflow: ${c.scrollParent})` : ''}${c.texto ? ` "${c.texto}"` : ''}`);
  } catch (e) {
    console.log(`\n=== ${slug} — ERROR ${String(e.message || e).split('\n')[0]}`);
  }
  await page.close();
}
await browser.close();
