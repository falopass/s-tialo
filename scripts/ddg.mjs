import { chromium } from 'playwright'
const q = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL' })
const page = await ctx.newPage()
await page.goto(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(3000)
const res = await page.evaluate(() => [...document.querySelectorAll('.result__a')].map((a) => `${a.textContent.trim()} -> ${a.href}`).slice(0, 15))
console.log(res.join('\n'))
await browser.close()
