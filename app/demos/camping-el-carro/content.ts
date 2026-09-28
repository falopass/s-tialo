export const BIZ = {
  name: 'Camping El Carro',
  short: 'El Carro',
  rubro: 'Camping y cabañas',
  address: 'Ruta Internacional Pehuenche, km 65',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8589 2563',
  phoneTel: '+56985892563',
  whatsapp: '56985892563',
  rating: '4,5',
  reviews: 36,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero consultar disponibilidad en Camping El Carro (km 65, San Clemente).',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Camping El Carro, San Clemente, Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Camping El Carro, San Clemente, Maule',
)}&output=embed`

export const IMG = '/demos/camping-el-carro'
