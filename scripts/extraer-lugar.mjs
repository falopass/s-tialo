// Extrae fotos de una ficha de Maps por URL completa de place.
// Uso: node /tmp/extraer-lugar.mjs "<place-url>" [--click "<texto>"]
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
try {
  const btn = page.locator('button:has-text("Aceptar todo"), button:has-text("Accept all")').first()
  await btn.click({ timeout: 4000 })
  await page.waitForLoadState('domcontentloaded')
} catch {}
await page.waitForTimeout(6000)
console.log('URL:', page.url())
const collect = async () => await page.evaluate(() => {
  const urls = new Set()
  for (const el of document.querySelectorAll('*')) {
    const bg = getComputedStyle(el).backgroundImage
    const m = bg && bg.match(/url\(["']?(https:\/\/lh\d\.googleusercontent\.com\/[^"')]+)/)
    if (m) urls.add(m[1])
  }
  for (const img of document.querySelectorAll('img')) {
    if (img.src.includes('googleusercontent.com')) urls.add(img.src)
  }
  return [...urls]
})
let urls = await collect()
// abrir galería (botón "Foto de ..." o pestaña Todas)
try {
  const photoBtn = page.locator('button[jsaction*="heroHeaderImage"], button[aria-label*="Foto de"], button[aria-label*="Photo of"]').first()
  await photoBtn.click({ timeout: 5000 })
  await page.waitForTimeout(4000)
} catch {}
// scroll en el panel de fotos
for (let i = 0; i < 14; i++) {
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('div[role="main"] div, div[role="feed"]')) {
      if (el.scrollHeight > el.clientHeight) el.scrollTop = el.scrollHeight
    }
  })
  await page.waitForTimeout(700)
  urls = [...new Set([...urls, ...(await collect())])]
}
for (const u of urls) console.log(u)
await browser.close()
