// Saca og:image + srcs de imágenes visibles de un perfil público de Instagram.
// Uso: node tmp/ig-probe.mjs <handle>
import { chromium } from 'playwright';
const handle = process.argv[2];
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
});
const page = await ctx.newPage();
await page.goto(`https://www.instagram.com/${handle}/`, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(6000);
const og = await page.evaluate(() => document.querySelector('meta[property="og:image"]')?.content || '');
console.log('OG:', og);
// scroll para cargar la grilla
for (let i = 0; i < 4; i++) { await page.mouse.wheel(0, 1200); await page.waitForTimeout(1200); }
const imgs = await page.evaluate(() => [...document.querySelectorAll('img')].map(i => ({ src: i.src, alt: (i.alt||'').slice(0,80), w: i.naturalWidth })).filter(i => i.src.includes('cdninstagram') || i.src.includes('fbcdn')));
console.log(JSON.stringify(imgs, null, 1));
await browser.close();
