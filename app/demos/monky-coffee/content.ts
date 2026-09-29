/**
 * Fuentes consultadas:
 * - Google Maps: ficha pública de Monky Coffee, consultada el 29-09-2026
 *   (4,6 · 762 opiniones; horario confirmado por llamada hace 12 semanas:
 *   L–V 8:00–20:30, Sá 9:30–14:30, Do cerrado).
 * - Facebook: https://www.facebook.com/monkycoffee
 * - Instagram: https://www.instagram.com/monkycoffee/
 * - Revista Minga, “Monky: 10 años de historia”:
 *   https://www.revistaminga.cl/2024/11/10/monky-10-anos-de-historia/
 * - Precios y nombres de productos: foto de la carta impresa del local
 *   (publicada en su ficha de Google Maps).
 * - Reseñas citadas: textos reales de Google Maps.
 * Las fotos de public/demos/monky-coffee/ provienen de Instagram y Google Maps;
 * el logo es la foto de perfil de Instagram.
 * Bio de Instagram: «Personas, café, plantas y cositas ricas · Est 2014 ·
 * Pet Friendly · Talleres y catas».
 */

export const BIZ = {
  name: 'Monky Coffee',
  rubro: 'Cafetería',
  address: '1 Oriente #1385, esquina 3 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7447 6310',
  whatsapp: '56974476310',
  instagram: 'https://www.instagram.com/monkycoffee/',
  facebook: 'https://www.facebook.com/monkycoffee',
  since: 2014,
  rating: 4.6,
  reviews: 762,
} as const

export const IMG = '/demos/monky-coffee'

export const GALERIA = [
  { src: 'mostrador', alt: 'Vitrina de Monky Coffee con el mono del logo pintado en la pared y pastelería de la casa' },
  { src: 'tostadas', alt: 'Tostadas con hummus y palta con fruta fresca sobre mesa con papel Monky Coffee' },
  { src: 'cafe-4', alt: 'Torta, latte en vaso alto y cappuccino sobre la mesa' },
  { src: 'sanguches', alt: 'Sándwiches de ciabatta y limonada sobre papel con el logo de Monky Coffee' },
  { src: 'cafe-1', alt: 'Cappuccino con arte latte junto a una galleta de avena y chocolate' },
  { src: 'salon', alt: 'Segunda sala de la casona: barra de listones de madera, banquetas y ventanales al jardín' },
] as const

/** Tomado literalmente de la bio de Instagram. */
export const SELLOS = ['Est. 2014', 'Pet friendly', 'Talleres y catas'] as const

/** Horario vigente en su ficha de Google (confirmado por teléfono). */
export const HOURS = [
  { days: 'Lunes a viernes', time: '8:00–20:30' },
  { days: 'Sábado', time: '9:30–14:30' },
  { days: 'Domingo', time: 'Cerrado' },
] as const

/**
 * Productos y precios transcritos de la carta impresa del local
 * (foto en su ficha de Google Maps). La carta aclara: «sujeta a
 * disponibilidad de stock».
 */
export const CARTA = [
  {
    grupo: 'Desayunos',
    items: [
      { nombre: 'Desayuno Monky', precio: '6.000', nota: 'ciabatta o croissant aliado + vitamina o fruta del día + café de la carta' },
      { nombre: 'Desayuno Tostada', precio: '6.000', nota: 'tostadas con palta + vitamina o fruta del día + café de la carta' },
    ],
  },
  {
    grupo: 'Sándwiches y tostadas',
    items: [
      { nombre: 'Monky', precio: '4.600', nota: 'tomate fresco, queso camembert y jamón serrano' },
      { nombre: 'Temporada II', precio: '4.200', nota: 'queso, tomate asado, champiñones asados y mix verde' },
      { nombre: 'Casi Caprese', precio: '4.100', nota: 'quesillo, tomate y pesto de albahaca' },
      { nombre: 'Tostadas con palta', precio: '3.600', nota: '' },
      { nombre: 'Tostada con miel', precio: '3.500', nota: 'miel orgánica, mantequilla clarificada y sal de Cahuil' },
    ],
  },
  {
    grupo: 'Pastelería y bollería',
    items: [
      { nombre: 'Cheesecake', precio: '4.000', nota: 'chocolate, frutos rojos, maracuyá o nutella' },
      { nombre: 'Carrot cake', precio: '3.800', nota: 'bizcocho de zanahoria con crema y frutos secos' },
      { nombre: 'Pie de limón', precio: '3.500', nota: '' },
      { nombre: 'Kuchen de nuez', precio: '3.500', nota: '' },
      { nombre: 'Rollito de canela', precio: '2.600', nota: 'con mermelada de frutos rojos y frutos secos' },
      { nombre: 'Croissant', precio: '1.900', nota: '' },
    ],
  },
] as const

/** Citas reales de reseñas de Google Maps (4,6 sobre 762 opiniones). */
export const RESENAS = [
  {
    nombre: 'María de la Luz Figueroa Márquez',
    cuando: 'hace 2 meses',
    texto:
      'Monky es desde hace muchos años mi lugar favorito de la ciudad: la atención es maravillosa, hay buena música y el café es espectacular. Está ubicado en una antigua casa de Talca, con una hermosa arquitectura.',
  },
  {
    nombre: 'Ignacio Morales Poblete',
    cuando: 'hace 4 meses',
    texto:
      'Pedí un filtrado en V60 y estaba muy bien logrado: buena extracción, acidez agradable y un perfil aromático bien definido. El sándwich Temporada II estaba exquisito.',
  },
  {
    nombre: 'Naeva Arancibia',
    cuando: 'hace 7 meses',
    texto:
      'En nuestro paseo por Talca, perdidos, encontramos esta cafetería: ambiente agradable, limpio y elegante, con detalles de arte y flores frescas. Se nota la buena calidad de sus productos.',
  },
] as const

/** Métodos que se ven en la carta y en las reseñas (el V60 lo cita un cliente). */
export const METODOS = ['Espresso', 'V60', 'Aeropress', 'Cold brew'] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Monky Coffee y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}, Chile`,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `1 Oriente 1385, Talca, Chile`,
)}&output=embed`

/** Paleta del demo: verde botella, papel crema, coral (la carta es fucsia) y espresso. */
export const C = {
  green: '#1E4A3C',
  green2: '#26594A',
  paper: '#F4EFE5',
  paper2: '#EAE2D3',
  coral: '#E0684B',
  coralDeep: '#A63D24',
  espresso: '#2B211B',
  ink: '#1C1F1D',
  muted: '#5C635F',
  mutedOnDark: '#C3D0C8',
  mint: '#9FD3BC',
  line: 'rgba(28,31,29,0.14)',
  lineOnDark: 'rgba(244,239,229,0.16)',
} as const

/** Lo que Monky publica sobre su propuesta (Revista Minga, redes). */
export const PROPUESTA = [
  { n: '01', title: 'Café de especialidad', desc: 'Granos de fincas sostenibles de América Latina y tostado artesanal.' },
  { n: '02', title: 'Métodos que enseñan', desc: 'V60, Aeropress y cold brew: distintas formas de descubrir el mismo grano.' },
  { n: '03', title: 'Punto de encuentro', desc: 'Talleres, catas y eventos culturales alrededor de una buena taza.' },
] as const
