// Scrape completo de una ficha de Maps: datos + horario + reseñas + fotos.
// Uso: node scrape-demo.mjs "<query>" <salida.json>
import { chromium } from 'playwright'
import fs from 'fs'

const q = process.argv[2]
const outFile = process.argv[3] || '/tmp/scrape.json'
const browser = await chromium.connectOverCDP('http://localhost:' + (process.env.CDP_PORT || '29229') + '')
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

const data = await page.evaluate(() => {
  const txt = (sel) => document.querySelector(sel)?.textContent?.trim() || null
  const bodyText = document.body.innerText
  return {
    h1: txt('h1'),
    url: location.href,
    rating: bodyText.match(/(\d[.,]\d)\s*\(/)?.[1] || null,
    reviews: bodyText.match(/\((\d[\d.,]*)\)/)?.[1] || null,
    addr: document.querySelector('button[data-item-id="address"]')?.textContent?.trim() || null,
    phone: document.querySelector('button[data-item-id^="phone"]')?.textContent?.trim() || null,
    site: document.querySelector('a[data-item-id="authority"]')?.href || null,
    cat: document.querySelector('button[jsaction*="category"]')?.textContent?.trim() || null,
    links: [...document.querySelectorAll('a')].map(a => a.href).filter(h => /instagram|facebook|wa\.me|whatsapp/i.test(h)).slice(0, 6),
  }
})

// horario: expandir la fila
await page.evaluate(() => {
  const cand = [...document.querySelectorAll('[aria-label]')].filter((e) => /hours|horario/i.test(e.getAttribute('aria-label') || ''))
  cand[0]?.click?.()
})
await page.waitForTimeout(1200)
data.hours = await page.evaluate(() =>
  [...document.querySelectorAll('tr')].map(tr => tr.textContent.trim().replace(/\s+/g, ' '))
    .filter(t => /AM|PM|a\.m|p\.m|\d{1,2}:\d{2}/i.test(t) && !/CLP|\$/.test(t)).slice(0, 10))

// --- reseñas ---
const tabR = page.locator('button[role="tab"]', { hasText: /reseñas|reviews/i }).first()
if (await tabR.count()) { await tabR.click().catch(() => {}); await page.waitForTimeout(3500) }
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
    const fecha = el.querySelector('.rsqaWe')?.textContent?.trim() || ''
    const key = nombre + '|' + texto
    if (nombre && !seen.has(key)) { seen.add(key); out.push({ nombre, stars, fecha, texto: texto.slice(0, 280) }) }
  }
  return out.slice(0, 12)
})

// --- fotos: pestaña Fotos + scroll profundo ---
const tabF = page.locator('button[role="tab"]', { hasText: /fotos|photos/i }).first()
if (await tabF.count()) { await tabF.click().catch(() => {}); await page.waitForTimeout(3500) }
else {
  const heroBtn = page.locator('button[jsaction*="photo"], button[aria-label*="oto"], .aoRNLd img').first()
  if (await heroBtn.count()) { await heroBtn.click().catch(() => {}); await page.waitForTimeout(3500) }
}
for (const label of ['Todas', 'All']) {
  const t = page.locator(`button:has-text("${label}")`).first()
  if (await t.count()) { await t.click().catch(() => {}); await page.waitForTimeout(2000); break }
}
for (let i = 0; i < 30; i++) {
  await page.evaluate(() => {
    document.querySelectorAll('div').forEach((d) => { if (d.scrollHeight > d.clientHeight + 50 && d.clientHeight > 200) d.scrollTop += 1400 })
  })
  await page.waitForTimeout(420)
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
console.log(JSON.stringify({ ...data, fotos: data.fotos.length }, null, 2))
await page.close()
process.exit(0)
