export const BIZ = {
  name: 'Gasfitería Bastías',
  short: 'Gasfitería Bastías',
  rubro: 'Gasfitería · técnico certificado SEC',
  address: 'Calle 24 Poniente 853',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7722 6112',
  phoneTel: '+56977226112',
  whatsapp: '56977226112',
  instagram: 'https://www.instagram.com/gasfiter_en_talca',
  rating: '4,8',
  reviews: '27 reseñas en Google',
  googleReviews:
    'https://www.google.com/maps/search/?api=1&query=gasfiter%20en%20talca%20calle%2024%20poniente',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, necesito un gasfiter en Talca. ¿Me pueden ayudar?',
)}`

const enc = encodeURIComponent(
  `Gasfiter en talca, ${BIZ.address}, ${BIZ.city}, ${BIZ.region}, Chile`,
)
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${enc}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${enc}&output=embed`

export const IMG = '/demos/gasfiteria-bastias-talca'

export const HORARIO = [
  { d: 'Lunes a domingo', h: 'Abierto 24 horas' },
]
