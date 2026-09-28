/**
 * Datos reales de Camping Los Castaños, verificados en su ficha de
 * Google Maps (rating, reseñas, dirección K-275, teléfono), sus reseñas
 * (servicios, cafetería, distancias) y su Instagram @campingloscastanos.
 */
export const BIZ = {
  name: 'Camping Los Castaños',
  short: 'Los Castaños',
  rubro: 'Camping junto al río Claro',
  address: 'Camino K-275, sector Río Claro',
  city: 'Molina',
  region: 'Maule',
  phoneDisplay: '+56 9 6602 4269',
  phoneTel: '+56966024269',
  whatsapp: '56966024269',
  rating: 4.6,
  reviews: 95,
  igHandle: '@campingloscastanos',
  igFollowers: '7,4 mil',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola! Quiero consultar por Camping Los Castaños.',
)}`
export const WA_LINK_SITIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola! Quiero consultar disponibilidad de sitio en Los Castaños.',
)}`
export const WA_LINK_CABANA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola! Quiero consultar por las Cabañas en Ruedas de Los Castaños.',
)}`
export const IG_URL = 'https://www.instagram.com/campingloscastanos/'
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Camping+Los+Casta%C3%B1os+Molina'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=Camping+Los+Casta%C3%B1os&ll=-35.4065244,-71.0849482&z=15&output=embed'

export const IMG = '/demos/camping-los-castanos'
