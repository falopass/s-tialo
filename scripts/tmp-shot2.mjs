import { chromium } from 'playwright'
const b = await chromium.launch()
const slug = process.argv[2]
for (const [w,h,name] of [[390,844,'m'],[1440,900,'d']]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, deviceScaleFactor: 2 })
  const p = await ctx.newPage()
  await p.goto(`http://localhost:4800/demos/${slug}/`, { waitUntil: 'networkidle', timeout: 60000 })
  await p.waitForTimeout(3000)
  await p.screenshot({ path: `/tmp/${slug}-${name}-top.png` })
  await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight*0.5))
  await p.waitForTimeout(900)
  await p.screenshot({ path: `/tmp/${slug}-${name}-mid.png` })
  await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await p.waitForTimeout(1200)
  await p.screenshot({ path: `/tmp/${slug}-${name}-bot.png` })
  await ctx.close()
}
await b.close()
