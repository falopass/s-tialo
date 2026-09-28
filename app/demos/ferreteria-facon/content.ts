/**
 * app/demos/ferreteria-facon/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, fotos del local):
 * nombre, rubro, dirección, comuna, WhatsApp, rating, horarios, marcas del
 * letrero y precios de la pizarra del local. Las reseñas son citas
 * textuales de clientes en Google Maps.
 */

export const BIZ = {
  name: 'Ferretería Facón',
  legal: 'Ferretería Facon eirl',
  rubro: 'Ferretería y materiales de construcción',
  address: 'Luis Cruz Martínez 1824',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5008 3899',
  whatsapp: '56950083899',
  rating: 4.7,
  reviewCount: 63,
  owner: 'Ricardo Arancibia',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ferretería Facón y quiero consultar por un producto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ferretería Facon, Luis Cruz Martínez 1824, Molina, Región del Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Ferretería Facon eirl, Luis Cruz Martínez 1824, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/ferreteria-facon'

// Marcas que se ven en el letrero real del local (foto de la fachada)
export const MARCAS = [
  'Polpaico',
  'Cementos Bío Bío',
  'Würth',
  'Tricolor',
  'Suvinil',
  'Tigre',
  'Liof',
  'Soquina',
] as const

// Precios escritos a tiza en la pizarra del local (visibles en la foto real)
export const PIZARRA = [
  { item: 'Plancha TEA', price: '$8.770' },
  { item: 'Plancha OSB', price: '$7.700' },
] as const

export const ESTANTES = [
  {
    tag: 'La obra',
    title: 'Cemento y materiales',
    body: 'Cemento Polpaico y planchas para la construcción, con despacho a domicilio en Molina.',
    src: `${IMG}/fachada-noche.webp`,
    alt: 'Fachada de Ferretería Facón de noche con el letrero de cemento Polpaico y el teléfono pintado en el muro',
  },
  {
    tag: 'El taller',
    title: 'Herramientas y fierros',
    body: 'Dos pisos de estantería: herramientas, pernos, pinturas Facon Color, candados y todo lo chico que siempre falta.',
    src: `${IMG}/interior-estantes.webp`,
    alt: 'Interior de Ferretería Facón: dos pisos de estantes llenos de herramientas, insumos y la caja al fondo',
  },
  {
    tag: 'La casa',
    title: 'El mostrador de siempre',
    body: 'Atendido por su propio dueño y su gente: preguntas por el producto y sales con lo que necesitabas.',
    src: `${IMG}/mostrador.webp`,
    alt: 'Mostrador de Ferretería Facón con repisas de tuercas, guantes y herramientas colgadas detrás',
  },
] as const

// Citas textuales de reseñas públicas en Google Maps
export const RESENAS = [
  {
    quote:
      'Es una ferretería como las de antes, sus ferreteros son amables y cordiales, cosa que no se ve en otros lugares y los precios son muy buenos.',
    author: 'Hernan Becerra',
  },
  {
    quote:
      'Muy buen lugar, con amplio inventario de productos de ferretería y para construcción; excelente atención y solución a los problemas, ayudando así a los clientes.',
    author: 'Miguel Hernández',
  },
  {
    quote:
      'Tiene de todo lo que busca. Atendido por su propio dueño Ricardo Arancibia y su gente: excelente y recomendada ferretería.',
    author: 'Francisco Barrios',
  },
  {
    quote:
      'La atención es rápida, buen despacho, atiende su propio dueño, y buenos precios.',
    author: 'vatale vatale',
  },
  {
    quote:
      'Tiene de todo, y te hacen un muy buen descuento al comprar.',
    author: 'Juan Luis Or',
  },
] as const

export const HORARIO = [
  { dia: 'Lunes a jueves', hora: '8:30 – 13:00 y 15:00 – 18:30' },
  { dia: 'Viernes', hora: '8:30 – 13:00 y 15:00 – 20:30' },
  { dia: 'Sábado y domingo', hora: 'Cerrado' },
] as const

export const NAV_LINKS = [
  { label: 'Estantes', href: '#estantes' },
  { label: 'Pizarra', href: '#pizarra' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'El local', href: '#local' },
]
