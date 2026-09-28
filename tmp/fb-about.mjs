import { chromium } from 'playwright'
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.goto('https://m.facebook.com/profile.php?id=61562981955982', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(7000)
const text = await page.evaluate(() => document.body.innerText.slice(0, 3000))
console.log(text)
const links = await page.evaluate(() => {
  const out = []
  document.querySelectorAll('a[href]').forEach((a) => {
    const h = a.href
    if (/instagram|wa\.me|whatsapp|youtube|tiktok|mailto|tel:/i.test(h)) out.push(h.slice(0, 200))
  })
  return out
})
console.log('LINKS:', JSON.stringify(links, null, 1))
await page.close()
process.exit(0)
