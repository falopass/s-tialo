import { chromium } from 'playwright'
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
const page = await ctx.newPage()
await page.goto('https://www.google.com/maps/search/?api=1&query=Halcon%20Gris%20Seguridad%20Talca', { waitUntil: 'domcontentloaded' })
try { await page.locator('button:has-text("Aceptar todo")').first().click({ timeout: 3000 }) } catch {}
await page.waitForTimeout(6000)
const urls = await page.evaluate(() => {
  const out = new Set()
  for (const el of document.querySelectorAll('*')) {
    const bg = getComputedStyle(el).backgroundImage
    const m = bg && bg.match(/url\(["']?(https:\/\/[^"')]+googleusercontent[^"')]+)/)
    if (m) out.add(m[1])
    const m2 = bg && bg.match(/url\(["']?(https:\/\/[^"')]+gstatic[^"')]+)/)
    if (m2) out.add(m2[1])
  }
  for (const img of document.querySelectorAll('img')) {
    if (img.src.includes('googleusercontent') || img.src.includes('gstatic')) out.add(img.src)
    if (img.getAttribute('srcset')) for (const p of img.srcset.split(',')) out.add(p.trim().split(' ')[0])
  }
  return [...out]
})
console.log(JSON.stringify(urls, null, 1))
await browser.close()
