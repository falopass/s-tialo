import { chromium } from 'playwright'
import fs from 'fs'
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()

for (const u of [
  'https://m.facebook.com/profile.php?id=61562981955982&sk=photos',
  'https://m.facebook.com/profile.php?id=61562981955982&sk=photos_albums',
]) {
  await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await page.waitForTimeout(6000)
  console.log('===', u)
  console.log('URL:', page.url(), '| TITLE:', await page.title())
  for (let i = 0; i < 10; i++) { await page.mouse.wheel(0, 1400); await page.waitForTimeout(500) }
  const imgs = await page.evaluate(() => {
    const out = []
    document.querySelectorAll('img').forEach((img) => {
      const s = img.src || ''
      if (!/fbcdn\.net/.test(s) || /emoji|sprite|static|rsrc/i.test(s)) return
      const r = img.getBoundingClientRect()
      out.push({ src: s, w: Math.round(r.width), h: Math.round(r.height) })
    })
    return out.sort((a, b) => b.w * b.h - a.w * a.h).slice(0, 30)
  })
  imgs.forEach((i) => console.log(i.w, 'x', i.h, i.src.slice(0, 150)))
  const links = await page.evaluate(() => {
    const out = []
    document.querySelectorAll('a[href]').forEach((a) => { if (/photo|posts/.test(a.href)) out.push(a.href) })
    return [...new Set(out)].slice(0, 20)
  })
  console.log('LINKS:', links.length)
  links.slice(0, 10).forEach((l) => console.log(' ', l.slice(0, 130)))
}
process.exit(0)
