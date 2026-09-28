// Abre cada foto de una página pública de FB en el visor y captura la URL grande.
// Uso: node fb-photo-viewer.mjs <url_pagina> <salida.txt>
import { chromium } from 'playwright'
import fs from 'fs'

const pageUrl = process.argv[2]
const out = process.argv[3] || '/tmp/fbfull.txt'

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0] || (await browser.newContext())
const page = await ctx.newPage()

await page.goto(pageUrl, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(7000)
console.log('TITLE:', await page.title())

// cerrar modal de login si aparece
for (const sel of ['[aria-label="Cerrar"]', '[aria-label="Close"]']) {
  const b = page.locator(sel).first()
  if (await b.count()) { await b.click().catch(() => {}); await page.waitForTimeout(1500) }
}

// pestaña Fotos
for (const label of ['Fotos', 'Photos']) {
  const t = page.locator(`a:has-text("${label}")`).first()
  if (await t.count()) { await t.click().catch(() => {}); await page.waitForTimeout(5000); break }
}

for (let i = 0; i < 12; i++) { await page.mouse.wheel(0, 1500); await page.waitForTimeout(600) }

// links a fotos individuales
const links = await page.evaluate(() => {
  const set = new Set()
  document.querySelectorAll('a[href]').forEach((a) => {
    const h = a.href
    if (/\/photo|fbid=|\/posts\//.test(h)) set.add(h.split('?')[0] + (h.includes('fbid') ? '?' + (h.match(/fbid=[^&]+/) || [''])[0] : ''))
  })
  return [...set].slice(0, 14)
})
console.log('LINKS:', links.length)
links.forEach((l) => console.log(' ', l.slice(0, 140)))

const results = []
for (const l of links) {
  try {
    await page.goto(l, { waitUntil: 'domcontentloaded', timeout: 45000 })
    await page.waitForTimeout(4500)
    const best = await page.evaluate(() => {
      let best = null, bestArea = 0
      document.querySelectorAll('img').forEach((img) => {
        const s = img.src || ''
        if (!/fbcdn\.net/.test(s)) return
        if (/emoji|sprite|static\.xx|s16x16|s32x32|s40x40|s60x60|s96x96|p64x64|fb50/i.test(s)) return
        const r = img.getBoundingClientRect()
        const area = r.width * r.height
        if (area > bestArea) { bestArea = area; best = s }
      })
      return { best, area: bestArea }
    })
    if (best.best) { results.push(best.best); console.log('IMG', Math.round(best.area), best.best.slice(0, 130)) }
  } catch (e) {
    console.log('ERR', l.slice(0, 80), String(e).slice(0, 80))
  }
}

fs.writeFileSync(out, [...new Set(results)].join('\n'))
console.log('TOTAL:', new Set(results).size)
await page.close()
