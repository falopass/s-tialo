// Recorre una página pública de Facebook (feed + /photos) en el navegador CDP
// y vuelca URLs de imágenes scontent (posts, perfil, portada).
// Uso: CDP_PORT=9223 node scripts/extraer-fb-fotos.mjs <url-pagina-fb>
const PORT = process.env.CDP_PORT || '9223'
const BASE = `http://127.0.0.1:${PORT}`
const url = process.argv[2]
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

const COLLECT = `(() => {
  const src = new Map()
  const add = (u) => {
    if (!u || !u.startsWith('http') || !u.includes('fbcdn.net')) return
    // id de foto = segundo segmento numérico del path
    const m = u.match(/\\/(\\d{9,})_/) || u.match(/t\\d\\d\\.\\d+-\\d+\\/(\\d+)/)
    const key = m ? m[1] : u.split('?')[0]
    // guarda la variante más ancha vista
    const w = parseInt((u.match(/ctp=s(\\d+)x/) || u.match(/s(\\d+)x\\d+/) || [0,0])[1])
    if (!src.has(key) || w > src.get(key).w) src.set(key, { w, u })
  }
  for (const img of document.querySelectorAll('img')) {
    add(img.src)
    const ss = img.getAttribute('srcset')
    if (ss) for (const part of ss.split(',')) add(part.trim().split(' ')[0])
  }
  for (const el of document.querySelectorAll('div,a,i')) {
    const bg = getComputedStyle(el).backgroundImage
    const m = bg && bg.match(/url\\(["']?(https:[^"')]+)/)
    if (m) add(m[1])
  }
  return [...src.values()].map(v => v.u)
})()`

const found = new Map()
const addAll = (list) => {
  for (const u of list || []) {
    const m = u.match(/\/(\d{9,})_/) || u.match(/t\d\d\.\d+-\d+\/(\d+)/)
    const key = m ? m[1] : u.split('?')[0]
    const w = parseInt((u.match(/ctp=s(\d+)x/) || u.match(/s(\d+)x\d+/) || [0, 0])[1])
    if (!found.has(key) || w > found.get(key).w) found.set(key, { w, u })
  }
}

// 1) portada + perfil + primeras imágenes del feed
await send('Page.navigate', { url })
await sleep(8000)
console.log('OG:', JSON.stringify(await ev(`(() => {
  const o = {}
  for (const m of document.querySelectorAll('meta[property^="og:"],meta[name^="og:"]')) o[m.getAttribute('property')||m.getAttribute('name')] = m.content
  return o
})()`)))
addAll(await ev(COLLECT))

// scroll del feed
let prev = 0
for (let i = 0; i < 22 && found.size !== prev; i++) {
  prev = found.size
  await ev('window.scrollTo(0, document.body.scrollHeight)')
  await sleep(1400)
  addAll(await ev(COLLECT))
}

// 2) pestaña fotos
try {
  await send('Page.navigate', { url: url.replace(/\/?$/, '') + '/photos' })
  await sleep(6000)
  addAll(await ev(COLLECT))
  prev = 0
  for (let i = 0; i < 16 && found.size !== prev; i++) {
    prev = found.size
    await ev('window.scrollTo(0, document.body.scrollHeight)')
    await sleep(1200)
    addAll(await ev(COLLECT))
  }
} catch {}

console.log('FOTOS:', JSON.stringify([...found.values()].sort((a, b) => b.w - a.w).map((v) => v.u), null, 1))
ws.close()
process.exit(0)
