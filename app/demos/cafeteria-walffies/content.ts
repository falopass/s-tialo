/**
 * app/demos/cafeteria-walffies/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps e Instagram):
 * nombre, dirección (Clodomiro Silva 66, San Clemente), WhatsApp
 * (+56 9 5471 0210), horario (de la bio de Instagram), rating 5,0 con
 * 58 reseñas e Instagram @walffies (648 seguidores). Los productos vienen
 * de sus historias destacadas (waffles, fondue, hot chocolate, pasteles,
 * cafetería, extras) y de las fotos reales de la ficha. Las reseñas y
 * precios de la página son de muestra.
 */

export const BIZ = {
  name: 'Cafetería Walffies',
  short: 'Walffies',
  rubro: 'Cafetería y wafflería',
  address: 'Clodomiro Silva 66',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5471 0210',
  phoneTel: '+56954710210',
  whatsapp: '56954710210',
  rating: '5,0',
  reviews: 58,
  igHandle: '@walffies',
  igFollowers: 648,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Walffies, vi su página y quiero hacer un pedido',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Walffies, quiero pedir para llevar / reservar mesa',
)}`

export const IG_URL = 'https://instagram.com/walffies'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cafetería Walffies, Clodomiro Silva 66, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cafetería Walffies, Clodomiro Silva 66, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cafeteria-walffies'
