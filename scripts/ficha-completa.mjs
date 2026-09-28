// Ficha completa de Maps: nombre, rubro, dirección, teléfono, web, horario,
// rating, reseñas (texto completo), URLs de fotos.
// Uso: node scripts/ficha-completa.mjs "<query>"
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
  await page.waitForLoadState('domcontentloaded')
} catch {}
await page.waitForTimeout(6000)
console.log('URL:', page.url())

// Panel principal: botones aria-label con datos de la ficha
const info = await page.evaluate(() => {
  const main = document.querySelector('div[role="main"]') || document.body
  const pick = (sel) => [...main.querySelectorAll(sel)].map((e) => e.getAttribute('aria-label') || e.textContent || '').filter(Boolean)
  const btns = pick('button[aria-label], a[aria-label]')
  const h1 = main.querySelector('h1')?.textContent?.trim() || ''
  const categoria = main.querySelector('button[jsaction*="category"], .DkEaL')?.textContent?.trim() || ''
  return { h1, categoria, btns: [...new Set(btns)].slice(0, 40) }
})
console.log('INFO:', JSON.stringify(info, null, 1))

// Expandir horario
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

// Fotos: todas las googleusercontent del DOM
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

// abrir galería para más fotos
try {
  const photo = page.locator('button[jsaction*="photo"], [role="img"][aria-label]').first()
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
