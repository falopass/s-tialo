// Dump del panel principal de una ficha de Maps (texto visible completo).
// Uso: node scripts/ficha-dump.mjs "<place-url>" [scrollN]
import { chromium } from 'playwright'

const [,, url, scrollN = '10'] = process.argv
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
for (let i = 0; i < Number(scrollN); i++) {
  await page.evaluate(() => {
    const els = [...document.querySelectorAll('div')].filter((d) => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300 && d.clientWidth < 700)
    for (const el of els) el.scrollTop += 2000
  })
  await page.waitForTimeout(650)
}
await page.evaluate(() => { for (const b of document.querySelectorAll('button')) { if (/^Más$|^More$|Ver más/i.test(b.textContent.trim())) b.click() } })
await page.waitForTimeout(900)
const txt = await page.evaluate(() => {
  const main = document.querySelector('div[role="main"]') || document.body
  return (main.innerText || '').slice(0, 14000)
})
console.log(txt)
await browser.close()
