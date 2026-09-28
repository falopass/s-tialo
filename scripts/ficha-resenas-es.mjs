// Extrae reseñas en su idioma original (clic en "See original") + nº total.
// Uso: node scripts/ficha-resenas-es.mjs "<url ficha Maps>"
import { chromium } from 'playwright'

const url = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0]
const page = await ctx.newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(5000)

// total de reseñas + rating (encabezado del panel)
const head = await page.evaluate(() => {
  const main = document.querySelector('div[role="main"]') || document.body
  const txt = main.innerText || ''
  return txt.slice(0, 900)
})
console.log('HEAD:', head)

const tab = page.locator('button[aria-label*="Reviews"], button[aria-label*="reseñas"], button[aria-label*="Reseñas"], button[aria-label*="opiniones"], button[aria-label*="Opiniones"]').first()
if (await tab.count()) { await tab.click().catch(() => {}); await page.waitForTimeout(3000) }

// abrir originales
const orig = page.locator('button:has-text("See original"), button:has-text("Ver original"), span:has-text("See original"), span:has-text("Ver original")')
for (let i = 0; i < 15; i++) {
  const b = orig.nth(0)
  if (!(await b.count())) break
  await b.click().catch(() => {})
  await page.waitForTimeout(350)
}
await page.waitForTimeout(800)
for (let i = 0; i < 3; i++) {
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('div')) {
      if (el.scrollHeight > el.clientHeight + 120 && el.clientHeight > 120) el.scrollTop += 2500
    }
  })
  await page.waitForTimeout(1000)
}
const reviews = await page.evaluate(() => {
  const out = []
  for (const el of document.querySelectorAll('.jftiEf, div[data-review-id]')) {
    const txt = (el.innerText || '').replace(/\n+/g, ' | ').trim()
    if (txt.length > 30 && txt.length < 1500) out.push(txt.slice(0, 800))
  }
  return [...new Set(out)].slice(0, 15)
})
console.log('RESENAS:', JSON.stringify(reviews, null, 1))
await page.close()
process.exit(0)
