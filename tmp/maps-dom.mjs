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
const dump = await page.evaluate(() => {
  const tabs = [...document.querySelectorAll('[role="tab"]')].map(t => ({tag:t.tagName, txt:(t.textContent||'').trim().slice(0,40), al:t.getAttribute('aria-label')}));
  const btns = [...document.querySelectorAll('button')].map(b => (b.getAttribute('aria-label')||b.textContent||'').trim().slice(0,50)).filter(t => /reseñ|review|foto|photo/i.test(t));
  const rating = document.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label');
  const reviewLinks = [...document.querySelectorAll('a,button')].map(b => (b.textContent||'').trim()).filter(t => /^\d+\s*(reseñas|reviews)/i.test(t));
  return { tabs, btns: btns.slice(0,15), rating, reviewLinks };
});
console.log(JSON.stringify(dump, null, 1));
await page.screenshot({ path: 'tmp/maps-dom.png' });
await browser.close();
