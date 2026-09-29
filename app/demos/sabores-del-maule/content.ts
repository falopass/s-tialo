export const BIZ = {
  name: 'Sabores del Maule',
  short: 'Sabores del Maule',
  category: 'Cocinería · comida casera para llevar',
  city: 'Talca',
  region: 'Región del Maule',
  phone: '56988586974',
  phoneDisplay: '+56 9 8858 6974',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Sabores del Maule y quiero hacer un pedido.',
)}`

// Sin ficha confirmada en Maps: el mapa apunta al centro de Talca.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4264,-71.6483&z=14&output=embed'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Sabores+del+Maule+Talca+Chile'

export const IMG = '/demos/sabores-del-maule'
