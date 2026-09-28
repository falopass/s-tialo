import { chromium } from 'playwright'
const b = await chromium.launch()
const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL', viewport:{width:1600,height:1000} })
const p = await ctx.newPage()
await p.goto('https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=-35.4267697,-71.6652138', { waitUntil: 'domcontentloaded' })
try { await p.locator('button:has-text("Aceptar todo")').first().click({timeout:3000}) } catch {}
await p.waitForTimeout(9000)
console.log('URL:', p.url())
await p.screenshot({ path: '/home/ubuntu/work/demos/halcon/sv-1.png' })
// drag a bit / different heading via URL change if needed
await p.goto('https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=-35.4267697,-71.6652138&heading=0&pitch=10', { waitUntil: 'domcontentloaded' })
await p.waitForTimeout(6000)
await p.screenshot({ path: '/home/ubuntu/work/demos/halcon/sv-2.png' })
await b.close()
