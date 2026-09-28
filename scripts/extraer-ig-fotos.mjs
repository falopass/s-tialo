// Recolecta fotos de un perfil público de Instagram por CDP:
// foto de perfil + og:image de los primeros N posts (resolución completa)
// con su caption (og:description) para elegir semántica.
// Uso: CDP_PORT=9223 node scripts/extraer-ig-fotos.mjs <handle> [maxPosts]
const PORT = process.env.CDP_PORT || '9223'
const BASE = `http://127.0.0.1:${PORT}`
const handle = process.argv[2]
const MAX = Number(process.argv[3] || 12)
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
await send('Page.navigate', { url: `https://www.instagram.com/${handle}/` })
await sleep(8000)

const perfil = await ev(`JSON.stringify({
  title: document.title,
  desc: document.querySelector('meta[property="og:description"]')?.content || '',
  pic: document.querySelector('meta[property="og:image"]')?.content || '',
  posts: [...new Set([...document.querySelectorAll('a')].map(a => a.getAttribute('href') || '').filter(h => /^\\/${handle.replace(/\./g, '\\.')}\\/(p|reel)\\//.test(h)))],
  grid: [...new Set([...document.querySelectorAll('img')].map(i => i.src).filter(s => /cdninstagram/.test(s)))].slice(0, 30)
})`)
const p = JSON.parse(perfil || '{}')
console.log('PERFIL:', JSON.stringify({ title: p.title, desc: p.desc, pic: p.pic, nPosts: p.posts?.length }, null, 1))

const out = []
if (p.pic) out.push({ url: p.pic, caption: 'foto de perfil' })
for (const link of (p.posts || []).slice(0, MAX)) {
  await send('Page.navigate', { url: `https://www.instagram.com${link}` })
  await sleep(4500)
  const post = await ev(`JSON.stringify({
    img: document.querySelector('meta[property="og:image"]')?.content || '',
    desc: (document.querySelector('meta[property="og:description"]')?.content || '').slice(0, 200)
  })`)
  const j = JSON.parse(post || '{}')
  if (j.img) out.push({ url: j.img, caption: j.desc })
}
console.log('FOTOS:', JSON.stringify(out, null, 1))
ws.close()
process.exit(0)
