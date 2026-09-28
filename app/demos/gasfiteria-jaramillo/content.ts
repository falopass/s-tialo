export const BIZ = {
  name: 'Gasfitería Jaramillo',
  short: 'Jaramillo',
  rubro: 'Gasfitería a domicilio · autorizado SEC',
  address: 'Av. Circunvalación Nte. 3316',
  addressAlt: 'Pje. 19 Nte. B',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7832 3485',
  phoneTel: '+56978323485',
  whatsapp: '56978323485',
  email: 'm.jaramillo76@gmail.com',
  facebook: 'https://www.facebook.com/search/top?q=gasfiteria%20talca%20jaramillo',
  googleReviews:
    'https://www.google.com/maps/search/?api=1&query=gasfiteria+jaramillo+talca',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, necesito un gasfiter en Talca. ¿Me pueden ayudar?',
)}`

const enc = encodeURIComponent(
  `Gasfitería Jaramillo, ${BIZ.address}, ${BIZ.city}, ${BIZ.region}, Chile`,
)
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${enc}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${enc}&output=embed`

export const IMG = '/demos/gasfiteria-jaramillo'

export const HORARIO = [{ d: 'Lunes a domingo', h: 'Atención 24 horas' }]
