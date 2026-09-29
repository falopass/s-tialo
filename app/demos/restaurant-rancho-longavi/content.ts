/**
 * app/demos/restaurant-rancho-longavi/content.ts
 *
 * Datos reales confirmados:
 * - Ficha Google Maps: Restaurant Rancho Longavi, Ruta Panamericana Sur 3168,
 *   Longaví — tel +56 73 241 1590, 4.1★ / 40 opiniones,
 *   lun–vie 9:00–21:00, sáb 9:00–16:30, dom cerrado.
 *   (Existe una ficha homónima marcada "cerrado temporalmente"; esta es la
 *   que está abierta y calza con el teléfono del registro.)
 * - Fotos reales de la ficha: fachada con banners, comedor con manteles,
 *   terraza, churrasco italiano XL y mesa con vinagretas con el logo.
 * - Reseñas reales tomadas de la ficha de Google.
 */

export const BIZ = {
  name: 'Restaurant Rancho Longaví',
  short: 'Rancho Longaví',
  rubro: 'Restaurant de ruta',
  address: 'Ruta Panamericana Sur 3168',
  city: 'Longaví',
  region: 'Región del Maule',
  phoneDisplay: '+56 73 241 1590',
  phoneTel: '+56732411590',
  rating: 4.1,
  reviews: 40,
  hours: 'Lun a vie · 9:00–21:00',
  hoursWeekend: 'Sábado · 9:00–16:30 · Domingo cerrado',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurant Rancho Longavi, Longaví, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurant Rancho Longavi, Panamericana Sur 3168, Longaví, Chile',
)}&output=embed`

export const IMG = '/demos/restaurant-rancho-longavi'
