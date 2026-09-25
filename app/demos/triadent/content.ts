/**
 * app/demos/triadent/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, teléfono y rating/reseñas. Todo lo demás es contenido de
 * ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Clínica Dental Triadent',
  short: 'Triadent',
  address: '1 Norte 841, block B1 oficina 1, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6642 6337',
  phoneTel: '+56966426337',
  whatsapp: '56966426337',
  rating: 5,
  ratingLabel: '5,0',
  reviews: 119,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica Dental Triadent y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Dental Triadent, 1 Norte 841, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clínica Dental Triadent, 1 Norte 841, Talca, Chile',
)}&output=embed`
