export const BIZ = {
  name: 'Café Baires',
  short: 'Baires',
  category: 'Café · Restaurant · Helados',
  tagline: 'Lo bueno y lo nuevo, en la Arturo Prat',
  address: 'Av. Arturo Prat 341 A',
  city: 'Parral',
  phone: '56997933368',
  phoneDisplay: '+56 9 9793 3368',
  instagram: 'https://www.instagram.com/bairescafeparral/',
  igHandle: '@bairescafeparral',
  rating: '5,0',
  reviews: '2',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Café Baires, vi la página y quiero consultar por la carta.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Café Baires, Av. Arturo Prat 341 A, Parral, Chile',
)}&output=embed`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Baires+Arturo+Prat+341+Parral'

export const IMG = '/demos/baires-cafe'
