// Ficha completa de una URL de place de Maps: rating, nº reseñas, textos de reseñas,
// horario y URLs de fotos (owner + usuarios) en alta resolución.
// Uso: node scripts/ficha-final.mjs "<place-url>"
import { chromium } from 'playwright'

const url = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
const page = await ctx.newPage()
await page.goto(url, { waitUntil: 'domcontentloaded' })
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first()
  await btn.click({ timeout: 4000 })
} catch {}
await page.waitForTimeout(6500)

const meta = await page.evaluate(() => {
  const txt = (el) => (el?.textContent || '').trim()
  const h1 = txt(document.querySelector('h1'))
  const ratingEl = document.querySelector('div[role="img"][aria-label*="estrella"], span[role="img"][aria-label*="estrella"], [aria-label*="estrellas"]')
  const rating = ratingEl?.getAttribute('aria-label') || ''
  // botón de nº de reseñas suele ser "N reseñas"
  const revBtn = [...document.querySelectorAll('button')].map((b) => b.textContent.trim()).find((t) => /reseña|review/i.test(t))
  const cat = txt(document.querySelector('button[jsaction*="category"], .DkEaL'))
  const addr = [...document.querySelectorAll('button[aria-label*="Dirección"], [data-item-id="address"]')].map((e) => e.getAttribute('aria-label') || e.textContent).join(' ')
  const phone = [...document.querySelectorAll('button[aria-label*="Teléfono"]')].map((e) => e.getAttribute('aria-label')).join(' ')
  const site = [...document.querySelectorAll('a[aria-label*="Sitio web"], button[aria-label*="Sitio web"]')].map((e) => e.getAttribute('aria-label')).join(' ')
  const horaBtn = [...document.querySelectorAll('[aria-expanded]')].map((e) => e.textContent.trim()).filter((t) => /a\.m|p\.m|Abierto|Cerrado|24 horas/i.test(t)).slice(0, 2)
  return { h1, rating, revBtn, cat, addr, phone, site, horaBtn }
})
console.log('META:', JSON.stringify(meta, null, 1))

// tab reseñas
try {
  await page.locator('button[role="tab"]:has-text("Reseñas"), button[role="tab"]:has-text("Reviews"), div[role="tab"]:has-text("Reseñas"), button:has-text("Reseñas")').first().click({ timeout: 6000 })
  await page.waitForTimeout(4000)
  for (let i = 0; i < 10; i++) {
    await page.evaluate(() => {
      const els = [...document.querySelectorAll('div')].filter((d) => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300)
      for (const el of els) el.scrollTop = el.scrollHeight
    })
    await page.waitForTimeout(700)
  }
  await page.evaluate(() => { for (const b of document.querySelectorAll('button')) { if (/^Más$|^More$/i.test(b.textContent.trim())) b.click() } })
  await page.waitForTimeout(800)
} catch { console.log('no tab reseñas') }

const resenas = await page.evaluate(() => {
  const out = []
  for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
    const nombre = el.querySelector('.d4r55')?.textContent?.trim() || ''
    const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || ''
    const fecha = el.querySelector('.rsqaWe')?.textContent?.trim() || ''
    const texto = el.querySelector('.wiI7pd')?.textContent?.trim() || ''
    if (texto) out.push({ nombre, stars, fecha, texto: texto.slice(0, 400) })
  }
  return out.slice(0, 12)
})
console.log('RESENAS:', JSON.stringify(resenas, null, 1))

// tab fotos
try {
  await page.locator('button[role="tab"]:has-text("Fotos"), button:has-text("Fotos")').first().click({ timeout: 5000 })
  await page.waitForTimeout(3500)
  for (let i = 0; i < 12; i++) {
    await page.evaluate(() => {
      const els = [...document.querySelectorAll('div')].filter((d) => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300)
      for (const el of els) el.scrollTop += 2400
    })
    await page.waitForTimeout(650)
  }
} catch { console.log('no tab fotos') }

const collect = () => page.evaluate(() => {
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
// volver a descripción y tomar foto principal
console.log('FOTOS:', JSON.stringify([...new Set(fotos)], null, 1))
await browser.close()
