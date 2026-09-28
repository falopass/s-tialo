// Ficha de Maps abriendo el primer resultado de la búsqueda.
// Uso: node scripts/ficha-click.mjs "<query>"
import { chromium } from 'playwright'

const query = process.argv[2]
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
await page.waitForTimeout(5000)

// click primer resultado del feed
try {
  const first = page.locator('div[role="feed"] a[href*="/maps/place/"], a.hfpxzc').first()
  await first.click({ timeout: 6000 })
  await page.waitForTimeout(5000)
} catch (e) { console.log('click fallo:', String(e).slice(0, 80)) }

console.log('URL:', page.url())

const info = await page.evaluate(() => {
  const main = document.querySelector('div[role="main"]') || document.body
  const pick = (sel) => [...main.querySelectorAll(sel)].map((e) => e.getAttribute('aria-label') || e.textContent || '').filter(Boolean)
  const btns = pick('button[aria-label], a[aria-label]')
  const h1 = main.querySelector('h1')?.textContent?.trim() || ''
  const categoria = main.querySelector('button[jsaction*="category"], .DkEaL')?.textContent?.trim() || ''
  return { h1, categoria, btns: [...new Set(btns)].slice(0, 45) }
})
console.log('INFO:', JSON.stringify(info, null, 1))

await page.evaluate(() => {
  const b = [...document.querySelectorAll('[aria-expanded="false"]')].find((e) => /open|abierto|closes|cierra|abiert/i.test(e.innerText || ''))
  if (b) b.click()
})
await page.waitForTimeout(1200)
const horario = await page.evaluate(() => {
  const rows = [...document.querySelectorAll('table tr, [role="row"]')]
    .map((r) => (r.innerText || '').trim().replace(/\s+/g, ' '))
    .filter((t) => /(AM|PM|a\.m|p\.m|hours|closed|cerrado)/i.test(t) && t.length < 90)
  return rows
})
console.log('HORARIO:', JSON.stringify(horario))

// rating y nº reseñas
const rating = await page.evaluate(() => {
  const main = document.querySelector('div[role="main"]') || document.body
  const txt = main.innerText || ''
  const m = txt.match(/(\d[.,]\d)\s*\((\d[\d.]*)\)/) || txt.match(/(\d[.,]\d)\s*estrellas?/i)
  return m ? m[0] : txt.match(/\d[.,]\d/)?.[0] || ''
})
console.log('RATING:', rating)

const collect = async () => await page.evaluate(() => {
  const urls = new Set()
  for (const el of document.querySelectorAll('*')) {
    const bg = getComputedStyle(el).backgroundImage
    const m = bg && bg.match(/url\(["']?(https:\/\/lh\d\.googleusercontent\.com\/[^"')]+)/)
    if (m) urls.add(m[1])
  }
  for (const img of document.querySelectorAll('img')) {
    if (img.src.includes('googleusercontent.com')) urls.add(img.src)
  }
  return [...urls]
})
let fotos = await collect()

try {
  const gallery = page.locator('button:has(img[src*="googleusercontent"]), a:has(img[src*="googleusercontent"])').first()
  if (await gallery.count()) { await gallery.click(); await page.waitForTimeout(4000) }
  for (let i = 0; i < 8; i++) {
    await page.evaluate(() => {
      for (const el of document.querySelectorAll('div')) {
        if (el.scrollHeight > el.clientHeight + 200 && el.clientHeight > 300) el.scrollTop += 2500
      }
    })
    await page.waitForTimeout(600)
  }
  fotos = [...new Set([...fotos, ...(await collect())])]
} catch (e) { console.log('galeria fallo:', String(e).slice(0, 80)) }

console.log('FOTOS:')
for (const u of fotos) console.log(u)

await browser.close()
process.exit(0)
