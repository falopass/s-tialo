// Captura el canvas de Street View sin UI. Uso: node sv2.mjs <lat> <lng> <out.png> [heading] [pitch]
import { chromium } from 'playwright'
const [lat, lng, out, heading = '90', pitch = '0'] = process.argv.slice(2)
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.setViewportSize({ width: 1600, height: 900 })
const url = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}&heading=${heading}&pitch=${pitch}&hl=es`
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(9000)
for (const label of ['Accept all', 'Aceptar todo', 'Aceptar', 'Accept']) {
  const b = page.locator(`button:has-text("${label}")`).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(4000); break }
}
await page.waitForTimeout(6000)
// oculta TODA la UI menos el canvas de streetview y sus ancestros
await page.evaluate(() => {
  const cvs = [...document.querySelectorAll('canvas')].sort(
    (a, b) => b.getBoundingClientRect().width * b.getBoundingClientRect().height -
              a.getBoundingClientRect().width * a.getBoundingClientRect().height)[0]
  if (!cvs) return
  document.querySelectorAll('body *').forEach((el) => {
    if (el === cvs || el.contains(cvs) || cvs.contains(el)) return
    el.style.visibility = 'hidden'
  })
})
await page.waitForTimeout(800)
const canvases = await page.evaluate(() => {
  return [...document.querySelectorAll('canvas')].map((c) => {
    const r = c.getBoundingClientRect()
    return { w: r.width, h: r.height, x: r.x, y: r.y }
  })
})
console.log('canvases', JSON.stringify(canvases))
const big = canvases.sort((a, b) => b.w * b.h - a.w * a.h)[0]
if (big) {
  await page.screenshot({ path: out, clip: { x: big.x, y: big.y, width: big.w, height: big.h } })
  console.log('saved', out)
} else {
  await page.screenshot({ path: out })
  console.log('saved fullpage (no canvas found)', out)
}
process.exit(0)
