import { chromium } from 'playwright'
const q = process.argv[2]
const b = await chromium.launch()
const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL', viewport:{width:1440,height:900} })
const p = await ctx.newPage()
await p.goto(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
try { await p.locator('button:has-text("Aceptar todo")').first().click({timeout:3000}) } catch {}
await p.waitForTimeout(7000)
const data = await p.evaluate(() => {
  const out = []
  // review blocks: div[data-review-id] or elements containing stars
  document.querySelectorAll('[data-review-id]').forEach(el => {
    const name = el.querySelector('button[aria-label*="Foto de"]')?.getAttribute('aria-label')?.replace('Foto de ','') || ''
    const txt = el.querySelector('.MyEned, [lang]')?.textContent || el.textContent.slice(0,600)
    out.push({name, txt: txt.slice(0,500)})
  })
  return out.slice(0,8)
})
console.log(JSON.stringify(data, null, 1))
await b.close()
