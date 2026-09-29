export const BIZ = {
  name: 'Frontera Café',
  short: 'Frontera',
  category: 'Pastas · Pizzas · Café',
  tagline: 'El bistró de la Galería Meval',
  address: 'Av. Aníbal Pinto 328, Local 102, Galería Meval',
  city: 'Parral',
  phone: '56987488481',
  phoneDisplay: '+56 9 8748 8481',
  instagram: 'https://www.instagram.com/frontera.cafe/',
  igHandle: '@frontera.cafe',
  rating: '4,8',
  reviews: '37',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Frontera, vi la página y quiero consultar por la carta y reservas.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Frontera Cafe, Av. Anibal Pinto 328, Parral, Chile',
)}&output=embed`

export const MAPS_URL =
  'https://www.google.com/maps/place/FRONTERA+CAFE/@-36.1398508,-71.8284979,17z/data=!3m1!4b1!4m6!3m5!1s0x966f4fb1a80b2e8b:0xf133ca4d47cb6f1!8m2!3d-36.1398508!4d-71.8284979!16s%2Fg%2F11fngztsr2'

export const IMG = '/demos/frontera-cafe'
