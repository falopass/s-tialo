/**
 * app/demos/plantitas-ya-vivero-romeral-ventas-de-plantas-y-/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, dirección (cruce J-55 km 1,
 * Romeral), las 49 reseñas de la ficha de Google, la página de Facebook
 * (18.000 seguidores) y el WhatsApp. Todo lo demás — catálogo, precios,
 * horarios, respuestas de FAQ y textos de reseña — es contenido de
 * muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Plantitas Yá! & Vivero Romeral',
  short: 'Plantitas Yá!',
  rubro: 'Vivero y venta de plantas',
  address: 'Carretera cruce – J-55 km 1',
  city: 'Romeral',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9123 3265',
  phoneTel: '+56991233265',
  whatsapp: '56991233265',
  reviews: 49,
  followers: '18 mil',
  facebook: 'https://www.facebook.com/PlantitasYa-109877228278916/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Plantitas Yá! y quiero consultar por plantas',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Plantitas Yá! y quiero hacer un pedido por encargo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Plantitas Yá! Vivero Romeral, Romeral, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Plantitas Yá! Vivero Romeral, Romeral, Chile',
)}&output=embed`

export const IMG = '/demos/plantitas-ya-vivero-romeral-ventas-de-plantas-y-'
