// Extrae horario expandido + reseñas reales de una ficha de Maps ya conocida.
import { chromium } from 'playwright';
import fs from 'node:fs';

const url = process.argv[2];
const out = process.argv[3] || '/tmp/rev.json';

const browser = await chromium.connectOverCDP('http://localhost:29229');
const ctx = browser.contexts()[0];
const page = await ctx.newPage();
try {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForSelector('h1', { timeout: 25000 });
  await page.waitForTimeout(3000);

  // rating exacto
  const rating = await page.evaluate(() => {
    const el = [...document.querySelectorAll('[aria-label]')].find((e) => /^\d[.,]?\d?\s*stars?$/i.test(e.getAttribute('aria-label') || '') || /stars?$/i.test(e.getAttribute('aria-label') || ''));
    const big = document.querySelector('.fontDisplayLarge, [class*="DisplayLarge"]')?.textContent;
    return { aria: el?.getAttribute('aria-label'), big };
  });

  // horario: clic en el botón de horas
  await page.evaluate(() => {
    const b = [...document.querySelectorAll('[aria-label]')].find((e) => /hide open hours|show open hours|hours/i.test(e.getAttribute('aria-label') || ''));
    b?.click?.();
  });
  await page.waitForTimeout(1200);
  const hours = await page.evaluate(() => [...document.querySelectorAll('table tr, [class*="w info"] tr')].map((tr) => tr.textContent.trim().replace(/\s+/g, ' ')).filter((t) => /\d/.test(t)).slice(0, 10));

  // pestaña reseñas
  const tabs = await page.$$('[role="tab"], button[aria-label]');
  for (const t of tabs) {
    const label = (await t.getAttribute('aria-label')) || (await t.textContent()) || '';
    if (/reviews|reseñas|opiniones/i.test(label)) { await t.click(); break; }
  }
  await page.waitForTimeout(3500);
  // scroll panel de reseñas
  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => {
      const s = [...document.querySelectorAll('div')].filter((d) => d.scrollHeight > d.clientHeight + 200).sort((a, b) => b.scrollHeight - a.scrollHeight)[0];
      s?.scrollBy(0, 1400);
    });
    await page.waitForTimeout(900);
  }
  const reviews = await page.evaluate(() => {
    const out = [];
    const blocks = document.querySelectorAll('[data-review-id], .jftiEf, .wiI7pd');
    const texts = [...document.querySelectorAll('.wiI7pd')].map((e) => e.textContent.trim());
    const names = [...document.querySelectorAll('.d4r55, [class*="d4r55"]')].map((e) => e.textContent.trim());
    texts.forEach((t, i) => out.push({ name: names[i] || null, text: t.slice(0, 400) }));
    return out.slice(0, 12);
  });

  fs.writeFileSync(out, JSON.stringify({ rating, hours, reviews }, null, 2));
  console.log(JSON.stringify({ rating, hours, nReviews: reviews.length, sample: reviews.slice(0, 4) }, null, 2));
} catch (e) { console.log('ERR', e.message); }
await page.close();
