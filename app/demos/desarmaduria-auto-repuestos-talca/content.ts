export const BIZ = {
  name: 'Desarmaduría Auto Repuestos Talca',
  short: 'Auto Repuestos Talca',
  rubro: 'Desarmaduría · repuestos usados',
  address: 'Av. Dos Sur 1700–1744',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5197 9638',
  phoneTel: '+56951979638',
  whatsapp: '56951979638',
  whatsapp2: '56952678448',
  whatsapp2Display: '+56 9 5267 8448',
  rating: '3,4',
  reviews: '128 reseñas en Google',
  googleReviews:
    'https://www.google.com/maps/search/?api=1&query=desarmaduria%20auto%20repuestos%20talca%20dos%20sur',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, busco un repuesto para mi auto. ¿Tienen disponibilidad?',
)}`

const enc = encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}, ${BIZ.region}, Chile`,
)
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${enc}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${enc}&output=embed`

export const IMG = '/demos/desarmaduria-auto-repuestos-talca'

export const HORARIO = [
  { d: 'Lunes a viernes', h: '9:00 – 19:00' },
  { d: 'Sábado', h: '9:00 – 13:00' },
  { d: 'Domingo', h: 'Cerrado' },
]
