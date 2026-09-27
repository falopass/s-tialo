/**
 * app/demos/cafe-la-francesa/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y página de
 * Facebook): nombre, dirección, comuna, teléfono/WhatsApp, las 811
 * reseñas y los 28.000 seguidores. Todo lo demás (carta, precios,
 * reseñas de ejemplo) es contenido de muestra para mostrar cómo se
 * vería el sitio publicado.
 */

export const BIZ = {
  name: 'Café La Francesa',
  short: 'La Francesa',
  rubro: 'Cafetería',
  address: 'Manuel Rodriguez 552',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 (73) 247 2127',
  phoneTel: '+56732472127',
  whatsapp: '56732472127',
  reviews: 811,
  followers: '28.000',
  facebook: 'http://www.facebook.com/cafelafrancesa',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Café La Francesa y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Café La Francesa, Manuel Rodriguez 552, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Manuel Rodriguez 552, 3581385 Linares, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cafe-la-francesa'
