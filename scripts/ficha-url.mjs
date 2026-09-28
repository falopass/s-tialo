// Ficha de Maps abriendo la URL completa de la ficha (con place_id hex en !1s).
// Uso: node scripts/ficha-url.mjs "<url de maps/place>"
import { chromium } from 'playwright'

const url = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
const page = await ctx.newPage()
await page.goto(url, { waitUntil: 'domcontentloaded' })
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first()
  await btn.click({ timeout: 4000 })
  await page.waitForLoadState('domcontentloaded')
} catch {}
await page.waitForTimeout(8000)
console.log('URL:', page.url())

const main = await page.evaluate(() => {
  const m = document.querySelector('div[role="main"]') || document.body
  return (m.innerText || '').slice(0, 2600)
})
console.log('PANEL:', main.replace(/\n{2,}/g, ' | '))

await browser.close()
process.exit(0)
