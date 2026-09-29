/**
 * app/demos/hosteria-itahue/content.ts
 *
 * Datos verificados:
 * - Google Maps: "Hosteria Itahue", 212 Ruta Panamericana Sur, Molina,
 *   4,3 estrellas · 842 reseñas · $10.000–15.000 · tel 9 7996 1910
 * - hosteriaitahue.cl: Ruta 5 Sur km 212, comida típica chilena, desayunos,
 *   "productos artesanales de elaboración propia", logo burdeo copas+chef
 * - Platos y precios: carta fotografiada en la ficha de Maps
 * - Reseñas citadas: tal cual aparecen publicadas en Google Maps
 */

export const BIZ = {
  name: 'Hostería Itahue',
  short: 'Itahue',
  rubro: 'Restaurant y hostería de ruta',
  address: 'Ruta 5 Sur km 212',
  city: 'Molina',
  region: 'Región del Maule',
  plusCode: 'VJ2G+56 Itahue, Molina',
  phoneDisplay: '+56 9 7996 1910',
  phoneTel: '+56979961910',
  whatsapp: '56979961910',
  web: 'hosteriaitahue.cl',
  webUrl: 'https://hosteriaitahue.cl',
  rating: 4.3,
  ratingLabel: '4,3',
  reviews: 842,
  priceRange: '$10.000 – $15.000',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Hostería Itahue y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, voy en la ruta y quiero avisar que llego a almorzar a Hostería Itahue',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hosteria Itahue, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Hosteria Itahue, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/hosteria-itahue'

// Carta real, transcrita de la foto publicada en su ficha de Google.
export const CARTA = [
  { plato: 'Cazuela de ave', precio: '$8.800' },
  { plato: 'Pollo con agregado', precio: '$8.800' },
  { plato: 'Arrollado huaso con agregado', precio: '$10.100' },
  { plato: 'Lengua con agregado', precio: '$11.100' },
  { plato: 'Plateada con agregado', precio: '$12.500' },
  { plato: 'Lomo con agregado', precio: '$13.800' },
  { plato: 'Plateada a lo pobre', precio: '$15.200' },
] as const

// Destacados publicados en Google Maps y su sitio.
export const DESTACADOS = [
  'Pastel de choclo casero',
  'Jamón serrano',
  'Leche asada',
  'Ensaladas desde $3.800',
] as const

export const RESENAS = [
  {
    nombre: 'Marti',
    texto:
      'Llevo hace 10 años pasando acá a almorzar cuando voy en la ruta y siempre muy bueno los platos, más la excelente atención que siempre brindan. Porciones precisas y buen sabor.',
    fuente: 'Reseña en Google',
  },
  {
    nombre: 'Verónica Aravena',
    texto:
      'Todo muy rico, buena atención. Gracias por calentar la comida de mi hijo, que tiene selectividad alimentaria. Es un restaurant pet friendly.',
    fuente: 'Reseña en Google',
  },
] as const
