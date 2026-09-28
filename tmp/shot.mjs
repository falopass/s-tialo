import { chromium } from 'playwright'
const [,, url, out, w] = process.argv
const b = await chromium.launch()
const p = await (await b.newContext({ viewport: { width: +w, height: 844 }, deviceScaleFactor: 1 })).newPage()
await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
await p.waitForTimeout(2500)
await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await p.waitForTimeout(800)
await p.evaluate(() => window.scrollTo(0, 0))
await p.waitForTimeout(500)
await p.screenshot({ path: out, fullPage: true })
process.exit(0)
