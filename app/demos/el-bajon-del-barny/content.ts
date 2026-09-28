/**
 * app/demos/el-bajon-del-barny/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre, rubro,
 * dirección, teléfono/WhatsApp, horario, rango de precios, servicios
 * (en el local, retiro en el borde del local, delivery sin contacto),
 * las 26 reseñas 4.2 y los platos mencionados. La promo del chacarero
 * sale de una imagen publicada por el local. Textos descriptivos de muestra.
 */

export const BIZ = {
  name: 'El Bajón del Barny',
  rubro: 'Restaurante de comida rápida',
  address: '2 Norte 3275, entre 24 y 25 Oriente',
  postal: '3460000',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5778 0418',
  whatsapp: '56957780418',
  reviews: 26,
  rating: '4.2',
  priceRange: '$5.000–10.000 por persona',
  hours: 'Todos los días desde las 12:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Bajón del Barny y quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'El Bajon del Barny, 2 Norte 3275, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '2 Norte 3275, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/el-bajon-del-barny'

export const HOURS = [
  { d: 'Lunes a jueves', h: '12:00 – 22:30' },
  { d: 'Viernes', h: '12:00 – 23:30' },
  { d: 'Sábado y domingo', h: '12:00 – 23:00' },
] as const

/** Platos y servicios reales vistos en la ficha de Maps y fotos del local. */
export const MENU = [
  {
    n: '01',
    tag: 'El clásico',
    title: 'Completos mojados',
    desc: 'Palta, tomate y mayo casera sobre pan suave. El más pedido de la casa, también en versión italiana.',
    img: 'completo.webp',
    alt: 'Completo mojado con palta de El Bajón del Barny',
  },
  {
    n: '02',
    tag: 'A la plancha',
    title: 'Hamburguesas',
    desc: 'Hamburguesas armadas a la plancha, con queso derretido y papas. De la parrilla directo a la mesa.',
    img: 'burgers.webp',
    alt: 'Tres hamburguesas con papas en El Bajón del Barny',
  },
  {
    n: '03',
    tag: 'Para compartir',
    title: 'Salchipapas y papas fritas',
    desc: 'Papas fritas con vienesa cortada, salsas y para llevar. La opción para el bajón de medianoche.',
    img: 'mesa.webp',
    alt: 'Mesa con completos, salchipapas y bebidas en El Bajón del Barny',
  },
  {
    n: '04',
    tag: 'Sandwichería',
    title: 'Chacarero y Barros Luco',
    desc: 'Sándwiches de la carta: chacarero con porotos verdes y ají, y el clásico Barros Luco de carne y queso.',
    img: 'completos.webp',
    alt: 'Sándwiches servidos en El Bajón del Barny',
  },
] as const

/** Promo real publicada por el local (imagen de su carta en Maps). */
export const PROMO = {
  title: 'Chacarero x2',
  price: '$6.500',
  img: 'promo.webp',
  alt: 'Flyer del local: promo chacarero 2 por $6.500',
}

export const SERVICES = [
  'En el local',
  'Retiro en el borde del local',
  'Delivery sin contacto',
] as const
