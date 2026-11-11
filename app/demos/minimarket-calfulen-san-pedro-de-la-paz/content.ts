/**
 * app/demos/minimarket-calfulen-san-pedro-de-la-paz/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps y letrero del local,
 * leídos el 11-11-2026): nombre «Minimarket Distribuidora Calfulén»,
 * lema del letrero «Alimentos y productos de calidad a la puerta de tu
 * hogar», dirección (Camino El Venado 1440, Distrito El Venado, San
 * Pedro de la Paz), horario (todos los días 7:00 a 22:00), WhatsApp,
 * 16 opiniones en Google (sin nota publicada: no se muestran estrellas)
 * y las citas textuales de las reseñas. Fotos: todas de la ficha de Maps.
 * CATALOGO: solo categorías que se ven en las fotos de la ficha; sin
 * marcas, sin precios y sin stock. OFERTAS: la pizarra real tiene precios
 * escritos a tiza; aquí no se reproducen, solo se invita a preguntar por
 * la oferta del día. Nada de despacho afirmado más allá del propio lema.
 */

export const BIZ = {
  name: 'Minimarket Distribuidora Calfulén',
  short: 'Distribuidora Calfulén',
  lema: 'Alimentos y productos de calidad a la puerta de tu hogar',
  rubro: 'Minimarket y distribuidora',
  address: 'Camino El Venado 1440',
  district: 'Distrito El Venado',
  city: 'San Pedro de la Paz',
  region: 'Región del Biobío',
  phoneDisplay: '+56 9 5639 9968',
  whatsapp: '56956399968',
  reviews: 16,
} as const

export const HORARIO = 'Todos los días, de 7:00 a 22:00'

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Calfulén y quiero hacer un pedido',
)}`

export const waPedir = (producto: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página de Calfulén y quiero pedir: ${producto}`,
  )}`

// Categorías tomadas solo de lo que se ve en las fotos de la ficha:
// exhibidor rojo de snacks, refrigerador de fiambres «sección de oferta»,
// repisas de quesos y yogures, refrigerador de bebidas y estantes de
// abarrotes. Cada tarjeta pide por WhatsApp, sin precios.
export const CATALOGO = [
  {
    nombre: 'Galletas, chocolates y snacks',
    detalle: 'El exhibidor rojo de la entrada: galletas, chocolates, dulces y cabritas para la once.',
    img: 'exhibidor-snacks',
    pos: '50% 55%',
    alt: 'Exhibidor rojo lleno de galletas, chocolates y snacks del minimarket',
    pedir: 'galletas, chocolates o snacks',
  },
  {
    nombre: 'Fiambres y cecinas',
    detalle: 'Jamones, salchichas y cecinas del refrigerador que tiene la «sección de oferta».',
    img: 'refrigerador-ofertas',
    pos: '32% 50%',
    alt: 'Refrigerador vertical con fiambres y cecinas en oferta',
    pedir: 'fiambres o cecinas',
  },
  {
    nombre: 'Quesos y lácteos',
    detalle: 'Quesos, yogures y lácteos refrigerados en las repisas junto a los fiambres.',
    img: 'refrigerador-ofertas',
    pos: '80% 42%',
    alt: 'Repisas con quesos, yogures y lácteos refrigerados',
    pedir: 'quesos o lácteos',
  },
  {
    nombre: 'Bebidas y jugos',
    detalle: 'Bebidas frías, aguas y energéticas del refrigerador azul junto a la caja.',
    img: 'exhibidor-snacks',
    pos: '32% 8%',
    alt: 'Refrigerador de bebidas y repisa con energéticas dentro del local',
    pedir: 'bebidas o jugos',
  },
  {
    nombre: 'Despensa y abarrotes',
    detalle: 'Los estantes de siempre: abarrotes, snacks al paso y lo que falta para la semana.',
    img: 'interior',
    pos: '82% 32%',
    alt: 'Estantes del interior del minimarket con abarrotes y productos',
    pedir: 'abarrotes de la despensa',
  },
] as const

// La pizarra de la entrada es real y cambia: en las fotos se han visto
// quesos, salchichas y agua. Sin precios: la oferta del día se pregunta.
export const PIZARRA = [
  'quesos laminados',
  'salchichas y cecinas',
  'agua y bebidas',
  'dulces y snacks',
] as const

export const OPINIONES = [
  {
    autor: 'Fabián C.',
    texto:
      'Excelente variedad de productos. Nos atendió Josefa, muy atenta y amable en sus sugerencias. Conocía bien todos los productos.',
  },
  {
    autor: 'Omar O.',
    texto:
      'Minimarket siempre limpio, buenas ofertas, se consiguen productos con buenos precios, abierto todos los días importante para esos días festivos que todo está cerrado.',
  },
  {
    autor: 'Richard M.',
    texto:
      'Muy buen minimarket, tiene gran variedad de productos y precios más convenientes que otros supermercados del sector. He comprado varias veces y la atención siempre ha sido excelente. Muy recomendado.',
  },
] as const

// URL real de la ficha (leída el 11-11-2026).
export const MAPS_URL =
  'https://www.google.com/maps/place/Minimarket+Distribuidora+Calful%C3%A9n/@-36.8534191,-73.0933282,17z/data=!4m6!3m5!1s0x9669c9004c26441d:0x89861dde8b5daad5!8m2!3d-36.8534191!4d-73.0933282'

export const MAPS_EMBED = 'https://www.google.com/maps?q=-36.8534191,-73.0933282&z=16&output=embed'

export const IMG = '/demos/minimarket-calfulen-san-pedro-de-la-paz'
