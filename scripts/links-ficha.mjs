// Dump outbound (non-google) links from a Maps ficha panel.
// Uso: node links-ficha.mjs "<place-url>"
import { chromium } from 'playwright'

const url = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(6000)
const links = await page.evaluate(() => {
  const out = []
  for (const a of document.querySelectorAll('a[href]')) {
    const h = a.href
    if (!/^https?:/.test(h)) continue
    if (/google\.|gstatic|googleusercontent|schema\.org/.test(h)) continue
    out.push({ text: (a.innerText || '').trim().slice(0, 80), href: h })
  }
  return out
})
console.log(JSON.stringify(links, null, 1))
await page.close()
process.exit(0)
