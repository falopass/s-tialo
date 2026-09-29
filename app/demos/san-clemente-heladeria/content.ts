/**
 * app/demos/san-clemente-heladeria/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps verificada 29-09-2026
 * y redes del negocio): nombre, comuna, dirección en camino K-693,
 * rating 4,8 con 103 reseñas, horario de la ficha (vie a dom
 * 15:00-20:00), WhatsApp, Instagram (@heladeriasanclemente, 4.866
 * seguidores), los sabores vistos en sus historias (yogur melón, torta
 * manjar nuez y torta de limón), las fotos de
 * public/demos/san-clemente-heladeria/ (posts reales de
 * @heladeriasanclemente, vía imginn.com) y su logo de perfil. Todo lo
 * demás (carta completa, formatos y textos) es contenido de muestra.
 */

export const BIZ = {
  name: 'Heladería San Clemente',
  short: 'H. San Clemente',
  rubro: 'Heladería artesanal',
  city: 'San Clemente',
  region: 'Región del Maule',
  address: 'Camino K-693',
  phoneDisplay: '+56 9 8257 3210',
  whatsapp: '56982573210',
  instagram: 'heladeriasanclemente',
  instagramFollowers: '4.866',
  rating: '4,8',
  reviews: 103,
  hoursOpen: 'Viernes a domingo: 15:00 a 20:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Heladería San Clemente y quiero hacer un pedido',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Heladería San Clemente, San Clemente, Región del Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Heladeria San Clemente, K-693, San Clemente, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/san-clemente-heladeria'
