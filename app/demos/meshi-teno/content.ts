export const BIZ = {
  name: 'Meshi Teno',
  category: 'Delivery de comida · sushi, burger y handrolls',
  address: 'Av. Bellavista 291',
  city: 'Teno',
  phone: '56979636396',
  phoneDisplay: '+56 9 7963 6396',
  rating: '3,7',
  reviews: '51',
  web: 'https://www.meshi.cl',
  instagram: 'https://www.instagram.com/meshi.teno',
  instagramHandle: '@meshi.teno',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Meshi, vi su página y quisiera hacer un pedido.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Meshi Teno, Av. Bellavista 291, Teno, Chile',
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Meshi Teno Av. Bellavista 291 Teno',
)}`
