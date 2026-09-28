/**
 * Datos verificados en Google Maps, Instagram y Facebook.
 *
 * Fuentes:
 * - Google Maps: ficha pública de Hope Bakery Chile, consultada el 28-09-2026.
 * - Instagram: https://www.instagram.com/hopebakery_chile/
 * - Facebook: https://www.facebook.com/hopebakerychile/
 * - Ficha pública de pastelerías en Chile: referencia de dirección y teléfono.
 */

export const BIZ = {
  name: 'Hope Bakery Chile',
  short: 'Hope Bakery',
  rubro: 'Panadería y pastelería artesanal',
  address: 'Camino a la viña 4357, local 120A',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3316 5082',
  phoneTel: '+56933165082',
  whatsapp: '56933165082',
  instagram: 'https://www.instagram.com/hopebakery_chile/',
  facebook: 'https://www.facebook.com/hopebakerychile/',
} as const

export const HOURS = [{ days: 'Domingo', time: '10:00–20:00' }] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Hope Bakery Chile y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}, Chile`,
)}`
