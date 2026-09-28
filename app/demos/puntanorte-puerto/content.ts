export const BIZ = {
  name: 'PuntaNorte Puerto',
  rubro: 'Restaurant de mariscos',
  city: 'Talcahuano',
  address: 'Av. Cristóbal Colón 918',
  addressFull: 'Av. Cristóbal Colón 918, Talcahuano, Bío Bío',
  phoneDisplay: '+56 9 7519 6639',
  whatsapp: '56975196639',
  rating: '4,8',
  reviews: '173',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola PuntaNorte Puerto, quiero hacer una consulta.',
)}`

export const WA_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola PuntaNorte Puerto, quiero reservar una mesa.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/PuntaNorte+Puerto/@-36.7176885,-73.1099242,17z'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=PuntaNorte+Puerto,+Av.+Cristóbal+Colón+918,+Talcahuano&output=embed'

export const IMG = '/demos/puntanorte-puerto'

// Horario publicado en la ficha de Google Maps del local.
export const HORARIOS: [string, string][] = [
  ['Lunes', '12:00 – 16:00'],
  ['Martes', '12:00 – 20:00'],
  ['Miércoles a jueves', '12:00 – 00:00'],
  ['Viernes y sábado', '12:00 – 03:00'],
  ['Domingo', '12:00 – 19:00'],
]

// Platos confirmados por fotos y reseñas de la ficha.
export const MESA = [
  {
    name: 'Pastel de jaiba',
    desc: 'El clásico de la zona: jaiba cremosa gratinada, servida en greda.',
    img: `${IMG}/jaiba.webp`,
    alt: 'Pastel de jaiba gratinado servido en plato de greda',
  },
  {
    name: 'Mariscal frío',
    desc: 'Mariscos frescos del puerto con limón y cilantro.',
    img: `${IMG}/mariscal.webp`,
    alt: 'Mariscal frío con mariscos, limón y cilantro',
  },
  {
    name: 'Ceviche',
    desc: 'Pescado fresco marinado en limón, con el punto justo de ají.',
    img: `${IMG}/ceviche.webp`,
    alt: 'Ceviche de pescado fresco con limón y cilantro',
  },
]

// Menciones reales más repetidas en las reseñas de Google.
export const SELLOS = ['Empanadas', 'Mariscos frescos', 'Caldillo de congrio', 'Picoroco', 'Noches de karaoke']

export const RESENAS = [
  {
    q: 'Maravilloso lugar, la comida exquisita; da gusto ir a un local donde sirven mariscos tan sabrosos. La atención de Claudio, 1000 de 10. Recomendado 100%.',
    a: 'Yenny H. · Reseña de Google',
  },
  {
    q: 'La salvación de Talcahuano: bonito; jugos, limonada y tragos exquisitos; comida variada y sabrosa; platos ultra contundentes, ni hace falta pedir entrada.',
    a: 'Isa L. · Local Guide en Google',
  },
  {
    q: 'Lugar exquisito, atención espectacular, buenas porciones y buena presentación. Tragos muy ricos, lugar elegante y excelente música. 1000% recomendable.',
    a: 'José O. · Reseña de Google',
  },
]
