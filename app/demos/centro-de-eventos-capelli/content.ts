/**
 * app/demos/centro-de-eventos-capelli/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada
 * 2026-09-29): Centro de Eventos Capelli, salón para eventos en Ruta
 * K-610 km 3, Talca; teléfono +56 9 3253 2599; nota 4.6 con 82
 * reseñas; atención todos los días 9:00–20:00. Las fotos de
 * public/demos/centro-de-eventos-capelli/ salen de su ficha: el salón,
 * la piscina, el atardecer y su colección de autos antiguos (que sus
 * propios asistentes nombran en las reseñas). El logo es la marca
 * dorada recortada de una de sus fotos nocturnas.
 */

export const BIZ = {
  name: 'Centro de Eventos Capelli',
  nameFull: 'Centro de Eventos Capelli · Talca',
  rubro: 'Salón para eventos',
  address: 'Ruta K-610, km 3',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3253 2599',
  whatsapp: '56932532599',
  googleRating: 4.6,
  googleReviews: 82,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Centro de Eventos Capelli y quiero cotizar un evento',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Centro de Eventos Capelli, Ruta K-610 km 3, Talca',
)}`

// Pin exacto de la ficha.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4604789,-71.7236207&z=15&output=embed'

export const IMG = '/demos/centro-de-eventos-capelli'

export const HORARIO = [{ dia: 'Todos los días', hora: '9:00 – 20:00' }]
