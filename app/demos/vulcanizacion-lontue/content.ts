/**
 * app/demos/vulcanizacion-lontue/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y fotos del
 * taller): nombre, rubro, dirección en Lontué, WhatsApp, rating y
 * horarios. Las reseñas son citas textuales de clientes en Google Maps.
 */

export const BIZ = {
  name: 'Vulcanización Lontué',
  rubro: 'Vulcanización y neumáticos',
  address: 'Avenida 7 de Abril 2816',
  city: 'Lontué',
  comuna: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8737 6432',
  whatsapp: '56987376432',
  rating: 4.2,
  reviewCount: 137,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Vulcanización Lontué y quiero consultar por un neumático',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vulcanización Lontué, Avenida 7 de Abril 2816, Lontué, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Vulcanización Lontué, Avenida 7 de Abril 2816, Lontué, Chile',
)}&output=embed`

export const IMG = '/demos/vulcanizacion-lontue'

// Servicios que hace el taller (según su ficha y lo que cuentan los clientes)
export const PEGAS = [
  {
    num: '01',
    title: 'Parches y vulcanizado',
    body: 'El pinchazo de la ruta o el corte del tractor: se desmonta, se revisa y se vulcaniza en el taller.',
    src: `${IMG}/trabajo-gata.webp`,
    alt: 'Auto sobre la gata en Vulcanización Lontué con la pistola de impacto lista para desmontar la rueda',
  },
  {
    num: '02',
    title: 'Montaje de neumáticos',
    body: 'Cambio y montaje para autos, camionetas y motos — los clientes cuentan que la pega sale rápido.',
    src: `${IMG}/interior-elevadores.webp`,
    alt: 'Interior del taller de Vulcanización Lontué con elevadores, un auto en servicio y estantes de neumáticos',
  },
  {
    num: '03',
    title: 'Inflado y revisión',
    body: 'Se revisa la presión, se infla y se deja la rueda lista. Si el problema no es del neumático, también te orientan.',
    src: `${IMG}/taller-abierto.webp`,
    alt: 'Portones abiertos del taller de Vulcanización Lontué con neumáticos apilados y el letrero pintado a mano',
  },
] as const

// Citas textuales de reseñas públicas en Google Maps
export const RESENAS = [
  {
    quote:
      'Excelente atención y disposición del dueño. Buen precio, todo rápido. Lo recomiendo.',
    author: 'Gino N. V.',
  },
  {
    quote:
      'Muy amable, buena disponibilidad y precio acorde.',
    author: 'Álvaro López',
  },
  {
    quote:
      'Excelente atención, muy buena persona. Le debo un gran favor, se portó un 7 el dueño.',
    author: 'Jonathan Vera',
  },
  {
    quote:
      '100 % recomendable, ágil, rápido y eficiente.',
    author: 'Verónica Meneses',
  },
  {
    quote:
      'Pasé el otro día por otro tipo de problemas en mi camioneta; sin embargo el caballero que atiende ahí me ayudó con unas recomendaciones de taller mecánico. Eso se agradece cuando uno está complicado.',
    author: 'Eduardo Espinoza',
  },
  {
    quote: 'Rápida atención, muy buen servicio.',
    author: 'Juan Marcelo',
  },
] as const

export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '9:00 – 19:30' },
  { dia: 'Sábado', hora: '9:00 – 14:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
] as const

export const NAV_LINKS = [
  { label: 'La pega', href: '#pega' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'El taller', href: '#taller' },
]
