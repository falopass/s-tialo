/**
 * app/demos/restaurante-donde-raimundo/content.ts
 *
 * Datos reales verificados: nombre, comuna, dirección (Errázuriz 262,
 * según la carta impresa del local), teléfono/WhatsApp (Google Maps),
 * horario, rating y reseñas de la ficha de Google. Los precios son los
 * de la carta fotografiada en el local. Sin Instagram/Facebook: el
 * negocio no tiene perfil propio confirmado.
 */

export const BIZ = {
  name: 'Restaurante Donde Raimundo',
  short: 'Donde Raimundo',
  rubro: 'Restaurante',
  address: 'Errázuriz 262',
  city: 'Chanco',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9470 6032',
  phoneTel: '+56994706032',
  whatsapp: '56994706032',
  rating: 4.6,
  reviews: 327,
  hours: 'Todos los días, 9:00 a 20:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Donde Raimundo y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Donde Raimundo y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurante Donde Raimundo, Errázuriz 262, Chanco, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurante Donde Raimundo, Chanco, Chile',
)}&output=embed`

export const IMG = '/demos/restaurante-donde-raimundo'
