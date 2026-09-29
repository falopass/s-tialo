import { chromium } from 'playwright'
const url = process.argv[2]
const browser = await chromium.launch()
const page = await (await browser.newContext({ locale: 'es-CL', userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36' })).newPage()
await page.goto(url, { waitUntil: 'domcontentloaded' })
try { await page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first().click({ timeout: 4000 }) } catch {}
await page.waitForTimeout(6000)
const links = await page.evaluate(() => {
  const out = {}
  for (const a of document.querySelectorAll('a[href]')) {
    const l = (a.getAttribute('aria-label') || a.textContent || '').trim()
    if (/sitio web|website|instagram|facebook/i.test(l) || /instagram|facebook/i.test(a.href)) out[l.slice(0,60)] = a.href
  }
  const tel = [...document.querySelectorAll('[data-tooltip], button')].map(b=>b.getAttribute('aria-label')).filter(x=>x&&/teléfono|phone|llamar|call/i.test(x))
  return { links: out, tel }
})
console.log(JSON.stringify(links, null, 1))
await browser.close()
