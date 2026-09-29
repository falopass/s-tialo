import { chromium } from 'playwright'
const handle = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.goto(`https://www.instagram.com/${handle}/`, { waitUntil: 'domcontentloaded', timeout: 30000 })
await page.waitForTimeout(7000)
console.log('URL:', page.url())
console.log('TITLE:', await page.title())
console.log('OG:', await page.evaluate(() => document.querySelector('meta[property="og:description"]')?.content || ''))
console.log('OGIMG:', await page.evaluate(() => document.querySelector('meta[property="og:image"]')?.content || ''))
console.log('TEXT:', (await page.evaluate(() => document.body.innerText)).slice(0, 2500))
await page.screenshot({ path: `/tmp/demosrc/ig-${handle}.png` })
await page.close()
process.exit(0)
