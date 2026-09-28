/**
 * app/demos/pizzeria-la-toscana/content.ts
 *
 * Datos del mockup. REALES, de la ficha pública de Google Maps
 * «Pizzería la Toscana» (Molina) y de sus propias fotos:
 * dirección (Maipú 2030 — en la puerta dicen 2030–2032),
 * teléfono (+56 9 3258 6497), 5.0 estrellas con 6 reseñas.
 * La ficha no publica horario — se omite. Las reseñas citadas son
 * textuales de Google Maps. Las redes que aparecen en la puerta
 * no se verificaron como propias — no se usan.
 */

export const BIZ = {
  name: 'Pizzería la Toscana',
  short: 'La Toscana',
  rubro: 'Pizzería',
  address: 'Maipú 2030',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3258 6497',
  whatsapp: '56932586497',
  rating: 5.0,
  reviews: 6,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pizzería la Toscana y quiero pedir una pizza',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero hacer un pedido para retirar en Maipú 2030',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Pizzería la Toscana, Maipú 2030, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pizzería la Toscana, Maipú 2030, Molina, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/pizzeria-la-toscana'

// Las pizzas que ellos mismos publicaron en su ficha
export const PIZZAS = [
  {
    num: '01',
    title: 'La clásica de pepperoni',
    body: 'Pepperoni, aceitunas negras y orégano — la de siempre, dorada al punto.',
    src: `${IMG}/pizza-pepperoni.webp`,
    alt: 'Pizza de pepperoni con aceitunas negras y orégano de Pizzería la Toscana, recién salida del horno',
  },
  {
    num: '02',
    title: 'La vegetariana de la casa',
    body: 'Zapallo italiano, cebolla y pimentón sobre queso fundido — la que piden los que conocen.',
    src: `${IMG}/pizza-vegetales.webp`,
    alt: 'Pizza vegetariana de Pizzería la Toscana con zapallo italiano, cebolla y pimentón',
  },
  {
    num: '03',
    title: 'Para llevar a la casa',
    body: 'Sale caliente en su caja: la misma masa de la esquina, lista para caminar las tres cuadras.',
    src: `${IMG}/pizza-para-llevar.webp`,
    alt: 'Pizza familiar de Pizzería la Toscana servida sobre su caja para llevar',
  },
] as const

// Citas textuales de las reseñas públicas en Google Maps
export const RESENAS = [
  {
    quote: 'Ricas pizzas y buena atención.',
    author: 'Isaac Ibarra',
  },
  {
    quote:
      'El ambiente muy relajante, muy buena conversación del señor y muy buenas pizzas; el lugar es muy bonito pero las pizzas 10/10, tiene arta variedad y todas muy ricas.',
    author: 'Alfonso Zuccarelli',
  },
  {
    quote: 'Rico, suculento y las pizzas también.',
    author: 'Beary Cute',
  },
] as const

export const NAV_LINKS = [
  { label: 'Las pizzas', href: '#pizzas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'La esquina', href: '#esquina' },
]
