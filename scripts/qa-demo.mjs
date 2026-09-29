/**
 * QA headless de un demo: overflow horizontal, botones altos, footer,
 * imágenes sin alt, contenido invisible tras animación y errores de
 * consola. Uso: node scripts/qa-demo.mjs <base> <slug> [outDir]
 */
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const [,, base = 'http://localhost:3010', slug, outDir = 'D:/Temp-User/qa'] = process.argv
mkdirSync(outDir, { recursive: true })
const b = await chromium.launch()
const report = { slug, checks: [] }
const ok = (name, pass, detail = '') => {
  report.checks.push({ name, pass, detail })
  console.log(`${pass ? 'PASS' : 'FAIL'} ${name}${detail ? ` — ${detail}` : ''}`)
}

for (const w of [390, 1440]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 844 } })
  const p = await ctx.newPage()
  const errors = []
  p.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  p.on('pageerror', (e) => errors.push(String(e)))
  await p.goto(`${base}/demos/${slug}/`, { waitUntil: 'networkidle', timeout: 60000 })
  await p.waitForTimeout(1500)
  await p.screenshot({ path: `${outDir}/${slug}-${w}-top.png` })

  const m1 = await p.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    innerW: window.innerWidth,
    imgs: [...document.images].map((i) => i.getAttribute('alt')),
    imgsSinAlt: [...document.images].filter((i) => i.getAttribute('alt') === null).length,
  }))
  ok(`[${w}] sin overflow horizontal`, m1.scrollW <= m1.innerW, `scrollW=${m1.scrollW} innerW=${m1.innerW}`)
  ok(`[${w}] todas las imágenes con alt`, m1.imgsSinAlt === 0, `${m1.imgs.length} imgs, ${m1.imgsSinAlt} sin alt`)

  // scroll completo para disparar los Reveal + medir botones/footer
  await p.evaluate(async () => {
    const h = document.body.scrollHeight
    for (let y = 0; y <= h; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)) }
    window.scrollTo(0, h)
  })
  await p.waitForTimeout(2600) // supera el fallback de 2.2s de Reveal
  await p.screenshot({ path: `${outDir}/${slug}-${w}-end.png` })

  const m2 = await p.evaluate(() => {
    const btns = [...document.querySelectorAll('a,button')]
      .filter((el) => {
        const r = el.getBoundingClientRect()
        const s = getComputedStyle(el)
        // tarjetas completas enlazables no son botones de acción
        if (el.querySelector('p,h1,h2,h3,h4,figure,blockquote')) return false
        return r.height > 0 && (s.paddingTop !== '0px' || el.closest('header') || el.className.includes('btn'))
      })
      .map((el) => ({ h: Math.round(el.getBoundingClientRect().height), t: (el.textContent || '').trim().slice(0, 30) }))
    const footer = document.querySelector('footer')
    const invisibles = [...document.querySelectorAll('body *')].filter((el) => {
      const s = getComputedStyle(el)
      return s.opacity === '0' && el.children.length + (el.textContent || '').trim().length > 0
    }).length
    return { btns, footerH: footer ? Math.round(footer.getBoundingClientRect().height) : null, invisibles }
  })
  const altos = m2.btns.filter((x) => x.h > 52)
  ok(`[${w}] botones ≤52px`, altos.length === 0, altos.map((x) => `${x.h}px "${x.t}"`).join(', ') || `${m2.btns.length} medidos`)
  if (w === 390) ok('[390] footer ≤340px', (m2.footerH ?? 999) <= 340, `${m2.footerH}px`)
  ok(`[${w}] sin contenido invisible tras scroll`, m2.invisibles === 0, `${m2.invisibles} elementos`)
  const consoleErrors = errors.filter((e) => !e.includes('favicon') && !e.includes('net::ERR'))
  ok(`[${w}] sin errores de consola`, consoleErrors.length === 0, consoleErrors.slice(0, 2).join(' | '))
  await ctx.close()
}
await b.close()
const fails = report.checks.filter((c) => !c.pass).length
console.log(fails === 0 ? 'TODO OK' : `${fails} CHECKS FALLARON`)
process.exit(fails ? 1 : 0)
