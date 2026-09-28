// Usa el plugin público de FB (page.php?tabs=timeline) que renderiza posts
// sin login; captura las URLs de imágenes grandes.
import { chromium } from 'playwright'
import fs from 'fs'

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()

const u = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61562981955982&tabs=timeline&width=680&height=1200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false'
await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(8000)
console.log('URL:', page.url())
console.log('TITLE:', await page.title())

const frames = page.frames()
console.log('FRAMES:', frames.length)

const collect = async (pg) => {
  for (let i = 0; i < 15; i++) { await pg.mouse.wheel(0, 1500).catch(() => {}); await pg.waitForTimeout(600) }
  return pg.evaluate(() => {
    const out = []
    document.querySelectorAll('img').forEach((img) => {
      const s = img.src || ''
      if (!/fbcdn\.net|fbsbx\.com/.test(s)) return
      if (/emoji|sprite|static\.xx|rsrc\.php/i.test(s)) return
      const r = img.getBoundingClientRect()
      out.push({ src: s, area: Math.round(r.width * r.height) })
    })
    return out
  })
}

let all = await collect(page)
for (const f of frames) {
  if (f === page.mainFrame()) continue
  all = all.concat(await collect(f))
}

const seen = new Map()
for (const i of all) {
  const m = i.src.match(/\/(\d+)_\d+_\d+_n\.(jpg|png|webp)/)
  const k = m ? m[1] : i.src
  if (!seen.has(k) || seen.get(k).area < i.area) seen.set(k, i)
}
const list = [...seen.values()].sort((a, b) => b.area - a.area)
fs.writeFileSync('tmp/marco-molina-plugin.txt', list.map((i) => i.src).join('\n'))
console.log('IMGS:', list.length)
list.slice(0, 40).forEach((i) => console.log(i.area, i.src.slice(0, 140)))
process.exit(0)
