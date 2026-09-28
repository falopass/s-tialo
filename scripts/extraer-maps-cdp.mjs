// Extrae datos de ficha + URLs de fotos (lh*.googleusercontent.com) de Google Maps
// usando un navegador con CDP ya abierto (Brave/Chrome/Edge con --remote-debugging-port).
// Uso: CDP_PORT=9223 node scripts/extraer-maps-cdp.mjs "<query de Maps>"
const PORT = process.env.CDP_PORT || '9223'
const BASE = `http://127.0.0.1:${PORT}`
const query = process.argv[2]
if (!query) { console.error('falta query'); process.exit(1) }

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function connect(wsUrl) {
  const ws = new WebSocket(wsUrl)
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = () => rej(new Error('ws fail')) })
  let id = 0
  const waiters = new Map()
  ws.onmessage = (ev) => {
    let m; try { m = JSON.parse(ev.data) } catch { return }
    if (m.id && waiters.has(m.id)) { const w = waiters.get(m.id); waiters.delete(m.id); w(m) }
  }
  return {
    send(method, params = {}) {
      const mid = ++id
      ws.send(JSON.stringify({ id: mid, method, params }))
      return new Promise((res, rej) => {
        waiters.set(mid, (m) => (m.error ? rej(new Error(m.error.message)) : res(m.result)))
        setTimeout(() => { if (waiters.has(mid)) { waiters.delete(mid); rej(new Error(`timeout ${method}`)) } }, 90000)
      })
    },
    eval: (expr) => undefined,
    close() { try { ws.close() } catch {} },
  }
}

const wsUrl = (await (await fetch(`${BASE}/json/new?about:blank`, { method: 'PUT' })).json()).webSocketDebuggerUrl
const cdp = await connect(wsUrl)
await cdp.send('Page.enable')
await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })

const ev = async (expr) => {
  const r = await cdp.send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true })
  return r.result?.value ?? r.value ?? r
}

await cdp.send('Page.navigate', { url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` })
await sleep(6000)
try {
  await ev(`(() => { const b=[...document.querySelectorAll('button,div[role=button]')].find(e=>/aceptar todo|accept all|rechazar todo/i.test(e.innerText||'')); if(b){b.click();return 1} return 0 })()`)
  await sleep(2500)
} catch {}

const FICHA = `(() => {
  const g = (s) => { const e = document.querySelector(s); return e ? (e.getAttribute('aria-label') || e.innerText || '') : null }
  const name = (document.querySelector('h1') || {}).innerText || ''
  const links = [...document.querySelectorAll('a[href]')].map(x => x.href)
    .filter(h => /instagram\\.com|facebook\\.com|tiktok\\.com|wa\\.me|api\\.whatsapp|agendapro/i.test(h))
  const rating = g('div.F7nice') || g('span.ceNzKf') || ''
  return {
    url: location.href, name,
    tel: g('button[data-item-id^="phone:tel:"]'),
    dir: g('button[data-item-id="address"]'),
    web: document.querySelector('a[data-item-id="authority"]')?.href || null,
    rating, cat: g('button[jsaction*="category"]'),
    horario: g('[aria-label*="hora"], button[jsaction*="hours"]') || '',
    redes: [...new Set(links)],
  }
})()`

console.log('FICHA:', await ev(FICHA))

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
})`

const collect = async () => {
  const v = await ev(COLLECT)
  return Array.isArray(v) ? v : []
}
let urls = await collect()

// abrir la grilla de fotos
await ev(`(() => {
  const b = [...document.querySelectorAll('button,div[role=button],a')]
    .find(e => /ver fotos|see photos|todas las fotos/i.test(e.innerText||e.getAttribute('aria-label')||''))
  if (b) { b.click(); return 1 } return 0
})()`)
await sleep(3500)

let prev = -1
for (let i = 0; i < 30 && urls.length !== prev; i++) {
  prev = urls.length
  await ev(`(() => { for (const el of [...document.querySelectorAll('div')].filter(d => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300)) el.scrollTop = el.scrollHeight; return 1 })()`)
  await sleep(800)
  urls = [...new Set([...urls, ...(await collect())])]
}

// volver a la ficha por si la grilla tapó los datos
console.log('FOTOS:', JSON.stringify(urls, null, 1))
cdp.close()
process.exit(0)
