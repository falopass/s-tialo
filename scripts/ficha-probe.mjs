// Probe Google Maps place data + photo URLs for a query via CDP.
// usage: node maps-probe.mjs "<query>"
import { chromium } from 'playwright-core'

const query = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0]
const page = await ctx.newPage()

await page.goto(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, {
  waitUntil: 'domcontentloaded', timeout: 60000,
})
await page.waitForTimeout(6000)

// Panel data
const info = await page.evaluate(() => {
  const name = document.querySelector('h1')?.textContent?.trim() ?? null
  const body = document.body.innerText
  const rating = [...document.querySelectorAll('[role="img"]')]
    .map((e) => e.getAttribute('aria-label'))
    .find((l) => l && /estrella|star/i.test(l)) ?? null
  const imgs = [...document.querySelectorAll('img')]
    .map((i) => i.src)
    .filter((s) => s.includes('googleusercontent'))
  return { url: location.href, name, rating, imgs: [...new Set(imgs)].slice(0, 30), body: body.slice(0, 6000) }
})
console.log(JSON.stringify(info, null, 2))
await page.close()
await browser.close()
