/**
 * app/demos/la-terraza/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio): nombre,
 * rubro, dirección, comuna, WhatsApp, Instagram (897 seguidores) y las
 * 17 reseñas de su ficha en Google Maps. Todo lo demás (carta, precios,
 * preguntas frecuentes y textos) es contenido de muestra para mostrar
 * cómo se vería el sitio.
 */

export const BIZ = {
  name: 'La Terraza',
  rubro: 'Hamburguesería',
  address: 'El Cerrillo, 3480084 Cumpeo',
  city: 'Río Claro',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7522 0922',
  whatsapp: '56975220922',
  instagram: 'laterrazacl',
  instagramFollowers: '897',
  googleReviews: 17,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Terraza y quiero hacer un pedido',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Terraza y quiero consultar por una mesa',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Terraza, El Cerrillo, 3480084 Cumpeo, Río Claro, Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'El Cerrillo, 3480084 Cumpeo, Río Claro, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/la-terraza'
