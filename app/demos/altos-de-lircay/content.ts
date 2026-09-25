/**
 * app/demos/altos-de-lircay/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, teléfono y rating/reseñas. Todo lo demás es contenido de
 * ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Clínica Dental Altos de Lircay',
  short: 'Altos de Lircay',
  address: 'Alberto Torres 839, San Clemente',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9166 5552',
  phoneTel: '+56991665552',
  whatsapp: '56991665552',
  rating: 5,
  ratingLabel: '5,0',
  reviews: 20,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica Dental Altos de Lircay y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Dental Altos de Lircay, Alberto Torres 839, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clínica Dental Altos de Lircay, Alberto Torres 839, San Clemente, Chile',
)}&output=embed`
