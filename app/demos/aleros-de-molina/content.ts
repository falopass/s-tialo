/**
 * app/demos/aleros-de-molina/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + carta oficial en
 * margaritavignolo.cl/menu): nombre, dirección, teléfono, rating 4,2 con
 * 252 reseñas, amenidades (wifi y desayuno gratis, estacionamiento,
 * aire acondicionado, pet friendly), menú con precios y las reseñas
 * citadas (nombre y texto tomados de Google). El dato "restaurant para
 * 80 personas" sale del sitio de la familia Vignolo (margaritavignolo.cl).
 * Las tarifas de alojamiento no se publican: se consultan por WhatsApp.
 */

export const BIZ = {
  name: 'Hostal y Restaurant Aleros de Molina',
  short: 'Aleros de Molina',
  rubro: 'Hostal y restaurant',
  address: 'Luis Cruz Martínez 1947',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9128 2384',
  phoneTel: '+56991282384',
  whatsapp: '56991282384',
  rating: 4.2,
  ratingLabel: '4,2',
  reviews: 252,
  founded: 2010,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Aleros de Molina y quiero consultar',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero consultar disponibilidad en el hostal Aleros de Molina',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hostal y Restaurant Aleros de Molina, Luis Cruz Martínez 1947, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Hostal y Restaurant Aleros de Molina, Luis Cruz Martínez 1947, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/aleros-de-molina'

/** Carta real publicada en margaritavignolo.cl/menu */
export const CARTA = [
  {
    grupo: 'La colación y los desayunos',
    items: [
      { plato: 'Colación', precio: '$4.500' },
      { plato: 'Desayuno tradicional', precio: '$3.000' },
      { plato: 'Paila de huevos con jamón o queso', precio: '$3.000' },
      { plato: 'Chorrillana para 2', precio: '$5.500' },
      { plato: 'Chorrillana para 4', precio: '$9.000' },
    ],
  },
  {
    grupo: 'De la cocina',
    items: [
      { plato: 'Plateada a lo pobre', precio: '$7.500' },
      { plato: 'Mechada o pollo a lo pobre', precio: '$7.500' },
      { plato: 'Lasaña', precio: '$6.500' },
      { plato: 'Cazuela de vacuno', precio: '$5.500' },
      { plato: 'Ensalada familiar', precio: '$5.000' },
    ],
  },
  {
    grupo: 'Parrillada de la casa',
    items: [
      { plato: 'Parrillada tradicional x2', precio: '$19.900' },
      { plato: 'Parrillada tradicional x4', precio: '$39.900' },
      { plato: 'Parrillada especial x2', precio: '$29.900' },
      { plato: 'Parrillada especial x4', precio: '$44.900' },
    ],
  },
] as const

/** Amenidades reales de la ficha de Google */
export const AMENIDADES = [
  'Desayuno incluido',
  'Wi-Fi gratis',
  'Estacionamiento gratis',
  'Aire acondicionado',
  'Pet friendly',
  'Restaurant en el mismo local',
] as const

/** Reseñas reales de Google (nombre + texto de la ficha) */
export const RESENAS = [
  {
    texto:
      'Buscando almuerzo encontramos este excelente restaurante. Ambiente familiar, estacionamiento y todo muy limpio. Pedimos mechada y plateada, las dos deliciosas.',
    autor: 'Alejandra A.',
  },
  {
    texto:
      'Nos quedamos dos noches en el hostal y todo muy bien. La habitación amplia, con mesa de comedor, sillones, dos baños y dos dormitorios.',
    autor: 'Paula M.',
  },
  {
    texto:
      'El menú del día es bien variado. Probé la plateada con papas fritas y estaba excelente. Atención rápida y amable, lugar limpio y bonito.',
    autor: 'H. S., guía local',
  },
] as const
