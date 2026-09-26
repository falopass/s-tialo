/**
 * app/demos/rancho-itahue/content.ts
 *
 * Datos del mockup. REALES: nombre, comuna, camino (K-165) y las 209
 * reseñas de la ficha de Google. Teléfono según directorio público —
 * confirmar con el cliente antes de publicar. Todo lo demás
 * (actividades, horarios, reseñas) es contenido de ejemplo para
 * mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Rancho Itahue',
  short: 'Rancho Itahue',
  rubro: 'Agroturismo y eventos',
  address: 'Camino K-165, sector Itahue',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9918 8169',
  phoneTel: '+56999188169',
  whatsapp: '56999188169',
  reviews: 209,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Rancho Itahue y quiero consultar',
)}`

export const WA_LINK_EVENTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Rancho Itahue y quiero cotizar un evento',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Rancho Itahue, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Rancho Itahue, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/rancho-itahue'
