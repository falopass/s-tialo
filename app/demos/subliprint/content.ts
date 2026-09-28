/**
 * app/demos/subliprint/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre
 * "Subliprint Impresiones, Estampado Y Publicidad", dirección en Villa
 * Valles del Maule (San Clemente), teléfono, rating 4,9 con 7 opiniones,
 * horario y las reseñas citadas abajo.
 * Sin logo ni redes propias verificables: el nombre tipográfico y sus
 * fotos reales de trabajos (tazones sublimados, tarjetas, rotulación)
 * mandan. El listado de servicios sale de su nombre y sus fotos.
 */

export const BIZ = {
  name: 'Subliprint',
  nameFull: 'Subliprint Impresiones, Estampado y Publicidad',
  rubro: 'Imprenta y sublimación',
  address: 'Lago Colbún 1495, Villa Valles del Maule',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6397 9135',
  phoneTel: '+56963979135',
  whatsapp: '56963979135',
  rating: '4,9',
  reviews: 7,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Subliprint y quiero cotizar una impresión',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Subliprint Impresiones Estampado Y Publicidad, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Lago Colbún 1495, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/subliprint'
