/**
 * app/demos/cg-salon-spa/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro (spa de masajes y cosmetología),
 * dirección (Carlos Silva Renard 906, San Clemente), WhatsApp
 * +56 9 4402 6627, horario todos los días 10:00 a 19:00 y nota 5,0
 * con 6 reseñas (ficha de Google Maps). Instagram @cg_salon_spa
 * (confirmado: nombre, rubro y wa.link en su bio). Las fotos y el
 * wordmark en amarillo vienen de su ficha de Maps y de sus propias
 * publicaciones; las reseñas se citan tal como las escribieron
 * sus clientes en Google. Los textos de apoyo (titulares, FAQ)
 * son de muestra.
 */

export const BIZ = {
  name: 'CG Salón Spa',
  short: 'CG Salón Spa',
  rubro: 'Spa de masajes y cosmetología',
  address: 'Carlos Silva Renard 906',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4402 6627',
  phoneTel: '+56944026627',
  whatsapp: '56944026627',
  reviews: 6,
  rating: '5,0',
  hours: 'Todos los días · 10:00 a 19:00',
  instagram: 'https://www.instagram.com/cg_salon_spa/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de CG Salón Spa y quiero agendar una hora',
)}`

export const WA_LINK_SERVICIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de CG Salón Spa y quiero consultar por un servicio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'CG Salón Spa, Carlos Silva Renard 906, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'CG Salón Spa, Carlos Silva Renard 906, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/cg-salon-spa'
