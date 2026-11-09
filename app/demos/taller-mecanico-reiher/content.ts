/**
 * app/demos/taller-mecanico-reiher/content.ts
 *
 * Datos del mockup. REALES (verificados el 9-11-2026 en su ficha de
 * Google Maps y en su letrero):
 * - Nombre del letrero: «REIHER diagno service»; en Maps figura como
 *   «Taller Mecánico y Centro de Diagnóstico Reiher». Su logo es un
 *   auto dentro de una pantalla de computador. (foto del letrero)
 * - Dirección: Aníbal Pinto 1854, Osorno, Región de Los Lagos.
 *   (Maps y letrero)
 * - WhatsApp +56 9 9458 3939 (el contacto es solo por WhatsApp).
 * - Reputación: 4,5 con 29 opiniones en Google. Las cuatro citas de
 *   REVIEWS son textuales de su ficha (Lizzette M., Rafael J.,
 *   Roxana B., Alex L.).
 * - Qué ofrecen, según su nombre, su letrero, sus reseñas y sus fotos:
 *   diagnóstico («centro de diagnóstico»), mecánica general en taller
 *   techado con elevadores, mantenciones por kilometraje (una reseña
 *   habla de la mantención de los 40 mil) y atención de autos y
 *   camionetas.
 * - Horario: no confirmado. No se muestra: la agenda se pide por
 *   WhatsApp. Redes sociales: no confirmadas, no se enlazan.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, descripciones de servicios,
 * los rótulos de «lectura» y los pasos del proceso (sin plazos ni
 * precios, que el taller no publica). Las fotos son reales de su
 * ficha, en public/demos/taller-mecanico-reiher/.
 */

export const BIZ = {
  name: 'Reiher Diagno Service',
  short: 'Reiher',
  mapsName: 'Taller Mecánico y Centro de Diagnóstico Reiher',
  rubro: 'Taller mecánico y centro de diagnóstico',
  address: 'Aníbal Pinto 1854',
  city: 'Osorno',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 9458 3939',
  whatsapp: '56994583939',
  rating: '4,5',
  ratingValue: 4.5,
  reviews: 29,
} as const

export const WA_LINK =
  'https://wa.me/56994583939?text=Hola%20Reiher%2C%20quiero%20agendar%20una%20revisi%C3%B3n'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Taller Mecánico y Centro de Diagnóstico Reiher, Aníbal Pinto 1854, Osorno, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Aníbal Pinto 1854, Osorno, Chile',
)}&output=embed`

/** Opiniones textuales de su ficha de Google (4,5 · 29 opiniones). */
export const REVIEWS = [
  {
    text: 'Llevé a mi chinita Tiggo 2 a mantención de 40 mil. Taller expedito, las 3 personas con las que interactué, muy amables. 100% confiable.',
    author: 'Lizzette M.',
  },
  {
    text: 'Excelente atención. Asistencia oportuna y muy rápida. Totalmente recomendable.',
    author: 'Rafael J.',
  },
  {
    text: 'Excelente, me recibieron mi camioneta a pesar de estar copados y me la sacaron como a los 3 días. Agradecida por la gestión y el maestro muy amable, excelente servicio.',
    author: 'Roxana B.',
  },
  {
    text: 'Muy buen taller, personas muy amables y profesionales.',
    author: 'Alex L.',
  },
] as const

export const IMG = '/demos/taller-mecanico-reiher'
