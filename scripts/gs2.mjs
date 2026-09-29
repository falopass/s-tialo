import { chromium } from 'playwright'
const q = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.goto(`https://www.google.com/search?q=${encodeURIComponent(q)}&hl=es&num=20`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(5000)
console.log('TITLE:', await page.title())
const res = await page.evaluate(() => [...document.querySelectorAll('a h3')].map((h) => `${h.textContent} -> ${h.closest('a')?.href}`).slice(0, 20))
console.log(res.join('\n'))
await page.close()
process.exit(0)
