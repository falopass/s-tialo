// Abre una página pública de Facebook en el navegador CDP y vuelca
// og:image, imágenes visibles y texto del perfil.
// Uso: CDP_PORT=9223 node scripts/probe-fb.mjs <url-facebook> [out.png]
import { writeFileSync } from 'fs'
const PORT = process.env.CDP_PORT || '9223'
const BASE = `http://127.0.0.1:${PORT}`
const url = process.argv[2]
const shot = process.argv[3] || 'C:/Users/lenov/AppData/Local/hermes/cache/sitiazo/r5/fb.png'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const wsUrl = (await (await fetch(`${BASE}/json/new?about:blank`, { method: 'PUT' })).json()).webSocketDebuggerUrl
const ws = new WebSocket(wsUrl)
await new Promise((r) => (ws.onopen = r))
let id = 0; const waiters = new Map()
ws.onmessage = (ev) => { let m; try { m = JSON.parse(ev.data) } catch { return } if (m.id && waiters.has(m.id)) { waiters.get(m.id)(m); waiters.delete(m.id) } }
const send = (method, params = {}) => new Promise((res, rej) => { const mid = ++id; ws.send(JSON.stringify({ id: mid, method, params })); waiters.set(mid, (m) => (m.error ? rej(new Error(m.error.message)) : res(m.result))) })
const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result?.value

await send('Page.enable')
await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false })
await send('Page.navigate', { url })
await sleep(8000)

console.log('URL:', await ev('location.href'))
console.log('TITLE:', await ev('document.title'))
console.log('OG:', JSON.stringify(await ev(`(() => {
  const o = {}
  for (const m of document.querySelectorAll('meta[property^="og:"],meta[name^="og:"]')) o[m.getAttribute('property')||m.getAttribute('name')] = m.content
  return o
})()`), null, 1))

const s = await send('Page.captureScreenshot', { format: 'png' })
writeFileSync(shot, Buffer.from(s.data, 'base64'))

console.log('IMGS:', JSON.stringify((await ev(`(() => {
  const src = new Set()
  for (const img of document.querySelectorAll('img')) {
    if (img.src && img.naturalWidth > 100) src.add(img.src)
    const ss = img.getAttribute('srcset')
    if (ss) src.add(ss.split(',').pop().trim().split(' ')[0])
  }
  for (const el of document.querySelectorAll('div,image')) {
    const bg = getComputedStyle(el).backgroundImage
    const m = bg && bg.match(/url\\(["']?(https:[^"')]+)/)
    if (m) src.add(m[1])
  }
  return [...src]
})()`) || []).slice(0, 30), null, 1))
ws.close()
process.exit(0)
