// Datos verificados (sep 2026): lacafeteriatalca.cl (carta con precios,
// correo y web), ficha de Google Maps "La Cafetería" (4.4★, 316 reseñas).
// OJO: el local del centro (1 Sur 1310) cerró definitivamente — este demo
// presenta solo la sucursal que sigue abierta: Las Rastras, esquina
// 5 Norte con 34 Oriente (C. 34 Ote. 3596), Talca.
// Horario de la web: Lu–Jue 9:00–22:30 · Vie–Sáb 9:00–23:00 · Dom 10:00–22:00.
// Tagline real del negocio: "Cuando estás aquí, eres familia".

const BIZ = {
  name: 'La Cafetería',
  branch: 'Las Rastras',
  rubro: 'Cafetería, pastelería y restaurant',
  address: '5 Norte esquina 34 Oriente',
  addressCorta: 'C. 34 Ote. 3596',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 2 2517 4148',
  phoneTel: 'tel:+56225174148',
  email: 'info@lacafeteriatalca.cl',
  web: 'lacafeteriatalca.cl',
  webUrl: 'https://lacafeteriatalca.cl',
  rating: 4.4,
  reviews: 316,
  tagline: 'Cuando estás aquí, eres familia',
} as const

export { BIZ }

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=La+Cafeter%C3%ADa+Las+Rastras+Talca'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=La+Cafeter%C3%ADa,+34+Oriente+3596,+Talca&z=16&output=embed'

export const IMG = '/demos/la-cafeteria'

export const HORARIO = [
  ['lunes a jueves', '9:00 – 22:30'],
  ['viernes y sábado', '9:00 – 23:00'],
  ['domingo', '10:00 – 22:00'],
] as const

// La carta real de su web, con los precios publicados.
export const CARTA = [
  {
    seccion: 'café y bebestibles',
    items: [
      { nombre: 'Espresso', precio: '$2.200' },
      { nombre: 'Capuccino', precio: '$3.200' },
      { nombre: 'Té', precio: '$1.400' },
      { nombre: 'Milkshake', precio: '$4.900' },
    ],
  },
  {
    seccion: 'desayunos · hasta las 12:00',
    items: [
      { nombre: 'Desayuno completo', precio: '$5.900 – $8.900' },
      { nombre: 'Completos', precio: 'en carta' },
      { nombre: 'Pastas frescas', precio: 'en carta' },
    ],
  },
  {
    seccion: 'dulces y pastelería',
    items: [
      { nombre: 'Copas', precio: '$5.900 – $6.900' },
      { nombre: 'Postres', precio: '$6.900 – $7.900' },
      { nombre: 'Tortas', precio: '$4.600 – $5.600' },
    ],
  },
] as const

// Reseñas reales de Google, texto original.
export const TESTIMONIALS = [
  {
    nombre: 'Ignacio Morales Poblete',
    stars: 5,
    texto:
      'Fui pensando en pedir un completo, pero al ver que tenían pastas frescas aproveché de probar un fusilli a los tres funghi y estaba delicioso. La porción fue muy buena, llegó a la temperatura perfecta y se notaba bien preparado, con un sabor muy rico y equilibrado.',
  },
  {
    nombre: 'Erika M',
    stars: 5,
    texto:
      'Sus gnocchi con queso son lo mejor. Excelente cocina. Es muy popular así que no es tan tranquilo para trabajar, pero perfecto para disfrutar una buena comida. Precios justos.',
  },
  {
    nombre: 'Tabatha Morales',
    stars: 4,
    texto:
      'Muy rescatable la atención del personal, el local está bien ambientado, es cómodo. La carta es grande, con muchas alternativas. El estacionamiento es por fuera, por la calle.',
  },
] as const

export const FOTOS = {
  noche: {
    src: `${IMG}/noche.webp`,
    alt: 'Fachada de La Cafetería de noche, con el letrero de neón encendido',
  },
  fachada: {
    src: `${IMG}/fachada.webp`,
    alt: 'Fachada de La Cafetería de día, en la esquina de Las Rastras',
  },
  neon: {
    src: `${IMG}/neon.webp`,
    alt: 'Letrero de neón verde dentro del local',
  },
  milkshake: {
    src: `${IMG}/milkshake.webp`,
    alt: 'Milkshake de la casa',
  },
  desayuno: {
    src: `${IMG}/desayuno.webp`,
    alt: 'Desayuno con huevos, pan y café',
  },
  completo: {
    src: `${IMG}/completo.webp`,
    alt: 'Completo de La Cafetería',
  },
  torta: {
    src: `${IMG}/torta.webp`,
    alt: 'Torta de la vitrina',
  },
  mesa: {
    src: `${IMG}/mesa.webp`,
    alt: 'Mesa servida con café y pastelería',
  },
  espresso: {
    src: `${IMG}/espresso.webp`,
    alt: 'Taza de espresso recién servido',
  },
  latte: {
    src: `${IMG}/latte.webp`,
    alt: 'Café latte',
  },
} as const
