import { chromium } from 'playwright'
const q = process.argv[2]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.setViewportSize({ width: 1280, height: 900 })
await page.goto(`https://www.facebook.com/search/pages/?q=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(7000)
const out = await page.evaluate(() => {
  const res = []
  for (const a of document.querySelectorAll('a[href]')) {
    const t = (a.innerText || '').trim()
    if (a.href.includes('facebook.com/') && t.length > 3 && t.length < 140 && !/search|login|help|policy/i.test(a.href)) {
      res.push({ t: t.replace(/\n/g, ' | ').slice(0, 120), href: a.href.split('?')[0] })
    }
  }
  const seen = new Set()
  return res.filter((x) => !seen.has(x.href + x.t) && seen.add(x.href + x.t)).slice(0, 15)
})
console.log(JSON.stringify(out, null, 1))
await page.screenshot({ path: '/tmp/demosrc/fb-pages.png' })
await page.close()
process.exit(0)
