/**
 * app/demos/restaurant-la-rueda/content.ts
 *
 * Datos del mockup. REALES y verificados (29-09-2026):
 * - Ficha de Google Maps «Restaurant La Rueda»: restaurante en K-16,
 *   Esperanza 332, Sagrada Familia, Maule; nota 4,5 con 154 reseñas;
 *   teléfono/WhatsApp 9 9997 4710; linktr.ee/restaurant_larueda_chile
 *   enlaza su Instagram (@restaurant_larueda_chile) y Facebook
 *   («Restaurant La Rueda Chile»).
 * - Horario real de la ficha: lunes a viernes 12:30–15:00 y 20:30–22:30;
 *   sábado 20:30–22:45; domingo cerrado.
 * - Carta tomada de los paneles pintados de la fachada (fotos de la
 *   ficha): almuerzos «para servir o llevar» a solo $3.500 — 1/4 pollo,
 *   churrasco al plato, chuleta y pichanga a la plancha, con papas
 *   fritas/arroz, ensalada mixta y pan con pebre; pedidos al fijo
 *   75 2 451053. El toldo lista completos, as, lomitos, churrascos,
 *   barros luco, papas fritas, salchipapas, chorrillana y 1/4 pollo.
 * - Reseñas: texto real de la ficha de Google (autor, fecha y nota).
 * - El logo (rueda de carreta + LA RUEDA + Sagrada Familia) se recortó
 *   de la gráfica oficial publicada en la ficha. Sin imágenes generadas.
 */

export const BIZ = {
  name: 'Restaurant La Rueda',
  short: 'La Rueda',
  rubro: 'Fuente de soda y restaurant',
  address: 'Esperanza 332 (K-16)',
  city: 'Sagrada Familia',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9997 4710',
  phoneTel: '+56999974710',
  fijoDisplay: '75 2 451053',
  fijoTel: '+56752451053',
  whatsapp: '56999974710',
  instagram: 'https://www.instagram.com/restaurant_larueda_chile/',
  rating: 4.5,
  reviews: 154,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Rueda y quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurant La Rueda, Esperanza 332, Sagrada Familia',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurant La Rueda, Sagrada Familia, Región del Maule',
)}&output=embed`

export const IMG = '/demos/restaurant-la-rueda'
