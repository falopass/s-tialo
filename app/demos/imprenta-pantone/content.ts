/**
 * app/demos/imprenta-pantone/content.ts
 *
 * Datos REALES verificados (sept 2026): ficha de Google Maps + Instagram
 * @imprenta_pantone (mismo teléfono 71-2 746130 y dirección en su awning).
 * Las fotos son de su fachada y de trabajos publicados en su propio
 * Instagram. Su rating en Google es bajo (3,6 con 8 reseñas), así que en
 * vez de un bloque de reseñas se muestran los clientes reales que ellos
 * mismos exhiben.
 */

export const BIZ = {
  name: 'Imprenta Pantone',
  short: 'Pantone',
  rubro: 'Imprenta gráfica',
  address: 'Calle 6 Oriente 926, local 1',
  addressHint: 'entre 2 y 3 Sur',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '71 274 6130',
  phoneTel: '+56712746130',
  instagram: '@imprenta_pantone',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Imprenta Pantone, 6 Oriente 926, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Imprenta Pantone, 6 Oriente 926, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/imprenta-pantone'

/** Horario real: confirmado en su ficha y en el horario que ellos mismos publican. */
export const HOURS = [
  { d: 'Lunes a viernes', h: '8:30 a 18:00 · jornada continua' },
  { d: 'Sábado', h: 'Cerrado' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

/** Lo que imprimen, según sus propias publicaciones. */
export const SERVICES = [
  'Tarjetas de presentación',
  'Talonarios autocopiativos (duplicado, triplicado y cuadruplicado)',
  'Flyers y afiches',
  'Etiquetas en couche y cartón duplex',
  'Stickers',
  'Recetarios y formularios',
  'Carpetas corporativas',
  'Menús e individuales en kraft o mantequilla',
  'Tickets foliados y prepicados',
] as const

/** Trabajos reales publicados por @imprenta_pantone. */
export const JOBS = [
  {
    src: `${IMG}/talonario.webp`,
    alt: 'Talonario de entrega de equipos y materiales de obra impreso por la imprenta',
    job: 'Talonario de equipos',
    spec: 'Autocopiativo',
  },
  {
    src: `${IMG}/tickets-feria.webp`,
    alt: 'Tickets numerados impresos para la Feria de Caldos de Curicó',
    job: 'Tickets numerados',
    spec: 'Foliado · Feria de Caldos, Curicó',
  },
  {
    src: `${IMG}/etiquetas.webp`,
    alt: 'Etiquetas colgantes premium en couche blanco y cartón duplex con cordel',
    job: 'Etiquetas colgantes',
    spec: 'Couche blanco · cartón duplex',
  },
  {
    src: `${IMG}/individuales-amsterdam.webp`,
    alt: 'Individuales de papel impresos con el logo de Amsterdam Work Café',
    job: 'Individuales de mesa',
    spec: 'Amsterdam Work Café',
  },
  {
    src: `${IMG}/individuales-kraft.webp`,
    alt: 'Individuales de papel kraft con impresión tipográfica',
    job: 'Individuales kraft',
    spec: 'Papel kraft · mantequilla',
  },
  {
    src: `${IMG}/sorteo.webp`,
    alt: 'Afiche colorido de un sorteo diseñado e impreso por la imprenta',
    job: 'Afiche promocional',
    spec: 'Diseño + impresión',
  },
] as const

/** Clientes reales que aparecen en sus publicaciones. */
export const CLIENTS = [
  { name: 'Amsterdam Work Café', what: 'Individuales de mesa' },
  { name: 'Feria de Caldos · Municipalidad de Curicó', what: 'Tickets numerados' },
  { name: 'Fiesta del Chancho de Talca', what: 'Material impreso del evento' },
  { name: 'Wolf Vóley Talca', what: 'Material del club' },
] as const
