import { chromium } from 'playwright'
const url = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.setViewportSize({ width: 1280, height: 900 })
await page.goto(url + (url.includes('?') ? '&' : '?') + 'hl=es', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(6000)
try { await page.locator('button[role="tab"]:has-text("Reseñas"), [role="tab"]:has-text("Opiniones"), [role="tab"]:has-text("Reviews")').first().click({ timeout: 5000 }) } catch {}
await page.waitForTimeout(4000)
for (let i = 0; i < 10; i++) {
  await page.evaluate(() => { for (const el of document.querySelectorAll('div')) if (el.scrollHeight > el.clientHeight + 200 && el.clientHeight > 300) el.scrollTop = el.scrollHeight })
  await page.waitForTimeout(600)
}
await page.evaluate(() => { for (const b of document.querySelectorAll('button')) if (/^Más$|^More$/i.test(b.textContent.trim())) b.click() })
await page.waitForTimeout(800)
const res = await page.evaluate(() => {
  const out = []
  for (const d of document.querySelectorAll('div[data-review-id], div.jftiEf, div[jsmodel]')) {
    const t = (d.innerText || '').trim()
    if (t.length > 40 && t.length < 3000) out.push(t.replace(/\n+/g, ' | '))
  }
  if (!out.length) {
    const main = document.querySelector('div[role="main"]')
    if (main) out.push((main.innerText || '').slice(0, 6000))
  }
  return out.slice(0, 15)
})
console.log(JSON.stringify(res, null, 1))
await page.close()
process.exit(0)
