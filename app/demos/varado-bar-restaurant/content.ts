export const BIZ = {
  name: 'Varado — Bar Restaurant',
  short: 'Varado',
  rubro: 'Bar · restaurant',
  address: 'Av. Ignacio Carrera Pinto',
  city: 'Llico, Vichuquén',
  region: 'Maule',
  phoneDisplay: '+56 9 9046 5291',
  phoneTel: '+56990465291',
  whatsapp: '56990465291',
  ig: '@varadosllico',
  rating: 4.8,
  reviewsCount: 40,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Varado, los vi en Google y quiero consultar por empanadas y la carta del día.',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Varado - Bar Restaurant, Av. Ignacio Carrera Pinto, Llico, Vichuquén',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Varado - Bar Restaurant, Llico, Vichuquén',
)}&output=embed`

export const IMG = '/demos/varado-bar-restaurant'
