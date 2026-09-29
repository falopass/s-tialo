// Collect all photo URLs from a Google Maps place page via CDP.
// usage: node maps-photos.mjs "<place-url-or-search-query>"
import { chromium } from 'playwright-core'

const arg = process.argv[2]
const url = arg.startsWith('http') ? arg : `https://www.google.com/maps/search/${encodeURIComponent(arg)}`
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(6000)

// Open the photos section
const opened = await page.evaluate(() => {
  const candidates = [...document.querySelectorAll('button'), ...document.querySelectorAll('[role="button"]'), ...document.querySelectorAll('a')]
  const btn = candidates.find((e) => /see photos|fotos/i.test(e.textContent || ''))
  if (btn) { btn.click(); return 'btn' }
  const img = document.querySelector('img[src*="googleusercontent"]')
  if (img) { img.click(); return 'img' }
  return null
})
await page.waitForTimeout(4000)

const collect = async () =>
  page.evaluate(() => {
    const urls = new Set()
    const re = /https?:\/\/[^"'\s)]+googleusercontent[^"'\s)]*/g
    for (const el of document.querySelectorAll('img')) {
      if (el.src.match(re)) urls.add(el.src)
    }
    for (const el of document.querySelectorAll('*')) {
      const s = el.getAttribute('style') || ''
      const m = s.match(/background-image:\s*url\(["']?([^"')]+)["']?\)/)
      if (m && m[1].match(re)) urls.add(m[1])
    }
    return [...urls]
  })

const seen = new Set()
for (let i = 0; i < 20; i++) {
  ;(await collect()).forEach((u) => seen.add(u))
  await page.evaluate(() => {
    const scrollables = [...document.querySelectorAll('div')].filter(
      (d) => d.scrollHeight > d.clientHeight + 100 && d.clientHeight > 150,
    )
    scrollables.forEach((d) => (d.scrollTop += 1500))
    window.scrollBy(0, 1500)
  })
  await page.waitForTimeout(700)
}

console.log(JSON.stringify({ opened, count: seen.size, urls: [...seen] }, null, 2))
await page.close()
await browser.close()
