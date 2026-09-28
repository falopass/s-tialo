import { chromium } from 'playwright'
const q = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.goto(`https://www.google.com/search?q=${encodeURIComponent(q)}&tbm=isch&hl=es`, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(5000)
for (const label of ['Accept all', 'Aceptar todo', 'Aceptar']) {
  const b = page.locator(`button:has-text("${label}")`).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(3000); break }
}
// clic en primeras imágenes para revelar el original
for (let i = 0; i < 6; i++) {
  const img = page.locator('img.YQ4gaf, img.rg_i, .H8Rx8c img, a[href*="imgurl"] img').nth(i)
  if (await img.count()) { await img.click().catch(() => {}); await page.waitForTimeout(2500) }
}
await page.mouse.wheel(0, 2000)
await page.waitForTimeout(2000)
const imgs = await page.evaluate(() => {
  const out = []
  document.querySelectorAll('img').forEach((img) => {
    const s = img.src || ''
    if (s.startsWith('http') && !/gstatic\.com\/images|googlelogo|favicon/.test(s) && img.naturalWidth > 200) out.push(s.slice(0, 250))
  })
  return [...new Set(out)].slice(0, 40)
})
console.log('IMGS:', imgs.length)
imgs.forEach((i) => console.log(i))
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
