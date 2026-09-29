// Extrae IDs de fotos (AF1Qip*) del JSON embebido de la ficha de Maps y arma
// URLs lh3 a tamaño grande. Uso: node scripts/fotos-json.mjs "<url ficha>" <out.txt>
import { chromium } from 'playwright'
import { writeFileSync } from 'fs'

const url = process.argv[2]
const outFile = process.argv[3]

const browser = await chromium.connectOverCDP('http://localhost:29229')
const ctx = browser.contexts()[0]
const page = await ctx.newPage()
await page.goto(url, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(6000)

const html = await page.content()
// IDs de fotos de Maps: AF1Qip... / ACIJ... / ACvpl... en el JSON embebido
const ids = new Set()
for (const m of html.matchAll(/(AF1Qip[\w-]{20,})/g)) ids.add(m[1])
for (const m of html.matchAll(/(ACIJ[\w-]{20,})/g)) ids.add(m[1])
for (const m of html.matchAll(/(ACvpl[\w-]{20,})/g)) ids.add(m[1])

// también URLs lh3 literales presentes en el HTML
const direct = new Set()
for (const m of html.matchAll(/https:\/\/lh\d\.googleusercontent\.com\/[\w./=-]+/g)) {
  const u = m[0].replace(/\\u003d/g, '=')
  if (!u.includes('=w32') && !u.includes('=h32')) direct.add(u)
}

const urls = [...ids].map((id) => `https://lh3.googleusercontent.com/p/${id}=w1200-h900-k-no`)
for (const d of direct) urls.push(d)

console.log('ids:', ids.size, 'direct:', direct.size)
if (outFile) writeFileSync(outFile, urls.map((u) => `"${u}"`).join('\n') + '\n')
else urls.forEach((u) => console.log(u))
await page.close()
process.exit(0)
