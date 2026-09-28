// Scroll del panel de información de la ficha (pestaña principal) para
// capturar reseñas embebidas y foto principal. Uso: node scrape-info.mjs "<query>"
import { chromium } from 'playwright'
import fs from 'fs'
const q = process.argv[2]
const outFile = process.argv[3] || '/tmp/scrape-info.json'
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()
await page.goto(`https://www.google.com/maps/search/${encodeURIComponent(q)}?hl=es`, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(7000)
for (const label of ['Accept all', 'Aceptar todo', 'Aceptar', 'Accept']) {
  const b = page.locator(`button:has-text("${label}")`).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(4000); break }
}
const first = page.locator('a[href*="/maps/place/"]').first()
if (await first.count()) { await first.click().catch(() => {}); await page.waitForTimeout(5000) }

// scroll del panel lateral completo
for (let i = 0; i < 25; i++) {
  await page.evaluate(() => {
    document.querySelectorAll('div').forEach((d) => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200 && d.clientHeight < 2000) d.scrollTop += 1300 })
  })
  await page.waitForTimeout(450)
}
await page.evaluate(() => { for (const b of document.querySelectorAll('button')) { if (/^Más$|^More$/i.test(b.textContent.trim())) b.click() } })
await page.waitForTimeout(500)

const res = await page.evaluate(() => {
  const out = []; const seen = new Set()
  for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
    const nombre = el.querySelector('.d4r55')?.textContent?.trim() || ''
    const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || ''
    const texto = el.querySelector('.wiI7pd')?.textContent?.trim() || ''
    const key = nombre + '|' + texto
    if (nombre && texto && !seen.has(key)) { seen.add(key); out.push({ nombre, stars, texto: texto.slice(0, 280) }) }
  }
  const fotos = new Set()
  const add = (s) => {
    if (!s || !/lh\d?\.(googleusercontent|ggpht)\.com/.test(s) || /default-user|ogw\/|mapapi|mapsapi|\/a\//.test(s)) return
    fotos.add(s.replace(/=.*$/, ''))
  }
  document.querySelectorAll('img').forEach((img) => add(img.src))
  document.querySelectorAll('[style]').forEach((el) => {
    const m = (el.getAttribute('style') || '').match(/url\(["']?(https:\/\/lh[^"')]+)["']?\)/)
    if (m) add(m[1])
  })
  return { resenas: out.slice(0, 12), fotos: [...fotos], bodySnippet: document.body.innerText.slice(0, 1500) }
})
fs.writeFileSync(outFile, JSON.stringify(res, null, 2))
console.log(JSON.stringify({ resenas: res.resenas, fotos: res.fotos.length }, null, 1))
await page.close()
process.exit(0)
