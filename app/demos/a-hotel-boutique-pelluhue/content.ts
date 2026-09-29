/**
 * app/demos/a-hotel-boutique-pelluhue/content.ts
 *
 * Datos del mockup. REALES: nombre, dirección (Condell 951,
 * Pelluhue), teléfono/WhatsApp (+56 9 7798 3319), nota 4,8 con 44
 * opiniones en Google, categoría hotel 3 estrellas, Instagram
 * (@a_hotel_boutique_pelluhue), Facebook (/AHOTELBOUTIQUEPELLUHUE),
 * el logo (monograma AH del perfil de Facebook) y las reseñas
 * citadas. Las descripciones de espacios y habitaciones son
 * contenido de muestra.
 */

export const BIZ = {
  name: 'A Hotel Boutique Pelluhue',
  short: 'A Hotel',
  rubro: 'Hotel boutique',
  address: 'Condell 951',
  city: 'Pelluhue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7798 3319',
  phoneTel: '+56977983319',
  whatsapp: '56977983319',
  rating: '4,8',
  reviews: 44,
  igHandle: '@a_hotel_boutique_pelluhue',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de A Hotel Boutique Pelluhue y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar en A Hotel Boutique Pelluhue',
)}`

export const IG_URL = 'https://www.instagram.com/a_hotel_boutique_pelluhue/'
export const FB_URL = 'https://web.facebook.com/AHOTELBOUTIQUEPELLUHUE'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'A Hotel Boutique Pelluhue, Condell 951, Pelluhue, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'A Hotel Boutique Pelluhue, Condell 951, Pelluhue, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/a-hotel-boutique-pelluhue'
