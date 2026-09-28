/**
 * app/demos/dinocompletos/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada
 * 2026-09-28): nombre, dirección Yerbas Buenas 1598 (Molina), teléfono,
 * rubro "Restaurant", nota 4.7 con 1.294 reseñas, horario lunes a sábado
 * 9:00–24:00 y domingo cerrado, y las reseñas citadas con nombre y
 * estrellas. Las fotos son de la galería de Maps del local.
 * No se publican precios ni carta formal: solo los platos que los
 * clientes nombran en las reseñas de Google.
 */

export const BIZ = {
  name: 'Dinocompletos',
  rubro: 'Restaurant · completos y sandwiches',
  address: 'Yerbas Buenas 1598',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4567 4432',
  phoneTel: '+56945674432',
  whatsapp: '56945674432',
  rating: 4.7,
  reviews: '1.294',
  mapPlace: 'Dinocompletos, Yerbas Buenas 1598, Molina, Chile',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Dinocompletos, vi su página y quiero pedir',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BIZ.mapPlace,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Yerbas Buenas 1598, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/dinocompletos'
