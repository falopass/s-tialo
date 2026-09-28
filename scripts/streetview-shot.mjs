// Screenshot de Street View en una coordenada.
// Uso: node scripts/streetview-shot.mjs <lat> <lng> <out.png> [heading]
import { chromium } from 'playwright'
const [,, lat, lng, out, heading] = process.argv
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.setViewportSize({ width: 1600, height: 900 })
const url = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}${heading ? `&heading=${heading}` : ''}&pitch=0&fov=90`
await page.goto(url, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(9000)
await page.screenshot({ path: out })
console.log('URL:', page.url())
await page.close()
process.exit(0)
