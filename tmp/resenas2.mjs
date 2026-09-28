// Extrae reseñas: navega a la ficha, lista los tabs reales y abre el de reseñas.
import { chromium } from 'playwright';
const query = process.argv[2];
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
});
const page = await ctx.newPage();
await page.goto(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, { waitUntil: 'domcontentloaded' });
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first();
  await btn.click({ timeout: 4000 });
  await page.waitForLoadState('domcontentloaded');
} catch {}
await page.waitForTimeout(7000);
// dump tabs + botones con "reseña"
const tabs = await page.evaluate(() => {
  const t = [...document.querySelectorAll('[role="tab"], button')].map(b => (b.getAttribute('aria-label') || b.textContent || '').trim()).filter(x => /reseñ|review|opinion/i.test(x));
  return t.slice(0, 10);
});
console.log('TABS:', JSON.stringify(tabs));
// click por texto
const clicked = await page.evaluate(() => {
  const el = [...document.querySelectorAll('button, [role="tab"], a')].find(b => /^\s*reseñas\s*$|reviews/i.test((b.textContent||'').trim()));
  if (el) { el.click(); return (el.textContent||'').trim(); }
  return null;
});
console.log('CLICKED:', clicked);
await page.waitForTimeout(5000);
for (let i = 0; i < 10; i++) {
  await page.evaluate(() => {
    const els = [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300);
    for (const el of els) el.scrollTop = el.scrollHeight;
  });
  await page.waitForTimeout(700);
}
await page.evaluate(() => { for (const b of document.querySelectorAll('button')) { if (/^Más$|^More$/i.test(b.textContent.trim())) b.click(); } });
await page.waitForTimeout(800);
const res = await page.evaluate(() => {
  const out = [];
  for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
    const nombre = el.querySelector('.d4r55')?.textContent?.trim() || '';
    const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || '';
    const fecha = el.querySelector('.rsqaWe')?.textContent?.trim() || '';
    const texto = el.querySelector('.wiI7pd')?.textContent?.trim() || '';
    if (texto) out.push({ nombre, stars, fecha, texto: texto.slice(0, 400) });
  }
  return out.slice(0, 12);
});
console.log('RESENAS:', JSON.stringify(res, null, 1));
await browser.close();
