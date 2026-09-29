// QA móvil de un demo con playwright: botones >52px, footer, contraste <4.5,
// desborde, elementos opacity-0, imgs sin alt. Uso: node qa-movil-pw.mjs <base> <slug> [ancho]
import { chromium } from 'playwright'

const [base, slug, w = '390'] = process.argv.slice(2)
const VW = parseInt(w)
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: VW, height: VW < 500 ? 844 : 900 } })
await page.goto(`${base}/demos/${slug}/`, { waitUntil: 'networkidle' })
await page.evaluate(() => new Promise((r) => {
  let y = 0
  const t = setInterval(() => { y += 600; window.scrollTo(0, y); if (y >= document.body.scrollHeight) { clearInterval(t); r() } }, 120)
}))
await page.waitForTimeout(3000)
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(800)

const res = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth
  const vh = window.innerHeight
  const visible = (el) => {
    const r = el.getBoundingClientRect()
    const cs = getComputedStyle(el)
    return r.width > 0 && r.height > 0 && cs.display !== 'none' && cs.visibility !== 'hidden'
  }
  const label = (el) => (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60)
  const sel = (el) => {
    const id = el.id ? '#' + el.id : ''
    const cls = typeof el.className === 'string' ? el.className.split(/\s+/).filter(Boolean).slice(0, 3).join('.') : ''
    return el.tagName.toLowerCase() + id + (cls ? '.' + cls : '')
  }
  const botones = []
  for (const el of document.querySelectorAll('a,button,[role="button"]')) {
    if (!visible(el) || !label(el)) continue
    const h = Math.round(el.getBoundingClientRect().height)
    if (h > 52) botones.push({ alto: h, texto: label(el), sel: sel(el) })
  }
  const footer = document.querySelector('footer')
  const footerPx = footer ? Math.round(footer.getBoundingClientRect().height) : 0

  const rgb = (c) => {
    const m = c.match(/rgba?\(([^)]+)\)/)
    if (!m) return null
    const p = m[1].split(',').map((x) => parseFloat(x))
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }
  }
  const lum = ({ r, g, b }) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4) }
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
  }
  const bgOf = (el) => {
    let n = el
    while (n && n !== document.documentElement) {
      const bg = getComputedStyle(n).backgroundColor
      const c = rgb(bg)
      if (c && c.a > 0) {
        if (c.a < 1) {
          // componer sobre el fondo efectivo de más abajo, no sobre blanco
          let under = { r: 255, g: 255, b: 255 }
          let m = n.parentElement
          while (m && m !== document.documentElement) {
            const u = rgb(getComputedStyle(m).backgroundColor)
            if (u && u.a > 0.99) { under = u; break }
            m = m.parentElement
          }
          return { r: Math.round(c.r * c.a + under.r * (1 - c.a)), g: Math.round(c.g * c.a + under.g * (1 - c.a)), b: Math.round(c.b * c.a + under.b * (1 - c.a)), a: 1 }
        }
        return c
      }
      n = n.parentElement
    }
    return { r: 255, g: 255, b: 255, a: 1 }
  }
  const contraste = []
  for (const el of document.querySelectorAll('p,h1,h2,h3,h4,h5,h6,span,li,a,button,figcaption,blockquote,summary')) {
    if (!visible(el)) continue
    const txt = (el.textContent || '').trim()
    if (!txt || el.children.length > 4) continue
    const cs = getComputedStyle(el)
    const fg = rgb(cs.color)
    const bg = bgOf(el)
    if (!fg) continue
    const L1 = lum(fg), L2 = lum(bg)
    const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
    const size = parseFloat(cs.fontSize)
    const bold = parseInt(cs.fontWeight) >= 700
    const big = size >= 24 || (size >= 18.66 && bold)
    const min = big ? 3 : 4.5
    if (ratio < min) contraste.push({ ratio: Math.round(ratio * 100) / 100, min, texto: label(el), sel: sel(el), fg: cs.color, bg: `rgb(${bg.r},${bg.g},${bg.b})` })
  }
  const sinAlt = []
  for (const img of document.querySelectorAll('img')) {
    if (!visible(img)) continue
    const alt = img.getAttribute('alt')
    if (alt === null || (alt === '' && img.getAttribute('aria-hidden') !== 'true' && img.getAttribute('role') !== 'presentation')) {
      sinAlt.push({ src: (img.src || '').split('/').pop(), alt })
    }
  }
  const invisibles = []
  for (const el of document.querySelectorAll('div,section,p,h1,h2,h3,span')) {
    const cs = getComputedStyle(el)
    if (parseFloat(cs.opacity) === 0 && el.getBoundingClientRect().height > 10) {
      invisibles.push(sel(el) + ' h=' + Math.round(el.getBoundingClientRect().height))
      if (invisibles.length > 10) break
    }
  }
  const hasMap = !!document.querySelector('iframe[src*="maps"], iframe[title*="Mapa"], iframe[title*="mapa"]')
  return {
    docW: document.documentElement.scrollWidth,
    clientW: vw,
    botones,
    footerPx,
    footerPct: Math.round((footerPx / vh) * 1000) / 10,
    contraste,
    sinAlt,
    invisibles,
    hasMap,
  }
})
console.log(JSON.stringify(res, null, 1))
await browser.close()
