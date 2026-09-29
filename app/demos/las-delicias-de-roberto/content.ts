/**
 * app/demos/las-delicias-de-roberto/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): restaurante
 * "Las Delicias de Roberto" en Victoria 453, Cauquenes — el local con el
 * letrero de la foto (se trasladó desde su ubicación original junto al
 * terminal). De su propio letrero de bienvenida se confirma que reciben
 * vales Junaeb, Sodexo, Amipass y Ticket Restaurant, y el local queda
 * frente a la Plaza de Cauquenes (verificable en Street View).
 * La ficha no publica fono: el teléfono/WhatsApp de esta página viene de
 * la nota del prospecto y está sin verificar — pendiente de confirmar.
 * No hay reseñas en la ficha, por eso este demo no muestra testimonios.
 * La pizarra de platos es DE MUESTRA (carta típica marcada como tal).
 */

export const BIZ = {
  name: 'Las Delicias de Roberto',
  short: 'Delicias de Roberto',
  rubro: 'Restaurante',
  address: 'Victoria 453',
  city: 'Cauquenes',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7903 3952',
  phoneTel: '+56979033952',
  whatsapp: '56979033952',
  frente: 'frente a la Plaza de Cauquenes',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Las Delicias de Roberto, vi su página y quiero consultar por el almuerzo',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Las+Delicias+de+Roberto+Cauquenes'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Victoria 453, Cauquenes, Chile',
)}&output=embed`

export const IMG = '/demos/las-delicias-de-roberto'

/** Vales confirmados del letrero real del local. */
export const VALES = ['Junaeb', 'Sodexo', 'Amipass', 'Ticket Restaurant'] as const
