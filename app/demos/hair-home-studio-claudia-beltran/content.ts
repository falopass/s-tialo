/**
 * app/demos/hair-home-studio-claudia-beltran/content.ts
 *
 * Datos REALES de la ficha pública de Google Maps y del Instagram
 * @beltrancastillo.cl: nombre, dirección en Linares, WhatsApp,
 * calificación 5,0, el servicio anunciado en su bio ("lifting de
 * pestañas / alisados permanentes / home studio"), el sello "se
 * identifica como mujer empresaria" y las fotos de trabajos reales.
 * La lista de servicios complementarios es de muestra.
 */

export const BIZ = {
  name: 'Hair Home studio Claudia Beltrán',
  short: 'Hair Home studio',
  rubro: 'Centro de estética',
  address: 'Los Andes 1384',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8718 7324',
  whatsapp: '56987187324',
  instagram: 'https://www.instagram.com/beltrancastillo.cl',
  instagramUser: '@beltrancastillo.cl',
  rating: '5,0',
  reviews: 23,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Claudia, vi la página de Hair Home studio y quiero agendar una hora',
)}`

export const WA_LINK_HORA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Claudia, vi la página de Hair Home studio y quiero consultar por un servicio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hair Home studio Claudia Beltrán, Los Andes 1384, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Los Andes 1384, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/hair-home-studio-claudia-beltran'
