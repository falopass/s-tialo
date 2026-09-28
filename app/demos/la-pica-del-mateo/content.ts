/**
 * app/demos/la-pica-del-mateo/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, página de
 * Facebook y la carta pintada en la fachada del local): nombre, rubro,
 * dirección, comuna, WhatsApp, las 12 reseñas y los 1354 seguidores.
 * Los platos de la carta salen de los carteles reales de la fachada.
 * Precios no se publican: nunca confirmados.
 */

export const BIZ = {
  name: 'La Pica del Mateo',
  rubro: 'Casa de comidas',
  address: 'Carlos Silva Renard 883',
  postal: '3520000',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5715 8874',
  whatsapp: '56957158874',
  reviews: 12,
  rating: '4.0',
  followers: '1.354',
  facebook: 'https://www.facebook.com/la.pica.del.mateo',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Pica del Mateo y quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Pica del Mateo, Carlos Silva Renard 883, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Carlos Silva Renard 883, San Clemente, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/la-pica-del-mateo'

/** Carta real: leída de los carteles pintados en la fachada del local. */
export const CARTA = [
  {
    board: 'Sandwich y completos',
    items: ['Completos', 'Churrascos', 'Lomitos'],
  },
  {
    board: 'Para la mesa',
    items: ['Papas fritas', 'Salchipapas', 'Empanadas de queso', 'Nuggets'],
  },
  {
    board: 'Desayunos',
    items: ['Paila de huevo', 'Jamón queso', 'Ave mayo', 'Ave pimentón', 'Queso mantequilla', 'Té · café'],
  },
] as const

/** Platos de fondo que salen en las fotos del negocio. */
export const PLATOS = [
  { src: `${IMG}/cazuela-pollo.webp`, alt: 'Cazuela de pollo servida en plato de greda', name: 'Cazuela de pollo' },
  { src: `${IMG}/cazuela-vacuno.webp`, alt: 'Cazuela de vacuno en greda con verduras', name: 'Cazuela de vacuno' },
  { src: `${IMG}/completo.webp`, alt: 'Completo italiano con palta, tomate y mayo', name: 'Completo italiano' },
  { src: `${IMG}/salchipapas.webp`, alt: 'Porción de salchipapas', name: 'Salchipapas' },
  { src: `${IMG}/sopaipillas.webp`, alt: 'Sopaipillas con pebre', name: 'Sopaipillas con pebre' },
  { src: `${IMG}/plato.webp`, alt: 'Pollo salteado con arroz, plato de fondo de la casa', name: 'Pollo con arroz' },
] as const

export const RESENAS = [
  {
    text: 'Carta muy variada, atención rápida y precios convenientes. 100% recomendable.',
    author: 'Pablo Pérez',
    meta: 'reseña de Google',
  },
  {
    text: 'La pechuga a la plancha estaba exquisita. Buena atención y ambiente familiar.',
    author: 'Darinka Rubio',
    meta: 'reseña de Google',
  },
] as const
