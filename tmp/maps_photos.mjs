// Extrae URLs de fotos (lh*.googleusercontent.com/p/...) de una ficha de Google Maps.
// Uso: node maps_photos.mjs "<query o url de maps>" <salida.txt>
import { chromium } from 'playwright'

const q = process.argv[2]
const out = process.argv[3] || '/tmp/photos.txt'
const url = q.startsWith('http') ? q : `https://www.google.com/maps/search/${encodeURIComponent(q)}`

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(7000)

// Consent page (Europa/Google): aceptar si aparece
for (const label of ['Accept all', 'Aceptar todo', 'Aceptar', 'Accept']) {
  const b = page.locator(`button:has-text("${label}")`).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(4000); break }
}

console.log('URL:', page.url())
console.log('TITLE:', await page.title())
const h1 = await page.locator('h1').first().textContent().catch(() => null)
console.log('H1:', h1)

// Si es lista de resultados, clic en el primero
const first = page.locator('a[href*="/maps/place/"]').first()
if (await first.count()) {
  await first.click().catch(() => {})
  await page.waitForTimeout(5000)
  console.log('AFTER-CLICK URL:', page.url())
  console.log('H1b:', await page.locator('h1').first().textContent().catch(() => null))
}

// Abrir galería: botón de foto principal o pestaña Fotos
const photoBtn = page.locator('button[aria-label*="oto"], button[aria-label*="hoto"], [data-tab-index] button:has-text("Fotos"), button:has-text("Photos")').first()
if (await photoBtn.count()) {
  await photoBtn.click().catch(() => {})
  await page.waitForTimeout(4000)
}
for (let i = 0; i < 10; i++) {
  await page.mouse.wheel(0, 1200)
  await page.waitForTimeout(600)
}

const urls = await page.evaluate(() => {
  const out = new Set()
  document.querySelectorAll('img').forEach((img) => {
    const s = img.src || ''
    if (/lh\d?\.(googleusercontent|ggpht)\.com/.test(s) && !s.includes('default-user') && !s.includes('ogw/')) out.add(s)
  })
  document.querySelectorAll('[style]').forEach((el) => {
    const st = el.getAttribute('style') || ''
    const m = st.match(/url\(["']?(https:\/\/lh[^"')]+)["']?\)/)
    if (m) out.add(m[1])
  })
  const html = document.documentElement.innerHTML
  for (const m of html.matchAll(/https:\/\/lh\d\.googleusercontent\.com\/(p\/)?[A-Za-z0-9_\-=]{20,}/g)) {
    out.add(m[0])
  }
  return [...out]
})

console.log('PHOTOS:', urls.length)
const fs = await import('fs')
fs.writeFileSync(out, urls.join('\n'))
urls.slice(0, 50).forEach((u) => console.log(u))
await page.close()
