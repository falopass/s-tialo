/**
 * Datos confirmados en la ficha de Google Maps (nombre, dirección, teléfono,
 * nota, horario) y en su Instagram oficial @yum.express (logo, fotos de la
 * bodega y el local, modalidades de envío). La sede de Talca es parte de la
 * red Yum Express Chile (casa matriz en Eleuterio Ramírez 735, Santiago).
 */
export const BIZ = {
  name: 'Yum Express Talca',
  shortName: 'Yum Express',
  rubro: 'Envíos y encomiendas internacionales',
  address: 'Calle 25 Sur 0691 (entre 1 Poniente B y 26 Sur)',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3714 3395',
  whatsapp: '56937143395',
  rating: 4.5,
  reviews: 27,
  igHandle: '@yum.express',
  igFollowers: '230 mil',
  web: 'yumexpresschile.cl',
  hours: [
    { days: 'Lunes a viernes', time: '11:00–19:00' },
    { days: 'Sábado y domingo', time: 'Cerrado' },
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi su página y quisiera cotizar un envío a Venezuela.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Yum+express+Talca/@-35.4497525,-71.6737579,17z/data=!3m1!4b1!4m6!3m5!1s0x9665c57631e97e2d:0xcd3ff3fcdb357cd3!8m2!3d-35.4497525!4d-71.6737579!16s%2Fg%2F11qyqqmj0_'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Yum express Talca, C. 25 Sur 0691, Talca, Chile',
)}&output=embed`

export const IG_URL = 'https://www.instagram.com/yum.express/'

export const IMG = '/demos/yum-express-talca'

export const SOURCES = {
  googleMaps: MAPS_URL,
  instagram: IG_URL,
} as const

/** Salidas publicadas por Yum Express en sus redes (modalidades reales). */
export const SALIDAS = [
  {
    via: 'Aéreo',
    tiempo: '6 a 10 días',
    detalle: 'La ruta rápida: para lo que no puede esperar un barco.',
    tag: 'rápida',
  },
  {
    via: 'Marítima express',
    tiempo: 'Salidas programadas',
    detalle: 'Caja marítima con salida más seguida y seguimiento incluido.',
    tag: 'intermedia',
  },
  {
    via: 'Marítima tradicional',
    tiempo: '45 a 60 días',
    detalle: 'La modalidad económica para bultos grandes y carga pesada.',
    tag: 'económica',
  },
] as const

/** Reseñas reales de la ficha de Google Maps (selección). */
export const RESENAS = [
  {
    nombre: 'Yolibeth Perez',
    texto:
      'Excelente empresa, 100% recomendada. Buena atención, amables, cordiales y empáticos. Mis envíos siempre han llegado a tiempo.',
  },
  {
    nombre: 'Rosimar Cordova',
    texto: 'Excelente servicio y muy buena atención al cliente. Son amables y serviciales.',
  },
  {
    nombre: 'Isabel C',
    texto:
      'Excelente servicio; conviene llegar con días de anticipación para enviar las cosas sin esperar a última hora.',
  },
] as const
