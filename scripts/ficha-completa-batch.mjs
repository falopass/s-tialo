// Volcado completo de una ficha de Maps: URL, rating, nº reseñas, enlaces
// externos (IG/FB/web), horario completo y textos de reseñas.
// Uso: node scripts/ficha-completa-batch.mjs "<query>"
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
console.log('URL:', page.url());

// expandir horario
await page.evaluate(() => {
  const b = [...document.querySelectorAll('[aria-expanded="false"]')].find((e) => /open|abierto|closes|cierra/i.test(e.getAttribute('aria-label') || e.innerText || ''));
  if (b) b.click();
});
await page.waitForTimeout(1200);

const data = await page.evaluate(() => {
  const t = (sel) => document.querySelector(sel)?.innerText?.trim() || '';
  const main = document.querySelector('div[role="main"]') || document.body;
  const links = [...document.querySelectorAll('a[href]')]
    .map((a) => a.href)
    .filter((h) => /instagram|facebook|fb\.com|wa\.me|whatsapp/i.test(h));
  const webBtns = [...document.querySelectorAll('a[aria-label], button[aria-label]')]
    .map((e) => ({ l: e.getAttribute('aria-label') || '', h: e.href || '' }))
    .filter((x) => /sitio|website|web/i.test(x.l));
  const rows = [...document.querySelectorAll('table tr, [role="row"]')]
    .map((r) => (r.innerText || '').trim().replace(/\s+/g, ' '))
    .filter((s) => /(AM|PM|a\.m|p\.m|closed|cerrado|hours|abierto)/i.test(s) && s.length < 90);
  return {
    titulo: t('h1'),
    categoria: t('.DkEaL') || t('button[jsaction*="category"]'),
    rating: [...document.querySelectorAll('[role="img"]')].map((e) => e.getAttribute('aria-label')).filter(Boolean)[0] || '',
    reviewsCount: (main.innerText.match(/\((\d[\d.,]*)\)/) || [])[1] || '',
    links: [...new Set(links)],
    webBtns,
    horario: [...new Set(rows)],
    panel: (main.innerText || '').slice(0, 1200),
  };
});
console.log(JSON.stringify(data, null, 1));

// reseñas
const tab = page.locator('button[aria-label*="Reviews"], button[aria-label*="reseñas"], button[aria-label*="Reseñas"], button[aria-label*="opiniones"], button[aria-label*="Opiniones"]').first();
if (await tab.count()) {
  await tab.click().catch(() => {});
  await page.waitForTimeout(3000);
  for (let i = 0; i < 3; i++) {
    await page.evaluate(() => {
      for (const el of document.querySelectorAll('div')) {
        if (el.scrollHeight > el.clientHeight + 120 && el.clientHeight > 120) el.scrollTop += 2500;
      }
    });
    await page.waitForTimeout(1200);
  }
  const reviews = await page.evaluate(() => {
    const out = [];
    for (const el of document.querySelectorAll('.jftiEf, div[data-review-id]')) {
      const txt = (el.innerText || '').replace(/\n+/g, ' | ').trim();
      if (txt.length > 30 && txt.length < 1200) out.push(txt.slice(0, 700));
    }
    return [...new Set(out)].slice(0, 15);
  });
  console.log('RESENAS:', JSON.stringify(reviews, null, 1));
}
await browser.close();
process.exit(0);
