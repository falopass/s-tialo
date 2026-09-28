import { chromium } from 'playwright'
const b = await chromium.launch()
const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL', viewport:{width:1600,height:1000} })
const p = await ctx.newPage()
for (const [i, h, pitch] of [[3, 100, 8], [4, 140, 12], [5, 60, 10]]) {
  await p.goto(`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=-35.4267785,-71.6653567&heading=${h}&pitch=${pitch}`, { waitUntil: 'domcontentloaded' })
  await p.waitForTimeout(6500)
  await p.screenshot({ path: `/home/ubuntu/work/demos/halcon/sv-${i}.png` })
}
await b.close()
