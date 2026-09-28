// Screenshot + QA móvil (390x844) de una ruta del dev server.
// Uso: node tmp/shot-qa.mjs <ruta> <prefijo>
import { chromium } from 'playwright';
const [,, route, prefix] = process.argv;
const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 390, height: 844 } }).then(c => c.newPage());
await page.goto(`http://localhost:3010${route}`, { waitUntil: 'domcontentloaded', timeout: 120000 });
await page.waitForTimeout(9000);
// recorrer la página para disparar los Reveal
await page.evaluate(async () => {
  await new Promise(res => {
    let y = 0; const t = setInterval(() => { y += 600; window.scrollTo(0, y); if (y > document.body.scrollHeight) { clearInterval(t); res(); } }, 120);
  });
});
await page.waitForTimeout(2500);
await page.screenshot({ path: `tmp/${prefix}-390-full.png`, fullPage: true });
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(400);
await page.screenshot({ path: `tmp/${prefix}-390-top.png` });
// métricas QA
const qa = await page.evaluate(() => {
  const out = {};
  out.desborde = document.documentElement.scrollWidth - document.documentElement.clientWidth;
  out.botonesAltos = [...document.querySelectorAll('a,button')].filter(b => { const r = b.getBoundingClientRect(); return r.height > 52 && r.width > 40; }).map(b => (b.textContent||'').trim().slice(0,30) + ' h=' + Math.round(b.getBoundingClientRect().height));
  const foot = document.querySelector('footer');
  out.footerH = foot ? Math.round(foot.getBoundingClientRect().height) : 0;
  out.imgSinAlt = [...document.querySelectorAll('img')].filter(i => !i.getAttribute('alt') && !i.getAttribute('aria-hidden')).map(i => i.src.split('/').pop());
  out.invisibles = [...document.querySelectorAll('*')].filter(e => { const s = getComputedStyle(e); const r = e.getBoundingClientRect(); return s.opacity === '0' && r.height > 10; }).length;
  out.mapa = !!document.querySelector('iframe');
  return out;
});
console.log(JSON.stringify(qa, null, 1));
await browser.close();
