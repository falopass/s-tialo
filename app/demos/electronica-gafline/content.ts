export const BIZ = {
  name: 'Electrónica GafLine',
  short: 'GafLine',
  rubro: 'Accesorios y servicio técnico',
  address: 'Quechereguas 2127',
  city: 'Molina',
  region: 'Maule',
  phoneDisplay: '+56 9 6151 5911',
  whatsapp: '56961515911',
  reviews: '20',
  rating: '5,0',
  instagram: '@gafline_molina',
  instagramUrl: 'https://www.instagram.com/gafline_molina/',
  seguidoresIg: '927',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola GafLine, los vi en Google y quiero consultar por un producto.',
)}`
export const WA_SERVICIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola GafLine, necesito servicio técnico para mi equipo.',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Electrónica GafLine, Quechereguas 2127, Molina',
)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Quechereguas 2127, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/electronica-gafline'

// Lista real del letrero de la tienda
export const PRODUCTOS = [
  'Láminas de hidrogel',
  'Carcasas',
  'Audífonos',
  'Cargadores',
  'Teclados',
  'Mouse',
  'Parlantes',
  'Focos solares',
  'Servicio técnico',
] as const

export const SERVICIO = {
  computacion: ['Mantención y formateo', 'Impresoras', 'Notebooks y PC'],
  telefonia: ['Pantallas y módulos', 'Baterías y flex', 'Diagnóstico en el local'],
} as const

export const HORARIO = [
  { dias: 'Lunes a sábado', horas: '10:00 – 13:00 y 15:00 – 19:00' },
  { dias: 'Domingo', horas: '10:00 – 13:00' },
] as const

export const RESEÑAS = [
  {
    texto:
      'Excelente atención, muy buen servicio y precios convenientes. Lo recomiendo totalmente.',
    autor: 'Diego Hernández',
    detalle: 'reseña de Google',
  },
  {
    texto:
      'Los secos son lo mejor de Molina, tienen de todo y te resuelven altiro.',
    autor: 'Miguel Troncoso',
    detalle: 'reseña de Google',
  },
  {
    texto:
      'Muy buena disposición, me atendieron rápido y encontré lo que necesitaba para el celular.',
    autor: 'Nicole Cofré',
    detalle: 'reseña de Google',
  },
  {
    texto:
      'Atención amable y honesta, siempre que paso me llevo algo. Hasta hacen rifas.',
    autor: 'Gabi',
    detalle: 'reseña de Google',
  },
] as const
