export const BIZ = {
  name: 'Consulta Fonointegra',
  short: 'Fonointegra',
  rubro: 'Fonoaudiología infantil · Talca',
  address: '1 Norte, Edificio Centro 2000',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6246 2452',
  phoneTel: '+56962462452',
  whatsapp: '56962462452',
  profesional: 'Carla Neira',
  instagram: 'https://www.instagram.com/consultafonointegra',
  instagramHandle: '@consultafonointegra',
  rating: 5.0,
  reviews: 16,
  googleReviews:
    'https://www.google.com/maps/search/?api=1&query=consulta+fonointegra+talca',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Carla, quiero agendar una hora en Consulta Fonointegra.',
)}`

const enc = encodeURIComponent(
  `Consulta Fonointegra, ${BIZ.address}, ${BIZ.city}, ${BIZ.region}, Chile`,
)
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${enc}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${enc}&output=embed`

export const IMG = '/demos/consulta-fonointegra'

export const HORARIO = [{ d: 'Lunes a viernes', h: 'Desde las 10:00 · agenda por WhatsApp' }]
