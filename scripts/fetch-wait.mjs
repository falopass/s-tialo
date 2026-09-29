import { chromium } from 'playwright'
const url = process.argv[2]
const wait = Number(process.argv[3] || 12000)
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL' })
const page = await ctx.newPage()
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 })
try { await page.locator('button:has-text("Aceptar Todo"), button:has-text("Rechazar Todo")').first().click({ timeout: 3000 }) } catch {}
await page.waitForTimeout(wait)
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(2000)
console.log('TITLE:', await page.title())
console.log('TEXT:', (await page.evaluate(() => document.body.innerText)).slice(0, 6000))
const imgs = await page.evaluate(() => [...document.querySelectorAll('img')].map((i) => i.src).filter((s) => s && s.startsWith('http')).slice(0, 50))
console.log('IMGS:\n' + imgs.join('\n'))
await page.screenshot({ path: '/tmp/demosrc/fetch.png' })
await browser.close()
