// Prueba handles candidatos en IG/FB vía CDP y reporta título/og.
// Uso: CDP_PORT=9222 node scripts/probe-perfiles.mjs ig handle1 handle2 ...
//      CDP_PORT=9222 node scripts/probe-perfiles.mjs fb "query con espacios"
const PORT = process.env.CDP_PORT || '9222'
const BASE = `http://127.0.0.1:${PORT}`
const mode = process.argv[2]
const items = process.argv.slice(3)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const wsUrl = (await (await fetch(`${BASE}/json/new?about:blank`, { method: 'PUT' })).json()).webSocketDebuggerUrl
const ws = new WebSocket(wsUrl)
await new Promise((r) => (ws.onopen = r))
let id = 0
const waiters = new Map()
ws.onmessage = (ev) => { let m; try { m = JSON.parse(ev.data) } catch { return } if (m.id && waiters.has(m.id)) { waiters.get(m.id)(m); waiters.delete(m.id) } }
const send = (method, params = {}) => new Promise((res, rej) => { const mid = ++id; ws.send(JSON.stringify({ id: mid, method, params })); waiters.set(mid, (m) => (m.error ? rej(new Error(m.error.message)) : res(m.result))) })
const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result?.value

await send('Page.enable')

for (const it of items) {
  const url = mode === 'ig'
    ? `https://www.instagram.com/${it}/`
    : `https://www.facebook.com/search/pages/?q=${encodeURIComponent(it)}`
  await send('Page.navigate', { url })
  await sleep(6000)
  const info = await ev(`JSON.stringify({
    url: location.href,
    title: document.title,
    desc: (document.querySelector('meta[property="og:description"]')?.content || '').slice(0, 300),
    pic: (document.querySelector('meta[property="og:image"]')?.content || '').slice(0, 300),
    bodyHint: (document.body?.innerText || '').replace(/\\s+/g, ' ').slice(0, 400)
  })`)
  console.log(`### ${it}\n${info}\n`)
}
ws.close()
process.exit(0)
