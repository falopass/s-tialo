import { chromium } from 'playwright'
const q = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(7000)
const meta = await page.evaluate(() => {
  const aria = [...document.querySelectorAll('[aria-label]')].map(e => e.getAttribute('aria-label')).filter(a => /estrella|star/i.test(a))
  const imgs = [...document.querySelectorAll('[role="img"]')].map(e => e.getAttribute('aria-label'))
  const bodyTxt = document.body.innerText.slice(0, 2000)
  const num = bodyTxt.match(/\n(\d\.\d)\n/)
  return { aria: aria.slice(0, 5), imgs: imgs.filter(Boolean).slice(0, 8), num: num?.[1] }
})
console.log(JSON.stringify(meta, null, 1))
await page.close(); process.exit(0)
