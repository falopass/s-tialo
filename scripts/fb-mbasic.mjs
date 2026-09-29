import { chromium } from 'playwright'
const items = process.argv.slice(2)
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL' })
const page = await ctx.newPage()
for (const it of items) {
  try {
    await page.goto(`https://mbasic.facebook.com/${it}`, { waitUntil: 'domcontentloaded', timeout: 25000 })
    await page.waitForTimeout(4000)
    console.log(`### ${it}\nURL: ${page.url()}\nTITLE: ${await page.title()}\nTEXT: ${(await page.evaluate(() => document.body.innerText)).slice(0, 1200)}\n`)
  } catch (e) { console.log(`### ${it}\nERROR ${String(e).slice(0, 120)}\n`) }
}
await browser.close()
