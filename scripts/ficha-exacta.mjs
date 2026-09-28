// Ficha de Maps: busca y hace click en el resultado cuyo nombre coincide.
// Uso: node scripts/ficha-exacta.mjs "<query>" "<nombre exacto>"
import { chromium } from 'playwright'

const query = process.argv[2]
const nombre = process.argv[3]
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
const page = await ctx.newPage()
await page.goto(`https://www.google.com/maps/search/${encodeURIComponent(query)}/@-35.42,-71.67,12z`, { waitUntil: 'domcontentloaded' })
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first()
  await btn.click({ timeout: 4000 })
  await page.waitForLoadState('domcontentloaded')
} catch {}
await page.waitForTimeout(6000)

try {
  const link = page.locator(`a[href*="/maps/place/"]:has-text("${nombre}")`).first()
  await link.click({ timeout: 8000 })
  await page.waitForTimeout(6000)
} catch (e) { console.log('click fallo:', String(e).slice(0, 120)) }

console.log('URL:', page.url())

const main = await page.evaluate(() => {
  const m = document.querySelector('div[role="main"]') || document.body
  return (m.innerText || '').slice(0, 2600)
})
console.log('PANEL:', main.replace(/\n{2,}/g, ' | '))

await browser.close()
process.exit(0)
