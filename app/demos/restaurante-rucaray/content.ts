/**
 * app/demos/restaurante-rucaray/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps el 29-09-2026):
 * nombre (letrero "Restaurant El Rucaray"), dirección (L-751, Retiro),
 * teléfono, calificación 4,6, estado "cerrado temporalmente", el menú
 * del pizarrón fotografiado en el local (cazuela, carne al jugo, pollo
 * asado, carne mechada, porotos, chorrillanas, completos, hamburguesas,
 * pizza-salchipapas, churrascas, jugos naturales, lomitos - Hass y
 * "delivery hasta las 22:00 hrs - comuna de Retiro") y los temas que
 * Google destaca de las reseñas (empanadas, ambiente, porciones).
 * Sin sitio web ni redes propias encontradas.
 */

export const BIZ = {
  name: 'Restaurante Rucaray',
  short: 'El Rucaray',
  rubro: 'Restaurant · Cocina chilena',
  address: 'Camino L-751',
  city: 'Retiro',
  region: 'Región del Maule',
  phoneDisplay: '+56 73 229 8547',
  phoneTel: '+56732298547',
  whatsapp: '56732298547',
  rating: '4,6',
  reviews: '49',
  estado: 'Cerrado temporalmente según su ficha de Google',
  delivery: 'Delivery hasta las 22:00 hrs, comuna de Retiro',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Rucaray y quiero consultar',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Rucaray y quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurante Rucaray, L-751, Retiro, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurante Rucaray, L-751, Retiro, Chile',
)}&output=embed`

export const IMG = '/demos/restaurante-rucaray'
