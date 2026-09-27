/**
 * app/demos/centro-san-ricardo/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro (piscina cubierta),
 * dirección (Parcela 35, San Rafael), Instagram, WhatsApp y las 178
 * reseñas de la ficha de Google. Todo lo demás (programas, horarios,
 * precios, reseñas textuales y fotos) es contenido de ejemplo para
 * mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Centro San Ricardo',
  short: 'Centro San Ricardo',
  rubro: 'Piscina cubierta',
  address: 'Parcela 35, San Rafael',
  city: 'San Rafael',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9746 1419',
  phoneTel: '+56997461419',
  whatsapp: '56997461419',
  instagram: 'https://instagram.com/piscinas_sanricardo?igshid=OGQ5ZDc2ODk2ZA==',
  instagramUser: 'piscinas_sanricardo',
  reviews: 178,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Centro San Ricardo y quiero consultar por la piscina',
)}`

export const WA_LINK_CLASES = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Centro San Ricardo y quiero consultar por clases de natación',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Centro San Ricardo, Parcela 35, San Rafael, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro San Ricardo, Parcela 35, San Rafael, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/centro-san-ricardo'
