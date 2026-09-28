import { chromium } from 'playwright'
const q = process.argv[2]
const b = await chromium.launch()
const ctx = await b.newContext({ userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', locale: 'es-CL', viewport:{width:1440,height:900} })
const p = await ctx.newPage()
await p.goto(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`, { waitUntil: 'domcontentloaded' })
try { await p.locator('button:has-text("Aceptar todo")').first().click({timeout:3000}) } catch {}
await p.waitForTimeout(7000)
// scroll main panel so reviews lazy-load
for (let i=0;i<8;i++){ await p.mouse.wheel(0, 3000); await p.waitForTimeout(700) }
const data = await p.evaluate(() => {
  const out = []
  const seen = new Set()
  document.querySelectorAll('button[aria-label^="Foto de"]').forEach(btn => {
    const name = btn.getAttribute('aria-label').replace('Foto de ','')
    if (seen.has(name)) return
    seen.add(name)
    let card = btn.closest('div[class]')
    for (let i=0;i<8 && card;i++){ card = card.parentElement; if (card && card.textContent.length > 200) break }
    let txt = ''
    if (card) {
      const spans = card.querySelectorAll('[lang], .MyEned, .wiI7pd, span[jsname]')
      let best=''
      spans.forEach(s=>{ if (s.textContent.length > best.length) best = s.textContent })
      txt = best || card.textContent.slice(0,400)
    }
    out.push({name, txt: txt.slice(0,600)})
  })
  return out.slice(0,10)
})
console.log(JSON.stringify(data, null, 1))
await b.close()
