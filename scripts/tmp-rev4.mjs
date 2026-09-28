import { chromium } from 'playwright'
const q = process.argv[2]
const b = await chromium.launch()
const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL', viewport:{width:1440,height:900} })
const p = await ctx.newPage()
await p.goto(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
try { await p.locator('button:has-text("Aceptar todo")').first().click({timeout:3000}) } catch {}
await p.waitForTimeout(7000)
for (let i=0;i<6;i++){ await p.mouse.wheel(0, 3000); await p.waitForTimeout(600) }
const data = await p.evaluate(() => {
  const out = []
  document.querySelectorAll('button[aria-label^="Foto de"]').forEach(btn => {
    const name = btn.getAttribute('aria-label').replace('Foto de ','')
    // climb to the review card: the ancestor that contains a star rating widget
    let card = btn
    for (let i=0;i<12;i++){
      card = card.parentElement
      if (!card) break
      if (card.querySelector && card.querySelector('span[role="img"][aria-label*="estrella"], span[aria-label*="star"], .kvMYJc')) break
    }
    if (!card) return
    const cand = [...card.querySelectorAll('span')].map(s=>s.textContent.trim()).filter(t=>t.length>60 && !/estrella|star|opini/i.test(t))
    const txt = cand.sort((a,b)=>b.length-a.length)[0] || ''
    out.push({name, txt: txt.replace(' Más','').slice(0,500)})
  })
  return out
})
console.log(JSON.stringify(data, null, 1))
await b.close()
