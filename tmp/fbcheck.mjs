import { chromium } from 'playwright'
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.goto('https://www.facebook.com/clinicavetnoe/', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(6000)
console.log('URL:', page.url())
console.log('TITLE:', await page.title())
const og = await page.evaluate(() => ({
  title: document.querySelector('meta[property="og:title"]')?.content,
  desc: document.querySelector('meta[property="og:description"]')?.content,
  img: document.querySelector('meta[property="og:image"]')?.content,
}))
console.log(JSON.stringify(og, null, 2))
process.exit(0)
