import { chromium } from 'playwright'
const url = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 })
await page.waitForTimeout(4000)
// click "reseñas" tab if present
try {
  const tab = page.locator('button[role="tab"]', { hasText: /reseñas|reviews/i }).first()
  if (await tab.count()) { await tab.click(); await page.waitForTimeout(3000) }
} catch {}
const texts = await page.evaluate(() => {
  const out = []
  document.querySelectorAll('.jftiEf, [data-review-id]').forEach(r => {
    const name = r.querySelector('.d4r55')?.textContent
    const txt = r.querySelector('.wiI7pd')?.textContent
    if (name && txt) out.push({ name, txt: txt.slice(0, 300) })
  })
  return out.slice(0, 8)
})
console.log(JSON.stringify(texts, null, 1))
process.exit(0)
