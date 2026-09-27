/**
 * app/demos/beauty-love/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio): nombre,
 * rubro, dirección, comuna, WhatsApp, Instagram (878 seguidores) y el
 * dato de que la ficha de Google aún no tiene reseñas. Todo lo demás
 * (servicios, textos y tabla de precios) es contenido de muestra para
 * mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Beauty Love',
  rubro: 'Salón de manicura y pedicura',
  address: 'Notre Damme 913',
  postal: '3380000',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4847 8561',
  whatsapp: '56948478561',
  instagram: 'beautylove_texia',
  instagramFollowers: '878',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Beauty Love y quiero agendar una hora',
)}`

export const WA_LINK_PRECIOS = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Beauty Love y quiero consultar valores',
)}`

export const INSTAGRAM_URL = 'https://www.instagram.com/beautylove_texia?igsh=ZWoxdWx0cml6OWs5'

const Q = 'Notre Damme 913, 3380000 Molina, Maule, Chile'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(Q)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(Q)}&output=embed`

export const IMG = '/demos/beauty-love'
