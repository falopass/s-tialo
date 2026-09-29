import { chromium } from 'playwright'
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
for (const h of process.argv.slice(2)) {
  const page = await ctx.newPage()
  try {
    await page.goto(`https://www.instagram.com/${h}/`, { waitUntil: 'domcontentloaded', timeout: 45000 })
    await page.waitForTimeout(6000)
    const info = await page.evaluate(() => ({
      url: location.href, title: document.title,
      ogTitle: document.querySelector('meta[property="og:title"]')?.content || '',
      ogDesc: (document.querySelector('meta[property="og:description"]')?.content || '').slice(0, 220),
      ogImg: document.querySelector('meta[property="og:image"]')?.content || '',
      nImgs: document.querySelectorAll('img').length,
    }))
    console.log(`### ${h}\n${JSON.stringify(info, null, 1)}\n`)
  } catch (e) { console.log(`### ${h} ERR ${String(e).slice(0, 100)}`) }
  await page.close()
}
process.exit(0)
