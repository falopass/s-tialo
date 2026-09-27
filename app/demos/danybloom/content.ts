/**
 * app/demos/danybloom/content.ts
 *
 * Datos del mockup. REALES (ficha pública e Instagram): nombre, rubro,
 * dirección, comuna, WhatsApp, cuenta de Instagram (144 seguidores) y
 * el estado de la ficha de Google (aún sin reseñas). Todo lo demás
 * (servicios, precios, horarios y textos) es contenido de muestra
 * para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'danybloom',
  short: 'danybloom',
  rubro: 'Salón de manicura y pedicura',
  address: 'Camino Las Rastras',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3890 1491',
  phoneTel: '+56938901491',
  whatsapp: '56938901491',
  instagram: '@dany.bloom_',
  instagramUrl: 'https://www.instagram.com/dany.bloom_',
  followers: '144',
  reviews: 0,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de danybloom y quiero agendar una hora',
)}`

export const WA_LINK_SERVICIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de danybloom y quiero consultar por un servicio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'danybloom, Camino Las Rastras, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Camino Las Rastras, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/danybloom'
