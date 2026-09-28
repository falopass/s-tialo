import { chromium } from 'playwright'
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.goto('https://www.facebook.com/photo/?fbid=122193220706432731', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(8000)
console.log('URL:', page.url())
console.log('TITLE:', await page.title())
const imgs = await page.evaluate(() => {
  const out = []
  document.querySelectorAll('img').forEach((img) => {
    const r = img.getBoundingClientRect()
    out.push({ src: (img.src || '').slice(0, 200), w: Math.round(r.width), h: Math.round(r.height) })
  })
  return out.sort((a, b) => b.w * b.h - a.w * a.h).slice(0, 15)
})
imgs.forEach((i) => console.log(i.w, 'x', i.h, i.src))
const text = await page.evaluate(() => document.body.innerText.slice(0, 600))
console.log('TEXT:', text)
await page.close()
