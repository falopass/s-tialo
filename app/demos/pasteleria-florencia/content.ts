/**
 * app/demos/pasteleria-florencia/content.ts
 *
 * Datos del mockup. REALES y verificados (29-09-2026):
 * - Ficha de Google Maps «Pastelería Florencia»: Quechereguas 2218,
 *   Molina — teléfono +56 9 7893 1220, 4.2 estrellas con 10 reseñas.
 *   Horario: lun-jue 8:30-13:30 y 15:30-19:00, viernes 8:30-13:30,
 *   sábado 9:00-19:00, domingo 10:00-15:00.
 * - Instagram @pasteleriaflorenciaa (3.4K seguidores, activo): tortas
 *   a pedido y creativas, berlines fritos, queques, kuchen y dulces
 *   cubiertos de chocolate. El logo es un óvalo verde con la palabra
 *   «Florencia» en cursiva y una pastelera.
 * - Las fotos del local son de su ficha: vitrina de tortas, el rincón
 *   con la pizarra «Nuestra Receta», la balanza turquesa y el
 *   gramófono que dan la identidad vintage de la tienda.
 * - Las reseñas citadas son textuales de Google Maps.
 */

export const BIZ = {
  name: 'Pastelería Florencia',
  short: 'Florencia',
  rubro: 'Pastelería',
  address: 'Quechereguas 2218',
  addressFull: 'Quechereguas 2218, Molina, Maule',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7893 1220',
  whatsapp: '56978931220',
  rating: 4.2,
  reviews: 10,
  instagram: 'pasteleriaflorenciaa',
} as const

export const waLink = (msg: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(msg)}`

export const WA_LINK = waLink(
  'Hola, vi la página de Pastelería Florencia y quiero encargar una torta en Quechereguas 2218',
)

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Pastelería Florencia, Quechereguas 2218, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pastelería Florencia, Quechereguas 2218, Molina, Maule, Chile',
)}&output=embed`

export const INSTAGRAM_URL = 'https://www.instagram.com/pasteleriaflorenciaa/'

// Horario real de la ficha de Google Maps
export const HOURS = [
  { d: 'Lunes a jueves', h: '8:30 – 13:30 y 15:30 – 19:00' },
  { d: 'Viernes', h: '8:30 – 13:30' },
  { d: 'Sábado', h: '9:00 – 19:00' },
  { d: 'Domingo', h: '10:00 – 15:00' },
]

// La carta según su Instagram, su pizarra y las reseñas
export const CARTA = [
  {
    n: 'Tortas a pedido',
    d: 'Las de la vitrina y las creativas: mil hojas, panqueque, temáticas hechas a pedido.',
    img: 'vitrina-tortas.webp',
    alt: 'Vitrina con tortas rosadas y cremosas de Pastelería Florencia',
  },
  {
    n: 'Kuchen y pie de fruta',
    d: 'Kuchen de frambuesa, tarta de frutas y merengón de la vitrina.',
    img: 'vitrina-kuchen.webp',
    alt: 'Kuchen de frambuesa, tarta de frutas y pie en la vitrina',
  },
  {
    n: 'Dulces cubiertos',
    d: 'Alfajores, bombones y bocaditos bañados en chocolate.',
    img: 'bombones.webp',
    alt: 'Dulces y alfajores cubiertos de chocolate en la vitrina de la pastelería',
  },
  {
    n: 'Queques y dulces de la casa',
    d: 'Queques, berlines fritos y los bocaditos para llevar.',
    img: 'kuchen-frutas.webp',
    alt: 'Kuchen de frutas con kiwi, durazno y cerezas en exhibidor',
  },
]

// Reseñas textuales de Google Maps
export const REVIEWS = [
  {
    q: 'Todo es rico, sabor artesanal y los precios muy recomendables.',
    a: 'Paulina Albornoz',
  },
  {
    q: 'Mejor pastelería de Molina. Siempre todo fresco.',
    a: 'Verónica Carreño Bravo',
  },
  {
    q: 'Excelente atención, amabilidad, local limpio y todo rico.',
    a: 'Pablo Pareja',
  },
]

export const IMG = '/demos/pasteleria-florencia'
