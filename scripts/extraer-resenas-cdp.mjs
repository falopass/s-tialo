// Extrae horario + reseñas reales de una ficha de Maps por CDP.
// Uso: CDP_PORT=9223 node scripts/extraer-resenas-cdp.mjs "<query>"
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

// horario: abrir el desplegable y leer la tabla
await ev(`(() => {
  const b = [...document.querySelectorAll('button,div[role=button],div[aria-label]')].find(e => /horario de atenci/i.test(e.getAttribute('aria-label')||'') || /horario/i.test(e.innerText||''))
  if (b) b.click(); return 1
})()`)
await sleep(1200)
console.log('HORARIO:', JSON.stringify(await ev(`(() => {
  const rows = [...document.querySelectorAll('table tr, [role="row"]')].map(r => r.innerText.replace(/\\n/g, ' | ').trim())
  if (rows.length) return rows.slice(0, 10)
  const el = [...document.querySelectorAll('div')].find(d => /lunes/i.test(d.innerText||'') && d.innerText.length < 800)
  return el ? el.innerText.split('\\n').slice(0, 10) : []
})()`)))

// reseñas
await ev(`(() => {
  const t = [...document.querySelectorAll('button[role="tab"],div[role="tab"]')].find(e => /reseñas|reviews/i.test(e.innerText||e.getAttribute('aria-label')||''))
  if (t) t.click(); return 1
})()`)
await sleep(3500)
for (let i = 0; i < 26; i++) {
  await ev(`(() => { for (const el of [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300)) el.scrollTop = el.scrollHeight; return 1 })()`)
  await sleep(700)
}
await ev(`(() => { for (const b of document.querySelectorAll('button')) if (/^más$|^more$/i.test(b.innerText.trim())) b.click(); return 1 })()`)
await sleep(800)

console.log('RESENAS:', JSON.stringify(await ev(`(() => {
  const out = []
  for (const el of document.querySelectorAll('[data-review-id], div.jftiEf')) {
    const nombre = el.querySelector('.d4r55')?.innerText?.trim() || el.getAttribute('aria-label') || ''
    const stars = el.querySelector('[role="img"][aria-label*="estrella"]')?.getAttribute('aria-label') || ''
    const texto = el.querySelector('.wiI7pd')?.innerText?.trim() || ''
    if (texto) out.push({ nombre, stars, texto: texto.slice(0, 420) })
  }
  return out.slice(0, 10)
})()`), null, 1))
ws.close()
process.exit(0)
