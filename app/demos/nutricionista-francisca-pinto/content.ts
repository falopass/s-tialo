/**
 * app/demos/nutricionista-francisca-pinto/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + su perfil en
 * integravita.cl + Doctoralia): nombre, dirección, comuna, WhatsApp,
 * horario, rating, textos de reseñas, foto y certificaciones.
 * El resto (pasos de la consulta y textos de apoyo) es contenido de
 * muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Nutricionista Francisca Pinto',
  short: 'Francisca Pinto',
  first: 'Francisca',
  rubro: 'Nutricionista',
  address: 'Edificio Espacio · 2 Ote. 870',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9485 0554',
  phoneTel: '+5694850554',
  whatsapp: '5694850554',
  googleRating: '4,9',
  googleReviews: '7',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Francisca, vi tu página y quiero agendar una consulta de nutrición',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Nutricionista+Francisca+Pinto/@-35.4286656,-71.6642309,17z/data=!4m6!3m5!1s0x9665c79205b6f4a9:0x3784eae57250c415'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Nutricionista Francisca Pinto, Edificio Espacio, Talca',
)}&output=embed`

export const INTEGRAVITA_URL = 'https://integravita.cl/servicios/nutricion/'

export const IMG = '/demos/nutricionista-francisca-pinto'
