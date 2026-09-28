export const BIZ = {
  name: 'Gasfiter Sec',
  legal: 'Gasfitería y soluciones F.C',
  rubro: 'Gasfitería certificada SEC',
  address: 'Pje. 23 Sur 124',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6570 9371',
  phoneTel: '+56965709371',
  whatsapp: '56965709371',
  atiende: 'Daniel Fuentes',
  googleReviews:
    'https://www.google.com/maps/search/?api=1&query=gasfiter+sec+talca',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, necesito un gasfiter en Talca. ¿Me pueden ayudar?',
)}`

const enc = encodeURIComponent(
  `Gasfiter Sec, ${BIZ.address}, ${BIZ.city}, ${BIZ.region}, Chile`,
)
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${enc}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${enc}&output=embed`

export const IMG = '/demos/gasfiteria-sec-soluciones'

export const HORARIO = [{ d: 'Todos los días', h: 'Abierto 24 horas' }]
