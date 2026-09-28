import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
});
const page = await ctx.newPage();
await page.goto('https://www.google.com/maps/place/Vivero+Do%C3%B1a+Ines/@-35.1524223,-71.3855225,17z/data=!4m8!3m7!1s0x966452c9aaf0e4a3:0xb5af67ecddd9b3aa!8m2!3d-35.1524223!4d-71.3855225!9m1!1b1!16s%2Fg%2F11hc_0c51z', { waitUntil: 'domcontentloaded' });
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first();
  await btn.click({ timeout: 4000 });
  await page.waitForLoadState('domcontentloaded');
} catch {}
await page.waitForTimeout(7000);
// !9m1!1b1 abre directo la pestaña de reseñas
const info = await page.evaluate(() => {
  const rating = document.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label');
  const count = [...document.querySelectorAll('*')].map(e => (e.childElementCount===0?e.textContent:'').trim()).filter(t => /\d+\s*(reseñas|reviews)/i.test(t)).slice(0,5);
  return { rating, count };
});
console.log('INFO:', JSON.stringify(info));
// reseñas visibles tras scrollear
for (let i = 0; i < 10; i++) {
  await page.evaluate(() => {
    const els = [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300);
    for (const el of els) el.scrollTop = el.scrollHeight;
  });
  await page.waitForTimeout(700);
}
const res = await page.evaluate(() => {
  const out = [];
  for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
    const nombre = el.querySelector('.d4r55')?.textContent?.trim() || '';
    const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || '';
    const texto = el.querySelector('.wiI7pd')?.textContent?.trim() || '';
    const fecha = el.querySelector('.rsqaWe')?.textContent?.trim() || '';
    out.push({ nombre, stars, fecha, texto: texto.slice(0, 300) });
  }
  return out;
});
console.log('RESENAS:', JSON.stringify(res, null, 1));
await page.screenshot({ path: 'tmp/vivero-fotos2/reviews.png' });
await browser.close();
