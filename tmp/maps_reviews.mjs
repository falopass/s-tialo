// Extrae reseñas reales + horarios de una ficha de Google Maps.
// Uso: node maps_reviews.mjs "<query>" <salida.json>
import { chromium } from 'playwright'
import fs from 'fs'

const q = process.argv[2]
const out = process.argv[3] || '/tmp/reviews.json'
const url = `https://www.google.com/maps/search/${encodeURIComponent(q)}?hl=es`
const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a)

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 })
log('loaded')
await page.waitForTimeout(6000)

for (const label of ['Accept all', 'Aceptar todo', 'Aceptar', 'Accept']) {
  const b = page.locator(`button:has-text("${label}")`).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(3500); break }
}
const first = page.locator('a[href*="/maps/place/"]').first()
if (await first.count()) { await first.click().catch(() => {}); await page.waitForTimeout(4500) }
log('place open:', await page.locator('h1').first().textContent().catch(() => '?'))

// Horario
const hoursBtn = page.locator('button[data-item-id*="oh"], [aria-label*="our"]').first()
if (await hoursBtn.count()) { await hoursBtn.click().catch(() => {}); await page.waitForTimeout(1200) }
const hours = await page.evaluate(() => {
  const out = []
  document.querySelectorAll('tr').forEach((tr) => {
    const t = tr.innerText?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
    if (t && /(lunes|martes|miércoles|jueves|viernes|sábado|domingo|monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i.test(t) && /\d/.test(t)) out.push(t)
  })
  return out.slice(0, 8)
})
log('hours:', hours.length)

// Pestaña reseñas: buscar botón que contenga "Reseñas" o "reviews"
const tabs = page.locator('[role="tab"], button')
const tcount = await tabs.count()
let clicked = false
for (let i = 0; i < Math.min(tcount, 60); i++) {
  const t = await tabs.nth(i).textContent().catch(() => '')
  if (/(reseñas|reviews)/i.test(t || '')) {
    await tabs.nth(i).click().catch(() => {})
    clicked = true
    break
  }
}
log('reviews tab clicked:', clicked)
await page.waitForTimeout(4500)

for (let i = 0; i < 6; i++) {
  await page.mouse.wheel(0, 1600)
  await page.waitForTimeout(450)
}
log('scrolled')

const reviews = await page.evaluate(() => {
  const out = []
  const blocks = document.querySelectorAll('div[data-review-id]')
  blocks.forEach((b) => {
    const author = b.querySelector('.d4r55, [class*="d4r55"]')?.textContent?.trim()
    const stars = b.querySelector('[role="img"]')?.getAttribute('aria-label') || ''
    const text = b.querySelector('.wiI7pd, [class*="wiI7pd"]')?.textContent?.trim()
    const time = b.querySelector('.rsqaWe, [class*="rsqaWe"]')?.textContent?.trim()
    if (author) out.push({ author, stars, time, text: text || '' })
  })
  return out.slice(0, 12)
})

console.log('HOURS:', JSON.stringify(hours))
console.log('REVIEWS:', reviews.length)
fs.writeFileSync(out, JSON.stringify({ hours, reviews }, null, 2))
process.exit(0)
