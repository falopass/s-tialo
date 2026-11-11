// Verificación de web propia. Un GET con timeout de 10 s.
// Web propia viva = HTTP 2xx y el host no es instagram, facebook, fb,
// linktr.ee, wa.me, google, goo.gl, maps ni whatsapp.
// Cualquier otra cosa = 'sin_web'; request fallido = 'no_verificable'.

const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36'

const HOSTS_NO_PROPIOS = [
  'instagram.com',
  'facebook.com',
  'fb.com',
  'fb.me',
  'linktr.ee',
  'wa.me',
  'whatsapp.com',
  'google.com',
  'google.cl',
  'goo.gl',
]

export function conEsquema(url) {
  const u = url.trim()
  return /^https?:\/\//i.test(u) ? u : `https://${u}`
}

export function hostDe(url) {
  try {
    return new URL(conEsquema(url.trim())).hostname.toLowerCase()
  } catch {
    return null
  }
}

// true si la URL apunta a un dominio propio (no red social ni agregador)
export function esHostPropio(url) {
  if (!url || !url.trim()) return false
  const h = hostDe(url)
  if (!h) return false
  return !HOSTS_NO_PROPIOS.some((d) => h === d || h.endsWith('.' + d))
}

function esIpv4Privada(a, b) {
  return (
    a === 0 || a === 10 || a === 127 || (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) || (a === 169 && b === 254)
  )
}

function esIpv6Privada(h6) {
  const h = h6.toLowerCase()
  if (h === '::' || h === '::1') return true
  // IPv4 embebido ::ffff:a.b.c.d llega normalizado como ::ffff:HHHH:HHHH
  const m = h.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/)
  if (m) {
    const n = (parseInt(m[1], 16) << 16) + parseInt(m[2], 16)
    return esIpv4Privada((n >>> 24) & 255, (n >>> 16) & 255)
  }
  const primero = parseInt(h.split(':')[0] || '0', 16)
  // ULA fc00::/7 y enlace local fe80::/10
  return (primero & 0xfe00) === 0xfc00 || (primero & 0xffc0) === 0xfe80
}

// true si el host es localhost o una IP privada (el --red no consulta internos)
export function esHostPrivado(url) {
  const h = hostDe(url)
  if (!h) return false
  if (h === 'localhost' || h.endsWith('.local') || h.endsWith('.internal')) return true
  if (h.startsWith('[')) return esIpv6Privada(h.slice(1, -1))
  const m = h.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/)
  return m ? esIpv4Privada(Number(m[1]), Number(m[2])) : false
}

const REDIRECTS = new Set([301, 302, 303, 307, 308])

// GET con redirects seguidos a mano (máx. `saltos`): antes de cada request
// revisa que el host no sea privado. Devuelve { res, url } o { error }.
export async function getPublico(url, { headers = {}, saltos = 5 } = {}) {
  let actual = url
  for (let i = 0; i <= saltos; i++) {
    if (esHostPrivado(actual)) return { error: 'privado' }
    let res
    try {
      res = await fetch(actual, {
        redirect: 'manual',
        signal: AbortSignal.timeout(10_000),
        headers: { 'user-agent': UA, ...headers },
      })
    } catch {
      return { error: 'red' }
    }
    if (!REDIRECTS.has(res.status)) return { res, url: actual }
    const loc = res.headers.get('location')
    res.body?.cancel().catch(() => {})
    if (!loc) return { res, url: actual }
    try {
      const u = new URL(loc, actual)
      if (u.protocol !== 'http:' && u.protocol !== 'https:') return { error: 'esquema' }
      actual = u.href
    } catch {
      return { error: 'red' }
    }
  }
  return { error: 'saltos' }
}

export async function verificarWeb(url) {
  if (!esHostPropio(url || '')) return { estado: 'sin_web' }
  const r = await getPublico(conEsquema(url))
  if (r.error) return { estado: 'no_verificable' }
  // si el redirect aterriza en un host no propio, no cuenta como web propia
  if (r.res.ok && esHostPropio(r.url)) return { estado: 'viva', url_final: r.url }
  return { estado: 'sin_web' }
}
