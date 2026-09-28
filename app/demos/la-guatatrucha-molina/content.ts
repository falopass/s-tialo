export const BIZ = {
  name: 'La Guatatrucha',
  short: 'La Guatatrucha',
  rubro: 'Centro de eventos · Molina',
  address: 'Manuel Baquedano',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9870 9328',
  phoneTel: '+56998709328',
  whatsapp: '56998709328',
  rating: 4.4,
  reviews: 36,
  hours: 'Abierto todos los días · 9:00 a 21:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola! Vi el demo que me prepararon — les mando fotos en mejor calidad 🟡',
)}`
export const WA_LINK_EVENTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola ${BIZ.name}! Quiero consultar fecha para un evento 🟡`,
)}`
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=TRUCHA+LA.+GUATATRUCHA-+CENTRO+DE+EVENTOS+Molina'
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'TRUCHA LA. GUATATRUCHA- CENTRO DE EVENTOS, Manuel Baquedano, Molina',
)}&output=embed`

export const IMG = '/demos/la-guatatrucha-molina'
