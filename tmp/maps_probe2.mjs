// Cosecha profunda de una ficha de Google Maps: datos + fotos de la galería.
// Uso: node tmp/maps_probe2.mjs "<query>" <salida-dir>
import { chromium } from 'playwright';
import fs from 'node:fs';

const query = process.argv[2];
const outDir = process.argv[3] || '/tmp/mapsout';
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.connectOverCDP('http://localhost:29229');
const ctx = browser.contexts()[0];
const page = await ctx.newPage();
const photos = new Set();

// escucha de red: toda imagen googleusercontent que cargue
page.on('response', async (res) => {
  const u = res.url();
  if (/lh\d\.googleusercontent\.com\//.test(u) && !u.includes('/a-/') && !u.includes('w36-') && !u.includes('w32-')) {
    photos.add(u.split('=')[0]);
  }
});

try {
  await page.goto(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, {
    waitUntil: 'domcontentloaded', timeout: 45000,
  });
  await page.waitForSelector('h1', { timeout: 25000 });
  await page.waitForTimeout(3500);

  // expandir horario
  await page.evaluate(() => {
    const b = [...document.querySelectorAll('[aria-label]')].find((e) => /hour|horario/i.test(e.getAttribute('aria-label') || ''));
    b?.click?.();
  }).catch(() => {});
  await page.waitForTimeout(800);

  const data = await page.evaluate(() => {
    const txt = (sel) => document.querySelector(sel)?.textContent?.trim() ?? null;
    const stars = [...document.querySelectorAll('[aria-label]')].map((e) => e.getAttribute('aria-label')).find((a) => /stars?$/i.test(a || ''));
    const reviews = [...document.querySelectorAll('[aria-label]')].map((e) => e.getAttribute('aria-label')).find((a) => /reviews?$/i.test(a || ''));
    const rows = [...document.querySelectorAll('tr')].map((tr) => tr.textContent.trim().replace(/\s+/g, ' ')).filter((t) => /\d{1,2}:\d{2}/.test(t));
    return {
      name: txt('h1'),
      cat: txt('button[jsaction*="category"], .DkEaL') ?? txt('.skqShb'),
      stars, reviews,
      addr: document.querySelector('[data-item-id="address"]')?.textContent?.trim() ?? null,
      phone: document.querySelector('[data-item-id^="phone"]')?.textContent?.trim() ?? null,
      site: document.querySelector('a[data-item-id="authority"]')?.href ?? null,
      rows: rows.slice(0, 10),
      url: location.href,
    };
  });

  // abrir la galería: clic en la foto de cabecera
  const heroBtn = await page.$('button[aria-label*="photo" i], .aoRNLd, img[decoding]');
  if (heroBtn) { await heroBtn.click().catch(() => {}); await page.waitForTimeout(2500); }

  // scroll dentro del panel de fotos y cosechar
  for (let i = 0; i < 14; i++) {
    await page.evaluate(() => {
      const scroller = [...document.querySelectorAll('div')].filter((d) => d.scrollHeight > d.clientHeight + 300).sort((a, b) => b.scrollHeight - a.scrollHeight)[0];
      scroller?.scrollBy(0, 1600);
    });
    await page.waitForTimeout(900);
    // también recoge srcs visibles
    const srcs = await page.evaluate(() => [...document.querySelectorAll('img[src*="googleusercontent"], [style*="googleusercontent"]')]
      .map((e) => e.src || (e.getAttribute('style') || '').match(/url\(["']?(https?:\/\/lh\d\.googleusercontent\.com\/[^"')]+)/)?.[1])
      .filter(Boolean));
    srcs.forEach((s) => { if (!s.includes('/a-/') && !s.includes('w36-') && !s.includes('w32-') && !s.includes('br100')) photos.add(s.split('=')[0]); });
  }

  data.photoIds = [...photos];
  fs.writeFileSync(`${outDir}/data.json`, JSON.stringify(data, null, 2));
  console.log(JSON.stringify({ name: data.name, cat: data.cat, stars: data.stars, reviews: data.reviews, addr: data.addr, phone: data.phone, site: data.site, rows: data.rows, nPhotos: data.photoIds.length, url: data.url }, null, 2));
} catch (e) {
  console.log('ERR', e.message);
}
await page.close();
