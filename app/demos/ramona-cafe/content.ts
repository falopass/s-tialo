export const BIZ = {
  name: 'Ramona Café',
  short: 'Ramona',
  category: 'Cafetería de especialidad',
  tagline: 'La mujer del café',
  address: 'Camino a la Viña 4357, Alto Las Rastras',
  city: 'Talca',
  phone: '56981682113',
  phoneDisplay: '+56 9 8168 2113',
  instagram: 'https://www.instagram.com/ramonacafetalca/',
  web: 'https://ramonacafe.cl',
  rating: '4,8',
  reviews: '144',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Ramona, vi la página y quiero consultar por la cafetería de Alto Las Rastras.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Ramona Café, Camino a la Viña 4357, Talca, Chile',
)}&output=embed`

export const MAPS_URL =
  'https://www.google.com/maps/place/Ramona+Caf%C3%A9/@-35.4289321,-71.6051353,17z/data=!3m1!4b1!4m6!3m5!1s0x9665c7005c592cd7:0x3ce012ce396150cd!8m2!3d-35.4289321!4d-71.6051353!16s%2Fg%2F11msd7q2yn'

// Carta oficial del local de Alto Las Rastras, enlazada desde ramonacafe.cl
export const CARTA_URL = 'https://menu.fu.do/ramonacaf%C3%A9lasrastras/qr-menu'

export const IMG = '/demos/ramona-cafe'
