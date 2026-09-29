export const BIZ = {
  name: 'Comida al Paso y Cabañas San Sebastián',
  short: 'San Sebastián',
  category: 'Comida al paso y cabañas',
  address: 'Sector Vilches',
  city: 'San Clemente',
  region: 'Región del Maule',
  phone: '56993491569',
  phoneDisplay: '+56 9 9349 1569',
  rating: '4,8',
  reviews: '17',
  priceRange: 'Entre $5.000 y $20.000 por persona',
  hours: 'Abre a las 10:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de San Sebastián en Vilches y quiero consultar por la comida o las cabañas.',
)}`

// Ficha "COMIDAS AL PASO Y CABAÑAS SAN SEBASTIAN", Vilches
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.5727677,-71.1509815&z=14&output=embed'

export const MAPS_URL =
  'https://www.google.com/maps/place/COMIDAS+AL+PASO+Y+CABA%C3%91AS+SAN+SEBASTIAN/@-35.5727677,-71.1509815,17z/data=!4m6!3m5!1s0x96657790524053a3:0xbcd2a6896eea5451!8m2!3d-35.5727677!4d-71.1509815!16s%2Fg%2F11vbjg_k9q'

export const IMG = '/demos/comida-al-paso-san-sebastian'
