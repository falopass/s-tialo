/**
 * app/demos/los-ganaderos/content.ts
 *
 * Datos reales confirmados:
 * - Ficha Google Maps: Los Ganaderos, Maule — tel +56 71 263 1110,
 *   4.0★ / 5.288 opiniones, lun–mié 9:00–20:30, jue–dom 9:00–21:00.
 * - Sitio oficial losganaderos.cl: logo del toro, fotos de la parrilla,
 *   mini golf, vinoteca y los dos locales (Oriente y Poniente) unidos por
 *   un túnel peatonal bajo la Ruta 5 Sur, km 265.
 * - Instagram @losganaderosrestaurante y Facebook /losganaderos.
 * - Reseñas reales tomadas de la ficha de Google.
 */

export const BIZ = {
  name: 'Los Ganaderos',
  short: 'Los Ganaderos',
  rubro: 'Parrilla de ruta',
  address: 'Ruta 5 Sur km 265',
  city: 'Maule',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 263 1110',
  phoneTel: '+56712631110',
  web: 'https://losganaderos.cl',
  instagram: 'https://www.instagram.com/losganaderosrestaurante',
  igUser: '@losganaderosrestaurante',
  facebook: 'https://www.facebook.com/losganaderos',
  rating: 4.0,
  reviews: 5288,
  hours: 'Lun a mié · 9:00–20:30',
  hoursWeekend: 'Jue a dom · 9:00–21:00',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Los Ganaderos, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Los Ganaderos Restaurante, Ruta 5 Sur, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/los-ganaderos'
