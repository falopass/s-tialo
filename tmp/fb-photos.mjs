// Extrae URLs de fotos (fbcdn) de una página pública de Facebook.
// Uso: node fb-photos.mjs <url_o_id> <salida.txt>
import { chromium } from 'playwright'
import fs from 'fs'

const q = process.argv[2]
const out = process.argv[3] || '/tmp/fbphotos.txt'
const url = q.startsWith('http') ? q : `https://web.facebook.com/profile.php?id=${q}`

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(8000)
console.log('URL:', page.url())
console.log('TITLE:', await page.title())

// cerrar posible modal de login
for (const sel of ['[aria-label="Cerrar"]', '[aria-label="Close"]', 'div[role="dialog"] [role="button"]']) {
  const b = page.locator(sel).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(1500) }
}

// intentar la pestaña Fotos
for (const label of ['Fotos', 'Photos']) {
  const t = page.locator(`a:has-text("${label}")`).first()
  if (await t.count()) { await t.click().catch(() => {}); await page.waitForTimeout(5000); break }
}

// scroll para cargar más
for (let i = 0; i < 16; i++) {
  await page.mouse.wheel(0, 1600)
  await page.waitForTimeout(700)
}

const urls = await page.evaluate(() => {
  const out = new Set()
  const add = (s) => {
    if (!s) return
    if (!/fbcdn\.net|fbsbx\.com/.test(s)) return
    if (/emoji|sprite|static\.xx|p64x64|stp=dst-jpg_s16x16|s16x16|s32x32|s40x40/i.test(s)) return
    out.add(s)
  }
  document.querySelectorAll('img').forEach((img) => {
    add(img.src)
    const ss = img.srcset || ''
    ss.split(',').forEach((p) => add(p.trim().split(' ')[0]))
  })
  document.querySelectorAll('[style]').forEach((el) => {
    const st = el.getAttribute('style') || ''
    const m = st.match(/url\(["']?(https:\/\/[^"')]+)["']?\)/)
    if (m) add(m[1])
  })
  return [...out]
})

console.log('PHOTOS:', urls.length)
fs.writeFileSync(out, urls.join('\n'))
urls.slice(0, 60).forEach((u) => console.log(u.slice(0, 160)))
await page.close()
