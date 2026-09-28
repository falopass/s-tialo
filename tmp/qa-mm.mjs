import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
await page.goto('http://localhost:4800/demos/marco-molina-repuestos/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
const r = await page.evaluate(() => {
  const btn = [];
  for (const a of document.querySelectorAll('main a, header a')) {
    const x = a.getBoundingClientRect();
    const t = (a.textContent||'').trim().replace(/\s+/g,' ').slice(0,36);
    if (x.height > 0 && x.width > 0) btn.push({ h: Math.round(x.height), w: Math.round(x.width), t });
  }
  const foot = document.querySelector('footer');
  const fr = foot ? foot.getBoundingClientRect() : null;
  return { botones: btn, footerH: fr ? Math.round(fr.height) : null };
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
