export const BIZ = {
  name: 'Sabores Tradicional y Casero',
  short: 'Sabores',
  category: 'Pastelería · Cafetería · Tortas por encargo',
  tagline: 'La pastelería de la familia, en Balmaceda',
  address: 'Balmaceda 325, local 5',
  city: 'Cauquenes',
  phone: '56986620209',
  phoneDisplay: '+56 9 8662 0209',
  facebook: 'https://www.facebook.com/saborestradicionalycasero',
  fbHandle: '@saborestradicionalycasero',
  rating: '4,8',
  reviews: '10',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Sabores, vi la página y quiero encargar una torta.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sabores Tradicional y Casero, Balmaceda 325, Cauquenes, Chile',
)}&output=embed`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Sabores+Tradicional+Casero+Balmaceda+325+Cauquenes'

export const IMG = '/demos/sabores-tradicional-casero'
