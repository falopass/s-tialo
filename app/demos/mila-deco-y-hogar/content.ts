/**
 * app/demos/mila-deco-y-hogar/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps y en el
 * directorio del Mall Go Florida): nombre, rubro, dirección,
 * teléfono/WhatsApp, rating 5,0 (1 reseña) y despacho a domicilio.
 * La reseña citada es la real de la ficha. Los textos descriptivos
 * son de muestra: al publicar se ajustan con la tienda.
 */

export const BIZ = {
  name: 'Mila Deco & Hogar',
  legal: 'Encantos de Mila Spa',
  rubro: 'Decoración y artículos para el hogar',
  address: 'Mall Go Florida, local L1014',
  addressRaw: 'Av. Colín 635, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6122 7149',
  phoneTel: '+56961227149',
  whatsapp: '56961227149',
  rating: '5,0',
  reviews: 1,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mila Deco & Hogar y quiero consultar por un producto',
)}`

export const WA_LINK_STOCK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mila Deco & Hogar y quiero consultar stock y precios',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mila Deco & Hogar, Mall Go Florida, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Mila Deco & Hogar, Mall Go Florida, Talca, Chile',
)}&output=embed`

/** Reseña real de la ficha de Google (5 estrellas). */
export const REVIEW = {
  text: 'La tienda destaca por su variada selección de artículos para el hogar, entre los que se incluyen cuadros, fundas para cojines, maceteros, velas y diversos objetos decorativos, todos caracterizados por un diseño delicado, contemporáneo y visualmente atractivo. Sus productos son ideales para quienes buscan aportar calidez, estilo y armonía a sus espacios, transformando el hogar en un lugar más acogedor y agradable.',
  author: 'Yaritza Daney Pino Díaz',
  detail: 'Local Guide · reseña de Google',
} as const

export const IMG = '/demos/mila-deco-y-hogar'
