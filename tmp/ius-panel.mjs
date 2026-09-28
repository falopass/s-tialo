import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
});
const page = await ctx.newPage();
await page.goto('https://www.google.com/maps/place/IUS+Abogados+Linares/@-35.8475306,-71.5968446,17z/data=!4m8!3m7!1s0x46df05e4096a7e27:0x3abd8bb4ecbe9642!8m2!3d-35.8475306!4d-71.5968446!9m1!1b1!16s%2Fg%2F11z3mfpwb4', { waitUntil: 'domcontentloaded' });
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first();
  await btn.click({ timeout: 4000 });
  await page.waitForLoadState('domcontentloaded');
} catch {}
await page.waitForTimeout(8000);
// click en el rating/boton de reseñas si existe
await page.evaluate(() => {
  const el = [...document.querySelectorAll('button')].find(b => /reseña|review/i.test((b.getAttribute('aria-label')||'') + ' ' + (b.textContent||'')));
  if (el) el.click();
});
await page.waitForTimeout(4000);
const info = await page.evaluate(() => {
  const t = document.body.innerText;
  const m = t.match(/(\d[\d.,]*)\s*(reseñas|opiniones|reviews)/i);
  const rating = document.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label');
  const tabs = [...document.querySelectorAll('[role="tab"]')].map(t => t.getAttribute('aria-label') || t.textContent.trim()).slice(0, 12);
  return { rating, match: m?.[0], tabs, snippet: t.slice(0, 600) };
});
console.log(JSON.stringify(info, null, 1));
for (let i = 0; i < 8; i++) {
  await page.evaluate(() => { const els = [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300); for (const el of els) el.scrollTop = el.scrollHeight; });
  await page.waitForTimeout(700);
}
const res = await page.evaluate(() => {
  const out = []; const seen = new Set();
  for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
    const nombre = el.querySelector('.d4r55')?.textContent?.trim() || '';
    const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || '';
    const texto = el.querySelector('.wiI7pd')?.textContent?.trim() || '';
    const key = nombre + '|' + texto;
    if (nombre && !seen.has(key)) { seen.add(key); out.push({ nombre, stars, texto: texto.slice(0, 300) }); }
  }
  return out.slice(0, 15);
});
console.log('RESENAS:', JSON.stringify(res));
await page.screenshot({ path: 'tmp/ius-fotos2/panel.png' });
await browser.close();
