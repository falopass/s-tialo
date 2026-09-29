// Búsqueda Google simple; imprime títulos+urls.
// Uso: node scripts/gsearch.mjs "query"
import { chromium } from 'playwright'
const q = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL' })
const page = await ctx.newPage()
await page.goto(`https://www.google.com/search?q=${encodeURIComponent(q)}&hl=es&num=20`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(4000)
const res = await page.evaluate(() => [...document.querySelectorAll('a h3')].map((h) => {
  const a = h.closest('a')
  return `${h.textContent} -> ${a?.href}`
}).filter(Boolean).slice(0, 20))
console.log(res.join('\n'))
await browser.close()
