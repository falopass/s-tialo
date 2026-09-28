/**
 * app/demos/lubricentro-huamachuco/content.ts
 *
 * Datos REALES verificados en la ficha de Google Maps y el
 * letrero del local: nombre, dirección, WhatsApp, horario,
 * servicios, marcas y reseñas. Los textos de venta son de muestra.
 */

export const BIZ = {
  name: 'Lubricentro Huamachuco',
  short: 'Huamachuco',
  rubro: 'Lubricentro y accesorios',
  address: 'Av. Huamachuco 1902',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6647 0629',
  phoneTel: '+56966470629',
  whatsapp: '56966470629',
  reviews: 39,
  rating: 4.4,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Lubricentro Huamachuco y quiero consultar por un cambio de aceite',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Lubicantes Huamachuco, Av. Huamachuco 1902, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Huamachuco 1902, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/lubricentro-huamachuco'
