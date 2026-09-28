import { chromium } from 'playwright'
const url = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
try {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 })
  await page.waitForTimeout(5000)
  console.log('URL:', page.url()); console.log('TITLE:', await page.title())
  const og = await page.evaluate(() => ({
    title: document.querySelector('meta[property="og:title"]')?.content,
    desc: document.querySelector('meta[property="og:description"]')?.content,
    img: document.querySelector('meta[property="og:image"]')?.content,
  }))
  console.log(JSON.stringify(og, null, 2))
  const imgs = await page.evaluate(() => [...document.querySelectorAll('img')].map(i=>i.src).filter(s=>/licdn|media/.test(s)).slice(0,20))
  imgs.forEach(u=>console.log(u))
} catch(e){console.log('ERR',e.message)}
process.exit(0)
