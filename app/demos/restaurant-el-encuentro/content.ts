/**
 * app/demos/restaurant-el-encuentro/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio):
 * nombre, rubro, dirección en Pencahue, las 39 reseñas de Google,
 * el Facebook con sus seguidores y el WhatsApp. Todo lo demás
 * (carta, precios, horarios y reseñas citadas) es contenido de
 * muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Restaurant El Encuentro',
  short: 'El Encuentro',
  rubro: 'Restaurante',
  address: '3460000 Pencahue, Maule',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8164 2326',
  phoneTel: '+56981642326',
  whatsapp: '56981642326',
  reviews: 39,
  facebook: 'https://www.facebook.com/ElEncuentroPencahue',
  fbFollowers: '408',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant El Encuentro y quiero consultar',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant El Encuentro y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurant El Encuentro, Pencahue, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurant El Encuentro, Pencahue, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/restaurant-el-encuentro'
