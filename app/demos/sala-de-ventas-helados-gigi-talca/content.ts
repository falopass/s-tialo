/**
 * app/demos/sala-de-ventas-helados-gigi-talca/content.ts
 *
 * Datos REALES verificados (ficha pública de Google Maps):
 * nombre "Sala de Ventas Helados Gigi – Productos IOB", rubro
 * heladería, dirección Longitudinal Sur, Sector Peor Es Nada
 * (Perquilauquén, Talca), teléfono/WhatsApp +56 9 7549 9877,
 * horario, 4.5 estrellas y ~475 opiniones. Los precios citados
 * salen de la pizarra fotografiada en el mismo local.
 */

export const BIZ = {
  name: 'Sala de Ventas Helados Gigi',
  short: 'Helados Gigi',
  rubro: 'Sala de ventas de fábrica · helados y confites IOB',
  address: 'Longitudinal Sur, Sector Peor Es Nada',
  comuna: 'Perquilauquén',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7549 9877',
  phoneTel: '+56975499877',
  whatsapp: '56975499877',
  rating: 4.5,
  reviews: 475,
  hours: [
    { d: 'Lunes a viernes', h: '8:30 – 19:00' },
    { d: 'Sábado', h: '9:00 – 17:00' },
    { d: 'Domingo', h: 'Cerrado' },
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Helados Gigi! Vi su página y quiero consultar precios',
)}`

export const WA_LINK_CAJA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Helados Gigi! Vi su página y quiero consultar precios por caja',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Sala de Ventas Helados Gigi Productos IOB, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sala de Ventas Helados Gigi, Longitudinal Sur, Talca',
)}&output=embed`

export const IMG = '/demos/sala-de-ventas-helados-gigi-talca'

export const C = {
  paper: '#F3F8FA',
  paperDeep: '#E4EEF4',
  ink: '#0E2B3E',
  muted: '#4A6474',
  deep: '#0B3C74',
  deep2: '#082D59',
  card: '#FFFFFF',
  red: '#D2292F',
  redDeep: '#A81E23',
  green: '#157A40',
  yellow: '#FFC62B',
  ice: '#BFE0EE',
  line: 'rgba(14,43,62,0.14)',
  lineOnDark: 'rgba(255,255,255,0.22)',
} as const
