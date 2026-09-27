/**
 * app/demos/ferreteria-williams-pencahue/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, dirección (Santa Sara -
 * Lote 16, Pencahue), las 86 reseñas de la ficha de Google, el
 * WhatsApp y la página de Facebook. Todo lo demás (rubros, precios,
 * horarios, reseñas) es contenido de ejemplo para mostrar cómo se
 * vería el sitio.
 */

export const BIZ = {
  name: 'Ferreteria Williams Pencahue',
  short: 'Ferretería Williams',
  rubro: 'Ferretería y maderas',
  address: 'Santa Sara - Lote 16',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7783 7716',
  phoneTel: '+56977837716',
  whatsapp: '56977837716',
  reviews: 86,
  facebook: 'https://www.facebook.com/ferreteriamaderaswilliams.pencahue',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ferretería Williams y quiero consultar por un producto',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ferretería Williams y quiero hacer un pedido para retiro o despacho',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ferreteria Williams Pencahue, Santa Sara Lote 16, Pencahue, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Ferreteria Williams Pencahue, Santa Sara Lote 16, Pencahue, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/ferreteria-williams-pencahue'
