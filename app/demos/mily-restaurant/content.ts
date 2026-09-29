/**
 * app/demos/mily-restaurant/content.ts
 *
 * Datos reales de la ficha de Google Maps de Mily Restaurant
 * (Arturo Prat 2545, San Javier — dentro del Hotel Mily): dirección,
 * teléfono/WhatsApp, 3,9★ y 179 reseñas. Las reseñas citadas son reales
 * (Google). La carta y los precios son de muestra: el local no publica
 * precios en línea.
 */

export const BIZ = {
  name: 'Mily Restaurant',
  short: 'Mily',
  rubro: 'Restaurant familiar',
  address: 'Arturo Prat 2545',
  dentro: 'Hotel Mily',
  city: 'San Javier de Loncomilla',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8799 6753',
  phoneTel: '+56987996753',
  whatsapp: '56987996753',
  rating: 3.9,
  reviews: 179,
  precio: '$5.000 – $10.000 por persona',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mily Restaurant y quiero consultar',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mily Restaurant y quiero hacer un pedido para retirar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mily Restaurant, Arturo Prat 2545, San Javier, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Mily Restaurant, Arturo Prat 2545, San Javier, Chile',
)}&output=embed`

export const IMG = '/demos/mily-restaurant'
