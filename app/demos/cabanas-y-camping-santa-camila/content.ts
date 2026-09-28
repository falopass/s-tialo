export const BIZ = {
  name: 'Cabañas y Camping Santa Camila',
  short: 'Santa Camila',
  rubro: 'Cabañas y camping · El Radal',
  address: 'Camino al Radal Siete Tazas (K-275)',
  city: 'El Radal, Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5786 5905',
  phoneTel: '+56957865905',
  whatsapp: '56957865905',
  rating: 4.3,
  reviews: 29,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola! Vi el demo que me prepararon — les mando fotos en mejor calidad 🟡',
)}`
export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola ${BIZ.short}! Quiero consultar disponibilidad de cabañas 🟡`,
)}`
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Caba%C3%B1as+Y+Camping+Santa+Camila+Molina'
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Y Camping Santa Camila, El Radal, Molina',
)}&output=embed`

export const IMG = '/demos/cabanas-y-camping-santa-camila'
