import { chromium } from 'playwright'
const browser = await chromium.launch()
const targets = [
  ['pasteleria-el-ramal', 'ramal'],
  ['acai-city', 'acai'],
  ['repuestos-14-oriente-talca', 'rep14'],
]
for (const [slug, tag] of targets) {
  for (const [w, h, t] of [[390, 844, 'm'], [1440, 900, 'd']]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } })
    await page.goto(`http://localhost:4800/demos/${slug}/`, { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForTimeout(2600)
    await page.screenshot({ path: `/tmp/shot-${tag}-${t}-hero.png` })
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.35))
    await page.waitForTimeout(2600)
    await page.screenshot({ path: `/tmp/shot-${tag}-${t}-mid.png` })
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.65))
    await page.waitForTimeout(2600)
    await page.screenshot({ path: `/tmp/shot-${tag}-${t}-mid2.png` })
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(2600)
    await page.screenshot({ path: `/tmp/shot-${tag}-${t}-end.png` })
    await page.close()
  }
  console.log(tag, 'ok')
}
process.exit(0)
