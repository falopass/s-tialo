/**
 * app/demos/lavanderna-de-cobertores-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + letrero del
 * local): nombre de marca "Lavandería Clean is Good", dirección
 * (4 y Media Ote. A-0574, Talca), teléfono +56 9 4406 8553, WhatsApp del
 * letrero +56 9 9319 3552, Instagram @cleanisgoodtalca, nota 4.7 con
 * 11 reseñas y el precio anunciado "cubrecama o cobertor desde $5.000".
 * Las descripciones de servicio son de muestra para mostrar cómo se
 * vería el sitio; al publicar van las del negocio.
 */

export const BIZ = {
  name: 'Lavandería Clean is Good',
  short: 'Clean is Good',
  rubro: 'Lavandería',
  address: '4 y Media Ote. A-0574',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4406 8553',
  phoneTel: '+56944068553',
  whatsapp: '56993193552',
  whatsappDisplay: '+56 9 9319 3552',
  instagram: 'https://www.instagram.com/cleanisgoodtalca',
  igUser: '@cleanisgoodtalca',
  rating: 4.7,
  reviews: 11,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de la lavandería y quiero consultar por un lavado',
)}`

export const WA_LINK_DELIVERY = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de la lavandería y quiero pedir el retiro a domicilio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Lavandería de Cobertores Talca, 4 y Media Oriente A 0574, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '4 y Media Oriente A 0574, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/lavanderna-de-cobertores-talca'
