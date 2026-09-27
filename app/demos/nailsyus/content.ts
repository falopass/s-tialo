/**
 * app/demos/nailsyus/content.ts
 *
 * Datos del mockup. REALES (ficha pública e Instagram): nombre,
 * dirección, WhatsApp, la reseña de Google Maps y los seguidores
 * de @nailsyus.cl. Todo lo demás (servicios, precios, horarios)
 * es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'NAILSYUS',
  short: 'Nailsyus',
  rubro: 'Salón de manicura y pedicura',
  address: 'Calle 24 1/2 Nte., J 4126',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5881 8150',
  phoneTel: '+56958818150',
  whatsapp: '56958818150',
  reviews: 1,
  igUser: 'nailsyus.cl',
  igFollowers: '11.400',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de NAILSYUS y quiero agendar una hora',
)}`

export const WA_LINK_SERVICIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de NAILSYUS y quiero consultar por un servicio',
)}`

export const IG_URL = 'https://www.instagram.com/nailsyus.cl'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'NAILSYUS, Calle 24 1/2 Nte. J 4126, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'NAILSYUS, Calle 24 1/2 Nte. J 4126, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/nailsyus'
