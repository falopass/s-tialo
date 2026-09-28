// Extrae URLs de fotos de una ficha de Google Maps abriendo el visor de fotos.
// Uso: CDP_PORT=29229 node scripts/extraer-fotos-maps2.mjs "<query>"
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

const COLLECT = `(() => {
  const urls = new Set()
  const add = (u) => {
    if (!u) return
    if (!u.includes('googleusercontent.com') && !u.includes('streetviewpixels')) return
    if (/=w\\d+-h\\d+/.test(u)) {
      const m = u.match(/=w(\\d+)-h(\\d+)/)
      if (m && (+m[1] < 200 || +m[2] < 200)) return
    }
    if (/=s\\d+/.test(u)) { const m = u.match(/=s(\\d+)/); if (m && +m[1] < 200) return }
    urls.add(u)
  }
  for (const el of document.querySelectorAll('*')) {
    const bg = getComputedStyle(el).backgroundImage
    const mm = bg && bg.match(/url\\(["']?(https:[^"')]+)/)
    if (mm) add(mm[1])
  }
  for (const img of document.querySelectorAll('img')) add(img.src)
  return [...urls]
})`

const collect = async () => {
  const v = await ev(COLLECT)
  return Array.isArray(v) ? v : []
}
let urls = await collect()

// click en la foto de portada (abre la galería)
await ev(`(() => {
  const b = document.querySelector('button[aria-label^="Photo of"], button[aria-label^="Foto de"]')
  if (b) { b.click(); return 1 }
  const img = document.querySelector('img[src*="googleusercontent"]')
  if (img && img.closest('button,div[role=button]')) { img.closest('button,div[role=button]').click(); return 2 }
  return 0
})()`)
await sleep(3500)
urls = [...new Set([...urls, ...(await collect())])]

// scroll de la grilla / filmstrip para cargar thumbs
let prev = -1
for (let i = 0; i < 25 && urls.length !== prev; i++) {
  prev = urls.length
  await ev(`(() => {
    for (const el of [...document.querySelectorAll('div')] ) {
      if (el.scrollHeight > el.clientHeight + 150 && el.clientHeight > 150) el.scrollTop = el.scrollHeight
    }
    return 1
  })()`)
  await sleep(900)
  urls = [...new Set([...urls, ...(await collect())])]
}

console.log('FOTOS:', JSON.stringify(urls, null, 1))
cdp.close()
process.exit(0)
