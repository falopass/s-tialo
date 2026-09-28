// Rating + n° reseñas de una ficha de Maps.
// Uso: node scripts/conteo-resenas.mjs "<query>"
import { chromium } from 'playwright'
const query = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL' })
const page = await ctx.newPage()
await page.goto(query.startsWith('http') ? query : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(6000)
const meta = await page.evaluate(() => {
  const main = document.querySelector('div[role="main"]') || document.body
  const txt = main.innerText.replace(/\s+/g, ' ')
  const r = main.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || ''
  const m = txt.match(/([\d.,]+)\s*reseñas?|([\d.,]+)\s*reviews?|(\d[\d.,]*)\s*opiniones?/i)
  const ratingTxt = (main.querySelector('.fontDisplayLarge')?.innerText || '').trim()
  return { rating: r || ratingTxt, count: m ? m[0] : '', url: location.href }
})
console.log(JSON.stringify(meta))
await browser.close()
process.exit(0)
