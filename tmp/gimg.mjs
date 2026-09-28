import { chromium } from 'playwright'
import fs from 'fs'
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.goto('https://www.google.com/search?q=%22Marco+Molina+Repuestos%22+Linares&tbm=isch&hl=es', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(5000)
for (const label of ['Accept all', 'Aceptar todo', 'Aceptar']) {
  const b = page.locator(`button:has-text("${label}")`).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(3000); break }
}
await page.mouse.wheel(0, 2000)
await page.waitForTimeout(2000)
const imgs = await page.evaluate(() => {
  const out = []
  document.querySelectorAll('img').forEach((img) => {
    const s = img.src || ''
    if (s.startsWith('http') && !/gstatic\.com\/images|googlelogo/.test(s)) out.push(s.slice(0, 220))
  })
  return [...new Set(out)].slice(0, 30)
})
console.log('IMGS:', imgs.length)
imgs.forEach((i) => console.log(i))
// links a resultados con contexto
const links = await page.evaluate(() => {
  const out = []
  document.querySelectorAll('a[href]').forEach((a) => {
    const h = a.href
    if (/facebook|instagram|google\.com\/maps/.test(h)) out.push(h.slice(0, 200))
  })
  return [...new Set(out)].slice(0, 20)
})
console.log('LINKS:', links.length)
links.forEach((l) => console.log(l))
process.exit(0)
