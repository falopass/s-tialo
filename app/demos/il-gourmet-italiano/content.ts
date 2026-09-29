export const BIZ = {
  name: 'Il Gourmet Italiano',
  short: 'Il Gourmet',
  category: 'Cafetería · Repostería · Helados artesanales',
  tagline: 'La esquina italiana de Cauquenes',
  address: 'Antonio Varas 580',
  city: 'Cauquenes',
  phone: '56957449774',
  phoneDisplay: '+56 9 5744 9774',
  instagram: 'https://www.instagram.com/ilgourmetitaliano/',
  igHandle: '@ilgourmetitaliano',
  rating: '4,6',
  reviews: '80',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Il Gourmet, vi la página y quiero consultar por helados, tortas y reservas.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Il Gourmet italiano, Antonio Varas 580, Cauquenes, Chile',
)}&output=embed`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Il+Gourmet+italiano+Antonio+Varas+580+Cauquenes'

export const IMG = '/demos/il-gourmet-italiano'
