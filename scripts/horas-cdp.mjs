import { chromium } from 'playwright'
const url = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0]
const page = await ctx.newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(6500)
const row = page.locator('div[role="button"]:has-text("Closes"), [role="button"]:has-text("Open ·"), [aria-label*="Hour"]').first()
if (await row.count()) { await row.click().catch(() => {}); await page.waitForTimeout(2500) }
const rows = await page.evaluate(() => {
  const out = []
  for (const tr of document.querySelectorAll('tr, [role="row"], div[role="main"] li')) {
    const t = (tr.innerText || '').trim().replace(/\s+/g, ' ')
    if (/^(monday|tuesday|wednesday|thursday|friday|saturday|sunday|lunes|martes|miércoles|jueves|viernes|sábado|domingo)/i.test(t)) out.push(t)
  }
  if (!out.length) {
    const m = document.querySelector('div[role="main"]')
    return 'SIN FILAS\n' + (m ? m.innerText.slice(0, 3500) : '')
  }
  return out.join('\n')
})
console.log(rows)
await page.close()
process.exit(0)
