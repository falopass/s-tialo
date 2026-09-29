// Abre la galeria completa de fotos de una ficha de Maps ("Ver fotos"/"See photos"),
// scrollea la grilla y recolecta URLs googleusercontent grandes.
// Uso: node scripts/fotos-grid.mjs "<url ficha>" <out.txt> [maxScrolls]
import { chromium } from 'playwright'
import { writeFileSync } from 'fs'

const arg = process.argv[2]
const outFile = process.argv[3]
const maxScrolls = +(process.argv[4] || 30)

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0]
const page = await ctx.newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(arg, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(6500)
console.log('URL:', page.url())

const collect = async () =>
  await page.evaluate(() => {
    const urls = new Set()
    const ok = (u) => {
      if (!u || !u.includes('googleusercontent.com')) return false
      if (u.includes('/a/') || u.includes('/a-') || u.includes('grass-cs') === false && u.includes('=w32')) return false
      if (u.includes('=w32') || u.includes('=s32') || u.includes('=h32')) return false
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

// 1) click en la foto de portada de la ficha (abre el visor de fotos)
let opened = false
try {
  const cover = page.locator('img[src*="googleusercontent"]').first()
  if (await cover.count()) {
    await cover.click({ timeout: 3000 })
    await page.waitForTimeout(4000)
    opened = true
  }
} catch {}
if (!opened) {
  const cands = [
    'button[aria-label^="Foto de"]',
    'button[aria-label^="Photo of"]',
    'button:has(img[src*="googleusercontent"])',
  ]
  for (const sel of cands) {
    try {
      const el = page.locator(sel).first()
      if (await el.count()) {
        await el.click({ timeout: 3000 })
        await page.waitForTimeout(4000)
        break
      }
    } catch {}
  }
}
console.log('post-click url:', page.url())
urls = [...new Set([...urls, ...(await collect())])]
console.log('post-click:', urls.length)

// dentro del visor: scrollea la grilla y recoge thumbs
let prev = -1
for (let i = 0; i < maxScrolls && urls.length !== prev; i++) {
  prev = urls.length
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('div')) {
      if (el.scrollHeight > el.clientHeight + 100 && el.clientHeight > 200) el.scrollTop += 2000
      if (el.scrollWidth > el.clientWidth + 50 && el.clientWidth > 200) el.scrollLeft += 1600
    }
  })
  await page.waitForTimeout(800)
  urls = [...new Set([...urls, ...(await collect())])]
}

// navega el visor con flecha derecha para forzar carga de cada foto
for (let i = 0; i < maxScrolls * 2; i++) {
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(550)
  urls = [...new Set([...urls, ...(await collect())])]
}

console.log(`TOTAL ${urls.length}`)
if (outFile) writeFileSync(outFile, urls.map((u) => `"${u}"`).join('\n') + '\n')
else for (const u of urls) console.log(u)
await page.close()
process.exit(0)
