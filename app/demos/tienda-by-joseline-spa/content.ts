/**
 * app/demos/tienda-by-joseline-spa/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro (tienda de lencería),
 * dirección (Brisas de Pencahue 2, ex calle 6, Calle 1, casa 832,
 * Pencahue), las 5 reseñas registradas en la ficha de Google, el link
 * corto de WhatsApp Business y el teléfono. Todo lo demás —
 * categorías, precios, horarios y reseñas citadas — es contenido de
 * muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Tienda By Joseline Spa',
  short: 'By Joseline',
  rubro: 'Tienda de lencería',
  address: 'Brisas de Pencahue 2 (ex calle 6), Calle 1, casa 832',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3545 7874',
  phoneTel: '+56935457874',
  whatsapp: '56935457874',
  reviews: 5,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Joseline, vi la página de la tienda y quiero consultar',
)}`

export const waLinkProducto = (producto: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola Joseline, vi la página de la tienda y quiero consultar por: ${producto}`,
  )}`

// Link corto real del WhatsApp Business de la tienda.
export const WA_CATALOG = 'https://wa.me/message/AYBQG7GOEGUHF1'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Tienda By Joseline Spa, Brisas de Pencahue 2, Calle 1 casa 832, Pencahue, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Brisas de Pencahue 2, Calle 1, Pencahue, Chile',
)}&output=embed`

export const IMG = '/demos/tienda-by-joseline-spa'
