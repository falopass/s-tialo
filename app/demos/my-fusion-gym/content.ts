/**
 * app/demos/my-fusion-gym/content.ts
 *
 * Datos del mockup. REALES (ficha pública): nombre, rubro, dirección
 * (J-514 2520, Curicó), las 10 reseñas de Google Maps, el Instagram
 * (@my.fusion.gym, 3.254 seguidores) y el WhatsApp +56 9 6552 1439.
 * Todo lo demás (servicios, valores, horarios y testimonios) es
 * contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'MY Fusion Gym',
  short: 'MY Fusion Gym',
  rubro: 'Gimnasio',
  address: 'J-514 2520',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6552 1439',
  phoneTel: '+56965521439',
  whatsapp: '56965521439',
  instagram: 'https://www.instagram.com/my.fusion.gym',
  igUser: '@my.fusion.gym',
  igFollowers: '3.254',
  reviews: 10,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de MY Fusion Gym y quiero consultar',
)}`

export const WA_LINK_CLASE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de MY Fusion Gym y quiero agendar una clase de prueba',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'MY Fusion Gym, J-514 2520, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'J-514 2520, Curicó, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/my-fusion-gym'
