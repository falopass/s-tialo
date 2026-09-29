export const BIZ = {
  name: 'Emilia Coffee & Cake',
  short: 'Emilia',
  category: 'Cafetería y pastelería',
  tagline: 'Coffee and friends, perfect blend',
  address: '2 Norte 4060, sector Las Rastras',
  city: 'Talca',
  phone: '56964725962',
  phoneDisplay: '+56 9 6472 5962',
  instagram: 'https://www.instagram.com/emiliacoffee.cake/',
  rating: '4,8',
  reviews: '57',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Emilia, vi la página y quiero consultar por la cafetería de 2 Norte.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Emilia Coffee & Cake, 2 Norte 4060, Talca, Chile',
)}&output=embed`

export const MAPS_URL =
  'https://www.google.com/maps/place/Emilia+Coffee+%26+Cake/@-35.4362895,-71.6122652,17z/data=!3m1!4b1!4m6!3m5!1s0x9665c75f0b8536c9:0x3f88fab4282a81d7!8m2!3d-35.4362895!4d-71.6122652!16s%2Fg%2F11y9p_czr9'

export const IMG = '/demos/emilia-coffee-cake'
