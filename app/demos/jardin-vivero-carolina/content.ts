/**
 * app/demos/jardin-vivero-carolina/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram,
 * verificados 2026-09-28): nombre, rubro (Plant nursery), dirección en
 * Fundo La Obra (Curicó), WhatsApp, horario de atención, las 5 reseñas
 * de Google y la cuenta de Instagram con 1.355 seguidores. Las fotos de
 * public/demos/jardin-vivero-carolina/ salen de su ficha de Maps y de su
 * propio Instagram (llevan su marca de agua).
 */

export const BIZ = {
  name: 'Jardin Vivero Carolina',
  short: 'Vivero Carolina',
  rubro: 'Vivero',
  address: 'Fundo La Obra, Lote 3 C',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8403 5562',
  phoneTel: '+56984035562',
  whatsapp: '56984035562',
  reviews: 5,
  instagram: 'https://www.instagram.com/jardinvivero.carolina/',
  instagramUser: 'jardinvivero.carolina',
  instagramFollowers: '1.355',
  // Horario real de su ficha de Google Maps.
  hoursWeek: 'Lun a Vie · 17:30 a 21:00',
  hoursWeekend: 'Sáb y Dom · 15:30 a 21:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Jardin Vivero Carolina y quiero consultar por una planta',
)}`

export const WA_LINK_STOCK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Jardin Vivero Carolina y quiero saber qué plantas tienen disponibles',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Jardin Vivero Carolina, Fundo La Obra, Lote 3 C, Curicó, Chile',
)}`

// Embed con el nombre + dirección exactos para que el mapa marque el lugar.
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Jardin Vivero Carolina, Fundo La Obra, Curicó, Chile',
)}&z=15&output=embed`

export const IMG = '/demos/jardin-vivero-carolina'
