import { chromium } from 'playwright'
const url = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL' })
const page = await ctx.newPage()
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 })
await page.waitForTimeout(5000)
console.log('TITLE:', await page.title())
console.log('URL:', page.url())
console.log('TEXT:', (await page.evaluate(() => document.body.innerText)).slice(0, 5000))
const imgs = await page.evaluate(() => [...document.querySelectorAll('img')].map((i) => i.src).filter((s) => s && s.startsWith('http')).slice(0, 40))
console.log('IMGS:\n' + imgs.join('\n'))
await browser.close()
