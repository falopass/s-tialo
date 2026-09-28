export const BIZ = {
  name: 'Ferretería Müller',
  rubro: 'Ferretería y materiales de construcción',
  address: 'Rafael Sanzio 2824',
  city: 'Rancagua',
  region: "O'Higgins",
  phoneDisplay: '+56 72 275 3785',
  phoneTel: '+56722753785',
  rating: '4,4',
  reviews: 188,
}

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Ferreter%C3%ADa%20M%C3%BCller%20Rafael%20Sanzio%202824%20Rancagua'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Ferreter%C3%ADa%20M%C3%BCller%20Rafael%20Sanzio%202824%20Rancagua&output=embed'

export const IMG = '/demos/ferreteria-muller'

export const HORARIO = [
  { d: 'Lunes a viernes', h: '9:00 – 19:00' },
  { d: 'Sábado', h: '9:00 – 18:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

export const VALE = [
  {
    n: '01',
    t: 'Ferretería general',
    d: 'Herramientas, tornillería, pintura, electricidad y lo que falta para terminar la pega.',
    img: `${IMG}/m6.webp`,
    alt: 'Muestrario de herramientas y accesorios en la pared de Ferretería Müller',
  },
  {
    n: '02',
    t: 'Materiales de construcción',
    d: 'Stock de obra gruesa y terminaciones para la casa, el patio o la ampliación.',
    img: `${IMG}/m1.webp`,
    alt: 'Entrada de Ferretería Müller con productos de ferretería en las vitrinas',
  },
  {
    n: '03',
    t: 'Arriendo de maquinarias',
    d: 'Equipos por día para no quedarse pegado: pregunte por disponibilidad al mostrador.',
    img: `${IMG}/m3.webp`,
    alt: 'Camión rojo de Ferretería Müller estacionado frente al local en Rafael Sanzio',
  },
  {
    n: '04',
    t: 'Venta de áridos',
    d: 'El camión rojo de la casa: áridos para hormigón, radieres y nivelaciones de terreno.',
    img: `${IMG}/m4.webp`,
    alt: 'Camión rojo con letrero Ferretería Müller Áridos cargado para despacho',
  },
]

export const RESENAS = [
  {
    nombre: 'Andrea Sweet',
    estrellas: 4,
    texto: 'Tiene de todo y a buen precio. Atención rápida y amable.',
  },
  {
    nombre: 'Claudio Pérez',
    estrellas: 5,
    texto: 'Buena variedad de productos y los dueños atienden muy bien.',
  },
  {
    nombre: 'tita',
    estrellas: 5,
    texto: 'Excelente atención, siempre encuentro lo que necesito.',
  },
]
