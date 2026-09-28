// Igual que scrape-demo pero navega directo a la URL de la ficha.
// Uso: node scrape-url.mjs "<url>" <salida.json>
import { chromium } from 'playwright'
import fs from 'fs'

const url = process.argv[2]
const outFile = process.argv[3] || '/tmp/scrape.json'
const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()

await page.goto(url + (url.includes('?') ? '&' : '?') + 'hl=es', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(8000)
for (const label of ['Accept all', 'Aceptar todo', 'Aceptar', 'Accept']) {
  const b = page.locator(`button:has-text("${label}")`).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(4000); break }
}

const data = { url: page.url() }

// dump de tabs disponibles para depurar
data.tabs = await page.evaluate(() =>
  [...document.querySelectorAll('button[role="tab"], [role="tab"]')].map(t => (t.textContent || '').trim().slice(0, 30)))

// reseñas: probar varios selectores
for (const sel of ['button[role="tab"]:has-text("Reseñas")', 'button:has-text("Reseñas")', '[aria-label*="Reseñas"]']) {
  const t = page.locator(sel).first()
  if (await t.count()) { await t.click().catch(() => {}); await page.waitForTimeout(3500); break }
}
for (let i = 0; i < 8; i++) {
  await page.evaluate(() => {
    [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300).forEach(el => { el.scrollTop = el.scrollHeight })
  })
  await page.waitForTimeout(600)
}
await page.evaluate(() => { for (const b of document.querySelectorAll('button')) { if (/^Más$|^More$/i.test(b.textContent.trim())) b.click() } })
await page.waitForTimeout(500)
data.resenas = await page.evaluate(() => {
  const out = []; const seen = new Set()
  for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
    const nombre = el.querySelector('.d4r55')?.textContent?.trim() || ''
    const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || ''
    const texto = el.querySelector('.wiI7pd')?.textContent?.trim() || ''
    const key = nombre + '|' + texto
    if (nombre && texto && !seen.has(key)) { seen.add(key); out.push({ nombre, stars, texto: texto.slice(0, 280) }) }
  }
  return out.slice(0, 12)
})

// fotos: probar pestaña y botón de foto principal
for (const sel of ['button[role="tab"]:has-text("Fotos")', 'button:has-text("Fotos")', '[aria-label*="Fotos"]', 'button[jsaction*="photo"]', 'button[aria-label*="oto"]']) {
  const t = page.locator(sel).first()
  if (await t.count()) { await t.click().catch(() => {}); await page.waitForTimeout(3500); break }
}
for (let i = 0; i < 30; i++) {
  await page.evaluate(() => {
    document.querySelectorAll('div').forEach((d) => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollTop += 1400 })
  })
  await page.waitForTimeout(400)
}
data.fotos = await page.evaluate(() => {
  const out = new Set()
  const add = (s) => {
    if (!s) return
    if (!/lh\d?\.(googleusercontent|ggpht)\.com/.test(s)) return
    if (/default-user|ogw\/|mapapi|mapsapi|\/a\//.test(s)) return
    out.add(s.replace(/=.*$/, ''))
  }
  document.querySelectorAll('img').forEach((img) => add(img.src))
  document.querySelectorAll('[style]').forEach((el) => {
    const m = (el.getAttribute('style') || '').match(/url\(["']?(https:\/\/lh[^"')]+)["']?\)/)
    if (m) add(m[1])
  })
  for (const m of document.documentElement.innerHTML.matchAll(/https:\/\/lh\d\.googleusercontent\.com\/(p\/|gps-cs-s\/|grass-cs\/)?[A-Za-z0-9_\-=]{20,}/g)) add(m[0])
  return [...out]
})

fs.writeFileSync(outFile, JSON.stringify(data, null, 2))
console.log(JSON.stringify({ tabs: data.tabs, resenas: data.resenas.length, fotos: data.fotos.length }, null, 2))
console.log(JSON.stringify(data.resenas.slice(0, 8), null, 1))
await page.close()
process.exit(0)
