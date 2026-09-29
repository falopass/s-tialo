import { chromium } from 'playwright'
const [base, slug, w = '390', out = '/tmp/shot.png'] = process.argv.slice(2)
const VW = parseInt(w)
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: VW, height: VW < 500 ? 844 : 900 } })
await page.goto(`${base}/demos/${slug}/`, { waitUntil: 'networkidle' })
await page.waitForTimeout(2200)
await page.evaluate(() => new Promise((r) => {
  let y = 0
  const t = setInterval(() => { y += 700; window.scrollTo(0, y); if (y >= document.body.scrollHeight) { clearInterval(t); r() } }, 100)
}))
await page.waitForTimeout(2600)
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(900)
await page.screenshot({ path: out, fullPage: true })
console.log('saved', out)
await browser.close()
