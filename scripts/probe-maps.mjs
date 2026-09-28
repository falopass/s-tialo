// Diagnóstico CDP: abre ficha de Maps, saca screenshot y lista botones de fotos.
// Uso: CDP_PORT=9223 node scripts/probe-maps.mjs "<query>"
import { writeFileSync } from 'fs'
const PORT = process.env.CDP_PORT || '9223'
const BASE = `http://127.0.0.1:${PORT}`
const query = process.argv[2]
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const wsUrl = (await (await fetch(`${BASE}/json/new?about:blank`, { method: 'PUT' })).json()).webSocketDebuggerUrl
const ws = new WebSocket(wsUrl)
await new Promise((r) => (ws.onopen = r))
let id = 0; const waiters = new Map()
ws.onmessage = (ev) => { let m; try { m = JSON.parse(ev.data) } catch { return } if (m.id && waiters.has(m.id)) { waiters.get(m.id)(m); waiters.delete(m.id) } }
const send = (method, params = {}) => new Promise((res, rej) => { const mid = ++id; ws.send(JSON.stringify({ id: mid, method, params })); waiters.set(mid, (m) => (m.error ? rej(new Error(m.error.message)) : res(m.result))) })
const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result?.value

await send('Page.enable')
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })
await send('Page.navigate', { url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` })
await sleep(6000)
await ev(`(() => { const b=[...document.querySelectorAll('button,div[role=button]')].find(e=>/aceptar todo|accept all|rechazar todo/i.test(e.innerText||'')); if(b) b.click(); return 1 })()`)
await sleep(2500)

const shot = await send('Page.captureScreenshot', { format: 'png' })
writeFileSync('C:/Users/lenov/AppData/Local/hermes/cache/sitiazo/r5/probe1.png', Buffer.from(shot.data, 'base64'))

console.log(await ev(`(() => {
  const btns = [...document.querySelectorAll('button,div[role=button],a')].map(e => (e.getAttribute('aria-label')||e.innerText||'').trim().slice(0,60)).filter(t=>/foto|photo|galer/i.test(t))
  const imgs = [...document.querySelectorAll('img')].filter(i=>i.src.includes('googleusercontent')).map(i=>i.src.slice(0,120))
  return JSON.stringify({btns: btns.slice(0,20), nImgs: imgs.length, imgs: imgs.slice(0,8)}, null, 1)
})()`))

// click en "Ver fotos" y re-medir
console.log('CLICK:', await ev(`(() => {
  const b = [...document.querySelectorAll('button,div[role=button],a')].find(e => /ver fotos|see photos/i.test(e.innerText||e.getAttribute('aria-label')||''))
  if (b) { b.click(); return 'ok:' + (b.innerText||'').slice(0,40) }
  return 'nada'
})()`))
await sleep(5000)

const shot2 = await send('Page.captureScreenshot', { format: 'png' })
writeFileSync('C:/Users/lenov/AppData/Local/hermes/cache/sitiazo/r5/probe2.png', Buffer.from(shot2.data, 'base64'))

const COLLECT = `(() => {
  const urls = new Set()
  for (const el of document.querySelectorAll('*')) {
    const bg = getComputedStyle(el).backgroundImage
    const m = bg && bg.match(/url\\(["']?(https:\\/\\/lh\\d\\.googleusercontent\\.com\\/[^"')]+)/)
    if (m) urls.add(m[1])
  }
  for (const img of document.querySelectorAll('img')) {
    const s = img.src || ''
    if (s.includes('googleusercontent.com') && !/w3[26]-h3[26]|w4[0-9]-h4[0-9]/.test(s)) urls.add(s)
  }
  return [...urls]
})()`
for (let i = 0; i < 8; i++) {
  await ev(`(() => { for (const el of [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300)) el.scrollTop = el.scrollHeight; return 1 })()`)
  await sleep(700)
}
const all = await ev(COLLECT)
writeFileSync(process.argv[3] || 'C:/Users/lenov/AppData/Local/hermes/cache/sitiazo/r5/maps-urls.json', JSON.stringify(all, null, 1))
console.log('URLS:', all.length)
ws.close()
process.exit(0)
