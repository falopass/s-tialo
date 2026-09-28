// Lista resultados de una búsqueda de Maps en una zona (@lat,lng,zoom).
// Uso: node scripts/buscar-maps.mjs "<query>" <lat> <lng> <zoom>
import { chromium } from 'playwright'

const [,, query, lat = '-35.42', lng = '-71.67', zoom = '11z'] = process.argv
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
const page = await ctx.newPage()
await page.goto(`https://www.google.com/maps/search/${encodeURIComponent(query)}/@${lat},${lng},${zoom}`, { waitUntil: 'domcontentloaded' })
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first()
  await btn.click({ timeout: 4000 })
} catch {}
await page.waitForTimeout(6000)

// scroll de la lista
for (let i = 0; i < 10; i++) {
  await page.evaluate(() => {
    const feed = document.querySelector('div[role="feed"]')
    if (feed) feed.scrollTop += 3000
  })
  await page.waitForTimeout(600)
}
const res = await page.evaluate(() => {
  const out = []
  const links = [...document.querySelectorAll('div[role="feed"] a[href*="/maps/place/"], a.hfpxzc')]
  for (const a of links) {
    const item = a.closest('div[class*="Nv2PK"], div[jsaction]') || a
    const txt = (item.innerText || a.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 260)
    out.push({ href: a.href.split('?')[0], txt })
  }
  return out.slice(0, 40)
})
console.log('URL:', page.url())
for (const r of res) console.log('•', r.txt, '->', r.href)
await browser.close()
process.exit(0)
