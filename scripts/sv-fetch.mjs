// Baja el streetview grande de un panoid via fetch con credenciales del navegador.
import { chromium } from 'playwright'
import { writeFileSync } from 'fs'
const [panoid, yaw, out] = [process.argv[2], process.argv[3] || '0', process.argv[4]]
const browser = await chromium.connectOverCDP('http://localhost:29229')
const page = await browser.contexts()[0].newPage()
await page.goto('https://www.google.com/maps', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(4000)
const b64 = await page.evaluate(async ([p, y]) => {
  const u = `https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=${p}&cb_client=search.gws-prod.grass&w=1400&h=900&yaw=${y}&pitch=0&thumbfov=100`
  const r = await fetch(u, { credentials: 'include' })
  if (!r.ok) return 'ERR:' + r.status
  const b = await r.arrayBuffer()
  let s = ''
  for (const c of new Uint8Array(b)) s += String.fromCharCode(c)
  return btoa(s)
}, [panoid, yaw])
if (b64.startsWith('ERR:')) { console.log(b64); process.exit(1) }
writeFileSync(out, Buffer.from(b64, 'base64'))
console.log('saved', out)
await page.close()
process.exit(0)
