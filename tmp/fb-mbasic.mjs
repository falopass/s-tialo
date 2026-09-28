import { chromium } from 'playwright'
import fs from 'fs'

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())

const targets = [
  'https://m.facebook.com/photo.php?fbid=122193220706432731',
  'https://mbasic.facebook.com/photo.php?fbid=122193220706432731',
  'https://m.facebook.com/profile.php?id=61562981955982',
  'https://mbasic.facebook.com/profile.php?id=61562981955982',
]
for (const u of targets) {
  const page = await ctx.newPage()
  try {
    await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 45000 })
    await page.waitForTimeout(5000)
    console.log('===', u)
    console.log('URL:', page.url())
    console.log('TITLE:', await page.title())
    const imgs = await page.evaluate(() => {
      const out = []
      document.querySelectorAll('img').forEach((img) => {
        const r = img.getBoundingClientRect()
        const s = img.src || ''
        if (!/fbcdn|fbsbx/.test(s)) return
        out.push({ src: s.slice(0, 190), w: Math.round(r.width), h: Math.round(r.height) })
      })
      return out.sort((a, b) => b.w * b.h - a.w * a.h).slice(0, 12)
    })
    imgs.forEach((i) => console.log(' ', i.w, 'x', i.h, i.src))
    const text = await page.evaluate(() => document.body.innerText.slice(0, 300).replace(/\n+/g, ' | '))
    console.log(' TEXT:', text)
  } catch (e) {
    console.log('ERR', u, String(e).slice(0, 100))
  }
  await page.close()
}
process.exit(0)
