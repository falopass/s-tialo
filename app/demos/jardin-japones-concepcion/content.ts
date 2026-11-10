/**
 * app/demos/jardin-japones-concepcion/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada el
 * 10-11-2026): nombre, rubro (floristería), dirección en Ing. Ernesto Pinto
 * Lagarrigue 1097 (San Pedro de la Paz), horario, WhatsApp, rating 4,4 con
 * 145 opiniones y las tres reseñas citadas textuales. La oferta descrita
 * (invernadero con flores de temporada, plantas de interior en agua,
 * arbustos, árboles y frutales, jardín con pasto junto al agua, carpa para
 * cumpleaños infantiles) sale de las fotos, los letreros y las reseñas de
 * la misma ficha. Redes sociales no confirmadas: se omiten. El texto
 * editorial de las secciones es de muestra.
 */

export const BIZ = {
  name: 'Jardín Japonés Concepción',
  short: 'Jardín Japonés',
  rubro: 'Vivero y floristería',
  address: 'Ing. Ernesto Pinto Lagarrigue 1097',
  city: 'San Pedro de la Paz',
  region: 'Gran Concepción',
  phoneDisplay: '+56 9 7969 1133',
  whatsapp: '56979691133',
  rating: '4,4',
  ratingValue: 4.4,
  reviews: 145,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Jardín Japonés, quiero consultar por plantas',
)}`

export const WA_CUMPLE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Jardín Japonés, quiero consultar disponibilidad para un cumpleaños en el jardín',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Jardín Japonés Concepción, Ernesto Pinto Lagarrigue 1097, San Pedro de la Paz',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Jardín Japonés Concepción, Ernesto Pinto Lagarrigue 1097, San Pedro de la Paz',
)}&output=embed`

export const HORARIO = [
  { d: 'Lunes a sábado', h: '9:00 a 14:00 · 15:00 a 18:15' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

export const REVIEWS = [
  {
    author: 'Evelyn R.',
    fuente: 'Reseña de Google',
    text: 'Excelente lugar, agradable y la persona que atiende, don Daniel es muy amable y con mucha paciencia.',
  },
  {
    author: 'Freddy B.',
    fuente: 'Reseña de Google',
    text: 'Excelente lugar para celebrar cumpleaños de niños.',
  },
  {
    author: 'Miriam M.',
    fuente: 'Reseña de Google',
    text: 'Agradable carpa para celebrar cumpleaños infantiles, ubicada a un costado del sector de venta de plantas.',
  },
] as const

export const IMG = '/demos/jardin-japones-concepcion'
