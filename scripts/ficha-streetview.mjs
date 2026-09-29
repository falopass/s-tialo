// Screenshot Street View at given coords via CDP, hiding UI overlays.
// usage: node streetview.mjs <lat> <lng> <heading> <outfile>
import { chromium } from 'playwright-core'

const [lat, lng, heading, out, panoid] = process.argv.slice(2)
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.setViewportSize({ width: 1280, height: 800 })

const url = panoid
  ? `https://www.google.com/maps/@?api=1&map_action=pano&pano=${panoid}&heading=${heading}&pitch=0`
  : `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}&heading=${heading}&pitch=0`
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(9000)

const pano = await page.evaluate(() => {
  const canvas = document.querySelector('canvas')
  if (!canvas) return null
  // hide every fixed/absolute overlay that is not the canvas or its ancestor
  const keep = new Set([canvas])
  let p = canvas.parentElement
  while (p) { keep.add(p); p = p.parentElement }
  for (const el of document.querySelectorAll('body *')) {
    if (keep.has(el)) continue
    const cs = getComputedStyle(el)
    if ((cs.position === 'fixed' || cs.position === 'absolute') && el.clientHeight > 20 && el.clientWidth > 60) {
      el.style.display = 'none'
    }
  }
  return location.href
})
await page.waitForTimeout(1200)
await page.screenshot({ path: out })
console.log('saved', out, pano)
await page.close()
await browser.close()
