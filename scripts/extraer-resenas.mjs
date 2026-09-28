// Extrae reseñas reales de una ficha de Maps: abre tab Reseñas y scrollea.
// Uso: node scripts/extraer-resenas.mjs "<query>"
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
await page.waitForTimeout(6000);
console.log('URL:', page.url());

// rating + count
const meta = await page.evaluate(() => {
  const r = document.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || '';
  const count = document.querySelector('button[jsaction*="reviewChart"], button[aria-label*="reseña"]')?.textContent?.trim() || '';
  return { rating: r, count };
});
console.log('META:', JSON.stringify(meta));

try {
  await page.locator('button[role="tab"]:has-text("Reseñas"), button[role="tab"]:has-text("Reviews"), div[role="tab"]:has-text("Reseñas")').first().click({ timeout: 6000 });
  await page.waitForTimeout(4000);
} catch { console.log('no tab reseñas'); }

for (let i = 0; i < 12; i++) {
  await page.evaluate(() => {
    const els = [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300);
    for (const el of els) el.scrollTop = el.scrollHeight;
  });
  await page.waitForTimeout(700);
}
// expandir "Más" en textos truncados
await page.evaluate(() => {
  for (const b of document.querySelectorAll('button')) {
    if (/^Más$|^More$/i.test(b.textContent.trim())) b.click();
  }
});
await page.waitForTimeout(800);

const resenas = await page.evaluate(() => {
  const out = [];
  for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
    const nombre = el.querySelector('.d4r55')?.textContent?.trim() || el.getAttribute('aria-label') || '';
    const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || '';
    const fecha = el.querySelector('.rsqaWe')?.textContent?.trim() || '';
    const texto = el.querySelector('.wiI7pd')?.textContent?.trim() || '';
    if (texto) out.push({ nombre, stars, fecha, texto: texto.slice(0, 400) });
  }
  return out.slice(0, 12);
});
console.log('RESENAS:', JSON.stringify(resenas, null, 1));
await browser.close();
