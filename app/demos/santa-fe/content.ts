/**
 * app/demos/santa-fe/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, teléfono y rating/reseñas. Todo lo demás es contenido de
 * ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Ingeniería y Construcciones Santa Fe',
  short: 'Santa Fe',
  address: '4 Norte 30, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8829 3000',
  phoneTel: '+56988293000',
  whatsapp: '56988293000',
  rating: 4.3,
  ratingLabel: '4,3',
  reviews: 22,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ingeniería y Construcciones Santa Fe y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ingeniería y Construcciones Santa Fe, 4 Norte 30, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Ingeniería y Construcciones Santa Fe, 4 Norte 30, Talca, Chile',
)}&output=embed`

/** Coordenadas reales de la ficha de Google Maps (Cuatro Nte. 30, Talca) */
export const COORDS = '−35,4214 · −71,6776'

/** Reseñas reales publicadas en la ficha de Google Maps (citadas verbatim) */
export const RESENAS = [
  {
    texto: 'Muy buena onda.',
    autor: 'Miguel Angel S.',
    estrellas: 5,
  },
  {
    texto: 'Porque es exelente.',
    autor: 'Nicolás H.',
    estrellas: 5,
  },
  {
    texto: 'Sólo falta coordinación.',
    autor: 'Pedro M.',
    estrellas: 5,
  },
  {
    texto: 'Exelente empresa.',
    autor: 'Claudio O.',
    estrellas: 5,
  },
] as const
