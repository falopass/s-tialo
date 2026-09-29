export const BIZ = {
  name: 'Plaza Recova Cafetería y Restaurant',
  short: 'Plaza Recova',
  rubro: 'Cafetería y restaurant',
  address: 'Max Jara 14',
  city: 'Yerbas Buenas',
  region: 'Maule',
  phoneDisplay: '+56 9 9701 2636',
  phoneTel: '+56997012636',
  whatsapp: '56997012636',
  reviewsCount: 10,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Plaza Recova, quiero consultar por el menú del día y pedidos para llevar.',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Plaza Recova Cafetería y Restaurant, Max Jara 14, Yerbas Buenas, Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Plaza Recova Cafetería Y Restaurant, Yerbas Buenas',
)}&output=embed`

export const IMG = '/demos/plaza-recova-cafeteria-y-restaurant'
