/**
 * app/demos/toro-s-sushi-rauco/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "Toro's Sushi Rauco", categoría Restaurante de
 *   sushi, Balmaceda, Rauco, Maule. Rating 4,7 en la ficha en vivo
 *   (restaurantess.cl registra 4,8 con 103 reseñas). Plus code 3MGP+QJ Rauco.
 * - Carta y pedidos en su sitio oficial de pedidos ola.click
 *   (toros-sushi-rauco-2.ola.click): "Toros Sushi", lema "Sushi, handrolls,
 *   ovni roll y mucho más ¡Un ataque de sabor!". Servicios: en el local,
 *   retiro y delivery (20–60 min; gratis desde $30.000).
 * - WhatsApp de pedidos +56 9 2972 1169 — el que publica su carta oficial y
 *   la ficha de Maps. (Una planilla de prospección citaba otro número;
 *   prevalece el del canal de pedidos vigente.)
 * - Horario publicado en su carta: domingo a jueves 18:00–23:00,
 *   viernes y sábado 18:00–00:00.
 * - Precios: textual de su carta ola.click (los afiches promocionales
 *   impresos pueden variar; aquí van los de la carta vigente).
 * - Fotos: todas reales — logo, afiches y fotos de producto publicados en
 *   su carta oficial ola.click (estética neón "ovni" de la propia marca).
 */

export const BIZ = {
  name: "Toro's Sushi Rauco",
  rubro: 'Restaurante de sushi',
  slogan: 'Un ataque de sabor',
  address: 'Balmaceda, Rauco',
  city: 'Rauco',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 2972 1169',
  whatsapp: '56929721169',
  rating: '4,7',
  pedidosUrl: 'https://toros-sushi-rauco-2.ola.click/',
  mapsPlaceUrl:
    "https://www.google.com/maps/place/Toro's+Sushi+Rauco/@-34.9230388,-71.3134067,17z/data=!3m1!4b1!4m6!3m5!1s0x96645b841e2d2ae1:0x1d0f8a1415feeee2!8m2!3d-34.9230388!4d-71.3134067!16s%2Fg%2F11g1dx0jq_",
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  "Hola Toro's Sushi, quiero hacer un pedido",
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Toro's Sushi Rauco Balmaceda Rauco Maule Chile",
)}&output=embed`

export const IMG = '/demos/toro-s-sushi-rauco'

// Textual de su carta ola.click (precios vigentes de la carta, no de afiches).
export const CARTA = [
  {
    img: 'ovni-clasico',
    alt: 'Ovni Roll clásico de pollo, palta y queso crema apanado y frito',
    nombre: 'Ovni Roll Clásico',
    detalle: 'Pollo + palta + queso crema. Crujiente, caliente, cremoso.',
    precio: '$2.000',
  },
  {
    img: 'handroll-tempura',
    alt: 'Handroll mediano en tempura con salsa',
    nombre: 'Handroll mediano tempura',
    detalle: 'El cono crocante que sale entero en tempura.',
    precio: '$2.990',
  },
  {
    img: 'sushipleto',
    alt: 'Sushipleto en tempura, el completo de sushi del local',
    nombre: 'Sushipleto tempura',
    detalle: 'El completo versión sushi: caliente, con salsa y palta.',
    precio: 'Desde la carta',
  },
  {
    img: 'eleccion-48',
    alt: 'Tabla de 48 piezas de sushi a elección',
    nombre: '48 piezas a elección',
    detalle: 'Tu combinación favorita, armada para compartir.',
    precio: '$17.490',
  },
  {
    img: 'tabla-84',
    alt: 'Tabla grande de sushi variado con nigiris y rolls',
    nombre: 'Tablas hasta 84 piezas',
    detalle: 'Para la familia completa: las tablas grandes de la casa.',
    precio: 'Desde $15.000',
  },
  {
    img: 'camarones-furay',
    alt: 'Camarones furay apanados con salsas de la casa',
    nombre: 'Camarones furay',
    detalle: 'Tres sabores: tradicional, BBQ y teriyaki.',
    precio: 'Desde la carta',
  },
  {
    img: 'gohan',
    alt: 'Gohan bowl con arroz, pollo, choclo y cebollín',
    nombre: 'Gohan bowl',
    detalle: 'El bowl contundente: arroz, proteína y topping completo.',
    precio: 'Desde la carta',
  },
  {
    img: 'salchipapas',
    alt: 'Salchipapas en conos de tres tamaños con salsa',
    nombre: 'Salchipapas',
    detalle: 'Papas caseras en cono, en tres tamaños.',
    precio: 'Desde la carta',
  },
] as const

// Su nave insignia, con los sabores de la carta.
export const OVNIS = [
  { nombre: 'Clásico', detalle: 'Pollo, palta y queso crema', precio: '$2.000' },
  { nombre: 'Churrasco Cheddar', detalle: 'Churrasco, queso cheddar y cebollín', precio: '$2.000' },
  { nombre: 'Lomito Hot', detalle: 'Lomito, ahumado y cremoso — el picante', precio: '$2.000' },
] as const

export const HORARIO = [
  { d: 'Domingo a jueves', h: '18:00 – 23:00' },
  { d: 'Viernes y sábado', h: '18:00 – 00:00' },
] as const
