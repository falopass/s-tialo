import { chromium } from 'playwright'
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL' })
const page = await ctx.newPage()
await page.goto('https://pymerp.cl/demo-delivery', { waitUntil: 'domcontentloaded' })
try { await page.locator('button:has-text("Aceptar Todo")').first().click({ timeout: 3000 }) } catch {}
await page.waitForTimeout(12000)
const links = await page.evaluate(() => [...document.querySelectorAll('a[href]')].map((a) => a.href).filter((h) => /wa\.me|whatsapp|tel:|instagram|facebook|maps/i.test(h)))
console.log('LINKS:\n' + [...new Set(links)].join('\n'))
await browser.close()
