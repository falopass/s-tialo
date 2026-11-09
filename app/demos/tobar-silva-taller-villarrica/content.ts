/**
 * app/demos/tobar-silva-taller-villarrica/content.ts
 *
 * Datos del mockup. REALES (verificados el 9-11-2026):
 * - Nombre: «Mecánica Tobar», como rotula su camión grúa; en Google
 *   Maps la ficha figura como «Tobar Silva Rene», taller mecánico.
 * - Dirección: Andrés Bello 551, Villarrica. (Google Maps)
 * - Horario: lunes a viernes 9:00 a 19:00, sábado 9:00 a 13:00,
 *   domingo cerrado. (Google Maps)
 * - WhatsApp +56 9 9671 8758 (el número rotulado en su camión).
 * - Servicios: mecánica general, diagnóstico de fallas, cambio y
 *   reparación de radiadores / sistema de enfriamiento, atención de
 *   urgencia y grúa propia (de sus reseñas y de las fotos de la
 *   ficha). La ficha tiene 72 opiniones; por decisión del brief no se
 *   muestra nota ni estrellas, solo la cita textual de Marta L.
 * - La anecdota del radiador (un viajero atendido de urgencia que
 *   siguió su camino) sale de una reseña de su ficha.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, descripciones de servicios y
 * rótulos. Sin precios, sin marcas de autos, sin años de experiencia
 * ni promesas de horario de urgencia: el taller no los publica.
 * Redes sociales: no confirmadas, por eso no aparecen.
 */

export const BIZ = {
  name: 'Mecánica Tobar',
  short: 'Mecánica Tobar',
  rubro: 'Taller mecánico',
  address: 'Andrés Bello 551',
  city: 'Villarrica',
  region: 'Región de La Araucanía',
  phoneDisplay: '+56 9 9671 8758',
  phoneTel: '+56996718758',
  whatsapp: '56996718758',
} as const

export const WA_LINK =
  'https://wa.me/56996718758?text=Hola%20Mec%C3%A1nica%20Tobar%2C%20necesito%20revisar%20mi%20veh%C3%ADculo'

export const WA_LINK_GRUA =
  'https://wa.me/56996718758?text=Hola%20Mec%C3%A1nica%20Tobar%2C%20necesito%20la%20gr%C3%BAa'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mecánica Tobar, Andrés Bello 551, Villarrica, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Andrés Bello 551, Villarrica, Chile',
)}&output=embed`

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '9:00 a 19:00' },
  { dias: 'Sábado', horas: '9:00 a 13:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
] as const

/** La única cita autorizada: textual de su ficha de Google. */
export const REVIEW = {
  text: 'Un servicio de gran calidad y prestigio en la ciudad, atendido por su dueño, siempre amable y presto a solucionar los inconvenientes que representa el vehículo en problemas. Totalmente recomendado.',
  author: 'Marta L.',
  source: 'reseña en Google',
} as const

export const IMG = '/demos/tobar-silva-taller-villarrica'
