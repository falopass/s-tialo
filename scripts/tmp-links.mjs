// Extrae datos clave de una ficha de Maps: sitio web (href real), rating y n° de reseñas.
// Uso: node scripts/tmp-links.mjs "<query>"
import { chromium } from 'playwright'
const query = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
const page = await ctx.newPage()
await page.goto(query.startsWith('http') ? query : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, { waitUntil: 'domcontentloaded' })
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first()
  await btn.click({ timeout: 4000 })
} catch {}
await page.waitForTimeout(7000)
const meta = await page.evaluate(() => {
  const main = document.querySelector('div[role="main"]') || document.body
  const links = [...main.querySelectorAll('a[href]')]
    .filter((a) => /instagram|facebook|wa\.me|\.cl|\.com/.test(a.href) && !a.href.includes('google.'))
    .map((a) => ({ href: a.href, label: a.getAttribute('aria-label') || a.innerText.trim().slice(0, 60) }))
  const rating = main.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || ''
  const txt = main.innerText.replace(/\s+/g, ' ')
  const m = txt.match(/([\d.,]+)\s*(reseñas?|reviews?|opiniones?)/i)
  const big = main.querySelector('.fontDisplayLarge')?.innerText || ''
  return { h1: main.querySelector('h1')?.innerText, rating, big, count: m?.[0] || '', links: [...new Map(links.map((l) => [l.href, l])).values()].slice(0, 10) }
})
console.log(JSON.stringify(meta, null, 1))
await browser.close()
process.exit(0)
