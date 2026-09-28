import { chromium } from 'playwright'
const queries = process.argv.slice(2)
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
for (const q of queries) {
  const page = await ctx.newPage()
  await page.goto(q.startsWith('http') ? q : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
  try { await page.locator('button:has-text("Aceptar todo")').first().click({ timeout: 3000 }) } catch {}
  await page.waitForTimeout(6000)
  console.log('\n===== ', q)
  console.log('URL:', page.url())
  const meta = await page.evaluate(() => {
    const txt = document.body.innerText.slice(0, 3000)
    const rating = document.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || ''
    const m = txt.match(/([\d.,]+)\s*(?:reseñas|opiniones|reviews)/i)
    const tabs = [...document.querySelectorAll('[role="tab"], button')].map(b => (b.getAttribute('aria-label') || b.textContent || '').trim()).filter(t => /reseñ|review|opini/i.test(t)).slice(0,6)
    return { rating, countMatch: m && m[0], tabs, head: txt.slice(0, 400).replace(/\n+/g, ' | ') }
  })
  console.log('META:', JSON.stringify(meta, null, 1))
  // click reviews tab
  try {
    const tab = page.locator('[role="tab"]:has-text("Reseñas"), [role="tab"]:has-text("Revisiones"), button:has-text("Reseñas"), button:has-text("Revisiones")').first()
    await tab.click({ timeout: 5000 })
    await page.waitForTimeout(3500)
  } catch (e) { console.log('no tab:', String(e).slice(0,60)) }
  for (let i = 0; i < 10; i++) {
    await page.evaluate(() => { for (const el of document.querySelectorAll('div')) { if (el.scrollHeight > el.clientHeight + 300 && el.clientHeight > 300) el.scrollTop = el.scrollHeight } })
    await page.waitForTimeout(500)
  }
  await page.evaluate(() => { for (const b of document.querySelectorAll('button')) if (/^Más$|^More$/i.test(b.textContent.trim())) b.click() })
  await page.waitForTimeout(800)
  const res = await page.evaluate(() => {
    const out = []
    for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
      const nombre = el.querySelector('.d4r55')?.textContent?.trim() || ''
      const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || ''
      const fecha = el.querySelector('.rsqaWe')?.textContent?.trim() || ''
      const texto = el.querySelector('.wiI7pd')?.textContent?.trim() || ''
      if (texto) out.push({ nombre, stars, fecha, texto: texto.slice(0, 300) })
    }
    return out.slice(0, 10)
  })
  console.log('RESENAS:', JSON.stringify(res, null, 1))
  await page.close()
}
await browser.close()
