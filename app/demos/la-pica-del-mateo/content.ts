/**
 * app/demos/la-pica-del-mateo/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y página de
 * Facebook): nombre, rubro, dirección, comuna, WhatsApp, las 12 reseñas
 * y los 1354 seguidores. Todo lo demás (carta, formatos, precios y
 * textos) es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'La Pica del Mateo',
  rubro: 'Restaurante familiar',
  address: 'Carlos Silva Renard 883',
  postal: '3520000',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5715 8874',
  whatsapp: '56957158874',
  reviews: 12,
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

/** Tarjetas del stack (muestra): foto, formato y el dato que manda. */
export const STACK = [
  {
    n: '01',
    tag: 'Por docena',
    title: 'Empanadas de horno',
    desc: 'Masa amasada en la casa y horno a leña. Se piden sueltas o por docena para la once, el cumpleaños o la faena.',
    stat: '12',
    statLabel: 'unidades por bandeja',
    img: 'detalle2.webp',
    alt: 'Bandeja de empanadas de horno recién salidas junto a la cocina a leña',
  },
  {
    n: '02',
    tag: 'Mesón',
    title: 'Colación del día',
    desc: 'Plato del día servido rápido en el mesón, con sopaipillas y pebre. Para almorzar bien sin perder la tarde.',
    stat: '1',
    statLabel: 'menú distinto cada día',
    img: 'detalle3.webp',
    alt: 'Mesón de madera con platos apilados, vasos y una fuente de sopaipillas',
  },
  {
    n: '03',
    tag: 'En el local',
    title: 'Almuerzo familiar',
    desc: 'Mesa grande para la familia completa, porciones generosas y cocina chilena de siempre, sin apuro.',
    stat: '+10',
    statLabel: 'personas por mesa armada',
    img: 'ambiente.webp',
    alt: 'Comedor de La Pica del Mateo',
  },
  {
    n: '04',
    tag: 'Por volumen',
    title: 'Pedidos para grupos',
    desc: 'Bandejas y colaciones para cuadrillas, oficinas y eventos. Se coordina por WhatsApp con cantidad y hora de retiro.',
    stat: '24 h',
    statLabel: 'de aviso para pedidos grandes',
    img: 'hero.webp',
    alt: 'Plato servido en La Pica del Mateo',
  },
] as const

/** Precios por volumen: estructura de muestra, sin montos reales. */
export const PRICES = [
  { item: 'Empanada de horno', tiers: ['Unidad', 'Docena', '3 docenas o más'] },
  { item: 'Colación del día', tiers: ['1 persona', '10 colaciones', '25 o más'] },
  { item: 'Bandeja de sopaipillas', tiers: ['Media bandeja', 'Bandeja', '3 bandejas o más'] },
] as const

export const VALUES = [
  { title: 'Atención directa', desc: 'Pides al que cocina. Sin intermediarios ni call center.' },
  { title: 'Porción que llena', desc: 'Plato abundante y precio que conviene más mientras más pides.' },
  { title: 'Rápido y cumplidor', desc: 'Pedido listo a la hora que se acordó, para retirar en el local.' },
] as const
