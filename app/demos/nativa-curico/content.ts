/**
 * app/demos/nativa-curico/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, dirección (Torre Carmen,
 * Carmen 775 Ofi. 304), las 10 reseñas de la ficha de Google, el
 * Instagram @nativa.curico (4.032 seguidores) y el WhatsApp. Todo lo
 * demás — servicios, precios, horarios y textos de reseñas — es
 * contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Nativa Curicó',
  short: 'NATIVA',
  rubro: 'Centro de estética',
  address: 'Torre Carmen · Carmen 775, Ofi. 304',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9810 5749',
  phoneTel: '+56998105749',
  whatsapp: '56998105749',
  reviews: 10,
  instagram: 'nativa.curico',
  instagramFollowers: '4.032',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Nativa, vi su sitio web y quiero reservar una hora',
)}`

export const WA_LINK_HORA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Nativa, quiero consultar por horas disponibles esta semana',
)}`

export const IG_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Nativa Curicó, Carmen 775, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Torre Carmen, Carmen 775, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/nativa-curico'
