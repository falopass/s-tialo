/**
 * app/demos/wow-park/content.ts
 *
 * Datos del mockup. REALES (ficha pública): nombre, comuna (Talca)
 * y WhatsApp +56 9 8181 7575. La ficha no publica dirección ni
 * tiene reseñas en Google, así que no hay badge de reseñas.
 * Todo lo demás (zonas de juego, valores, horarios y testimonios)
 * es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Wow Park Talca',
  short: 'Wow Park',
  rubro: 'Parque infantil y cumpleaños',
  address: 'Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8181 7575',
  phoneTel: '+56981817575',
  whatsapp: '56981817575',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Wow Park Talca y quiero consultar',
)}`

export const WA_LINK_CUMPLE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Wow Park Talca y quiero reservar un cumpleaños',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Wow Park Talca, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/wow-park'
