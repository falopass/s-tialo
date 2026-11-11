// Instagram: un GET al HTML público del perfil.
// Si aparece una fecha de publicación se guarda como último post.
// Si pide login o bloquea -> 'no_verificable', NUNCA 'inactivo'.

const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36'

const DIAS_ACTIVO = 60
const MS_DIA = 86_400_000

export function normalizaUrlIg(v) {
  const u = v.trim()
  if (/^https?:\/\//i.test(u)) return u
  const user = u.replace(/^@/, '').replace(/\/+$/, '')
  return `https://www.instagram.com/${user}/`
}

// 'activo' si la fecha está dentro de 60 días respecto a `ahora`
export function clasificarFecha(fechaISO, ahora = Date.now()) {
  const t = new Date(fechaISO).getTime()
  if (!Number.isFinite(t)) return 'no_verificable'
  return ahora - t <= DIAS_ACTIVO * MS_DIA ? 'activo' : 'inactivo'
}

// Busca la fecha de publicación más reciente en el HTML público.
// Devuelve 'YYYY-MM-DD' o null si no hay fecha (bloqueo, HTML vacío, etc.).
export function extraerUltimaFecha(html) {
  let max = 0
  for (const m of html.matchAll(/"(?:taken_at_timestamp|taken_at)":\s*"?(\d{9,13})"?/g)) {
    const raw = m[1]
    const t = Number(raw) * (raw.length >= 13 ? 1 : 1000)
    if (t > max) max = t
  }
  for (const m of html.matchAll(/"(?:datePublished|uploadDate)":"([^"]+)"/g)) {
    const t = Date.parse(m[1])
    if (t > max) max = t
  }
  return max ? new Date(max).toISOString().slice(0, 10) : null
}

export function pideLogin(html, urlFinal = '') {
  if (/\/accounts\/login/.test(urlFinal)) return true
  return /loginForm|"login_page"|accounts\/login|sign in to instagram|inicia sesi[oó]n en instagram/i.test(
    html
  )
}

export async function verificarInstagram(url) {
  if (!url || !url.trim()) return { estado: 'no_verificable' }
  try {
    const res = await fetch(normalizaUrlIg(url), {
      redirect: 'follow',
      signal: AbortSignal.timeout(10_000),
      headers: { 'user-agent': UA, 'accept-language': 'es-CL,es;q=0.9' },
    })
    if (!res.ok) return { estado: 'no_verificable' }
    const html = await res.text()
    if (pideLogin(html, res.url)) return { estado: 'no_verificable' }
    const fecha = extraerUltimaFecha(html)
    if (!fecha) return { estado: 'no_verificable' }
    return { estado: clasificarFecha(fecha), ultimo_post: fecha }
  } catch {
    return { estado: 'no_verificable' }
  }
}
