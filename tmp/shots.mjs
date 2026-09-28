import { chromium } from 'playwright'

const slugs = process.argv[2].split(',')
const w = parseInt(process.argv[3] || '390')
const h = parseInt(process.argv[4] || '844')
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = await browser.newContext({ viewport: { width: w, height: h } })
for (const slug of slugs) {
  const page = await ctx.newPage()
  await page.goto(`http://localhost:4800/demos/${slug}/`, { waitUntil: 'networkidle', timeout: 30000 })
  await page.waitForTimeout(1500)
  // scroll to bottom to trigger reveals, then back to top
  await page.evaluate(async () => {
    const h = document.body.scrollHeight
    for (let y = 0; y <= h; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)) }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(600)
  await page.screenshot({ path: `/tmp/shot_${slug}_${w}.png`, fullPage: true })
  await page.close()
}
await ctx.close()
process.exit(0)
