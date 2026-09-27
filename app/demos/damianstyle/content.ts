/**
 * app/demos/damianstyle/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio): nombre,
 * dirección, comuna, WhatsApp, Instagram (2.096 seguidores) y el dato
 * de que la ficha de Google aún no acumula reseñas. Todo lo demás
 * (servicios, precios, horarios y textos de reseñas) es contenido de
 * muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'DamianStyle',
  short: 'DamianStyle',
  rubro: 'Barbería',
  address: 'Villa Altos del Bosque, calle 3, casa 24',
  city: 'Pelarco',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3083 2951',
  phoneTel: '+56930832951',
  whatsapp: '56930832951',
  instagram: 'damianstyle_',
  instagramFollowers: '2.096',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de DamianStyle y quiero agendar una hora',
)}`

export const WA_LINK_BARBA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de DamianStyle y quiero consultar por un arreglo de barba',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'DamianStyle, Villa Altos del Bosque calle 3 casa 24, Pelarco, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Villa Altos del Bosque, Pelarco, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/damianstyle'
