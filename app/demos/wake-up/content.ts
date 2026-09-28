/**
 * app/demos/wake-up/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes): nombre, rubro,
 * dirección (Merced 490, Curicó), WhatsApp móvil (9 4426 6198, ficha
 * SERNATUR; el fijo 75 222 3256 solo recibe llamadas), las 470 reseñas
 * de Google Maps y los 832 seguidores de la página de Facebook.
 * Todo lo demás (productos, carta, horarios, textos de reseña) es
 * contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Wake Up',
  short: 'Wake Up',
  rubro: 'Cafetería',
  address: 'Merced 490',
  postal: '3341790',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4426 6198',
  phoneTel: '+56944266198',
  whatsapp: '56944266198',
  reviews: 470,
  fbFollowers: 832,
  facebook: 'https://www.facebook.com/Wake-Up-Curic%C3%B3-561590857355610/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Wake Up y quiero hacer un pedido',
)}`

export const WA_LINK_OFICINA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Wake Up y quiero cotizar un pedido para la oficina',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Wake Up, Merced 490, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Wake Up, Merced 490, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/wake-up'
