// Lee horario completo + reseñas de una ficha de Maps via Playwright+CDP.
// Uso: node scripts/ficha-maps-pw.mjs "<url de Maps>"
import { chromium } from 'playwright'

const url = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0]
const page = await ctx.newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(5000)

// expandir horario
await page.evaluate(() => {
  const el = document.querySelector('div[aria-expanded="false"] [class*="fontBody"], div[aria-expanded="false"]')
  if (el && el.closest('div[aria-expanded="false"]')) el.closest('div[aria-expanded="false"]').click?.()
  const b = [...document.querySelectorAll('[aria-expanded="false"]')].find((e) => /open|abierto|closes|cierra/i.test(e.innerText || ''))
  if (b) b.click()
})
await page.waitForTimeout(1200)
const horario = await page.evaluate(() => {
  const rows = [...document.querySelectorAll('table tr, [role="row"]')]
    .map((r) => (r.innerText || '').trim().replace(/\s+/g, ' '))
    .filter((t) => /(AM|PM|a\.m|p\.m|hours|closed)/i.test(t) && t.length < 80)
  return rows
})

// pestaña de reseñas
const tab = page.locator('button[aria-label*="Reviews"], button[aria-label*="reseñas"], button[aria-label*="Reseñas"]').first()
if (await tab.count()) { await tab.click().catch(() => {}); await page.waitForTimeout(3000) }
await page.evaluate(() => {
  for (const el of document.querySelectorAll('div')) {
    if (el.scrollHeight > el.clientHeight + 120 && el.clientHeight > 120) el.scrollTop += 3000
  }
})
await page.waitForTimeout(1500)
const reviews = await page.evaluate(() => {
  const out = []
  for (const el of document.querySelectorAll('div[role="main"] div[aria-label], div[data-review-id], .jftiEf')) {
    const txt = el.innerText || ''
    if (txt.length > 40 && txt.length < 3000) out.push(txt.replace(/\n+/g, ' | ').slice(0, 500))
  }
  return [...new Set(out)].slice(0, 12)
})
console.log('HORARIO:', JSON.stringify(horario, null, 1))
console.log('RESENAS:', JSON.stringify(reviews, null, 1))
await page.close()
process.exit(0)
