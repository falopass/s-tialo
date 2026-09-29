/**
 * app/demos/colorjet-una-buena-impresion/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + ficha comercial
 * de Construex + mercadopublico): nombre comercial COLORJET "una buena
 * impresión", dirección en 11 Norte 1238 (Talca), teléfono, horarios,
 * rating 5.0 con 29 reseñas (todas 5 estrellas) y las citas de clientes.
 * Las fotos de trabajos provienen de su propia ficha comercial en
 * Construex. Los textos de venta son de muestra.
 */

export const BIZ = {
  name: 'ColorJet',
  legal: 'COLORJET, UNA BUENA IMPRESION',
  tagline: 'una buena impresión',
  rubro: 'Imprenta gráfica',
  address: '11 Norte 1238',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '71 222 1829',
  phoneTel: '+56712221829',
  rating: 5.0,
  reviews: 29,
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'COLORJET UNA BUENA IMPRESION, 11 Norte 1238, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'COLORJET UNA BUENA IMPRESION, 11 Norte 1238, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/colorjet-una-buena-impresion'

/** Horario publicado en su ficha de Google. */
export const HORAS = [
  { days: 'Lunes a jueves', time: '8:30 a 13:30 · 15:00 a 18:00' },
  { days: 'Viernes', time: '8:30 a 13:30 · 15:00 a 17:00' },
  { days: 'Sábado y domingo', time: 'Cerrado' },
] as const

/**
 * Trabajos publicados en su propia ficha comercial (Construex).
 * Se muestran como registro de trabajos, no como fotografía del taller.
 */
export const REGISTRO = [
  {
    src: `${IMG}/backdrop-congreso.webp`,
    alt: 'Backdrop impreso para el Congreso Latinoamericano de Arquitectura 2014',
    job: 'gigantografía',
    title: 'Backdrop de congreso',
  },
  {
    src: `${IMG}/vidriera-resto.webp`,
    alt: 'Vidriera de restobar con gráfica adhesiva y horarios impresos',
    job: 'vidriera',
    title: 'Gráfica de vidriera',
  },
  {
    src: `${IMG}/letrero-menta.webp`,
    alt: 'Señalética de pared para clínica dental con logo verde',
    job: 'señalética',
    title: 'Señalética interior',
  },
  {
    src: `${IMG}/vinilo-jugo.webp`,
    alt: 'Vinilo impreso de jugo de naranja instalado en superficie',
    job: 'vinilo',
    title: 'Vinilo de producto',
  },
  {
    src: `${IMG}/cumple.webp`,
    alt: 'Banners impresos de cumpleaños y promoción con personajes',
    job: 'pendones',
    title: 'Pendones de evento',
  },
  {
    src: `${IMG}/foto-collage.webp`,
    alt: 'Pliego de impresión fotográfica con mosaico de paisajes',
    job: 'impresión fotográfica',
    title: 'Impresión en pliego',
  },
] as const

/** Reseñas reales publicadas en su ficha de Google (todas 5 estrellas). */
export const RESENAS = [
  {
    author: 'Pablo Yáñez',
    stars: 5,
    text: 'Entregan un servicio 10/10, muy profesionales, amables y flexibles. El trabajo quedó mejor de lo que esperaba.',
  },
  {
    author: 'Mariana López',
    stars: 5,
    text: 'Muy buena experiencia, mandé a imprimir un póster con urgencia, tuvieron buena disposición y estuvo listo al siguiente día, nítido y bonito, muchas gracias.',
  },
  {
    author: 'Pao Sepulveda',
    stars: 5,
    text: 'Imprenta super eficiente y rápida. Tienen toda la voluntad del mundo para responder a dudas y entregar los mejores materiales; máquinas modernas que entregan una impresión de gran calidad.',
  },
] as const
