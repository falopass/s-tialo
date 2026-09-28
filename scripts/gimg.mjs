// Google Images: vuelca URLs de imagenes grandes (encrypted-tbn y originales).
import { chromium } from 'playwright'
const q = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.setViewportSize({ width: 1280, height: 900 })
await page.goto(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(5000)
const imgs = await page.evaluate(() =>
  [...document.querySelectorAll('img')].map((i) => i.src).filter((s) => s.startsWith('http') && !s.includes('gstatic') && !s.includes('google.com/images')).slice(0, 40)
)
console.log(JSON.stringify(imgs.slice(0, 25), null, 1))
await page.screenshot({ path: '/tmp/demosrc/gimg.png' })
await page.close()
process.exit(0)
