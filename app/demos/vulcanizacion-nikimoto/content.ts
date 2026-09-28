/**
 * app/demos/vulcanizacion-nikimoto/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio): nombre,
 * rubro (taller de motos y vulcanización, según su Instagram), comuna,
 * dirección tal como aparece en la ficha, WhatsApp, Instagram
 * (444 seguidores) y la ficha de Google: 4,9 estrellas en 13 reseñas.
 * Las fotos son reales, bajadas de su Instagram y de su ficha de Maps.
 * La tabla de precios es de muestra (los servicios sí son los que
 * publican) y se cotiza por WhatsApp.
 */

export const BIZ = {
  name: 'Vulcanizacion nikimoto',
  rubro: 'Taller de motos y vulcanización',
  address: '3500000 Pelarco, Maule',
  city: 'Pelarco',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3251 2856',
  whatsapp: '56932512856',
  instagram: 'nikimoto.rs',
  instagramFollowers: '444',
  rating: '4,9',
  reviews: 13,
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
