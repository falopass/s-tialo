// Instagram: un GET al HTML público del perfil.
// Si aparece una fecha de publicación se guarda como último post.
// Si pide login o bloquea -> 'no_verificable', NUNCA 'inactivo'.

import { getPublico } from './web.mjs'

const DIAS_ACTIVO = 60
const MS_DIA = 86_400_000

// Acepta URL completa, "www.instagram.com/x", "@user" o "user"
export function normalizaUrlIg(v) {
  const u = v.trim().replace(/^@/, '')
  if (/^https?:\/\//i.test(u)) return u
  if (/instagram\.com\//i.test(u)) return `https://${u}`
  return `https://www.instagram.com/${u.replace(/\/+$/, '')}/`
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
  for (const m of html.matchAll(/"(?:datePublished|uploadDate)"\s*:\s*"([^"]+)"/g)) {
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
  const r = await getPublico(normalizaUrlIg(url), {
    headers: { 'accept-language': 'es-CL,es;q=0.9' },
  })
  if (r.error || !r.res.ok) return { estado: 'no_verificable' }
  const html = await r.res.text()
  if (pideLogin(html, r.url)) return { estado: 'no_verificable' }
  const fecha = extraerUltimaFecha(html)
  if (!fecha) return { estado: 'no_verificable' }
  return { estado: clasificarFecha(fecha), ultimo_post: fecha }
}
