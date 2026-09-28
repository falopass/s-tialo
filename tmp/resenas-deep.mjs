import { chromium } from 'playwright';
const url = process.argv[2];
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
});
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'domcontentloaded' });
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first();
  await btn.click({ timeout: 4000 });
  await page.waitForLoadState('domcontentloaded');
} catch {}
await page.waitForTimeout(7000);
const info = await page.evaluate(() => {
  const labels = [...document.querySelectorAll('[role="img"][aria-label]')].map(e => e.getAttribute('aria-label')).filter(t => /estrella|star/i.test(t)).slice(0, 8);
  const tabs = [...document.querySelectorAll('[role="tab"]')].map(t => t.getAttribute('aria-label') || t.textContent.trim()).slice(0, 10);
  return { labels, tabs };
});
console.log('INFO:', JSON.stringify(info));
for (let i = 0; i < 10; i++) {
  await page.evaluate(() => {
    const els = [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300);
    for (const el of els) el.scrollTop = el.scrollHeight;
  });
  await page.waitForTimeout(700);
}
await page.evaluate(() => { for (const b of document.querySelectorAll('button')) { if (/^Más$|^More$/i.test(b.textContent.trim())) b.click(); } });
await page.waitForTimeout(600);
const res = await page.evaluate(() => {
  const out = [];
  const seen = new Set();
  for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
    const nombre = el.querySelector('.d4r55')?.textContent?.trim() || '';
    const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || '';
    const texto = el.querySelector('.wiI7pd')?.textContent?.trim() || '';
    const fecha = el.querySelector('.rsqaWe')?.textContent?.trim() || '';
    const key = nombre + '|' + texto;
    if (nombre && !seen.has(key)) { seen.add(key); out.push({ nombre, stars, fecha, texto: texto.slice(0, 300) }); }
  }
  return out.slice(0, 15);
});
console.log('RESENAS:', JSON.stringify(res, null, 1));
await browser.close();
