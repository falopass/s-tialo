// Extrae fotos de una ficha de Maps: abre "Ver fotos" y scrollea la grilla.
// Uso: node scripts/extraer2.mjs "<query>"
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

try {
  await page.locator('button.Dx2nRe, button:has-text("Ver fotos")').first().click({ timeout: 6000 });
  await page.waitForTimeout(4000);
} catch (e) { console.log('no ver fotos'); }

const collect = async () => await page.evaluate(() => {
  const urls = new Set();
  for (const img of document.querySelectorAll('img')) {
    const s = img.src || '';
    if (s.includes('googleusercontent.com') && !/w3[26]-h3[26]/.test(s)) urls.add(s);
  }
  for (const el of document.querySelectorAll('*')) {
    const bg = getComputedStyle(el).backgroundImage;
    const m = bg && bg.match(/url\(["']?(https:\/\/lh\d\.googleusercontent\.com\/[^"')]+)/);
    if (m) urls.add(m[1]);
  }
  return [...urls];
});

let urls = await collect();
let prev = 0;
for (let i = 0; i < 40 && (urls.length - prev > 0 || i < 8); i++) {
  prev = urls.length;
  await page.evaluate(() => {
    const els = [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300);
    for (const el of els) el.scrollTop = el.scrollHeight;
  });
  await page.waitForTimeout(700);
  urls = [...new Set([...urls, ...(await collect())])];
}
await page.screenshot({ path: '/tmp/fotos/grid.png' });
console.log('FOTOS:');
for (const u of urls) console.log(u);
await browser.close();
