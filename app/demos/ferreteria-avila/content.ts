export const BIZ = {
  name: 'Ferretería Ávila',
  rubro: 'Ferretería',
  address: 'Ecuador Oriente 147, esq. Alameda',
  city: 'Rancagua',
  region: "O'Higgins",
  phoneDisplay: '+56 72 221 4488',
  phoneTel: '+56722214488',
  rating: '4,6',
  reviews: 120,
}

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Ferreter%C3%ADa%20%C3%81vila%20Ecuador%20Oriente%20147%20Rancagua'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Ferreter%C3%ADa%20%C3%81vila%20Ecuador%20Oriente%20147%20Rancagua&output=embed'

export const IMG = '/demos/ferreteria-avila'

export const HORARIO = [
  { d: 'Lunes a viernes', h: '8:30 – 13:00 · 15:00 – 18:30' },
  { d: 'Sábado', h: '9:00 – 14:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

export const PASILLOS = [
  {
    img: `${IMG}/a2.webp`,
    alt: 'Pasillo interior de Ferretería Ávila con repisas cargadas de productos',
    t: 'Pasillo completo',
    d: 'Repisas cargadas de punta a punta: lo que busca, está.',
  },
  {
    img: `${IMG}/a7.webp`,
    alt: 'Mesón de atención de Ferretería Ávila con mercadería al fondo',
    t: 'Atención en el mesón',
    d: 'Se pregunta, se mira, se encuentra. Sin vueltas.',
  },
  {
    img: `${IMG}/a6.webp`,
    alt: 'Góndolas con herramientas e insumos en Ferretería Ávila',
    t: 'Herramientas e insumos',
    d: 'Ferretería para la casa y el oficio.',
  },
  {
    img: `${IMG}/a8.webp`,
    alt: 'Repisas con pinturas y accesorios en Ferretería Ávila',
    t: 'Pinturas y accesorios',
    d: 'Tricolor y todo lo que va con pintar bien.',
  },
]

export const RESENAS = [
  {
    nombre: 'P. Espinola',
    estrellas: 5,
    texto: 'Buena atención, rápida y con estacionamiento. Precios convenientes.',
  },
  {
    nombre: 'Humberto Vallejos',
    estrellas: 5,
    texto: 'Gran variedad de productos y atención personalizada.',
  },
  {
    nombre: 'Agustín Vásquez',
    estrellas: 5,
    texto: 'Precios accesibles y siempre tienen lo que necesito.',
  },
]
