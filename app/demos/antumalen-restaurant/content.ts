/**
 * app/demos/antumalen-restaurant/content.ts
 *
 * Datos REALES verificados en la ficha de Google Maps y la carta
 * fotografiada del local: nombre, dirección, WhatsApp, horario,
 * precios y reseñas. Los textos de venta son redacción de muestra.
 */

export const BIZ = {
  name: 'Antümalen Restaurant',
  short: 'Antümalen',
  rubro: 'Restaurant y comida casera',
  address: 'Ruta 115 837',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8719 9748',
  phoneTel: '+56987199748',
  whatsapp: '56987199748',
  reviews: 48,
  rating: 4.6,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Antümalen y quiero hacer un pedido',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una mesa en Antümalen',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Antümalen Restaurant, Ruta 115 837, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Ruta 115 837, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/antumalen-restaurant'
