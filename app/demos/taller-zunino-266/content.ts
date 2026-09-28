/**
 * app/demos/taller-zunino-266/content.ts
 *
 * Datos REALES verificados en la ficha de Google Maps: nombre,
 * dirección, WhatsApp, horario y reseñas. El servicio de scanner
 * viene de una publicación del propio taller en su ficha.
 */

export const BIZ = {
  name: 'Taller Zunino 266',
  short: 'Zunino 266',
  rubro: 'Taller de reparación de automóviles',
  address: 'San Clemente 266',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4996 2482',
  phoneTel: '+56949962482',
  whatsapp: '56949962482',
  reviews: 30,
  rating: 4.8,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Taller Zunino 266 y quiero consultar por mi auto',
)}`

export const WA_LINK_SCANNER = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero agendar un scanner automotriz para mi auto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Taller Zunino 266, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'San Clemente 266, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/taller-zunino-266'
