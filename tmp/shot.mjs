import { chromium } from 'playwright'
const [url, w, h, out, scrolls = '0'] = process.argv.slice(2)
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: +w, height: +h } })
await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 })
if (scrolls === 'full') {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)) }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(2600)
  await page.screenshot({ path: out, fullPage: true })
} else {
  await page.waitForTimeout(1500)
  await page.screenshot({ path: out })
}
await browser.close()
process.exit(0)
