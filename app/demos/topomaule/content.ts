/**
 * app/demos/topomaule/content.ts
 *
 * Datos REALES verificados: ficha de Google Maps (Topomaule, empresa
 * de topografía en Talca, +56 9 3918 0919, abierto 24 h lunes a
 * sábado, 5.0 con 5 opiniones) y su sitio archivado topomaule.cl
 * (servicios, clientes, logo y fotos aéreas de trabajos).
 */

export const BIZ = {
  name: 'Topomaule',
  tagline: 'Soluciones Topográficas',
  rubro: 'Empresa de topografía',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3918 0919',
  phoneTel: '+56939180919',
  whatsapp: '56939180919',
  email: 'topomau7@gmail.com',
  rating: 5.0,
  reviews: 5,
  hours: [
    { d: 'Lunes a sábado', h: 'Abierto 24 horas' },
    { d: 'Domingo', h: 'Cerrado' },
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Topomaule! Vi su página y quiero cotizar un levantamiento topográfico',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Topomaule, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Topomaule, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/topomaule'

export const C = {
  paper: '#F2EFE3',
  paperDeep: '#E7E2CE',
  ink: '#20261F',
  muted: '#57605A',
  dark: '#1A2620',
  dark2: '#131D18',
  card: '#FBF9F0',
  orange: '#E8960F',
  orangeDeep: '#8A4A0B',
  green: '#2E9E4F',
  red: '#C23030',
  contour: 'rgba(32,38,31,0.10)',
  line: 'rgba(32,38,31,0.18)',
  lineOnDark: 'rgba(242,239,227,0.25)',
} as const
