/**
 * app/demos/matrokin/content.ts
 *
 * Datos REALES verificados (ficha pública de Google Maps + Instagram
 * @matrokin_spa + Facebook @kinesiologomatrona):
 * - Matrokin SPA es un CENTRO KINÉSICO Y MATRONIL (no spa de relajación):
 *   kinesiología motora/deportiva/respiratoria, matrona (Camila Caro),
 *   estética femenina y venta de suplementos deportivos.
 * - Dirección, teléfono/WhatsApp, horario y rating desde la ficha de Maps.
 * - Servicios desde sus flyers oficiales; reseñas textuales de Google.
 */

export const BIZ = {
  name: 'Matrokin SPA',
  tagline: 'Centro kinésico y matronil',
  rubro: 'Centro kinésico y matronil',
  address: 'Camino a Agua Fría 767',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5401 6398',
  phoneTel: '+56954016398',
  whatsapp: '56954016398',
  rating: 4.6,
  reviews: 11,
  instagram: '@matrokin_spa',
  instagramUrl: 'https://www.instagram.com/matrokin_spa/',
  facebook: '@kinesiologomatrona',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Matrokin y quiero reservar una hora',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Matrokin SPA, Camino a Agua Fría 767, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Matrokin SPA, Camino a Agua Fría 767, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/matrokin'

export const HOURS = [
  { days: 'Lunes a viernes', time: '8:00–22:00' },
  { days: 'Sábado', time: '8:00–13:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

/** Kinesiología — servicios publicados en su flyer oficial */
export const KINE_SERVICES = [
  'Terapia láser',
  'Ondas de choque',
  'Punción seca',
  'Magnetoterapia',
  'Masoterapia',
  'Electropunción',
  'Electroestimulación',
  'Reintegro deportivo',
  'Tape y vendajes',
  'Ventosas',
  'Presoterapia',
  'Microelectrólisis',
]

/** Matrona — lista publicada en su flyer «Servicios de Matrona» */
export const MATRONA_SERVICES = [
  'Control ginecológico',
  'Control prenatal',
  'Control postparto',
  'Toma de PAP',
  'Consejería en salud sexual',
  'Métodos anticonceptivos',
  'Implante anticonceptivo: instalación y retiro',
  'Procedimientos estéticos femeninos',
]

/** Reseñas textuales de su ficha de Google (11 opiniones, nota 4.6) */
export const REVIEWS = [
  {
    author: 'Carolina Aedo',
    stars: 5,
    date: 'hace 7 meses',
    text: 'Excelente atención. El kinesiólogo demuestra una preocupación genuina por sus pacientes, siempre atento y dedicado. Es un profesional de gran calidad y ofrece un servicio realmente destacado. Muy recomendado. También tienen atención de matrona, excelente ella como profesional.',
  },
  {
    author: 'Carla Sepúlveda Cepeda',
    stars: 5,
    date: 'hace 7 meses',
    text: 'Grandes profesionales. Muy dedicados por sus pacientes, cuentan con equipos únicos en Molina, lo que mejora la atención y recuperación.',
  },
  {
    author: 'Fabian Meza Jelvez',
    stars: 5,
    date: 'hace 7 meses',
    text: 'Excelente atención! Terapia personalizada y dedicada 100% a tratar nuestras dolencias. Cada vez con mejor equipamiento.',
  },
  {
    author: 'Rodrigo Hernández Hernández',
    stars: 5,
    date: 'hace 7 meses',
    text: 'Excelente atención, muy dedicado a sus pacientes y excelente venta de alimentos suplementarios.',
  },
  {
    author: 'cecilia villegas',
    stars: 5,
    date: 'hace 7 meses',
    text: 'Excelente atención!!! 100% recomendado. Buen equipo de trabajo.',
  },
]
