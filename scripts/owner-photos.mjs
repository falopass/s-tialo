import { chromium } from 'playwright'
const url = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0]
const page = await ctx.newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(5000)
// abrir sección "Photos & videos" completa
const photosBtn = page.locator('button:has-text("See photos"), button:has-text("Ver fotos"), [aria-label*="See photos"], [aria-label*="Ver fotos"]').first()
try { await photosBtn.click({ timeout: 4000 }) } catch { 
  await page.evaluate(() => { const b=[...document.querySelectorAll('button')].find(b=>/photos|fotos/i.test(b.innerText||'')); if(b) b.click() })
}
await page.waitForTimeout(3000)
// click en "By owner"/"Del propietario" si existe
const own = page.locator('button:has-text("By owner"), button:has-text("propietario"), button:has-text("Dueño")').first()
if (await own.count()) { await own.click().catch(()=>{}); await page.waitForTimeout(2500) }
const collect = () => page.evaluate(() => {
  const urls = new Set()
  const ok = (u) => u && u.includes('googleusercontent.com') && !u.includes('/a/') && !u.includes('/a-')
  for (const img of document.querySelectorAll('img')) if (ok(img.src)) urls.add(img.src)
  for (const el of document.querySelectorAll('*')) {
    const bg = getComputedStyle(el).backgroundImage
    const m = bg && bg.match(/url\(["']?(https:[^"')]+)/)
    if (m && ok(m[1])) urls.add(m[1])
  }
  return [...urls]
})
let urls = await collect()
let prev = -1
for (let i = 0; i < 25 && urls.length !== prev; i++) {
  prev = urls.length
  await page.evaluate(() => { for (const el of document.querySelectorAll('div')) { if (el.scrollHeight > el.clientHeight + 100 && el.clientHeight > 100) el.scrollTop += 1200 } })
  await page.waitForTimeout(700)
  urls = [...new Set([...urls, ...(await collect())])]
}
console.log('TOTAL', urls.length)
for (const u of urls) console.log(u)
await page.close()
