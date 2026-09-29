// Rating + count + primeras reseñas de una ficha Maps via CDP.
import { chromium } from 'playwright'
const q = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(7000)
const meta = await page.evaluate(() => {
  const main = document.querySelector('div[role="main"]') || document.body
  const txt = (main.innerText || '')
  const rating = (document.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || '').trim()
  const m = txt.match(/(\d[\d.,]*)\s*reseñas|\((\d[\d.,]*)\)/)
  // count button text
  const btns = [...document.querySelectorAll('button')].map(b => b.innerText || '').filter(t => /reseñ/i.test(t))
  return { rating, m: m ? m[0] : null, btns: btns.slice(0, 6), h1: document.querySelector('h1')?.textContent }
})
console.log(JSON.stringify(meta, null, 1))
// expandir reseñas visibles
const res = await page.evaluate(() => {
  const out = []
  for (const el of document.querySelectorAll('[data-review-id], .jftiEf, div[jsan]')) {
    const t = (el.innerText || '').replace(/\s+/g, ' ').trim()
    if (t.length > 40 && t.length < 1200) out.push(t.slice(0, 500))
  }
  return out.slice(0, 8)
})
console.log(JSON.stringify(res, null, 1))
await page.close(); process.exit(0)
