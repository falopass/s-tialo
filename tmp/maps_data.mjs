// Extrae datos + URLs de fotos de una ficha de Google Maps.
// Uso: node maps_data.mjs "<query>" <prefijo_salida>
import { chromium } from 'playwright'
import fs from 'fs'

const q = process.argv[2]
const out = process.argv[3] || '/tmp/maps_out'
const url = `https://www.google.com/maps/search/${encodeURIComponent(q)}?hl=es`

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(7000)

for (const label of ['Accept all', 'Aceptar todo', 'Aceptar', 'Accept']) {
  const b = page.locator(`button:has-text("${label}")`).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(4000); break }
}

const first = page.locator('a[href*="/maps/place/"]').first()
if (await first.count()) {
  await first.click().catch(() => {})
  await page.waitForTimeout(5000)
}

// datos del panel
const data = await page.evaluate(() => {
  const txt = (sel) => document.querySelector(sel)?.textContent?.trim() || null
  const h1 = txt('h1')
  const bodyText = document.body.innerText
  const rating = bodyText.match(/(\d[.,]\d)\s*\(/)?.[1] || bodyText.match(/(\d[.,]\d)\s*⭐/)?.[1] || null
  const reviews = bodyText.match(/\((\d[\d.,]*)\)/)?.[1] || null
  const addr = document.querySelector('button[data-item-id="address"]')?.textContent?.trim() || null
  const phone = document.querySelector('button[data-item-id^="phone"]')?.textContent?.trim() || null
  const site = document.querySelector('a[data-item-id="authority"]')?.href || null
  const hoursBtn = document.querySelector('[aria-label*="our"], [aria-label*="Hora"]')?.getAttribute('aria-label') || null
  const cat = document.querySelector('button[jsaction*="category"]')?.textContent?.trim() || null
  return { h1, rating, reviews, addr, phone, site, hoursBtn, cat }
})
console.log(JSON.stringify(data, null, 2))

// abrir galería de fotos
const gallery = page.locator('button[aria-label*="oto"], button[aria-label*="hoto"]').first()
if (await gallery.count()) {
  await gallery.click().catch(() => {})
  await page.waitForTimeout(4000)
  // scroll dentro del panel de fotos
  for (let i = 0; i < 14; i++) {
    await page.mouse.wheel(0, 1400)
    await page.waitForTimeout(500)
  }
}

const urls = await page.evaluate(() => {
  const out = new Set()
  const add = (s) => {
    if (!s) return
    if (!/lh\d?\.(googleusercontent|ggpht)\.com/.test(s)) return
    if (s.includes('default-user') || s.includes('ogw/')) return
    out.add(s.replace(/=.*$/, ''))
  }
  document.querySelectorAll('img').forEach((img) => add(img.src))
  document.querySelectorAll('[style]').forEach((el) => {
    const m = (el.getAttribute('style') || '').match(/url\(["']?(https:\/\/lh[^"')]+)["']?\)/)
    if (m) add(m[1])
  })
  for (const m of document.documentElement.innerHTML.matchAll(/https:\/\/lh\d\.googleusercontent\.com\/(p\/|gps-cs-s\/)?[A-Za-z0-9_\-=]{20,}/g)) {
    add(m[0])
  }
  return [...out]
})

fs.writeFileSync(`${out}.json`, JSON.stringify({ data, urls }, null, 2))
console.log('PHOTOS unique:', urls.length)
urls.forEach((u) => console.log(u))
process.exit(0)
