/**
 * app/demos/vivo-market-minimarket/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps): nombre «Vivo Market
 * (Minimarket)», rubro tienda de alimentación, sector rural de Talca
 * (plus code H9RX+WF), teléfono/WhatsApp +56 9 5747 5111, horario todos
 * los días 8:00–23:00, nota 5,0 con 17 reseñas, el lema del letrero
 * («Cerca de ti, siempre») y las reseñas citadas (nombres y texto de su
 * ficha, todas de hace ~1 mes: local nuevo). Fotos reales de la ficha
 * en public/demos/vivo-market-minimarket/ + logo recortado del letrero.
 * Descripciones de los pasillos y textos de apoyo son de muestra.
 */

export const BIZ = {
  name: 'Vivo Market',
  full: 'Vivo Market (Minimarket)',
  rubro: 'Minimarket y tienda de alimentación',
  city: 'Talca',
  region: 'Región del Maule',
  address: 'Sector rural de Talca — plus code H9RX+WF',
  phoneDisplay: '+56 9 5747 5111',
  phoneTel: '+56957475111',
  whatsapp: '56957475111',
  rating: '5,0',
  reviewCount: '17',
  lema: 'Cerca de ti, siempre',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Vivo Market y quiero hacer un pedido',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Vivo+Market+(Minimarket)/@-35.4076911,-71.6012673,17z/data=!4m6!3m5!1s0x9665c7ed0f6f7a1d:0x852737c9fc516376!8m2!3d-35.4076911!4d-71.6012673!16s%2Fg%2F11zdrv05n3'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Vivo Market Minimarket, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/vivo-market-minimarket'

/** Pasillos de la tienda: lo que se ve en sus fotos y letrero. */
export const PASILLOS = [
  {
    pasillo: 'Pasillo 01',
    nombre: 'Bebidas y jugos',
    desc: 'La doble puerta de vidrio siempre fría: bebidas, jugos y agua para el calor del valle.',
    foto: 'bebidas',
    alt: 'Refrigerador de doble puerta con bebidas y jugos en Vivo Market',
  },
  {
    pasillo: 'Pasillo 02',
    nombre: 'Snacks y antojos',
    desc: 'El estante rojo de los antojos: papas, galletas, dulces y todo lo que apaña a la vuelta.',
    foto: 'snacks',
    alt: 'Repisa roja con snacks y dulces en Vivo Market',
  },
  {
    pasillo: 'Pasillo 03',
    nombre: 'Frutas y verduras',
    desc: 'El verdurero de la entrada, reponiendo fresco cada día.',
    foto: 'verdurero',
    alt: 'Estantes con frutas y verduras frescas en Vivo Market',
  },
  {
    pasillo: 'Pasillo 04',
    nombre: 'Fiambres y frío',
    desc: 'La vitrina de fiambres junto a la caja, y el frigo de bebidas al lado.',
    foto: 'interior',
    alt: 'Vitrina refrigerada de fiambres en el interior de Vivo Market',
  },
  {
    pasillo: 'Pasillo 05',
    nombre: 'Abarrotes',
    desc: 'El pasillo largo: legumbres, pastas, salsas, aseo y lo que falta en la despensa.',
    foto: 'abarrotes',
    alt: 'Pasillo de abarrotes con estantes blancos en Vivo Market',
  },
] as const

/** Reseñas reales de la ficha de Google (texto y autoría tal cual). */
export const REVIEWS = [
  {
    nombre: 'Gabriela Fernandez',
    texto: 'Mucha variedad de productos y la atención de los chiquillos muy buena. Son muy amables.',
    fecha: 'Hace un mes',
  },
  {
    nombre: 'Joel Marin',
    texto: 'El trato más VIP de toda la Región.',
    fecha: 'Hace un mes',
  },
  {
    nombre: 'Elena Monroy',
    texto: 'Excelente y cercana atención con variedad de productos.',
    fecha: 'Hace un mes',
  },
] as const

export const HORARIO = 'Todos los días · 8:00 a 23:00'
