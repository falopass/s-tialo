/**
 * app/demos/sushi-luna/content.ts
 *
 * Datos del demo, verificados el 2026-09-29 en la ficha de Google Maps
 * "Luna Sushi delivery" y cruzados con el directorio mundochileno:
 *  - Nombre: "Luna Sushi" (en Maps figura "Luna Sushi delivery")
 *  - Dirección: Carlos Silva Renard 810, San Clemente
 *  - WhatsApp: +56 9 9791 8883 (número del contacto, confirmado en
 *    mundochileno.cl para la misma dirección)
 *  - Google: 4.4 estrellas, 150 reseñas
 *  - Modalidades: en el local, para llevar y delivery
 *  - Atiende de tarde a noche (en reseñas notan que no abre al almuerzo)
 *  - Oferta real según su ficha y reseñas: sushi, ceviche, empanadas,
 *    hamburguesas, completos y comida casera ("de todo y abundante")
 * Sin precios: el local no los publica en línea.
 */

export const BIZ = {
  name: 'Luna Sushi',
  short: 'Luna Sushi',
  rubro: 'Sushi y comida casera',
  address: 'Carlos Silva Renard 810',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9791 8883',
  phoneTel: '+56997918883',
  whatsapp: '56997918883',
  rating: 4.4,
  reviews: 150,
  hours: 'De tarde a noche',
  modes: 'Local · Para llevar · Delivery',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Luna Sushi y quiero consultar',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero hacer un pedido en Luna Sushi',
)}`

export const WA_LINK_DELIVERY = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero pedir delivery de Luna Sushi a San Clemente',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Luna Sushi, Carlos Silva Renard 810, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Luna Sushi, Carlos Silva Renard 810, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/sushi-luna'
