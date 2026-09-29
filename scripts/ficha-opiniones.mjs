// Abre el panel de opiniones de una ficha de Maps (clic en el botón de
// rating o "Todas las opiniones") y extrae conteo + textos reales.
// Uso: node scripts/ficha-opiniones.mjs "<query>"
import { chromium } from 'playwright'

const query = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
const page = await ctx.newPage()
await page.goto(
  query.startsWith('http') ? query : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
  { waitUntil: 'domcontentloaded' },
)
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first()
  await btn.click({ timeout: 4000 })
  await page.waitForLoadState('domcontentloaded')
} catch {}
await page.waitForTimeout(6000)
console.log('URL:', page.url())

// rating + conteo desde el panel principal
const meta = await page.evaluate(() => {
  const main = document.querySelector('div[role="main"]') || document.body
  const rating = (main.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || '').trim()
  const num = main.querySelector('span.ceNzKf, div.fontDisplayLarge')?.textContent?.trim() || ''
  const countBtn = [...main.querySelectorAll('button')].map((b) => (b.innerText || '').trim()).find((t) => /\d+.*(reseña|opinione|review)/i.test(t)) || ''
  const parens = (main.innerText.match(/\((\d[\d.,]*)\)/) || [])[0] || ''
  return { rating, num, countBtn, parens, h1: document.querySelector('h1')?.textContent || '' }
})
console.log('META:', JSON.stringify(meta))

// intentar abrir la sección de opiniones
const abridores = [
  'button[role="tab"]:has-text("Opiniones")',
  'button[role="tab"]:has-text("Reseñas")',
  'button[role="tab"]:has-text("Reviews")',
  'div[role="tab"]:has-text("Opiniones")',
  'button:has-text("Todas las opiniones")',
  'button[jsaction*="reviewChart"]',
  'button[jsaction*="moreReviews"]',
]
for (const sel of abridores) {
  try {
    const el = page.locator(sel).first()
    if (await el.count()) { await el.click({ timeout: 3000 }); await page.waitForTimeout(3500); break }
  } catch {}
}

// scrollear el panel de opiniones
for (let i = 0; i < 14; i++) {
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('div')) {
      if (el.scrollHeight > el.clientHeight + 200 && el.clientHeight > 300) el.scrollTop = el.scrollHeight
    }
  })
  await page.waitForTimeout(700)
}
await page.evaluate(() => {
  for (const b of document.querySelectorAll('button')) {
    if (/^Más$|^More$/i.test(b.textContent.trim())) b.click()
    if (/original/i.test(b.textContent || '')) b.click()
  }
})
await page.waitForTimeout(1000)

const resenas = await page.evaluate(() => {
  const out = []
  const seen = new Set()
  for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
    const nombre = el.querySelector('.d4r55')?.textContent?.trim() || ''
    const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || ''
    const fecha = el.querySelector('.rsqaWe')?.textContent?.trim() || ''
    const texto = el.querySelector('.wiI7pd')?.textContent?.trim() || ''
    if (texto && !seen.has(nombre + texto)) {
      seen.add(nombre + texto)
      out.push({ nombre, stars, fecha, texto: texto.slice(0, 400) })
    }
  }
  return out.slice(0, 14)
})
console.log('RESENAS:', JSON.stringify(resenas, null, 1))
await browser.close()
process.exit(0)
