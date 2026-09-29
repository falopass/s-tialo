import { chromium } from 'playwright'
const [,, base = 'http://localhost:3010', slug, sel] = process.argv
const b = await chromium.launch()
const p = await (await b.newContext({ viewport: { width: 1440, height: 844 } })).newPage()
await p.goto(`${base}/demos/${slug}/`, { waitUntil: 'networkidle', timeout: 90000 })
await p.waitForTimeout(800)
const out = await p.evaluate((s) => {
  const el = s.startsWith('/')
    ? document.evaluate(s, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue
    : document.querySelector(s)
  if (!el) return 'no match'
  const cs = getComputedStyle(el)
  const r = el.getBoundingClientRect()
  return { cls: String(el.className).slice(0, 160), position: cs.position, bottom: cs.bottom, left: cs.left, right: cs.right, top: cs.top, rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) }, parentPos: el.parentElement ? getComputedStyle(el.parentElement).position : null }
}, sel)
console.log(JSON.stringify(out, null, 1))
await b.close()
