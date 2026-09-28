// Verifica una ficha de Maps: lista resultados y luego lee la ficha abierta.
// Uso: node maps-verify.mjs "<query>"
import { chromium } from 'playwright'
const q = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.goto(`https://www.google.com/maps/search/${encodeURIComponent(q)}?hl=es`, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(7000)
for (const label of ['Accept all', 'Aceptar todo', 'Aceptar', 'Accept']) {
  const b = page.locator(`button:has-text("${label}")`).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(4000); break }
}
// list result names
const results = await page.evaluate(() => {
  const items = []
  document.querySelectorAll('a[href*="/maps/place/"]').forEach(a => {
    const lbl = a.getAttribute('aria-label') || ''
    if (lbl) items.push({ name: lbl, href: a.href.slice(0, 140) })
  })
  return items.slice(0, 12)
})
console.log('RESULTS:', JSON.stringify(results, null, 1))
const first = page.locator('a[href*="/maps/place/"]').first()
if (await first.count()) {
  await first.click().catch(() => {})
  await page.waitForTimeout(5000)
}
const data = await page.evaluate(() => {
  const txt = (sel) => document.querySelector(sel)?.textContent?.trim() || null
  const bodyText = document.body.innerText
  return {
    h1: txt('h1'),
    url: location.href.slice(0, 160),
    rating: bodyText.match(/(\d[.,]\d)\s*\(/)?.[1] || null,
    reviews: bodyText.match(/\((\d[\d.,]*)\)/)?.[1] || null,
    addr: document.querySelector('button[data-item-id="address"]')?.textContent?.trim() || null,
    phone: document.querySelector('button[data-item-id^="phone"]')?.textContent?.trim() || null,
    site: document.querySelector('a[data-item-id="authority"]')?.href || null,
    cat: document.querySelector('button[jsaction*="category"]')?.textContent?.trim() || null,
    hours: [...document.querySelectorAll('div[aria-label*="Horario"], [aria-label*="hours"]')].map(e => e.getAttribute('aria-label')).slice(0,2),
    plusCode: document.querySelector('button[data-item-id="oloc"]')?.textContent?.trim() || null,
  }
})
console.log(JSON.stringify(data, null, 2))
await page.close()
process.exit(0)
