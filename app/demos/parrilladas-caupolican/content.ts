/**
 * app/demos/parrilladas-caupolican/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio):
 * nombre, rubro, dirección en la K-60, las 857 reseñas de Google,
 * el Facebook con sus seguidores y el WhatsApp. Todo lo demás
 * (pasos, carta, precios y reseñas citadas) es contenido de
 * muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Parrilladas Caupolican',
  short: 'P. Caupolican',
  rubro: 'Restaurante',
  address: 'K-60 36',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8919 8149',
  phoneTel: '+56989198149',
  whatsapp: '56989198149',
  reviews: 857,
  facebook: 'https://www.facebook.com/restaurantparrilladascaupolican',
  fbFollowers: '5.297',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Parrilladas Caupolican y quiero consultar',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Parrilladas Caupolican y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Parrilladas Caupolican, K-60 36, Pencahue, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Parrilladas Caupolican, K-60 36, Pencahue, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/parrilladas-caupolican'
