/**
 * app/demos/cabanas-cristobal-puerto-montt/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps «Cabañas Cristóbal»,
 * leída el 12-11-2026):
 * - Nombre: «Cabañas Cristóbal» (Maps: casa rural).
 * - Dirección: Wolleter 475, Puerto Montt.
 * - WhatsApp: +56 9 7839 1413.
 * - Reputación: 4,8 con 72 opiniones en Google.
 * - Las cuatro citas de REVIEWS son textuales de Google, con el nombre
 *   tal cual aparece en la ficha.
 * - Qué ofrecen (cabañas de madera en una ladera, escaleras y terrazas,
 *   jardín con flores, vista a la ciudad y al mar, dormitorio con cama y
 *   camarote, living con TV, cocina con refrigerador y microondas,
 *   comedor, atención de los propios dueños) sale de las reseñas y fotos
 *   de la ficha.
 * - Fotos: todas de su ficha, en public/demos/cabanas-cristobal-puerto-montt/.
 * - Horario: no publicado; se pide consultar disponibilidad por WhatsApp.
 * - Redes sociales: no confirmadas; no se muestran.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y rótulos gráficos. Sin precios
 * ni tarifas; la disponibilidad se confirma por WhatsApp.
 */

export const BIZ = {
  name: 'Cabañas Cristóbal',
  short: 'Cabañas Cristóbal',
  rubro: 'Cabañas',
  address: 'Wolleter 475',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 7839 1413',
  whatsapp: '56978391413',
  rating: '4,8',
  ratingValue: 4.8,
  reviews: 72,
} as const

export const WA_LINK =
  'https://wa.me/56978391413?text=Hola%20Caba%C3%B1as%20Crist%C3%B3bal%2C%20quiero%20consultar%20disponibilidad'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Cristóbal, Wolleter 475, Puerto Montt',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Cristóbal, Wolleter 475, Puerto Montt',
)}&output=embed`

/** Opiniones textuales de Google (4,8 con 72 opiniones). */
export const REVIEWS = [
  {
    text: 'Excelentes cabañas y muy lindas, 100% recomendadas, con vista al mar y al sector costero de Puerto Montt, atención muy gentil, cabañas limpias y equipadas para pasar una estadía con todo lo necesario y sin preocupaciones.',
    author: 'Daniela H.',
  },
  {
    text: 'Cabañas limpias y bien equipadas (…) lo mejor la vista hermosa de toda la ciudad. Camas muy cómodas y buenos colchones.',
    author: 'Jaime B.',
  },
  {
    text: 'Muy lindas las cabañas, limpias y tienen lo necesario. La atención de los propietarios es genial!',
    author: 'Héctor Nicolás V.',
  },
  {
    text: 'Excelente atención, lindo apartamento y ubicación.',
    author: 'Humberto A.',
  },
] as const

export const IMG = '/demos/cabanas-cristobal-puerto-montt'
