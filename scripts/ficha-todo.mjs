// Ficha completa de Maps via CDP (Chrome con sesión): nombre, categoría,
// rating, nº reseñas, dirección, teléfono, web, horario expandido.
// Uso: node scripts/ficha-todo.mjs "<url o query de Maps>"
import { chromium } from 'playwright'

const target = process.argv[2]
const url = target.startsWith('http')
  ? target
  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(target)}`
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0]
const page = await ctx.newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(6000)
console.log('URL:', page.url())

const info = await page.evaluate(() => {
  const main = document.querySelector('div[role="main"]') || document.body
  const pick = (sel) => [...main.querySelectorAll(sel)].map((e) => e.getAttribute('aria-label') || e.textContent || '').filter(Boolean)
  const h1 = main.querySelector('h1')?.textContent?.trim() || ''
  const categoria = main.querySelector('button[jsaction*="category"], .DkEaL')?.textContent?.trim() || ''
  const ratingEl = [...main.querySelectorAll('[role="img"]')].map((e) => e.getAttribute('aria-label')).find((a) => a && /star|estrella/i.test(a)) || ''
  const ratingNum = main.querySelector('div.fontDisplayLarge, span.ceNzKf')?.textContent?.trim() || ''
  const btns = [...new Set(pick('button[aria-label], a[aria-label]'))].filter((b) =>
    /direcci|address|teléfono|phone|sitio|website|plus|abierto|open|cierra|closes|lun|mon/i.test(b),
  )
  // conteo de reseñas: botón "N reviews"/"N opiniones"
  const resBtn = [...document.querySelectorAll('button')].map((b) => b.innerText || '').find((t) => /reviews|opiniones/i.test(t)) || ''
  return { h1, categoria, ratingEl, ratingNum, resBtn, btns: btns.slice(0, 15), panel: (main.innerText || '').replace(/\n{2,}/g, '\n').slice(0, 900) }
})
console.log('INFO:', JSON.stringify(info, null, 1))

// horario expandido
await page.evaluate(() => {
  const b = [...document.querySelectorAll('[aria-expanded="false"]')].find((e) => /open|abierto|closes|cierra|abiert/i.test(e.innerText || ''))
  if (b) b.click()
})
await page.waitForTimeout(1200)
const horario = await page.evaluate(() =>
  [...document.querySelectorAll('table tr, [role="row"]')]
    .map((r) => (r.innerText || '').trim().replace(/\s+/g, ' '))
    .filter((t) => /(AM|PM|a\.m|p\.m|hours|closed)/i.test(t) && t.length < 80),
)
console.log('HORARIO:', JSON.stringify(horario, null, 1))
await page.close()
process.exit(0)
