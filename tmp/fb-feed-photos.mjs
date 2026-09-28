// Recorre el feed público de m.facebook.com y guarda las URLs de imágenes
// renderizadas a mayor tamaño (portada, perfil, fotos de posts).
import { chromium } from 'playwright'
import fs from 'fs'

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()

await page.goto('https://m.facebook.com/profile.php?id=61562981955982', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(7000)
console.log('TITLE:', await page.title())

for (let i = 0; i < 25; i++) {
  await page.mouse.wheel(0, 1800)
  await page.waitForTimeout(650)
}

const imgs = await page.evaluate(() => {
  const map = new Map()
  document.querySelectorAll('img').forEach((img) => {
    const s = img.src || ''
    if (!/fbcdn\.net|fbsbx\.com/.test(s)) return
    if (/emoji|sprite|static\.xx|rsrc\.php/i.test(s)) return
    const r = img.getBoundingClientRect()
    const area = r.width * r.height
    const m = s.match(/\/(\d+)_\d+_(\d+)_\d+_n\.(jpg|png|webp)/)
    const key = m ? m[1] : s
    const prev = map.get(key)
    if (!prev || area > prev.area) map.set(key, { src: s, area })
  })
  return [...map.values()].sort((a, b) => b.area - a.area).slice(0, 40)
})
console.log('IMGS:', imgs.length)
fs.writeFileSync('tmp/marco-molina-feed.txt', imgs.map((i) => i.src).join('\n'))
imgs.forEach((i) => console.log(Math.round(i.area), i.src.slice(0, 150)))
await page.close()
process.exit(0)
