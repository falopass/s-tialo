export const BIZ = {
  name: 'Halcón Gris Seguridad',
  short: 'Halcón Gris',
  rubro: 'Seguridad privada y formación de guardias',
  address: 'Edificio Cervantes — 1 Oriente 1120, Of. 210',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6646 8464',
  phoneTel: '+56966468464',
  whatsapp: '56966468464',
  rating: '5.0',
  ratingCount: '5 opiniones',
  hours: 'Lu–Vi · 24 hrs · Sá–Do cerrado',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Halcón Gris, quiero cotizar un servicio de seguridad.',
)}`
export const WA_LINK_CURSO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Halcón Gris, quiero información sobre el curso de guardias.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Halcon+Gris+Seguridad+Talca'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=Halcon%20Gris%20Seguridad%2C%201%20Ote.%201120%2C%20Talca&output=embed'

export const IMG = '/demos/halcon-gris-seguridad'
