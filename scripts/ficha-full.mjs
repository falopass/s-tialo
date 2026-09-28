// Ficha completa por place_id: panel, rating, reseñas, fotos.
// Uso: node scripts/ficha-full.mjs <place_id>
import { chromium } from 'playwright'

const pid = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
const page = await ctx.newPage()
await page.goto(`https://www.google.com/maps/search/?api=1&query=x&query_place_id=${pid}`, { waitUntil: 'domcontentloaded' })
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first()
  await btn.click({ timeout: 4000 })
  await page.waitForLoadState('domcontentloaded')
} catch {}
await page.waitForTimeout(7000)
console.log('URL:', page.url())

const main = await page.evaluate(() => {
  const m = document.querySelector('div[role="main"]') || document.body
  return (m.innerText || '').slice(0, 2200)
})
console.log('PANEL:', main.replace(/\n{2,}/g, ' | '))

// fotos iniciales
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

// abrir galería
try {
  const gallery = page.locator('div[role="main"] button:has(img[src*="googleusercontent"])').first()
  if (await gallery.count()) { await gallery.click(); await page.waitForTimeout(4000) }
  for (let i = 0; i < 10; i++) {
    await page.evaluate(() => {
      for (const el of document.querySelectorAll('div')) {
        if (el.scrollHeight > el.clientHeight + 200 && el.clientHeight > 300) el.scrollTop += 2500
      }
    })
    await page.waitForTimeout(500)
  }
  fotos = [...new Set([...fotos, ...(await collect())])]
  await page.keyboard.press('Escape')
  await page.waitForTimeout(1000)
} catch (e) { console.log('galeria fallo:', String(e).slice(0, 80)) }

console.log('FOTOS:')
for (const u of fotos) console.log(u)

// reseñas
try {
  await page.locator('button[role="tab"]:has-text("Reseñas"), [role="tab"]:has-text("Reseñas")').first().click({ timeout: 6000 })
  await page.waitForTimeout(4000)
} catch { console.log('no tab reseñas') }
for (let i = 0; i < 12; i++) {
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('div')) {
      if (el.scrollHeight > el.clientHeight + 200 && el.clientHeight > 300) el.scrollTop = el.scrollHeight
    }
  })
  await page.waitForTimeout(700)
}
await page.evaluate(() => {
  for (const b of document.querySelectorAll('button')) {
    if (/^Más$|^More$/i.test(b.textContent.trim())) b.click()
  }
})
await page.waitForTimeout(800)
const resenas = await page.evaluate(() => {
  const out = []
  for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
    const nombre = el.querySelector('.d4r55')?.textContent?.trim() || ''
    const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || ''
    const fecha = el.querySelector('.rsqaWe')?.textContent?.trim() || ''
    const texto = el.querySelector('.wiI7pd')?.textContent?.trim() || ''
    if (texto) out.push({ nombre, stars, fecha, texto: texto.slice(0, 350) })
  }
  return out.slice(0, 10)
})
console.log('RESENAS:', JSON.stringify(resenas, null, 1))

await browser.close()
process.exit(0)
