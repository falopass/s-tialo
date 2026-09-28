// Galería de Maps con scroll profundo dentro del panel correcto.
import { chromium } from 'playwright'
import fs from 'fs'

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()

await page.goto('https://www.google.com/maps/place/Marco+Molina+Repuestos/@-35.8510029,-71.5929798,17z?hl=es', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(6000)
for (const label of ['Accept all', 'Aceptar todo', 'Aceptar']) {
  const b = page.locator(`button:has-text("${label}")`).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(3000); break }
}

// abrir la foto principal del panel
const heroBtn = page.locator('button[jsaction*="photo"], button[aria-label*="oto"], .aoRNLd img, img.pv38Hd').first()
if (await heroBtn.count()) { await heroBtn.click().catch(() => {}); await page.waitForTimeout(4000) }

// click en pestaña "Fotos" o "Todas"
for (const label of ['Todas', 'Fotos', 'Photos', 'All']) {
  const t = page.locator(`button:has-text("${label}")`).first()
  if (await t.count()) { await t.click().catch(() => {}); await page.waitForTimeout(3000) }
}

// scroll en todos los elementos scrolleables del panel
for (let i = 0; i < 25; i++) {
  await page.evaluate(() => {
    document.querySelectorAll('div').forEach((d) => {
      if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollTop += 1200
    })
  })
  await page.waitForTimeout(450)
}

const urls = await page.evaluate(() => {
  const out = new Set()
  document.querySelectorAll('img').forEach((img) => {
    const s = img.src || ''
    if (/lh\d?\.(googleusercontent|ggpht)\.com/.test(s) && !/default-user|ogw\/|mapapi|mapsapi/.test(s)) out.add(s)
  })
  document.querySelectorAll('[style]').forEach((el) => {
    const st = el.getAttribute('style') || ''
    const m = st.match(/url\(["']?(https:\/\/lh[^"')]+)["']?\)/)
    if (m) out.add(m[1])
  })
  const html = document.documentElement.innerHTML
  for (const m of html.matchAll(/https:\/\/lh\d\.googleusercontent\.com\/[A-Za-z0-9_\-=/]{15,}/g)) out.add(m[0])
  return [...out]
})
console.log('PHOTOS:', urls.length)
fs.writeFileSync('tmp/marco-molina-maps.txt', urls.join('\n'))
urls.forEach((u) => console.log(u.slice(0, 150)))
await page.close()
process.exit(0)
