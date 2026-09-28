// IG via CDP: og:image + grilla de un perfil público.
// Uso: node ig-cdp.mjs <handle>
import { chromium } from 'playwright'
const handle = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.goto(`https://www.instagram.com/${handle}/`, { waitUntil: 'domcontentloaded', timeout: 45000 })
await page.waitForTimeout(7000)
const og = await page.evaluate(() => ({
  img: document.querySelector('meta[property="og:image"]')?.content || '',
  title: document.querySelector('meta[property="og:title"]')?.content || '',
  desc: document.querySelector('meta[property="og:description"]')?.content || '',
}))
console.log('OG:', JSON.stringify(og, null, 1))
for (let i = 0; i < 4; i++) { await page.mouse.wheel(0, 1200); await page.waitForTimeout(1100) }
const imgs = await page.evaluate(() => [...document.querySelectorAll('img')].map(i => ({ src: i.src, alt: (i.alt || '').slice(0, 80), w: i.naturalWidth })).filter(i => /cdninstagram|fbcdn/.test(i.src)))
console.log(JSON.stringify(imgs.slice(0, 30), null, 1))
await page.close()
process.exit(0)
