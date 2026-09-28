/**
 * app/demos/triadent/content.ts
 *
 * Datos REALES verificados (28-09-2026): ficha de Google Maps
 * (nombre, dirección, teléfono, rating 5,0 / 119 reseñas) y su Instagram
 * @triadent.talca (misma dirección y teléfono en la bio; horario y
 * servicios publicados por la propia clínica). Fotos reales de la
 * ficha de Google y del Instagram en public/demos/triadent/.
 */

export const BIZ = {
  name: 'Clínica Dental Triadent',
  short: 'Triadent',
  address: '1 Norte 841, block B1 oficina 1, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6642 6337',
  phoneTel: '+56966426337',
  whatsapp: '56966426337',
  instagram: 'https://www.instagram.com/triadent.talca/',
  instagramHandle: '@triadent.talca',
  rating: 5,
  ratingLabel: '5,0',
  reviews: 119,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica Dental Triadent y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Dental Triadent, 1 Norte 841, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clínica Dental Triadent, 1 Norte 841, Talca, Chile',
)}&output=embed`

/** Horario publicado por la clínica en su Instagram. */
export const HORARIO = [
  { dia: 'Lunes a viernes', horas: '10:00 – 18:30' },
  { dia: 'Sábado', horas: '10:00 – 14:00' },
  { dia: 'Domingo', horas: 'Cerrado' },
] as const

export const IMG = '/demos/triadent'
