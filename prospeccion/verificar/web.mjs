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
  return /^https?:\/\//i.test(url) ? url : `https://${url}`
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

export async function verificarWeb(url) {
  if (!esHostPropio(url || '')) return { estado: 'sin_web' }
  try {
    const res = await fetch(conEsquema(url), {
      redirect: 'follow',
      signal: AbortSignal.timeout(10_000),
      headers: { 'user-agent': UA },
    })
    // si el redirect aterriza en un host no propio, no cuenta como web propia
    if (res.ok && esHostPropio(res.url || url)) return { estado: 'viva', url_final: res.url }
    return { estado: 'sin_web' }
  } catch {
    return { estado: 'no_verificable' }
  }
}
