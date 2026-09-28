import { chromium } from 'playwright'
const b = await chromium.launch()
const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL', viewport:{width:1440,height:900} })
const p = await ctx.newPage()
await p.goto('https://www.google.com/maps/search/?api=1&query=Halcon%20Gris%20Seguridad%20Talca', { waitUntil: 'domcontentloaded' })
try { await p.locator('button:has-text("Aceptar todo")').first().click({timeout:3000}) } catch {}
await p.waitForTimeout(7000)
// scroll reviews to load
await p.evaluate(() => { const s=document.querySelector('div[role="main"]'); s && s.dispatchEvent(new Event('scroll')) })
await p.waitForTimeout(2000)
const srcs = await p.evaluate(() => [...document.querySelectorAll('img')].map(i=>i.src).filter(s=>s.includes('googleusercontent')))
console.log(srcs.join('\n'))
// try downloading each via page fetch inside origin
for (const s of srcs.slice(0,8)) {
  const variants = [s, s.replace(/=s\d+[^ ]*$/, '=s800'), s.split('=')[0]]
  for (const v of variants) {
    const r = await ctx.request.get(v, { headers: { Referer: 'https://www.google.com/' } }).catch(()=>null)
    console.log('TRY', v.slice(0,110), r && r.status())
    if (r && r.ok()) {
      const fs = await import('fs')
      fs.writeFileSync(`/home/ubuntu/work/demos/halcon/dl-${srcs.indexOf(s)}-${variants.indexOf(v)}.jpg`, await r.body())
      break
    }
  }
}
await b.close()
