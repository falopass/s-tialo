import { chromium } from 'playwright';
const url = process.argv[2];
const browser = await chromium.connectOverCDP('http://localhost:29229');
const page = await browser.contexts()[0].newPage();
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
await page.waitForSelector('h1', { timeout: 25000 });
await page.waitForTimeout(2500);
// clic en la fila de horario
const clicked = await page.evaluate(() => {
  const cand = [...document.querySelectorAll('[aria-label]')].filter((e) => /hours|horario/i.test(e.getAttribute('aria-label')||''));
  cand[0]?.click?.();
  return cand.map(c=>c.getAttribute('aria-label')).slice(0,4);
});
await page.waitForTimeout(1200);
const rows = await page.evaluate(() => {
  // tabla de horarios suele tener días + rango
  const all = [...document.querySelectorAll('tr')].map(tr=>tr.textContent.trim().replace(/\s+/g,' ')).filter(t=>/AM|PM|a\.m|p\.m|\d{1,2}:\d{2}/i.test(t) && !/CLP|\$/.test(t));
  return all.slice(0,12);
});
const links = await page.evaluate(() => [...document.querySelectorAll('a[data-item-id]')].map(a=>({k:a.getAttribute('data-item-id'), h:a.href})).filter(x=>/author|web|social/i.test(x.k||'')));
console.log(JSON.stringify({clicked, rows, links}, null, 2));
await page.close();
