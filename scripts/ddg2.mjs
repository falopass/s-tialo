import { chromium } from 'playwright'
const q = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL' })
const page = await ctx.newPage()
await page.goto(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(4000)
console.log('TITLE:', await page.title())
console.log('URL:', page.url())
console.log((await page.evaluate(() => document.body.innerText)).slice(0, 3000))
await browser.close()
