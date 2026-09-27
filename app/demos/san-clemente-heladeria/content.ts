/**
 * app/demos/san-clemente-heladeria/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio): nombre,
 * comuna, WhatsApp, Instagram (@heladeriasanclemente, 4.866 seguidores),
 * el horario de fin de semana publicado en su Instagram y los sabores
 * vistos en sus historias (yogur melón, torta manjar nuez y torta de
 * limón). Todo lo demás (carta completa, formatos, copas y textos) es
 * contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Heladería San Clemente',
  short: 'H. San Clemente',
  rubro: 'Heladería artesanal',
  city: 'San Clemente',
  region: 'Región del Maule',
  address: 'San Clemente centro',
  phoneDisplay: '+56 9 8257 3210',
  whatsapp: '56982573210',
  instagram: 'heladeriasanclemente',
  instagramFollowers: '4.866',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Heladería San Clemente y quiero hacer un pedido',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Heladería San Clemente, San Clemente, Región del Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'San Clemente, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/san-clemente-heladeria'
