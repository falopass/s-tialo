// Extrae URLs de fotos (lh*.googleusercontent.com) de una ficha de Google Maps.
// Uso: node scripts/extraer-fotos-maps.mjs "<query de Maps>" [--scroll N]
import { chromium } from 'playwright';

const query = process.argv[2];
if (!query) { console.error('falta query'); process.exit(1); }

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
});
const page = await ctx.newPage();
await page.goto(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, { waitUntil: 'domcontentloaded' });

// Consentimiento si aparece
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first();
  await btn.click({ timeout: 4000 });
  await page.waitForLoadState('domcontentloaded');
} catch {}

await page.waitForTimeout(6000);
console.log('URL:', page.url());

const collect = async () => await page.evaluate(() => {
  const urls = new Set();
  for (const el of document.querySelectorAll('*')) {
    const bg = getComputedStyle(el).backgroundImage;
    const m = bg && bg.match(/url\(["']?(https:\/\/lh\d\.googleusercontent\.com\/[^"')]+)/);
    if (m) urls.add(m[1]);
  }
  for (const img of document.querySelectorAll('img')) {
    if (img.src.includes('googleusercontent.com')) urls.add(img.src);
  }
  return [...urls];
});

let urls = await collect();

// Abrir el panel de fotos si existe el botón principal de la ficha
try {
  const photoBtn = page.locator('button[jsaction*="heroHeaderImage"], button:has(img[src*="googleusercontent"])').first();
  await photoBtn.click({ timeout: 4000 });
  await page.waitForTimeout(3000);
} catch {}

// Scroll del panel de fotos para cargar más
for (let i = 0; i < 14; i++) {
  const scrollable = await page.evaluate(() => {
    const els = [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300);
    for (const el of els) { el.scrollTop = el.scrollHeight; }
    return els.length;
  });
  await page.waitForTimeout(900);
  const now = await collect();
  urls = [...new Set([...urls, ...now])];
}

console.log('FOTOS:');
for (const u of urls) console.log(u);
await browser.close();
