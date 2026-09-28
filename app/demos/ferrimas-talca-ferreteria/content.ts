/**
 * app/demos/ferrimas-talca-ferreteria/content.ts
 *
 * Datos del mockup. REALES (verificados en la ficha de Google Maps de
 * FERRIMAS Talca Ferretería): nombre, dirección (Catorce Ote. 1848,
 * Talca), teléfono (+56 9 9391 3447), horario (Lu–Vi 9:00–19:30,
 * Sá 9:00–18:00, Do cerrado) y rating 4,7 con ~45 reseñas en Google.
 * Los rubros salen de su propio letrero ("FERRETERÍA F+M"):
 * herramientas, gasfitería, electricidad, construcción, madera, tubos
 * y fittings PVC, pinturas y hogar. El despacho gratis dentro de Talca
 * y la atención de sus dueños salen de reseñas reales citadas abajo.
 */

export const BIZ = {
  name: 'FerriMas Ferretería',
  short: 'FerriMas',
  rubro: 'Ferretería de barrio',
  address: 'Catorce Oriente 1848',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9391 3447',
  phoneTel: '+56993913447',
  whatsapp: '56993913447',
  rating: '4,7',
  reviews: 45,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola FerriMas, vi su página y quiero consultar por un producto',
)}`

export const WA_LINK_DESPACHO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola FerriMas, quiero consultar por despacho a domicilio en Talca',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'FERRIMAS Talca Ferretería, Catorce Ote. 1848, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'FERRIMAS Talca Ferretería, Catorce Ote. 1848, Talca',
)}&output=embed`

export const IMG = '/demos/ferrimas-talca-ferreteria'

/** Los rubros que anuncia su propio letrero. */
export const RUBROS = [
  'Herramientas',
  'Gasfitería',
  'Electricidad',
  'Construcción',
  'Madera',
  'Tubos y fittings PVC',
  'Pinturas',
  'Hogar y más',
] as const

export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '9:00 – 19:30' },
  { dia: 'Sábado', hora: '9:00 – 18:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
] as const

/** Reseñas reales de Google (iniciales del autor). */
export const RESENAS = [
  {
    texto:
      'Muy buena ferretería, aunque se ve pequeña pero encuentras lo que necesites. Atendidos por sus dueños y a muy buen precio, con despacho a domicilio.',
    autor: 'J.G.',
  },
  {
    texto:
      'Hay variedad en materiales de construcción y más barato que las ferreterías tradicionales. Tienen despacho gratis dentro de Talca.',
    autor: 'E.O.',
  },
  {
    texto: 'Tienen variedad de productos y excelentes precios. 100% recomendable.',
    autor: 'K.S.',
  },
] as const
