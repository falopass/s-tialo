/**
 * Datos reales de Camping Salto El León, verificados en su ficha de
 * Google Maps (rating, reseñas, dirección, teléfono), su Instagram
 * @campingsaltoelleon y su página de Facebook (mismo número de contacto).
 */
export const BIZ = {
  name: 'Camping Salto El León',
  short: 'Salto El León',
  rubro: 'Camping y piscina de temporada',
  address: 'Camino a Vilches, sector El Salto',
  city: 'San Clemente',
  region: 'Maule',
  phoneDisplay: '+56 9 9459 7081',
  phoneTel: '+56994597081',
  whatsapp: '56994597081',
  rating: 4.0,
  reviews: 227,
  igHandle: '@campingsaltoelleon',
  igFollowers: '4,6 mil',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola! Quiero consultar por el Camping Salto El León.',
)}`
export const WA_LINK_DIA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola! Quiero consultar por el valor de entrada de día y la temporada del camping.',
)}`
export const WA_LINK_GRUPO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola! Somos un grupo y queremos consultar por el Camping Salto El León.',
)}`
export const IG_URL = 'https://www.instagram.com/campingsaltoelleon/'
export const FB_URL = 'https://www.facebook.com/campingsaltoelleon'
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Camping+Salto+el+Leon+San+Clemente'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=Camping+Salto+el+Leon&ll=-35.5587374,-71.1865749&z=15&output=embed'

export const IMG = '/demos/camping-salto-el-leon'
