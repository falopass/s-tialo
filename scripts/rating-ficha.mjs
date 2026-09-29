// Rating + nº reseñas de una ficha de Maps, leyendo el panel completo.
// Uso: node scripts/rating-ficha.mjs "<place-url>"
import { chromium } from 'playwright'

const url = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
const page = await ctx.newPage()
await page.goto(url, { waitUntil: 'domcontentloaded' })
try { await page.locator('button:has-text("Aceptar todo")').first().click({ timeout: 4000 }) } catch {}
await page.waitForTimeout(6500)
const info = await page.evaluate(() => {
  const main = document.querySelector('div[role="main"]') || document.body
  const all = [...main.querySelectorAll('*')].map((e) => (e.innerText || '').trim())
  const rating = all.find((t) => /^[0-9],[0-9]$/.test(t)) || ''
  const counts = all.filter((t) => /^\(?[0-9]{1,4}\)?$|reseña|opinion/i.test(t) && t.length < 40).slice(0, 10)
  const aria = [...main.querySelectorAll('[aria-label]')].map((e) => e.getAttribute('aria-label')).filter((a) => /reseña|review|estrella/i.test(a || '')).slice(0, 10)
  const h1 = document.querySelector('h1')?.textContent?.trim() || ''
  return { h1, rating, counts, aria }
})
console.log(JSON.stringify(info, null, 1))
await browser.close()
