export const BIZ = {
  name: 'Cocinería Los Troncos',
  short: 'Los Troncos',
  rubro: 'Cocinería y comida casera',
  address: 'Pencahue',
  city: 'Pencahue',
  region: 'Maule',
  phoneDisplay: '+56 9 8164 2326',
  phoneTel: '+56981642326',
  whatsapp: '56981642326',
  rating: '4,0',
  reviewsCount: 23,
  horario: 'Lunes a viernes · 12:00 a 15:30',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Cocinería Los Troncos, quiero consultar por el almuerzo de hoy en Pencahue.',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cocineria Los Troncos, Pencahue, Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cocineria Los Troncos, Pencahue',
)}&output=embed`

export const IMG = '/demos/cocineria-los-troncos'
