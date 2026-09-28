// Diagnóstico: abre ficha de Maps, lista candidatos clicables de fotos y guarda screenshot.
import { chromium } from 'playwright';

const query = process.argv[2];
const browser = await chromium.launch({ headless: true });
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
await page.screenshot({ path: '/tmp/fotos/probe.png', fullPage: false });

const cand = await page.evaluate(() => {
  const out = [];
  for (const el of document.querySelectorAll('button, [role="tab"], a, div[role="button"]')) {
    const label = (el.getAttribute('aria-label') || el.textContent || '').trim().slice(0, 90);
    if (/foto|photo|galer|ver todo|see all|im[aá]gen/i.test(label)) {
      out.push(`${el.tagName}.${el.className?.toString().slice(0, 40)} :: ${label}`);
    }
  }
  return out.slice(0, 40);
});
console.log(cand.join('\n'));
await browser.close();
