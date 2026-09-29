/**
 * app/demos/hosteria-hualane/content.ts
 *
 * Datos del mockup. REALES: nombre, dirección (Garcés Gana 22-B,
 * Hualañé), teléfono/WhatsApp (+56 9 8257 7313), nota 4,2 con 285
 * reseñas en Google, el menú en menu.fu.do, las reseñas citadas y los
 * precios de la pizarra de pizzas. Las descripciones de los platos y
 * la nota sobre las piezas son contenido de muestra.
 */

export const BIZ = {
  name: 'Hostería Hualañe',
  short: 'H. Hualañe',
  rubro: 'Hostería y restaurante',
  address: 'Garcés Gana 22-B',
  city: 'Hualañé',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8257 7313',
  phoneTel: '+56982577313',
  whatsapp: '56982577313',
  rating: '4,2',
  reviews: 285,
  menuUrl: 'https://menu.fu.do/hosteriahuala%C3%B1e',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Hostería Hualañe y quiero consultar',
)}`

export const WA_LINK_PIEZAS = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero consultar por las piezas de la hostería en Hualañé',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hosteria Hualañe, Hualañé, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Hosteria Hualañe, Hualañé, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/hosteria-hualane'
