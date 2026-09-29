export const BIZ = {
  name: 'Casa Café Teno',
  short: 'Casa Café',
  category: 'Café restaurante con terraza',
  tagline: 'La casa de adobe de la Comalle',
  address: 'Av. Comalle 102',
  city: 'Teno',
  phone: '56983739269',
  phoneDisplay: '+56 9 8373 9269',
  instagram: 'https://www.instagram.com/casacafeteno/',
  igHandle: '@casacafeteno',
  rating: '4,2',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Casa Café, vi la página y quiero consultar por reservas y la agenda de eventos.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Casa Café Teno, Av. Comalle 102, Teno, Chile',
)}&output=embed`

export const MAPS_URL =
  'https://www.google.com/maps/place/Casa+Caf%C3%A9+Teno/@-34.8707718,-71.161183,17z/data=!3m1!4b1!4m6!3m5!1s0x9664f71f063a8001:0x227869694f047b30!8m2!3d-34.8707718!4d-71.161183!16s%2Fg%2F11t57w83zj'

export const IMG = '/demos/casa-cafe-teno'
