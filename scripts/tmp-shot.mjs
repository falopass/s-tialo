import { chromium } from 'playwright'
const b = await chromium.launch()
for (const [w,h,name] of [[390,844,'m'],[1440,900,'d']]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, deviceScaleFactor: 2 })
  const p = await ctx.newPage()
  await p.goto('http://localhost:4800/demos/kai-sushi-talca/', { waitUntil: 'networkidle', timeout: 60000 })
  await p.waitForTimeout(3000)
  await p.screenshot({ path: `/tmp/kai-${name}-top.png` })
  await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await p.waitForTimeout(1200)
  await p.screenshot({ path: `/tmp/kai-${name}-bot.png` })
  // mid
  await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight*0.45))
  await p.waitForTimeout(800)
  await p.screenshot({ path: `/tmp/kai-${name}-mid.png` })
  await ctx.close()
}
await b.close()
