/**
 * app/demos/minimarket-emily/content.ts
 *
 * Datos del mockup. REALES, de la ficha pública de Google Maps
 * «Minimarket Emily» (Molina) y de sus propias fotos y letreros:
 * dirección (Pasaje Río Aconcagua 1389), teléfono/WhatsApp
 * (+56 9 4083 6368), horario todos los días 9–22, 5.0 estrellas con
 * 5 reseñas. Los productos nombrados salen de los letreros de su local
 * (pan, abarrotes, bebidas, lácteos, carnes, artículos de aseo, carbón,
 * ensaladas frescas, alimento para mascotas). Las reseñas son citas
 * textuales de Google Maps.
 */

export const BIZ = {
  name: 'Minimarket Emily',
  short: 'Emily',
  rubro: 'Minimarket y almacén',
  address: 'Pasaje Río Aconcagua 1389',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4083 6368',
  whatsapp: '56940836368',
  rating: 5.0,
  reviews: 5,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Minimarket Emily y quiero consultar por un producto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Minimarket Emily, Pasaje Río Aconcagua 1389, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Minimarket Emily, Pasaje Río Aconcagua 1389, Molina, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/minimarket-emily'

// Horario real de la ficha: todos los días igual
export const HORARIO = [
  { dia: 'Lunes a domingo', hora: '9:00 – 22:00' },
] as const

// Los pasillos según lo que ofrecen sus propios letreros
export const PASILLOS = [
  {
    num: 'A1',
    title: 'Frutas y verduras',
    body: 'Lechugas, repollo, apio y tomates recién llegados — la verdurera del pasaje.',
    src: `${IMG}/verduras-frescas.webp`,
    alt: 'Verduras frescas de Minimarket Emily: apio, tomates y cilantro recién llegados al local',
  },
  {
    num: 'A2',
    title: 'Ensaladas frescas',
    body: 'Su cartel lo promete: ensaladas frescas todos los días, listas para llevar.',
    src: `${IMG}/ensaladas.webp`,
    alt: 'Ensaladas frescas en bolsas listas para llevar en Minimarket Emily',
  },
  {
    num: 'A3',
    title: 'Bebidas y frío',
    body: 'Cooler lleno y el pasillo de siempre: bebidas, lácteos y lo que falta en la casa.',
    src: `${IMG}/pasillo-bebidas.webp`,
    alt: 'Pasillo de Minimarket Emily con cooler de bebidas y estantes de abarrotes',
  },
  {
    num: 'A4',
    title: 'Carnes y embutidos',
    body: 'Longanizas y cortes del día, más el carbón para el asado del fin de semana.',
    src: `${IMG}/embutidos.webp`,
    alt: 'Longanizas frescas en Minimarket Emily, Molina',
  },
] as const

// Lo que ofrece, textual de los letreros del local
export const OFRECE = [
  'Pan',
  'Bebidas',
  'Abarrotes',
  'Lácteos',
  'Frutas y verduras',
  'Carnes',
  'Carbón',
  'Artículos de aseo',
  'Alimento para mascotas',
] as const

// Citas textuales de las reseñas públicas en Google Maps
export const RESENAS = [
  {
    quote: 'Muy buena atención y mucha variedad de productos… recomendable 100 %.',
    author: 'Ernesto Vásquez',
  },
  {
    quote: 'Un negocio en nacimiento: desde que abrió maneja una variabilidad de productos, súper buena atención.',
    author: 'Thomas Willatt',
  },
] as const

export const NAV_LINKS = [
  { label: 'Pasillos', href: '#pasillos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'El local', href: '#local' },
]
