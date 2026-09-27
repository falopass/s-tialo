/**
 * app/demos/vulcanizacion-nikimoto/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio): nombre,
 * rubro, comuna, dirección tal como aparece en la ficha, WhatsApp,
 * Instagram (2.536 seguidores) y que la ficha de Google aún no tiene
 * reseñas. Todo lo demás (servicios, textos y tabla de precios) es
 * contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Vulcanizacion nikimoto',
  rubro: 'Taller mecánico',
  address: '3500000 Pelarco, Maule',
  city: 'Pelarco',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3251 2856',
  whatsapp: '56932512856',
  instagram: 'nikimoto.rs',
  instagramFollowers: '2.536',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Vulcanizacion nikimoto y quiero hacer una consulta',
)}`

export const INSTAGRAM_URL = 'https://www.instagram.com/nikimoto.rs/'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vulcanizacion nikimoto, Pelarco, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pelarco, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/vulcanizacion-nikimoto'
