// Prueba handles de Instagram/Facebook: reporta og:title, og:desc, og:image.
// Uso: node scripts/probe-ig.mjs handle1 handle2 ...
import { chromium } from 'playwright'

const handles = process.argv.slice(2)
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  locale: 'es-CL',
})
const page = await ctx.newPage()
for (const h of handles) {
  const url = h.startsWith('http') ? h : `https://www.instagram.com/${h.replace(/^@/, '')}/`
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 25000 })
    await page.waitForTimeout(3500)
    const m = await page.evaluate(() => ({
      title: document.title,
      og: document.querySelector('meta[property="og:title"]')?.content || '',
      desc: document.querySelector('meta[property="og:description"]')?.content || '',
      img: document.querySelector('meta[property="og:image"]')?.content || '',
      url: location.href,
    }))
    console.log('===', h, '\n', JSON.stringify(m, null, 1))
  } catch (e) {
    console.log('===', h, 'ERROR', String(e).slice(0, 120))
  }
}
await browser.close()
