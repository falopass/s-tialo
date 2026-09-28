import { chromium } from 'playwright'
const b = await chromium.launch()
const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL', viewport:{width:1440,height:900} })
const p = await ctx.newPage()
await p.goto('https://www.google.com/maps/search/?api=1&query=Halcon%20Gris%20Seguridad%20Talca', { waitUntil: 'domcontentloaded' })
try { await p.locator('button:has-text("Aceptar todo")').first().click({timeout:3000}) } catch {}
await p.waitForTimeout(7000)
// find all buttons/links that open reviews & photos
const info = await p.evaluate(() => {
  const out = {tabs: [], imgs: []}
  document.querySelectorAll('[role="tab"], button[aria-label]').forEach(e => { const a=e.getAttribute('aria-label'); if(a && /reseñ|foto|opinion/i.test(a)) out.tabs.push(a.slice(0,80)) })
  document.querySelectorAll('img').forEach(i => { if(i.src.includes('lh')||i.src.includes('contrib')) out.imgs.push({alt:(i.alt||'').slice(0,60), src:i.src.slice(0,140)}) })
  return out
})
console.log(JSON.stringify(info,null,1))
await b.close()
