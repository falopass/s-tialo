import { chromium } from 'playwright'
const targets = process.argv.slice(2) // slug:out
const browser = await chromium.connectOverCDP('http://localhost:29229')
for (const spec of targets) {
  const [slug, w] = spec.split(':')
  const page = await browser.contexts()[0].newPage()
  await page.setViewportSize({ width: +w, height: 900 })
  await page.goto(`http://localhost:4800/demos/${slug}/`, { waitUntil: 'networkidle' }).catch(() => {})
  await page.waitForTimeout(3500)
  await page.screenshot({ path: `/tmp/demosrc/shot-${slug}-${w}-top.png` })
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2))
  await page.waitForTimeout(1200)
  await page.screenshot({ path: `/tmp/demosrc/shot-${slug}-${w}-mid.png` })
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(1200)
  await page.screenshot({ path: `/tmp/demosrc/shot-${slug}-${w}-end.png` })
  await page.close()
  console.log('done', slug, w)
}
process.exit(0)
