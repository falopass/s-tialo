export const BIZ = {
  name: 'Restaurant La Casona',
  short: 'La Casona',
  rubro: 'Restaurant de comida chilena',
  address: 'Avenida Abate Molina 424',
  city: 'Villa Alegre',
  region: 'Maule',
  phoneDisplay: '+56 9 9149 4818',
  phoneTel: '+56991494818',
  whatsapp: '56991494818',
  rating: 4.1,
  reviewsCount: 154,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola La Casona, los vi en Google y quiero consultar por la colación del día.',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurante La Casona, Avenida Abate Molina, Villa Alegre',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurante La Casona, Villa Alegre',
)}&output=embed`

export const IMG = '/demos/la-casona'
