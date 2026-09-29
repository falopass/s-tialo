/**
 * app/demos/restaurante-esmeralda/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps y
 * restauranteesmeralda.cl): nombre, ubicación (Petrohué, comuna de
 * Puerto Varas, Región de Los Lagos — NO es del Maule), teléfono
 * /WhatsApp (+56 9 9839 2589), rating 4,6 con 98 reseñas, sitio web,
 * rango de precio publicado por Google ($20.000–25.000 por persona),
 * los platos destacados de la ficha (Posta a la Cacerola con Papas
 * Rústicas, Jabalí con Papas Nativas, Filete de Res con Ensalada de
 * Temporada, Salmón con Papas Nativas), la llegada en lancha gratuita
 * desde el embarcadero de Puerto Petrohue, la vista al volcán Osorno,
 * opciones vegetarianas y menú para niños. Las reseñas citadas son
 * textos reales de su ficha de Google. Las fotos son reales, de su
 * propia ficha de Google Maps.
 */

export const BIZ = {
  name: 'Restaurante Esmeralda',
  short: 'Esmeralda',
  rubro: 'Restaurante',
  address: 'Petrohué s/n, junto al embarcadero',
  city: 'Puerto Varas',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 9839 2589',
  whatsapp: '56998392589',
  rating: '4,6',
  reviews: 98,
  site: 'restauranteesmeralda.cl',
  precioGoogle: '$20.000–25.000 por persona',
  plusCode: 'VH5X+93 Petrohué',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Restaurante Esmeralda, vi su página y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar mesa en Restaurante Esmeralda, Petrohué',
)}`

export const SITE_URL = `https://${BIZ.site}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurante Esmeralda, Petrohué, Puerto Varas, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurante Esmeralda, Petrohué, Puerto Varas, Chile',
)}&output=embed`

export const IMG = '/demos/restaurante-esmeralda'
