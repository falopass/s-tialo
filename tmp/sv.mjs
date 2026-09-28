// Captura Street View en coords. Uso: node sv.mjs <lat> <lng> <out.png> [heading]
import { chromium } from 'playwright'
const [lat, lng, out, heading] = process.argv.slice(2)
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.setViewportSize({ width: 1280, height: 800 })
const url = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}${heading ? `&heading=${heading}` : ''}&hl=es`
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(9000)
for (const label of ['Accept all', 'Aceptar todo', 'Aceptar', 'Accept']) {
  const b = page.locator(`button:has-text("${label}")`).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(4000); break }
}
await page.waitForTimeout(5000)
await page.screenshot({ path: out })
console.log('saved', out, page.url().slice(0, 140))
process.exit(0)
