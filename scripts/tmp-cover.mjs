import { chromium } from 'playwright'
const b = await chromium.launch()
const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL', viewport:{width:1440,height:900} })
const p = await ctx.newPage()
await p.goto('https://www.google.com/maps/search/?api=1&query=Halcon%20Gris%20Seguridad%20Talca', { waitUntil: 'domcontentloaded' })
try { await p.locator('button:has-text("Aceptar todo")').first().click({timeout:3000}) } catch {}
await p.waitForTimeout(7000)
await p.locator('button[aria-label="Foto de Halcon Gris Seguridad"]').first().click({timeout:8000})
await p.waitForTimeout(5000)
const imgs = await p.evaluate(() => {
  const urls = new Set()
  document.querySelectorAll('img').forEach(i => urls.add(i.src))
  document.querySelectorAll('*').forEach(el => { const bg=getComputedStyle(el).backgroundImage; const m=bg&&bg.match(/url\(["']?(https?:[^"')]+)/); if(m) urls.add(m[1]) })
  return [...urls].filter(u => u.includes('googleusercontent') || u.includes('ggpht'))
})
console.log(imgs.join('\n'))
await p.screenshot({path:'/home/ubuntu/work/demos/halcon/viewer.png'})
await b.close()
