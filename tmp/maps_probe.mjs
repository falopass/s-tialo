// Extrae datos + fotos de una ficha de Google Maps vía CDP.
// Uso: node /tmp/maps_probe.mjs "Alcatorce Restaurant O'Higgins 241 Concepción"
import { chromium } from 'playwright';

const query = process.argv[2];
const browser = await chromium.connectOverCDP('http://localhost:29229');
const ctx = browser.contexts()[0];
const page = await ctx.newPage();

try {
  await page.goto(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, {
    waitUntil: 'domcontentloaded', timeout: 45000,
  });
  // esperar el panel de ficha
  await page.waitForSelector('h1', { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(4000);

  const data = await page.evaluate(() => {
    const txt = (sel) => document.querySelector(sel)?.textContent?.trim() ?? null;
    const all = [...document.querySelectorAll('*')];
    const grab = (re) => {
      const el = all.find((e) => e.childElementCount === 0 && re.test(e.textContent || ''));
      return el ? el.textContent.trim() : null;
    };
    const name = txt('h1');
    const rating = txt('div[role="img"][aria-label*="star"] , span[aria-label*="stars"]');
    const addr = document.querySelector('button[data-item-id="address"]')?.textContent?.trim()
      ?? document.querySelector('[data-item-id="address"]')?.textContent?.trim() ?? null;
    const phone = document.querySelector('button[data-item-id^="phone"]')?.textContent?.trim() ?? null;
    const website = document.querySelector('a[data-item-id="authority"]')?.href ?? null;
    const hoursBtn = document.querySelector('[aria-label*="hour" i], [data-item-id="oh"]')?.getAttribute('aria-label') ?? null;
    // fotos: background-image de las miniaturas de la cabecera
    const photos = new Set();
    for (const el of document.querySelectorAll('[style*="googleusercontent"], img[src*="googleusercontent"]')) {
      const style = el.getAttribute('style') || '';
      const m = style.match(/url\(["']?(https?:\/\/lh\d\.googleusercontent\.com\/[^"')]+)/);
      if (m) photos.add(m[1]);
      if (el.src && el.src.includes('googleusercontent')) photos.add(el.src);
    }
    const aria = [...document.querySelectorAll('[aria-label]')]
      .map((e) => e.getAttribute('aria-label'))
      .filter((a) => a && /star|reseña|review/i.test(a)).slice(0, 8);
    return { name, rating, addr, phone, website, hoursBtn, aria, url: location.href, photos: [...photos].slice(0, 24) };
  });
  console.log(JSON.stringify(data, null, 2));
} catch (e) {
  console.log('ERR', e.message);
}
await page.close();
await browser.disconnect();
