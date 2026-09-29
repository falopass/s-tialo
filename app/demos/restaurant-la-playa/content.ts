export const BIZ = {
  name: 'Restaurant La Playa',
  short: 'La Playa',
  rubro: 'Restaurant y hostería',
  address: 'Av. Ignacio Carrera Pinto s/n',
  city: 'Llico, Vichuquén',
  region: 'Maule',
  phoneDisplay: '+56 9 8224 9493',
  phoneTel: '+56982249493',
  whatsapp: '56982249493',
  fb: 'facebook.com/restaurantlaplaya',
  rating: 3.8,
  reviewsCount: 348,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola La Playa, los vi en Google y quiero consultar por la carta y por alojamiento.',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurant La Playa, Llico, Vichuquén',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurant La Playa, Llico, Vichuquén',
)}&output=embed`

export const IMG = '/demos/restaurant-la-playa'
