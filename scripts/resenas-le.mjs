// Dump reseñas de una ficha Maps en español (hl=es), scrolleando el panel.
import { chromium } from 'playwright'

const url = process.argv[2]
const sep = url.includes('?') ? '&' : '?'
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0]
const page = await ctx.newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(`${url}${sep}hl=es`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(5000)

const tab = page.locator('button[aria-label*="Reseñas"], button[aria-label*="reseñas"], button[aria-label*="Opiniones"], button[aria-label*="Reviews"]').first()
if (await tab.count()) { await tab.click().catch(() => {}); await page.waitForTimeout(3000) }

// expand "Más" en reseñas + ver original
for (let i = 0; i < 25; i++) {
  const b = page.locator('button[aria-label*="See more"], button[aria-label*="Ver más"], button[aria-label*="Ver original"]').nth(0)
  if (!(await b.count())) break
  await b.click().catch(() => {})
  await page.waitForTimeout(300)
}
// scroll panel para cargar más reseñas
for (let i = 0; i < 8; i++) {
  await page.evaluate(() => {
    const els = [...document.querySelectorAll('div[role="feed"], div.m6QErb.DxyBCb.kA9KIf.dS8AEf')]
    els.forEach((e) => (e.scrollTop = e.scrollHeight))
  })
  await page.waitForTimeout(900)
}
const data = await page.evaluate(() => {
  const out = []
  for (const r of document.querySelectorAll('div.jftiEf.fontBodyMedium, div[data-review-id]')) {
    const name = r.querySelector('.d4r55')?.textContent?.trim()
    const txt = r.querySelector('.wiI7pd')?.textContent?.trim()
    const star = r.querySelector('[role="img"][aria-label*="estrella"], [role="img"][aria-label*="star"]')?.getAttribute('aria-label')
    const when = r.querySelector('.rsqaWe')?.textContent?.trim()
    if (name) out.push({ name, star, when, txt })
  }
  return out
})
console.log(JSON.stringify(data, null, 1))
await page.close()
