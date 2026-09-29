// Reseñas de una ficha de Maps: abre el tab Opiniones/Reseñas/Revisiones y extrae textos.
// Uso: node scripts/resenas-ficha.mjs "<place-url>"
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

const tabs = await page.evaluate(() => [...document.querySelectorAll('[role="tab"], button')].map((b) => b.textContent.trim()).filter((t) => t.length < 40))
console.log('TABS:', JSON.stringify(tabs))

try {
  await page.locator('button:has-text("Opiniones"), [role="tab"]:has-text("Opiniones"), button:has-text("Reseñas"), [role="tab"]:has-text("Reseñas"), button:has-text("Revisiones")').first().click({ timeout: 6000 })
  await page.waitForTimeout(4000)
} catch { console.log('no tab') }

for (let i = 0; i < 14; i++) {
  await page.evaluate(() => {
    const els = [...document.querySelectorAll('div')].filter((d) => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300)
    for (const el of els) el.scrollTop = el.scrollHeight
  })
  await page.waitForTimeout(700)
}
await page.evaluate(() => { for (const b of document.querySelectorAll('button')) { if (/^Más$|^More$/i.test(b.textContent.trim())) b.click() } })
await page.waitForTimeout(900)

const res = await page.evaluate(() => {
  const out = []
  for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
    const nombre = el.querySelector('.d4r55')?.textContent?.trim() || el.querySelector('.WNxzHc')?.textContent?.trim() || ''
    const stars = el.querySelector('[role="img"][aria-label*="estrella"], [aria-label*="estrella"]')?.getAttribute('aria-label') || ''
    const fecha = el.querySelector('.rsqaWe, .xRkPPb')?.textContent?.trim() || ''
    const texto = el.querySelector('.wiI7pd, .MyEned')?.textContent?.trim() || ''
    if (nombre || texto) out.push({ nombre, stars, fecha, texto: texto.slice(0, 500) })
  }
  const seen = new Set()
  return out.filter((r) => { const k = r.nombre + r.fecha; if (seen.has(k)) return false; seen.add(k); return true }).slice(0, 15)
})
console.log('N:', res.length)
console.log('RESENAS:', JSON.stringify(res, null, 1))
await browser.close()
