import { chromium } from 'playwright'
const [,, base = 'http://localhost:3010', slug] = process.argv
const b = await chromium.launch()
const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage()
await p.goto(`${base}/demos/${slug}/`, { waitUntil: 'networkidle', timeout: 90000 })
await p.waitForTimeout(1200)
const bad = await p.evaluate(() => {
  const res = []
  for (const el of document.querySelectorAll('body *')) {
    const sw = el.scrollWidth
    const cw = el.clientWidth
    if (sw - cw > 2 && getComputedStyle(el).overflowX === 'visible') {
      res.push({
        tag: el.tagName,
        cls: String(el.className?.baseVal ?? el.className).slice(0, 90),
        sw, cw,
        text: (el.childNodes[0]?.textContent || el.textContent || '').trim().slice(0, 40),
      })
      if (res.length >= 12) break
    }
  }
  return res
})
console.log(JSON.stringify(bad, null, 1))
await b.close()
