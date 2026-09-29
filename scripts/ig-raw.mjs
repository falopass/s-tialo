import { chromium } from 'playwright'
const handle = process.argv[2]
const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL' })
const page = await ctx.newPage()
await page.goto(`https://www.instagram.com/${handle}/`, { waitUntil: 'domcontentloaded', timeout: 30000 })
await page.waitForTimeout(6000)
const html = await page.content()
const shorts = [...new Set([...html.matchAll(/"shortcode":"([A-Za-z0-9_-]+)"/g)].map((m) => m[1]))].slice(0, 20)
const links = [...new Set([...html.matchAll(/href="\/(p|reel)\/([A-Za-z0-9_-]+)/g)].map((m) => m[2]))].slice(0, 20)
const bio = (html.match(/"biography":"((?:[^"\\]|\\.)*)"/) || [])[1]
console.log('BIO:', bio ? JSON.parse(`"${bio}"`) : '')
console.log('SHORTCODES:', shorts.join(' '))
console.log('LINKS:', links.join(' '))
await browser.close()
