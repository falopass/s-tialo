// Datos verificados (sep 2026): sitio oficial torobayotalca.cl (carta con
// precios, horario, historia desde 1997), Tripadvisor y restaurantess.cl
// (ficha de Google Maps: 4,3★, +1.200 reseñas, Camino Las Rastras Km 2,3).
// Instagram del negocio: @torobayorestaurante.

const BIZ = {
  name: 'Toro Bayo',
  rubro: 'Restaurant · parrilla y mariscos',
  address: 'Camino Las Rastras Km 2,3',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 71 224 7643',
  phoneTel: 'tel:+56712247643',
  instagram: '@torobayorestaurante',
  web: 'torobayotalca.cl',
  webUrl: 'https://torobayotalca.cl',
  rating: 4.3,
  reviews: '1.200+',
  desde: 1997,
  tagline: 'A la mesa, en familia',
} as const

export { BIZ }

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Toro+Bayo+Restaurante+Camino+Las+Rastras+Talca'
export const MAPS_EMBED =
  'https://maps.google.com/maps?q=Toro%20Bayo%20Restaurante%2C%20Camino%20Las%20Rastras%2C%20Talca&t=&z=14&ie=UTF8&iwloc=&output=embed'

export const IMG = '/demos/restaurant-toro-bayo'

export const HORARIO = [
  ['martes a sábado', '12:30 – 00:00'],
  ['domingo', '12:30 – 16:00'],
  ['lunes', 'cerrado'],
] as const

// Platos y precios publicados en torobayotalca.cl.
export const CARTA = [
  {
    seccion: 'de la parrilla',
    items: [
      { nombre: 'Parrillada Toro Bayo (4 personas)', precio: '$68.100' },
      { nombre: 'Parrillada especial (2 personas)', precio: '$42.900' },
      { nombre: 'Asado de tira', precio: '$22.900' },
      { nombre: 'Entraña 280–300 g', precio: '$24.900' },
      { nombre: 'Lomo vetado a lo pobre', precio: '$24.900' },
    ],
  },
  {
    seccion: 'del mar',
    items: [
      { nombre: 'Jardín del Toro (tabla marina)', precio: '$39.900' },
      { nombre: 'Machas a la parmesana', precio: '$19.900' },
      { nombre: 'Pastel de jaiba', precio: '$14.500' },
      { nombre: 'Salmón al limón', precio: '$17.400' },
      { nombre: 'Ceviche de salmón', precio: '$15.900' },
    ],
  },
  {
    seccion: 'de la casa',
    items: [
      { nombre: 'Lasaña de jaiba', precio: '$16.900' },
      { nombre: 'Fetuccini fruto di mare', precio: '$16.900' },
      { nombre: 'Sorrentinos de ternera', precio: '$15.900' },
      { nombre: 'Empanadas de queso (5)', precio: '$6.600' },
      { nombre: 'Postres caseros del día', precio: '·' },
    ],
  },
] as const

// Reseñas publicadas en Tripadvisor y carta.menu (texto original resumido).
export const RESENAS = [
  {
    texto: 'Estupendo asador, merece un desvío. Aire de restaurante rústico, muy buena selección de parrilla y una atención excelente.',
    fuente: 'Tripadvisor',
    stars: 5,
  },
  {
    texto: 'Clásico talquino. Ubicación excelente y platos ricos: pastas espectaculares, la lasaña de jaiba muy buena y postres recomendados.',
    fuente: 'Tripadvisor',
    stars: 5,
  },
  {
    texto: 'La mejor carne que he probado jamás: el pastel mediterráneo, el asado de tira y de postre el cheesecake.',
    fuente: 'carta.menu',
    stars: 5,
  },
  {
    texto: 'Las parrillas —lomo y asado de tira—, la atención y el ambiente son muy buenos.',
    fuente: 'Tripadvisor',
    stars: 5,
  },
] as const

export const FOTOS = {
  hero: {
    src: `${IMG}/hero.webp`,
    alt: 'Parrillada con papas y pebre en plato de greda sobre las brasas',
  },
  parrilla: {
    src: `${IMG}/parrilla.webp`,
    alt: 'Cortes a la parrilla servidos sobre las brasas encendidas',
  },
  salon: {
    src: `${IMG}/salon.webp`,
    alt: 'Salón rústico de madera de Toro Bayo con mesas servidas y copas',
  },
  salmon: {
    src: `${IMG}/salmon.webp`,
    alt: 'Filete de salmón con juliana de betarraga en plato blanco',
  },
  empanadas: {
    src: `${IMG}/empanadas.webp`,
    alt: 'Empanadas fritas de queso con salsa verde',
  },
  pavlova: {
    src: `${IMG}/pavlova.webp`,
    alt: 'Pavlova con berries y flor de la casa',
  },
  coctel: {
    src: `${IMG}/coctel.webp`,
    alt: 'Cóctel de autor de la barra de Toro Bayo',
  },
  pastas: {
    src: `${IMG}/pastas.webp`,
    alt: 'Pasta fresca con camarones en salsa',
  },
  ensalada: {
    src: `${IMG}/ensalada.webp`,
    alt: 'Ensalada fresca de la huerta',
  },
  mesaV: {
    src: `${IMG}/mesa-v.webp`,
    alt: 'Rincón del salón de Toro Bayo en camino Las Rastras',
  },
} as const

export const LOGO = {
  toro: { src: `${IMG}/toro.webp`, alt: 'Toro geométrico, logo de Toro Bayo' },
  mini: { src: `${IMG}/toro-mini.webp`, alt: 'Marca del toro de Toro Bayo' },
} as const
