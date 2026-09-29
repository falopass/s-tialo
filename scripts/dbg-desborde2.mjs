import { chromium } from 'playwright'
const base = process.argv[2] || 'http://localhost:4800'
const slug = process.argv[3] || 'cocineria-de-leticia'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
await page.goto(`${base}/demos/${slug}/`, { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)
const info = await page.evaluate(() => {
  const root = document.documentElement
  const rows = []
  // elementos cuyo contenido sobrepasa su propio ancho (scrollWidth > clientWidth)
  for (const el of document.body.querySelectorAll('section, div, ul, li, p, h1, h2, h3, a, figure')) {
    if (el.scrollWidth > el.clientWidth + 1) {
      const cls = (el.className?.toString?.() || '').slice(0, 80)
      const id = el.id ? `#${el.id}` : ''
      rows.push(`${el.tagName}${id}.${cls} cW=${el.clientWidth} sW=${el.scrollWidth}`)
      if (rows.length > 50) break
    }
  }
  return { docW: root.scrollWidth, rows }
})
console.log(JSON.stringify(info, null, 1))
await browser.close()
