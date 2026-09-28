/**
 * app/demos/aria-crossfit-las-rastras/content.ts
 *
 * Datos del mockup. REALES (ficha pública + redes): nombre
 * (Aria CrossFit® - HYROX® Studio - Las Rastras), dirección
 * (Av. Las Rastras 2750, Portal Las Rastras, Talca), el
 * WhatsApp +56 9 7527 9159, rating 5,0 con 12 reseñas en
 * Google Maps, horarios de la ficha y el Instagram
 * @ariacrossfit. Afiliado oficial de CrossFit Games.
 * Los coaches Giuliano y Fran salen nombrados en las reseñas.
 */

export const BIZ = {
  name: 'Aria CrossFit — HYROX Studio',
  short: 'Aria CrossFit',
  rubro: 'CrossFit · HYROX · Musculación',
  address: 'Av. Las Rastras 2750, Portal Las Rastras',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7527 9159',
  phoneTel: '+56975279159',
  whatsapp: '56975279159',
  instagram: 'https://www.instagram.com/ariacrossfit',
  igUser: '@ariacrossfit',
  rating: 5.0,
  reviews: 12,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Aria CrossFit y quiero consultar por una clase',
)}`

export const WA_LINK_CLASE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero agendar una clase de prueba en Aria CrossFit',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Aria CrossFit HYROX Studio Las Rastras, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Avenida Las Rastras 2750, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/aria-crossfit-las-rastras'
