// Vuelca los datos principales de una ficha de Maps (headless).
// Uso: node scripts/ficha-dump.mjs "<query>"
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
console.log('URL:', page.url());

const data = await page.evaluate(() => {
  const t = (sel) => document.querySelector(sel)?.innerText?.trim() || '';
  const aria = (sel) => [...document.querySelectorAll(sel)].map((e) => e.getAttribute('aria-label') || '').filter(Boolean);
  const main = document.querySelector('div[role="main"]') || document.body;
  return {
    titulo: t('h1'),
    categoria: t('button[jsaction*="category"]') || t('.DkEaL'),
    rating: aria('[role="img"][aria-label*="estrella"]')[0] || '',
    botones: aria('button[data-item-id], button[aria-label]')
      .filter((a) => /direcci|address|tel|phone|sitio|website|plus code|horario|hours|abierto|open|cierra|closes/i.test(a))
      .slice(0, 15),
    panel: (main.innerText || '').slice(0, 2500),
  };
});
console.log(JSON.stringify(data, null, 1));
await browser.close();
process.exit(0);
