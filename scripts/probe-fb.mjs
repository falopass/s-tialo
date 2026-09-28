// Prueba URLs de páginas FB candidatas y reporta og:title/og:description.
// Uso: node probe-fb.mjs handle1 handle2 ...
import { chromium } from 'playwright'
const items = process.argv.slice(2)
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
for (const it of items) {
  try {
    await page.goto(`https://www.facebook.com/${it}`, { waitUntil: 'domcontentloaded', timeout: 30000 })
    await page.waitForTimeout(5000)
    const info = await page.evaluate(() => ({
      url: location.href,
      title: document.title,
      og: (document.querySelector('meta[property="og:description"]')?.content || '').slice(0, 200),
      ogImg: (document.querySelector('meta[property="og:image"]')?.content || '').slice(0, 160),
    }))
    console.log(`### ${it}\n${JSON.stringify(info)}\n`)
  } catch (e) {
    console.log(`### ${it}\nERROR ${String(e).slice(0, 100)}\n`)
  }
}
await page.close()
process.exit(0)
