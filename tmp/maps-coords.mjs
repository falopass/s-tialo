import { chromium } from 'playwright'
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.goto('https://www.google.com/maps/search/Marco+Molina+Repuestos/?hl=es', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(6000)
for (const label of ['Accept all', 'Aceptar todo', 'Aceptar']) {
  const b = page.locator(`button:has-text("${label}")`).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(3000); break }
}
const first = page.locator('a[href*="/maps/place/"]').first()
if (await first.count()) { await first.click().catch(() => {}); await page.waitForTimeout(5000) }
console.log('URL:', page.url())
const m = page.url().match(/@(-?\d+\.\d+),(-?\d+\.\d+)/)
if (m) console.log('COORDS:', m[1], m[2])
const meta = await page.evaluate(() => ({
  desc: document.querySelector('meta[property="og:description"]')?.content,
  img: document.querySelector('meta[property="og:image"]')?.content,
}))
console.log(JSON.stringify(meta, null, 2))
await page.close()
process.exit(0)
