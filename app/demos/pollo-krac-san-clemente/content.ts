/**
 * app/demos/pollo-krac-san-clemente/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + carta fotografiada
 * por el propio local): nombre, dirección, teléfono, horario, rating,
 * servicios, precios de los sándwiches "ass" y las reseñas citadas.
 */

export const BIZ = {
  name: 'Pollo Krac',
  long: 'Pollo Krac San Clemente',
  rubro: 'Sándwiches y pollo',
  address: 'Carlos Silva Renard 892',
  city: 'San Clemente',
  region: 'Región del Maule',
  phone: '56969035477',
  phoneDisplay: '+56 9 6903 5477',
  rating: 4.1,
  ratingLabel: '4,1',
  reviews: 39,
  hours: [
    { d: 'Lunes a sábado', h: '10:00–20:30' },
    { d: 'Domingo', h: '11:00–18:15' },
  ],
  servicios: ['Consumo en el lugar', 'Retiro en la puerta', 'Entrega a domicilio'],
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Pollo Krac y quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'POLLO KRAC SAN CLEMENTE, Carlos Silva Renard 892, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pollo Krac San Clemente, Carlos Silva Renard 892, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/pollo-krac-san-clemente'
