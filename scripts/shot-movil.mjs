// Capturas de un demo: móvil 390x844 (full page) y desktop 1440 (hero).
// Uso: node scripts/shot-movil.mjs <slug> [base]
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const slug = process.argv[2]
const base = process.argv[3] || 'http://localhost:3010'
mkdirSync('tmp/shots', { recursive: true })

const browser = await chromium.launch()
for (const [name, vp] of [['movil', { width: 390, height: 844 }], ['desk', { width: 1440, height: 900 }]]) {
  const page = await browser.newPage({ viewport: vp })
  await page.goto(`${base}/demos/${slug}/`, { waitUntil: 'networkidle', timeout: 60000 })
  // recorrer para gatillar reveals y el mapa lazy
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight
    for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)) }
    window.scrollTo(0, h)
  })
  await page.waitForTimeout(2500)
  await page.screenshot({ path: `tmp/shots/${slug}-${name}.png`, fullPage: name === 'movil' })
  console.log(`tmp/shots/${slug}-${name}.png`)
  await page.close()
}
await browser.close()
