/**
 * app/demos/hair-home-studio-claudia-beltran/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección en Linares, las 23 reseñas, el Instagram y el WhatsApp.
 * Todo lo demás (servicios, precios, horarios, textos de clientes)
 * es contenido de muestra para mostrar cómo se vería el sitio.
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
