/**
 * app/demos/cabanas-la-quebrada/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, sep-2026):
 * nombre, dirección, teléfono, rating y reseñas — incluidos los textos
 * citados. Las fotos de public/demos/cabanas-la-quebrada/ salen de la
 * misma ficha (fotos del propietario + Street View). No hay logo ni
 * redes sociales confirmadas del negocio.
 */

export const BIZ = {
  name: 'Cabañas La Quebrada',
  short: 'La Quebrada',
  address: 'Cuatro Pte. 1197, Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6832 1729',
  phoneTel: '+56968321729',
  whatsapp: '56968321729',
  rating: '4,0',
  reviews: 17,
} as const

export const IMG = '/demos/cabanas-la-quebrada'

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas La Quebrada y quiero consultar disponibilidad',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas La Quebrada, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas La Quebrada, Cuatro Poniente 1197, Talca, Chile',
)}&output=embed`

/** Reseñas reales de la ficha de Google Maps (texto original en español). */
export const REVIEWS = [
  {
    name: 'Antonio Diaz',
    when: 'hace 2 años',
    stars: 5,
    text: 'Excelente lugar tranquilo, dueños muy amables. Cabañas súper bien. Algún día volveremos nuevamente a la excelente ubicación',
  },
  {
    name: 'Claudio Royo',
    when: 'hace 4 meses',
    stars: 5,
    text: 'Excelente atención.',
  },
  {
    name: 'Cristian Campos',
    when: 'hace 1 año',
    stars: 5,
    text: 'Buen servicio !!!',
  },
] as const
