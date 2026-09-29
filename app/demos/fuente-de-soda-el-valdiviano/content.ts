/**
 * app/demos/fuente-de-soda-el-valdiviano/content.ts
 *
 * Datos del demo. REALES:
 * - Ficha de Google Maps: 'Fuente De Soda "El Valdiviano"',
 *   restaurante en Av. Dr. Meza 1430–1498, Cauquenes; rating 4,5;
 *   teléfono fijo (73) 248 6481; la ficha muestra martes 11:00–22:00.
 * - SERNATUR (serviciosturisticos.cl): Av. Dr. Meza Nº1476, Cauquenes,
 *   mismo teléfono (73) 248 6481 — mismo negocio.
 * - Carta leída de los vinilos de su propia fachada (foto real de la
 *   ficha): completos, sandwich, pizzas, chorrillanas, jugos naturales
 *   ($1.500, único precio visible), empanadas, churrasco italiano,
 *   papas fritas, helados, pasteles y café; local climatizado.
 * - La ficha publica solo 1 foto (la fachada) y no hay redes sociales
 *   confirmadas: el sitio se apoya en tipografía y la carta, sin fotos
 *   ni logo inventados. El rubro con precios se cotiza en el local o
 *   por teléfono — la casa no tiene WhatsApp publicado.
 */

export const BIZ = {
  name: 'Fuente de Soda El Valdiviano',
  short: 'El Valdiviano',
  rubro: 'Fuente de soda',
  address: 'Av. Dr. Meza 1476',
  city: 'Cauquenes',
  region: 'Región del Maule',
  phoneDisplay: '(73) 248 6481',
  phoneTel: '+56732486481',
  rating: '4,5',
} as const

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Fuente De Soda El Valdiviano, Av. Dr. Meza, Cauquenes, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Fuente De Soda El Valdiviano, Cauquenes, Chile',
)}&output=embed`

export const IMG = '/demos/fuente-de-soda-el-valdiviano'

export const CARTA = [
  {
    n: 'I',
    name: 'Completos y sandwich',
    desc: 'Los de siempre, al paso o en mesa: completos, sandwich y churrasco italiano.',
  },
  {
    n: 'II',
    name: 'Pizzas y chorrillanas',
    desc: 'Pizzas de la casa y chorrillanas para compartir — lo que anuncia el ventanal.',
  },
  {
    n: 'III',
    name: 'Empanadas y papas fritas',
    desc: 'Empanadas del día y papas fritas para acompañar cualquier colación.',
  },
  {
    n: 'IV',
    name: 'Jugos naturales',
    desc: 'Jugo natural de fruta a $1.500 — el precio que lleva años pintado en la ventana.',
    price: '$1.500',
  },
  {
    n: 'V',
    name: 'Helados, pasteles y café',
    desc: 'La vitrina dulce de la fuente: helados, pasteles del día y café para la once.',
  },
] as const

export const HORAS = [
  { d: 'Horario de hoy (según su ficha)', h: '11:00 a 22:00' },
] as const
