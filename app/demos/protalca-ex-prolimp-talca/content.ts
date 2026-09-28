// Datos verificados en Google Maps (ficha "Protalca ex Prolimp Talca") + Instagram
// oficial @protalca y Facebook @prolimp.talca. Horario confirmado contra el letrero
// de la fachada y contra la ficha de Google. Revisado: 2025.

export const BIZ = {
  slug: 'protalca-ex-prolimp-talca',
  name: 'Protalca (ex Prolimp)',
  short: 'Protalca',
  rubro: 'Comercializadora de aseo, hogar y abarrotes',
  // Eslogan real del letrero de su fachada.
  slogan: 'Todo en un mismo lugar, pero más barato',
  address: 'Veintisiete Sur 0114, al llegar a 22 Poniente',
  city: 'Talca',
  region: 'Maule',
  // Ficha Google.
  phone: '+56 9 8985 3974',
  phoneTel: '+56989853974',
  // WhatsApp de consultas publicado por ellos en Instagram.
  wa: '56933811458',
  waDisplay: '+56 9 3381 1458',
  rating: '4.6',
  reviews: 286,
  instagram: '@protalca',
  facebook: 'Protalca Talca',
  mapQuery: 'Protalca ex Prolimp Talca, Talca',
}

export const WA_TEXT = encodeURIComponent(
  'Hola Protalca, los encontré en su nueva página web. Quiero consultar por las ofertas de esta semana.',
)

export const HORARIO = [
  { d: 'Lunes a viernes', h: '10:00 – 13:00 y 15:00 – 19:00' },
  { d: 'Sábado', h: '10:00 – 14:00' },
  { d: 'Domingo y festivos', h: 'Cerrado' },
]

// Ofertas reales tal como las publicaron en su Instagram (flyer propio).
// Precio y producto son los del afiche; stock y vigencia se confirman por WhatsApp.
export const OFERTAS = [
  {
    img: '/demos/protalca-ex-prolimp-talca/pack-bebidas.webp',
    alt: 'Flyer de Protalca: pack de 12 bebidas de 250 ml a $3.990',
    producto: 'Pack de 12 bebidas 250 ml',
    precio: '$3.990',
    nota: 'Oferta publicada en su Instagram',
  },
  {
    img: '/demos/protalca-ex-prolimp-talca/snack.webp',
    alt: 'Flyer de Protalca: cereal Cookie Crisp 310 g en oferta a $1.250',
    producto: 'Cookie Crisp 310 g',
    precio: '$1.250',
    nota: 'Oferta publicada en su Instagram',
  },
  {
    img: '/demos/protalca-ex-prolimp-talca/super-pack.webp',
    alt: 'Flyer de Protalca: súper pack con dos detergentes OMO y suavizante',
    producto: 'Súper pack OMO + suavizante',
    precio: null,
    nota: 'Consulta el precio de esta semana',
  },
  {
    img: '/demos/protalca-ex-prolimp-talca/omo-aloe.webp',
    alt: 'Flyer de Protalca: nuevo OMO aloe vera que rinde 60 lavados',
    producto: 'OMO aloe vera · rinde 60 lavados',
    precio: null,
    nota: 'Consulta el precio de esta semana',
  },
]

// Pasillos reales según sus publicaciones y reseñas.
export const PASILLOS = [
  'Detergentes y limpieza',
  'Cuidado personal',
  'Perfumería',
  'Bebidas y snacks',
  'Abarrotes para la casa',
  'Productos de papel',
]

// Reseñas reales de la ficha de Google (★5).
export const RESENAS = [
  {
    autor: 'Luis C.',
    texto: 'Siempre cuentan con un buen stock de todo y tienen muy buenos precios.',
  },
  {
    autor: 'María M.',
    texto: 'Muy buenas ofertas y tiene mucha variedad de cosas, no solo limpieza.',
  },
  {
    autor: 'Zayver C.',
    texto: 'Muy barato, recomendado. De todo para la limpieza de la casa.',
  },
]
