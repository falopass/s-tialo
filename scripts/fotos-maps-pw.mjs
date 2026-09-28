// Extrae URLs de fotos de una ficha de Google Maps via Playwright+CDP.
// Abre la foto de portada -> galería; scrollea grilla y filmstrip (ambos ejes).
// Uso: node scripts/fotos-maps-pw.mjs "<url o query de Maps>" [out.txt]
import { chromium } from 'playwright'

const target = process.argv[2]
const outFile = process.argv[3]
if (!target) { console.error('falta url/query'); process.exit(1) }
const url = target.startsWith('http')
  ? target
  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(target)}`

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0]
const page = await ctx.newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(5000)

const collect = async () => await page.evaluate(() => {
  const urls = new Set()
  const ok = (u) => {
    if (!u || !u.includes('googleusercontent.com')) return false
    if (u.includes('/a/') || u.includes('/a-')) return false // avatares
    const m = u.match(/=w(\d+)-h(\d+)|=s(\d+)/)
    if (m) { const a = +(m[1] || m[3]); const b = +(m[2] || m[3]); if (a < 200 || b < 200) return false }
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

// click en la foto de portada -> abre galería/lightbox
const cover = page.locator('button[aria-label^="Photo of"], button[aria-label^="Foto de"]').first()
if (await cover.count()) {
  await cover.click().catch(() => {})
  await page.waitForTimeout(4000)
}
urls = [...new Set([...urls, ...(await collect())])]

// scroll de todas las cajas con overflow en ambos ejes
let prev = -1
for (let i = 0; i < 30 && urls.length !== prev; i++) {
  prev = urls.length
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('div')) {
      if (el.scrollHeight > el.clientHeight + 120 && el.clientHeight > 120) el.scrollTop += 1400
      if (el.scrollWidth > el.clientWidth + 120 && el.clientWidth > 120) el.scrollLeft += 1400
    }
  })
  await page.waitForTimeout(800)
  urls = [...new Set([...urls, ...(await collect())])]
}

console.log(`TOTAL ${urls.length}`)
for (const u of urls) console.log(u)
if (outFile) {
  const { writeFileSync } = await import('fs')
  writeFileSync(outFile, urls.map((u) => `"${u}"`).join('\n') + '\n')
}
await page.close()
process.exit(0)
