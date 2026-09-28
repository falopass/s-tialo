import { chromium } from 'playwright'
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto('https://www.google.com/maps/place/Piscinas+Santa+Adela+y+Canchas+Sinteticas/@-35.1044665,-71.2693392,17z/data=!4m6!3m5!1s0x96645495ac67d0df:0x6a051d0d5a962d37!8m2!3d-35.1044665!4d-71.2693392!16s%2Fg%2F11bxd7l78h?hl=es&entry=ttu', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(6000)
await page.evaluate(() => { const t = [...document.querySelectorAll('button,div[role="tab"]')].find(e => /reseñas|reviews/i.test(e.innerText || e.getAttribute('aria-label') || '')); if (t) t.click(); return 1 })
await page.waitForTimeout(4000)
for (let i = 0; i < 25; i++) {
  await page.evaluate(() => { for (const el of document.querySelectorAll('div')) if (el.scrollHeight > el.clientHeight + 200 && el.clientHeight > 300) el.scrollTop = el.scrollHeight })
  await page.waitForTimeout(600)
}
await page.evaluate(() => { for (const b of document.querySelectorAll('button')) if (/^Más$|^More$/i.test(b.textContent.trim())) b.click() })
await page.waitForTimeout(800)
const r = await page.evaluate(() => {
  const out = []
  for (const el of document.querySelectorAll('div[data-review-id], div[jslog*="review"]')) {
    const name = el.querySelector('.d4r55, .WNxzH')?.textContent?.trim()
    const stars = el.querySelector('[role="img"][aria-label*="estrella"],[role="img"][aria-label*="star"]')?.getAttribute('aria-label')
    const txt = el.querySelector('.wiI7pd, .MyEned span, [data-expandable-section]')?.textContent?.trim()
    if (name && txt) out.push({ name, stars, txt: txt.slice(0, 400) })
  }
  const seen = new Set(); return out.filter((o) => !seen.has(o.name + o.txt) && seen.add(o.name + o.txt))
})
console.log(JSON.stringify(r, null, 1))
await page.close(); process.exit(0)
