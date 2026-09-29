/**
 * app/demos/costanera-pelluhue/content.ts
 *
 * Datos del mockup. REALES (verificados en ficha de Google Maps, sitio
 * oficial costanerarestoranbar.cl y su carta PDF publicada): nombre,
 * ubicación (Costanera S/N, Pelluhue), WhatsApp del sitio oficial,
 * horarios de la ficha de Maps, rating, reseñas del sitio oficial y los
 * platos con precios de su carta. Textos de secciones de muestra.
 */

export const BIZ = {
  name: 'Costanera',
  full: 'Costanera, Restorán & Bar',
  rubro: 'Restorán y bar de playa',
  address: 'Costanera S/N, Pelluhue',
  city: 'Pelluhue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9375 1123',
  phoneTel: '+56993751123',
  whatsapp: '56993751123',
  instagram: 'https://www.instagram.com/costanerarestoranbar',
  igUser: '@costanerarestoranbar',
  facebook: 'https://www.facebook.com/costanerapelluhue',
  rating: 4.2,
  reviewsCount: 804,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Costanera, vi su página y quiero reservar una mesa',
)}`

export const WA_LINK_CARTA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Costanera, vi su página y quiero consultar la carta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Costanera Restorán Bar, Pelluhue, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Costanera Restorán Bar, Pelluhue, Chile',
)}&output=embed`

export const IMG = '/demos/costanera-pelluhue'

/** Precios tomados de la carta PDF publicada en costanerarestoranbar.cl */
export const CARTA = {
  ceviches: [
    ['Ceviche de cochayuyo', '$10.500'],
    ['Ceviche de reineta', '$14.500'],
    ['Ceviche de salmón', '$15.500'],
    ['Ceviche mixto', '$16.500'],
  ],
  cocina: [
    ['Suprema de pollo', '$10.500'],
    ['Plateada a la olla', '$14.500'],
    ['Lomo vetado de res', '$17.500'],
    ['Mariscal', '$14.500'],
    ['Pastel de jaiba', '$15.500'],
    ['Guiso de cochayuyo', '$12.800'],
  ],
  tablas: 'Chacaica, Caleta del Maule, Carnívora y Cuatro mares, desde $24.500.',
  ensaladas: 'Vegetariano, César de pollo, camarón y salmón, desde $9.500.',
  ninos: [
    ['Suprema con agregado', '$7.500'],
    ['Papapizza', '$7.500'],
    ['Salchipapa o nuggets', '$6.500'],
  ],
  aperitivos: 'Pisco sour, Aperol Spritz, Mojito, Caipirinha, Daiquiri y más, desde $5.000.',
} as const

export const HORARIOS = [
  { dias: 'Miércoles y jueves', horas: '12:30 - 21:30' },
  { dias: 'Viernes', horas: '12:30 - 23:00' },
  { dias: 'Sábado', horas: '12:30 - 01:30' },
  { dias: 'Domingo', horas: '12:30 - 19:30' },
  { dias: 'Lunes y martes', horas: 'Cerrado' },
]
