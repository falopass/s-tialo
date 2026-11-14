/**
 * app/demos/impresiones-digitales-serfocomp-concepcion/content.ts
 *
 * Datos REALES verificados (14-11-2026): ficha de Google Maps
 * (nombre, dirección, horario, teléfono) y los letreros/afiches del
 * propio negocio (servicios, marca y colores turquesa/naranja).
 * Las citas de opiniones son textuales de Google, con su nombre.
 * NO hay: precios, plazos, correo publicado, redes ni nombres del
 * equipo; no se muestran. La nota de Google tampoco se muestra.
 */

export const BIZ = {
  name: 'impresiones digitales serfocomp',
  short: 'Serfocomp',
  rubro: 'Imprenta digital',
  address: 'Aníbal Pinto 343',
  addressHint: 'Locales 3 y 18',
  city: 'Concepción',
  region: 'Región del Biobío',
  phoneDisplay: '+56 9 9864 4910',
  whatsapp: '56998644910',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Serfocomp, quiero cotizar una impresión',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'impresiones digitales serfocomp, Anibal Pinto 343, Concepción',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'impresiones digitales serfocomp, Anibal Pinto 343, Concepción',
)}&output=embed`

export const IMG = '/demos/impresiones-digitales-serfocomp-concepcion'

/** Horario real de su ficha de Google Maps. */
export const HOURS = [
  { d: 'Lunes a viernes', h: '10:00 a 18:00' },
  { d: 'Sábado', h: 'Cerrado' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

/** Los servicios de su letrero y sus afiches, tal cual los anuncian. */
export const SERVICES = [
  'Fotocopias',
  'Impresión láser color',
  'Impresión gráfica',
  'Ploteo de planos',
  'Anillados',
  'Empastes',
  'Tesis',
  'Rotulados de CD',
  'Pendones',
  'Chapitas',
] as const

/** Citas textuales de Google (la nota no se muestra). */
export const QUOTES = [
  {
    q: 'Excelente servicio, rápido, y muy buena calidad, lo recomiendo 100%',
    a: 'Catalina Hernández',
  },
  {
    q: 'Excelente calidad y atención',
    a: 'Dayra Coloma',
  },
] as const
