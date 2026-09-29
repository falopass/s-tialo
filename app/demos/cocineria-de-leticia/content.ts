export const BIZ = {
  name: 'La Cocina de Leticia',
  short: 'La Cocina de Leticia',
  category: 'Restaurante familiar',
  address: 'Sector El Colorado, camino a Vilches',
  city: 'San Clemente',
  phone: '56989057184',
  phoneDisplay: '+56 9 8905 7184',
  instagram: 'https://www.instagram.com/lacocinadeleticiarestaurant/',
  igUser: '@lacocinadeleticiarestaurant',
  rating: '4,4',
  reviews: '19',
} as const

export const IMG = '/demos/cocineria-de-leticia'

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de La Cocina de Leticia y quisiera consultar.',
)}`

export const WA_MESA = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, quisiera reservar una mesa en La Cocina de Leticia.',
)}`

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.633854,-71.2667716&output=embed'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=La%20Cocina%20de%20Leticia%20San%20Clemente'
