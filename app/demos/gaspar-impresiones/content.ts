/**
 * app/demos/gaspar-impresiones/content.ts
 *
 * Datos del mockup. REALES (ficha pública + redes): nombre
 * (Impresos San Clemente — GASPAR impresiones), dirección
 * (Pasaje 5, Paula Montal 360, San Clemente), el WhatsApp
 * +56 9 8178 6315 (confirma el mismo número en un post propio
 * de @impresos.san.clemente), el rating 4,6 con 12 reseñas en
 * Google Maps y el Instagram @impresos.san.clemente. Las fotos
 * bajan de sus posts reales. Servicios descritos por lo que se
 * ve en sus fotos: tazas, tazones, poleras, manteles, cojines,
 * letreros, tarjetas e imanes, roca fotográfica.
 */

export const BIZ = {
  name: 'Impresos San Clemente',
  short: 'Impresos S.C.',
  rubro: 'Estampados y regalos personalizados',
  address: 'Pasaje 5, Paula Montal 360',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8178 6315',
  phoneTel: '+56981786315',
  whatsapp: '56981786315',
  instagram: 'https://www.instagram.com/impresos.san.clemente',
  igUser: '@impresos.san.clemente',
  rating: 4.6,
  reviews: 12,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Impresos San Clemente y quiero cotizar un trabajo',
)}`

export const WA_LINK_PRODUCTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero cotizar un producto personalizado',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'GASPAR impresiones, Paula Montal 360, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Paula Montal 360, San Clemente, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/gaspar-impresiones'
