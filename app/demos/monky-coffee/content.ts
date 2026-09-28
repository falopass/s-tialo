/**
 * Fuentes consultadas:
 * - Google Maps: ficha pública de Monky Coffee, consultada el 28-09-2026.
 * - Facebook: https://www.facebook.com/monkycoffee
 * - Instagram: https://www.instagram.com/monkycoffee/
 * - Revista Minga, “Monky: 10 años de historia”:
 *   https://www.revistaminga.cl/2024/11/10/monky-10-anos-de-historia/
 * Las fotos de public/demos/monky-coffee/ provienen de Instagram y Google Maps; el logo es la foto de perfil de Instagram.
 * Bio de Instagram: «Personas, café, plantas y cositas ricas · Est 2014 · Pet Friendly · Talleres y catas».
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
  { src: 'cafe-1', alt: 'Cappuccino con arte latte junto a una galleta de avena y chocolate' },
  { src: 'vitrina', alt: 'Vitrina de la cafetería con queques, muffins y pasteles' },
  { src: 'cafe-4', alt: 'Torta, latte en vaso alto y cappuccino sobre la mesa' },
  { src: 'local', alt: 'Interior del local: barra de madera, sillas altas y ventanales' },
  { src: 'cafe-3', alt: 'Brownie y té en taza roja sobre mesa blanca' },
  { src: 'equipo', alt: 'El equipo de Monky Coffee posando en el local con un perro' },
] as const

/** Tomado literalmente de la bio de Instagram. */
export const SELLOS = ['Est. 2014', 'Pet friendly', 'Talleres y catas'] as const

export const HOURS = [
  { days: 'Lunes a viernes', time: '8:00–21:00' },
  { days: 'Sábado', time: '9:30–14:30' },
  { days: 'Domingo', time: 'Cerrado' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Monky Coffee y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}, Chile`,
)}`

/** Paleta del demo: verde botella, papel crema, coral y espresso. */
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
  { n: '02', title: 'Métodos que enseñan', desc: 'Aeropress y cold brew: distintas formas de descubrir el mismo grano.' },
  { n: '03', title: 'Punto de encuentro', desc: 'Talleres, catas y eventos culturales alrededor de una buena taza.' },
] as const

export const METODOS = ['Espresso', 'Aeropress', 'Cold brew'] as const
