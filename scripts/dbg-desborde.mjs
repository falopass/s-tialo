import { chromium } from 'playwright'
const base = process.argv[2] || 'http://localhost:4800'
const slug = process.argv[3] || 'cocineria-de-leticia'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
await page.goto(`${base}/demos/${slug}/`, { waitUntil: 'networkidle' })
await page.waitForTimeout(2500)
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(2500)
const info = await page.evaluate(() => {
  const root = document.documentElement
  const out = { scrollW: root.scrollWidth, clientW: root.clientWidth, offenders: [] }
  const vw = root.clientWidth
  const hasClip = (el) => {
    let n = el.parentElement
    while (n && n !== document.body) {
      const o = getComputedStyle(n).overflowX
      if (o === 'hidden' || o === 'clip' || o === 'scroll' || o === 'auto') return true
      n = n.parentElement
    }
    return false
  }
  for (const el of document.body.querySelectorAll('*')) {
    const r = el.getBoundingClientRect()
    if (r.right > vw + 0.5 && !hasClip(el) && getComputedStyle(el).position !== 'fixed') {
      const cls = (el.className?.toString?.() || '').slice(0, 90)
      out.offenders.push(`${el.tagName}.${cls} [${Math.round(r.left)} → ${Math.round(r.right)}] w=${Math.round(r.width)}`)
      if (out.offenders.length > 40) break
    }
  }
  return out
})
console.log(JSON.stringify(info, null, 1))
await browser.close()
