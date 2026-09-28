/**
 * app/demos/ius-abogados-linares/content.ts
 *
 * Datos REALES verificados (2026-09-28):
 * - Ficha de Google Maps: dirección, nota 5.0 y 12 opiniones.
 * - Instagram @iusabogadoslinares (349 seguidores): fotos del estudio,
 *   la oficina y la catedral de Linares.
 * - Placa de la puerta (foto real de la ficha): abogados, teléfonos,
 *   horario 9:30–18:00 y correo.
 * - LinkedIn del estudio: áreas — Civil, Familia, Laboral y Juzgados
 *   de Policía Local; atención presencial en Linares y remota a todo Chile.
 * Las citas de clientes son reseñas reales de Google (nombre de pila).
 */

export const BIZ = {
  name: 'IUS Abogados Linares',
  short: 'IUS Abogados',
  rubro: 'Estudio jurídico',
  address: 'Maipú 461, oficina 405',
  postal: '3580000',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5056 0264',
  whatsapp: '56950560264',
  email: 'iusabogadoslinares@gmail.com',
  instagram: 'iusabogadoslinares',
  instagramFollowers: '349',
  rating: 5.0,
  ratingLabel: '5,0',
  reviews: 12,
  hours: 'Lunes a viernes · 9:30 a 18:00',
} as const

/** Equipo real, según la placa de la oficina y el LinkedIn del estudio. */
export const EQUIPO = [
  {
    src: '/demos/ius-abogados-linares/javiera.webp',
    name: 'Javiera Santos Salazar',
    role: 'Abogada · socia',
    phone: '+56 9 6262 6794',
    alt: 'Javiera Santos, abogada de IUS Abogados Linares, trabajando en su escritorio junto a la ventana de la oficina',
  },
  {
    src: '/demos/ius-abogados-linares/matias.webp',
    name: 'Matías Leiva Muñoz',
    role: 'Abogado · socio',
    phone: '+56 9 5056 0264',
    alt: 'Matías Leiva, abogado de IUS Abogados Linares, en su escritorio con la estatua de la Justicia y biblioratos',
  },
] as const

/** Áreas reales del estudio (LinkedIn + publicaciones de Instagram). */
export const AREAS = [
  {
    code: 'Familia',
    name: 'Derecho de familia',
    items: ['Pensión de alimentos', 'Divorcio y cese de convivencia', 'Cuidado personal y relación directa', 'Violencia intrafamiliar'],
  },
  {
    code: 'Laboral',
    name: 'Derecho laboral',
    items: ['Despidos y finiquitos', 'Autodespido', 'Cotizaciones y honorarios impagos', 'Demandas ante la Inspección del Trabajo'],
  },
  {
    code: 'Civil',
    name: 'Derecho civil',
    items: ['Contratos y arriendos', 'Cobranzas y cobro judicial', 'Posesión efectiva', 'Herencias'],
  },
  {
    code: 'JPL',
    name: 'Juzgados de Policía Local',
    items: ['Comparendos y multas', 'Consumo de alcohol en la vía pública', 'Ruidos y convivencia vecinal', 'Defensa en Linares y provincia'],
  },
] as const

/** Reseñas reales de la ficha de Google (5.0 · 12 opiniones). */
export const REVIEWS = [
  {
    text: 'Excelentes profesionales. Me asesoraron por despido injustificado y me han acompañado en todo el proceso. Los recomiendo al 100%.',
    author: 'Consuelo',
  },
  {
    text: 'Muy feliz de haber solucionado mi problema de pensión de alimentos. Los mejores abogados de Linares.',
    author: 'Filomena',
  },
  {
    text: 'Me atendieron súper bien, resolvieron todas mis dudas, me orientaron y tomaron mi caso.',
    author: 'Alex',
  },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de IUS Abogados Linares y quiero consultar por un caso',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

const MAPS_QUERY = 'IUS Abogados Linares, Maipú 461, Linares, Maule, Chile'
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent('Maipú 461, 3580000 Linares, Maule, Chile')}&output=embed`

export const IMG = '/demos/ius-abogados-linares'
