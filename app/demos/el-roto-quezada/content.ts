/**
 * app/demos/el-roto-quezada/content.ts
 *
 * Datos del mockup. REALES y verificados (29-09-2026):
 * - Ficha de Google Maps «EL ROTO QUEZADA» (restaurante): Río Claro, Maule
 *   (sector Cumpeo); teléfono +56 9 6611 1085; nota 4,3 con 138 opiniones.
 *   ATENCIÓN: la ficha marca «Cerrado permanentemente» — el sitio se
 *   presenta como memoria/archivo del local, sin CTA de reserva.
 * - El nombre homenajea al «roto Quezada», personaje del chiste chileno
 *   popularizado por la revista Condorito (Pepo); en el comedor el local
 *   colgaba enmarcada la lámina de Memoria Chilena con esa historia
 *   (foto real de la ficha, periodico.webp).
 * - Reseñas: texto real de la ficha de Google (autor y nota). Una de ellas
 *   menciona que el local informaba por Facebook — sin enlace público
 *   verificable, así que se omite la red.
 * - Fotos: descargadas de la ficha de Maps del negocio; el logo es el
 *   letrero del local recortado de una foto real.
 *   Sin imágenes generadas en este demo.
 */

export const BIZ = {
  name: 'El Roto Quezada',
  short: 'Roto Quezada',
  rubro: 'Restaurante',
  address: 'Río Claro, Región del Maule',
  city: 'Río Claro',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6611 1085',
  phoneTel: '+56966111085',
  rating: 4.3,
  reviews: 138,
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'El Roto Quezada, Río Claro, Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'El Roto Quezada, Río Claro, Maule',
)}&output=embed`

export const IMG = '/demos/el-roto-quezada'
