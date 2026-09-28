/**
 * Datos públicos verificados el 28-09-2026 en Google Maps y sus perfiles
 * enlazados. No se encontró un horario detallado publicado; se omite.
 */

export const BIZ = {
  name: 'Tricapa Talca spa',
  displayName: 'Tricapa Talca',
  rubro: 'Pintura, desabolladura y venta de repuestos',
  address: '6 Oriente 16, Sur 0168, y 18',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 9 7706 4403',
  whatsapp: '56977064403',
  reviews: 6,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Tricapa Talca y quiero consultar por un trabajo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}, ${BIZ.region}, Chile`,
)}`

/** Paleta del demo: carbón de cabina, crema, rojo laca y gris imprimación. */
export const C = {
  ink: '#15171A',
  ink2: '#22262B',
  paper: '#F3EFE6',
  paper2: '#E9E3D6',
  red: '#C9202F',
  redDeep: '#A3121F',
  redSoft: '#F2707A',
  amber: '#B45309',
  steel: '#8E949B',
  muted: '#5B6168',
  mutedOnDark: '#B9BFC6',
  line: 'rgba(21,23,26,0.14)',
  lineOnDark: 'rgba(243,239,230,0.16)',
} as const

/** Los tres servicios publicados en la ficha; el nombre del taller alude a las tres capas de un pintado. */
export const SERVICES = [
  {
    n: '01',
    title: 'Desabolladura',
    desc: 'Se recupera la forma original de la carrocería después de un golpe, antes de pasar a pintura.',
    tag: 'Carrocería',
  },
  {
    n: '02',
    title: 'Pintura automotriz',
    desc: 'Imprimación, color y barniz: tres capas para un acabado parejo que aguante sol y lluvia.',
    tag: 'Acabado',
  },
  {
    n: '03',
    title: 'Venta de repuestos',
    desc: 'Consulta por la pieza que necesitas; se cotiza por WhatsApp según marca y modelo.',
    tag: 'Repuestos',
  },
] as const

export const CAPAS = [
  { name: 'Imprimación', role: 'Prepara y protege la lámina', color: '#8E949B' },
  { name: 'Color', role: 'El tono exacto de tu vehículo', color: '#C9202F' },
  { name: 'Barniz', role: 'Brillo y protección final', color: '#E8ECEF' },
] as const

export const PASOS = [
  { title: 'Envía una foto del daño', desc: 'Por WhatsApp, con una toma general y otra de cerca.' },
  { title: 'Se revisa el trabajo', desc: 'Se evalúa qué necesita: desabollar, pintar o cambiar la pieza.' },
  { title: 'Recibes la cotización', desc: 'Con el detalle del trabajo para que decidas con calma.' },
] as const

export const SOURCES = [
  'Google Maps / ficha de Tricapa Talca spa (Pintura, Desabolladura y Venta de Repuestos)',
  'Perfiles de Instagram y Facebook enlazados desde la ficha',
] as const
