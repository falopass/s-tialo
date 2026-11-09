/**
 * app/demos/vivero-molco/content.ts
 *
 * Datos del mockup. REALES (verificados el 9-11-2026 en la ficha de
 * Google Maps «Vivero molco casa matriz», Villarrica):
 * - Nombre «Vivero Molco» (en Maps figura «Vivero molco casa matriz»;
 *   su WhatsApp responde «Vivero y paisajismo Molco»).
 * - Rubro: centro de jardinería / vivero y paisajismo.
 * - Ubicación: sector rural de Villarrica, Araucanía, sin calle
 *   publicada. Coordenadas de la ficha: -39.3362641, -72.0980231.
 *   Está dentro de una propiedad cerrada: hay que avisar antes de
 *   llegar (una reseña lo indica; se presenta como «coordina tu visita»).
 * - Horario de la ficha: todos los días de 9:00 a 18:00.
 * - WhatsApp +56 9 4276 6650.
 * - 4,9 con 32 opiniones en Google; las citas de Jorge A., Rodrigo V.,
 *   Franz S. e Israel N. son textuales de esa ficha.
 * - Variedad de plantas, árboles y arbustos, recorrido guiado con el
 *   dueño: reseñas. Suculentas, cactus, brezos y hileras de producción:
 *   fotos de la ficha. Paisajismo: nombre de su WhatsApp.
 * DE MUESTRA: titulares de sección, bajadas y textos de apoyo.
 * Sin redes sociales confirmadas: no se muestran.
 */

export const BIZ = {
  name: 'Vivero Molco',
  rubro: 'Vivero y paisajismo',
  city: 'Villarrica',
  region: 'La Araucanía',
  phoneDisplay: '+56 9 4276 6650',
  phoneTel: '+56942766650',
  whatsapp: '56942766650',
  rating: '4,9',
  ratingValue: 4.9,
  reviews: 32,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Vivero Molco, quiero coordinar una visita',
)}`

export const WA_PAISAJISMO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Vivero Molco, quiero conversar un proyecto de paisajismo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vivero Molco, Villarrica, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '-39.3362641,-72.0980231',
)}&output=embed`

export const IMG = '/demos/vivero-molco'

export const HORARIO = [{ d: 'Todos los días', h: '9:00 a 18:00' }] as const

export const REVIEWS = [
  {
    text: 'Recomiendo 100% el Vivero, nos atendió Don Rodrigo Wenzel, una persona apasionada por lo que hace, nos dio un recorrido personalizado y quedamos encantados con el lugar. Tiene mucha variedad de plantas, árboles y arbustos y a buenos precios! 10 de 10.',
    author: 'Jorge A.',
    fuente: 'Reseña de Google',
  },
  {
    text: 'Si vas te llevarás una maravillosa sorpresa. Más que un lugar donde comprar, es una hermosa experiencia guiada por un experto como lo es Don Rodrigo. Altamente recomendable.',
    author: 'Rodrigo V.',
    fuente: 'Reseña de Google',
  },
  {
    text: 'Realmente fantástico. Me habría quedado horas y horas recorriendo el vivero. Su dueño, con una gran paciencia, fue explicando en detalle las características y cuidados de cada planta y arbusto.',
    author: 'Franz S.',
    fuente: 'Reseña de Google',
  },
  {
    text: 'Excelente atención y variedad de plantas, Rodrigo se dio el tiempo de darnos un recorrido por el lugar. Se nota la dedicación.',
    author: 'Israel N.',
    fuente: 'Reseña de Google',
  },
] as const
