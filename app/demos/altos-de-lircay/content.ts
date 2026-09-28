/**
 * app/demos/altos-de-lircay/content.ts
 *
 * Datos del mockup. REALES, verificados en la ficha pública de Google
 * Maps: nombre, dirección, teléfono, rating/reseñas. El nombre de marca
 * ("Centro Odontológico Altos de Lircay") sale de su letrero y de su
 * carta de difusión oficial (fotos en public/demos/altos-de-lircay).
 * Todo lo demás es contenido de ejemplo para mostrar el sitio.
 */

export const BIZ = {
  name: 'Centro Odontológico Altos de Lircay',
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
  'Hola, vi la página de Centro Odontológico Altos de Lircay y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Dental Altos de Lircay, Alberto Torres 839, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clínica Dental Altos de Lircay, Alberto Torres 839, San Clemente, Chile',
)}&output=embed`
