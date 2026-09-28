/**
 * app/demos/comercializadora-ayl/content.ts
 *
 * Datos del mockup. REALES (fichas públicas de Google Maps y fotos del
 * local): nombre, rubro, direcciones de los dos locales en Talca,
 * WhatsApp, ratings, horarios y las marcas visibles en las góndolas.
 * Las reseñas son citas textuales de clientes en Google Maps.
 */

export const BIZ = {
  name: 'Comercializadora A y L',
  rubro: 'Artículos de aseo y bazar',
  address: '1 Poniente 0214',
  address2: '4 Poniente A 1596',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7545 5005',
  whatsapp: '56975455005',
  rating: 4.7,
  reviewCount: 94,
  rating2: 4.6,
  reviewCount2: 51,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Comercializadora A y L y quiero consultar por un producto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Comercializadora A Y L Ltd, 1 Poniente 0214, Talca, Chile',
)}`

export const MAPS_URL_2 = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Comercializadora A Y L Ltd, 4 Poniente A 1596, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Comercializadora A Y L Ltd, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/comercializadora-ayl'

// Los pasillos del local y las marcas que se ven en sus góndolas
export const PASILLOS = [
  {
    letra: 'A',
    title: 'Detergentes y limpieza',
    body: 'Aseo para la casa al por mayor y al detalle: detergente, cloro, lavaloza, limpiapisos y esponjas.',
    marcas: ['OMO', 'Ariel', 'Ace', 'Winex', 'Sapolio', 'Siete'],
    src: `${IMG}/pasillo-detergentes.webp`,
    alt: 'Góndola de Comercializadora A y L con detergentes OMO, Ariel, Winex y Ace hasta el techo',
  },
  {
    letra: 'B',
    title: 'Aseo personal',
    body: 'Shampoo, jabones, cremas y cuidado personal con las marcas de siempre y alternativas buenas y baratas.',
    marcas: ['Garnier Fructis', 'Baby Lee', 'Suavelina'],
    src: `${IMG}/pasillo-aseo-personal.webp`,
    alt: 'Repisas de Comercializadora A y L con shampoo, cosmética y productos de aseo personal',
  },
  {
    letra: 'C',
    title: 'El auto',
    body: 'Una repisa entera para el vehículo: shampoo, silicona, renovador de neumáticos y paños.',
    marcas: ['RO'],
    src: `${IMG}/pasillo-automovil.webp`,
    alt: 'Estantes de madera de Comercializadora A y L con la línea RO de cuidado para automóviles y contenedores amarillos',
  },
  {
    letra: 'D',
    title: 'Papeles y bazar',
    body: 'Papel higiénico, servilletas, toallas de papel y útiles de oficina para el día a día.',
    marcas: ['Elite'],
    src: `${IMG}/pasillo-papeles.webp`,
    alt: 'Interior de Comercializadora A y L con paquetes de papel higiénico Elite y artículos de bazar',
  },
] as const

// Citas textuales de reseñas públicas en Google Maps
export const RESENAS = [
  {
    quote:
      'Un local muy completo en cuanto a útiles de aseo, detergentes, jabones, shampues, insecticidas, escobillones, papeles higiénicos, servilletas, pilas, etc. Artículos de aseo para automóviles. Precios bastante convenientes.',
    author: 'Gabriela Sarabia',
  },
  {
    quote:
      'Lugar excelente para comprar útiles de aseo y oficina. Tiene las tres B. Uno de los más baratos y de calidad de Talca.',
    author: 'Constanza Fernández',
  },
  {
    quote:
      'Buena atención y tiene gran variedad de productos de limpieza e higiene personal. Tiene marcas reconocidas y alternativas de buena calidad y a buen precio.',
    author: 'Felipe Andrés',
  },
  {
    quote:
      'Muy surtido, bien atendido, productos de calidad nacionales y con súper buenos precios, productos de aseo para la casa y autos.',
    author: 'Isabel Tranamil',
  },
  {
    quote:
      'Todo muy bueno, y económico; los dependientes muy agradables.',
    author: 'Sarai Millo',
  },
  {
    quote:
      'Me encanta la atención y los productos, todo a buen precio.',
    author: 'Constanza Rojas',
  },
] as const

export const HORARIO_1 = [
  { dia: 'Lunes a viernes', hora: '10:30 – 19:00' },
  { dia: 'Sábado', hora: '10:30 – 15:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
] as const

export const HORARIO_2 = [
  { dia: 'Lunes a viernes', hora: '10:00 – 19:00' },
  { dia: 'Sábado', hora: '10:00 – 15:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
] as const

export const NAV_LINKS = [
  { label: 'Pasillos', href: '#pasillos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Locales', href: '#locales' },
]
