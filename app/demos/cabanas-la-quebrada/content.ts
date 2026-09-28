/**
 * app/demos/cabanas-la-quebrada/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, teléfono y rating/reseñas. Todo lo demás es contenido de
 * ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Cabañas La Quebrada',
  address: 'Cuatro Pte. 1197, Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6832 1729',
  phoneTel: '+56968321729',
  whatsapp: '56968321729',
  rating: '4,0',
  reviews: 17,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas La Quebrada y quiero consultar disponibilidad',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas La Quebrada, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas La Quebrada, Cuatro Poniente 1197, Talca, Chile',
)}&output=embed`
