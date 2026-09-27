/**
 * app/demos/restobar-los-leones/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, comuna, dirección
 * (3500000 Pelarco, Maule), WhatsApp, Instagram y las 11 reseñas de la
 * ficha de Google. Todo lo demás (carta, precios, horarios, reseñas y
 * fotos) es contenido de ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Restobar Los Leones',
  short: 'Los Leones',
  rubro: 'Restobar',
  address: '3500000 Pelarco, Maule',
  city: 'Pelarco',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5026 8529',
  phoneTel: '+56950268529',
  whatsapp: '56950268529',
  instagram:
    'https://www.instagram.com/restobarlosleones?igsh=MTZsaXltOWlqbHdiYQ==',
  igUser: '@restobarlosleones',
  igFollowers: '295 seguidores',
  reviews: 11,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restobar Los Leones y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restobar Los Leones y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restobar Los Leones, Pelarco, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restobar Los Leones, Pelarco, Chile',
)}&output=embed`

export const IMG = '/demos/restobar-los-leones'
