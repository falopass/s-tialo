import { chromium } from 'playwright'
const q = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(`https://www.google.com/maps/search/?api=1&hl=es&query=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(7000)
// click "Mostrar original" buttons
await page.evaluate(() => {
  for (const b of document.querySelectorAll('button')) {
    if (/original/i.test(b.textContent || '')) b.click()
  }
})
await page.waitForTimeout(1200)
const res = await page.evaluate(() => {
  const out = []
  const seen = new Set()
  for (const el of document.querySelectorAll('[data-review-id]')) {
    const author = el.querySelector('.d4r55, [class*="d4r55"]')?.textContent?.trim()
    const stars = el.querySelector('[role="img"]')?.getAttribute('aria-label') || ''
    const body = (el.querySelector('.wiI7pd, [class*="wiI7pd"]')?.textContent || '').trim()
    if (body && !seen.has(author + body)) { seen.add(author + body); out.push({ author, stars, body: body.slice(0, 300) }) }
  }
  return out.slice(0, 10)
})
console.log(JSON.stringify(res, null, 1))
await page.close(); process.exit(0)
