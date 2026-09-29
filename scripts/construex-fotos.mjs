import { chromium } from 'playwright'
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.setViewportSize({ width: 1280, height: 900 })
await page.goto('https://www.construex.cl/exhibidores/color_jet', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(9000)
for (let i = 0; i < 8; i++) { await page.evaluate(() => scrollBy(0, 1500)); await page.waitForTimeout(700) }
const urls = await page.evaluate(() => {
  const s = new Set()
  for (const img of document.querySelectorAll('img')) {
    const u = img.src || img.currentSrc || ''
    if (u.includes('cloudfront') || u.includes('_next/image')) s.add(u)
  }
  return [...s]
})
console.log(JSON.stringify(urls, null, 1))
await page.close(); process.exit(0)
