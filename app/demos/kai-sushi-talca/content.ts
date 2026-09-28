export const BIZ = {
  name: 'Kai Sushi',
  short: 'Kai',
  rubro: 'Bar & delivery nikkei',
  address: 'Dos Norte 1310, esquina 9 Oriente',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5869 2536',
  phoneTel: '+56958692536',
  whatsapp: '56958692536',
  instagram: 'https://www.instagram.com/kai_sushi_talca',
  igUser: '@kai_sushi_talca',
  igFollowers: '2,9 mil seguidores',
  rating: '4.7',
  ratingCount: '20 opiniones',
  hours: 'Lu–Sá · 12:00–23:00 · Dom cerrado',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Kai Sushi, quiero hacer un pedido.',
)}`
export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Kai Sushi, quiero reservar una mesa.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Kai+sushi+Talca'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=Kai%20sushi%20Talca%2C%20Dos%20Nte.%201310%2C%20Talca&output=embed'

export const IMG = '/demos/kai-sushi-talca'
