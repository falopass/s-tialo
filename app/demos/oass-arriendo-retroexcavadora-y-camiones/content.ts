export const BIZ = {
  name: 'OASS · Arriendo de retroexcavadora y camiones',
  short: 'OASS',
  rubro: 'Arriendo de maquinaria · servicios agrícolas',
  address: 'San Clemente',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8462 3643',
  phoneTel: '+56984623643',
  whatsapp: '56984623643',
  rating: '5,0',
  reviews: '1 reseña en Google',
  googleReviews:
    'https://www.google.com/maps/place/Oass+arriendo+retroexcavadora+y+cami%C3%B3nes+y+servicios+agr%C3%ADcolas/@-35.4613338,-71.3152753,17z/data=!3m1!4b1!4m6!3m5!1s0x9665a3167bcf9ccb:0x96a4e4a3763e6722',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola OASS, necesito arrendar maquinaria en San Clemente y quiero cotizar.',
)}`

const enc = encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.region}, Chile`,
)
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${enc}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${enc}&output=embed`

export const IMG = '/demos/oass-arriendo-retroexcavadora-y-camiones'

export const HORARIO = [
  { d: 'Lunes a sábado', h: '8:00 – 21:00' },
  { d: 'Domingo', h: '8:00 – 13:00' },
]
