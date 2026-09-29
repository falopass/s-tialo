/**
 * app/demos/javier-albornoz-y-cia/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, sept 2026):
 * nombre "Javier Albornoz Sepulveda Y Cia Ltda" (categoría Attorney),
 * dirección Av. Dos Sur 772 (Comunidad Edificio Aranjuez de Talca),
 * teléfono fijo +56 71 221 0127 — solo llamadas — y 3.8★ con
 * 4 reseñas (sin texto público en la ficha). No publica sitio web
 * ni horario. Las fotos de public/demos/javier-albornoz-y-cia/ son
 * reales (Google Street View): el edificio del 772 y la avenida.
 * Las consultas frecuentes son de muestra: al publicar van las
 * áreas de práctica reales del estudio.
 */

export const BIZ = {
  name: 'Javier Albornoz y Cía',
  short: 'Albornoz y Cía',
  rubro: 'Estudio jurídico',
  legalName: 'Javier Albornoz Sepúlveda y Cía. Ltda.',
  address: 'Av. Dos Sur 772',
  edificio: 'Edificio Aranjuez',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 221 0127',
  phoneTel: '+56712210127',
  rating: 3.8,
  reviews: 4,
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Javier Albornoz Sepulveda Y Cia Ltda, Av. Dos Sur 772, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Dos Sur 772, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/javier-albornoz-y-cia'
