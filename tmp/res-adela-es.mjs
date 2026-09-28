import { chromium } from 'playwright'
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL' })
const page = await ctx.newPage()
await page.goto('https://www.google.com/maps/place/Piscinas+Santa+Adela+y+Canchas+Sinteticas/@-35.1044665,-71.2693392,17z/data=!4m6!3m5!1s0x96645495ac67d0df:0x6a051d0d5a962d37!8m2!3d-35.1044665!4d-71.2693392!16s%2Fg%2F11bxd7l78h', { waitUntil: 'domcontentloaded' })
try { await page.locator('button:has-text("Aceptar todo")').first().click({ timeout: 4000 }) } catch {}
await page.waitForTimeout(6000)
// click reviews tab
try {
  await page.locator('button[aria-label*="Revisiones"], button[aria-label*="Reseñas"], [role="tab"]:has-text("reseñas")').first().click({ timeout: 8000 })
  await page.waitForTimeout(4000)
} catch (e) { console.log('tab fail', String(e).slice(0,80)) }
for (let i = 0; i < 20; i++) {
  await page.evaluate(() => { for (const el of document.querySelectorAll('div')) if (el.scrollHeight > el.clientHeight + 200 && el.clientHeight > 300) el.scrollTop = el.scrollHeight })
  await page.waitForTimeout(600)
}
await page.evaluate(() => { for (const b of document.querySelectorAll('button')) if (/^Más$/i.test(b.textContent.trim())) b.click() })
await page.waitForTimeout(800)
const r = await page.evaluate(() => {
  const out = []
  for (const el of document.querySelectorAll('div[data-review-id], div[jslog*="review"]')) {
    const name = el.querySelector('.d4r55, .WNxzH')?.textContent?.trim()
    const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label')
    const txt = el.querySelector('.wiI7pd, .MyEned span, [data-expandable-section]')?.textContent?.trim()
    if (name && txt) out.push({ name, stars, txt: txt.slice(0, 400) })
  }
  const seen = new Set(); return out.filter((o) => !seen.has(o.name + o.txt) && seen.add(o.name + o.txt))
})
console.log(JSON.stringify(r, null, 1))
await browser.close()
