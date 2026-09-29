export const BIZ = {
  name: 'Cocinería Don Carlos',
  short: 'Don Carlos',
  category: 'Cocinería · comida casera para llevar',
  city: 'San Clemente',
  region: 'Región del Maule',
  phone: '56982007777',
  phoneDisplay: '+56 9 8200 7777',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Cocinería Don Carlos y quiero hacer un pedido.',
)}`

// Sin ficha confirmada en Maps: el mapa apunta al centro de la comuna.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.5378,-71.4870&z=14&output=embed'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Cociner%C3%ADa+Don+Carlos+San+Clemente+Maule+Chile'

export const IMG = '/demos/cocineria-don-carlos'
