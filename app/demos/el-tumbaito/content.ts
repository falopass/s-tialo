/**
 * app/demos/el-tumbaito/content.ts
 *
 * Datos verificados (Google Maps + Facebook público, sept-2026):
 * - Nombre, dirección y teléfonos: ficha de Google (Lautaro 350, Linares;
 *   73 221 8077) y flyer oficial de su Facebook ("RESERVAS Y PEDIDOS
 *   +56 9 3649 0665 — 73 2 219077", "Lautaro #350, Linares — 7ma Región").
 * - Rating 4,3 · 1.110 reseñas · 333 fotos en su ficha de Google.
 * - Facebook "El Tumbaito" (~3.548 seguidores): parrilladas, ceviches,
 *   pastas con 10% dcto los martes, abierto todos los días.
 * - "Desde 1965" y "Nunca beba agua" vienen de su letrero real (foto de la
 *   ficha) y "La picada de la Región del Maule" de su propio logo.
 * Los precios por plato no se publican en sus perfiles: se omite carta con
 * valores y solo se nombra lo que promocionan (parrillada, ceviches, pastas).
 */

export const BIZ = {
  name: 'El Tumbaito',
  short: 'El Tumbaito',
  rubro: 'Bar restaurante',
  tagline: 'La picada de la Región del Maule',
  address: 'Lautaro 350, Linares',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '(73) 221 8077',
  phoneTel: '+56732218077',
  whatsapp: '56936490665',
  whatsappDisplay: '+56 9 3649 0665',
  facebook: 'https://www.facebook.com/eltumbaito.linares/',
  fbFollowers: '3,5 mil seguidores',
  rating: '4,3',
  reviews: '1.110',
  since: '1965',
  openDays: 'Todos los días · 9:30 – 20:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola El Tumbaito, vi su página y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola El Tumbaito, quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'El Tumbaito, Lautaro 350, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'El Tumbaito, Lautaro 350, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/el-tumbaito'
