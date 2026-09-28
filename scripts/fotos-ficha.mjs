// Fotos de una ficha de Maps: abre la galeria (boton "N fotos" o la foto de
// portada), scrollea la grilla y recolecta URLs googleusercontent.
// Uso: node scripts/fotos-ficha.mjs "<query o url>" <out.txt> [max]
import { chromium } from 'playwright'
import { writeFileSync } from 'fs'

const arg = process.argv[2]
const outFile = process.argv[3]
const maxScrolls = +(process.argv[4] || 40)
const url = arg.startsWith('http')
  ? arg
  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(arg)}`

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0]
const page = await ctx.newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(6000)
console.log('URL:', page.url())

const collect = async () =>
  await page.evaluate(() => {
    const urls = new Set()
    const ok = (u) => {
      if (!u || !u.includes('googleusercontent.com')) return false
      if (u.includes('/a/') || u.includes('/a-/')) return false // avatares
      return true
    }
    for (const img of document.querySelectorAll('img')) if (ok(img.src)) urls.add(img.src)
    for (const el of document.querySelectorAll('*')) {
      const bg = getComputedStyle(el).backgroundImage
      const mm = bg && bg.match(/url\(["']?(https:[^"')]+)/)
      if (mm && ok(mm[1])) urls.add(mm[1])
    }
    return [...urls]
  })

let urls = await collect()
console.log('panel:', urls.length)

// 1) click directo en la foto de portada del negocio (aria "Foto de <nombre>")
const bizCover = page.locator('button[aria-label^="Foto de"], button[aria-label^="Photo of"]').first()
if (await bizCover.count()) {
  await bizCover.click().catch(() => {})
  await page.waitForTimeout(4000)
}
// 2) boton "N fotos" en la seccion Fotos del panel
const shotsBtn = page.locator('button:has-text("fotos"), button:has-text("Photos"), [aria-label*="fotos"], [aria-label*="photos"]').first()
if (await shotsBtn.count()) {
  await shotsBtn.click().catch(() => {})
  await page.waitForTimeout(4000)
}
urls = [...new Set([...urls, ...(await collect())])]
console.log('post-click:', urls.length)

// scroll de grilla y filmstrip
let prev = -1
for (let i = 0; i < maxScrolls && urls.length !== prev; i++) {
  prev = urls.length
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('div')) {
      if (el.scrollHeight > el.clientHeight + 100 && el.clientHeight > 150) el.scrollTop += 1600
      if (el.scrollWidth > el.clientWidth + 100 && el.clientWidth > 150) el.scrollLeft += 1600
    }
  })
  await page.waitForTimeout(700)
  urls = [...new Set([...urls, ...(await collect())])]
}

console.log(`TOTAL ${urls.length}`)
if (outFile) writeFileSync(outFile, urls.map((u) => `"${u}"`).join('\n') + '\n')
else for (const u of urls) console.log(u)
await page.close()
process.exit(0)
