import { chromium } from 'playwright'
const [,, base, slug, out] = process.argv
const b = await chromium.launch()
const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage()
await p.goto(`${base}/demos/${slug}/`, { waitUntil: 'networkidle', timeout: 45000 }).catch(()=>{})
await p.waitForTimeout(2500)
// full page screenshot
await p.screenshot({ path: out, fullPage: true })
console.log('OK', slug)
await b.close()
