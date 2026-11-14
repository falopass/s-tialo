/**
 * app/demos/muebleria-valdivia/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, 14-11-2026, coincide
 * con el chat de WhatsApp): nombre «Mueblería Valdivia», rubro (tienda
 * de muebles), dirección Philippi 1046, Valdivia, WhatsApp
 * +56 9 7796 9348 y la cita textual de Felipe Ramirez Cofré. Las fotos
 * de public/demos/muebleria-valdivia son reales, de la ficha de Maps:
 * cocinas instaladas, sillones capitoné, silla tapizada y cojines.
 * No hay horario confiable publicado (por eso la página invita a
 * escribir por WhatsApp). Las categorías se describen solo desde lo
 * que muestran las fotos; todo el texto de secciones es de muestra.
 */

export const BIZ = {
  name: 'Mueblería Valdivia',
  short: 'Mueblería Valdivia',
  rubro: 'Tienda de muebles',
  address: 'Philippi 1046',
  city: 'Valdivia',
  region: 'Región de Los Ríos',
  phoneDisplay: '+56 9 7796 9348',
  whatsapp: '56977969348',
} as const

export const WA_LINK =
  'https://wa.me/56977969348?text=Hola%20Muebler%C3%ADa%20Valdivia%2C%20quiero%20consultar%20por%20un%20mueble'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mueblería Valdivia, Philippi 1046, Valdivia',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Mueblería Valdivia, Philippi 1046, Valdivia',
)}&output=embed`

export const QUOTE = {
  text: 'Buena, buena atención y precios bajos.',
  author: 'Felipe Ramirez Cofré',
} as const

export const IMG = '/demos/muebleria-valdivia'
