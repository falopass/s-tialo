import { chromium } from 'playwright'
const [,, lat, lng, zoom, out] = process.argv
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.setViewportSize({ width: 1600, height: 950 })
await page.goto(`https://www.google.com/maps/@${lat},${lng},${zoom}z/data=!3m1!1e3`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(9000)
// hide chrome UI
await page.evaluate(() => {
  for (const el of document.querySelectorAll('[role="banner"], [role="search"], #searchbox, .app-viewcard-strip, [id^="watermark"], .scene-footer, #assistive-chips, .navigation-controls, .app-horizontal-widget-holder, [aria-label="Map controls"], .gm-style-cc, .widget-scene-canvas ~ div')) {
    el.style.display = 'none'
  }
  for (const el of document.querySelectorAll('div')) {
    const cs = getComputedStyle(el)
    if ((cs.position === 'absolute' || cs.position === 'fixed') && el.clientHeight > 10 && el.clientHeight < 400 && el.clientWidth > 60 && el.querySelector('canvas') == null) {
      el.style.display = 'none'
    }
  }
})
await page.waitForTimeout(1500)
await page.screenshot({ path: out })
console.log('OK', page.url())
await page.close()
