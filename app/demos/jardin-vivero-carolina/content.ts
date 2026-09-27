/**
 * app/demos/jardin-vivero-carolina/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram):
 * nombre, rubro, dirección en Fundo La Obra (Curicó), WhatsApp, las 5
 * reseñas de Google y la cuenta de Instagram con 1.355 seguidores.
 * Todo lo demás (listado, precios, horarios, respuestas del FAQ y fotos)
 * es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Jardin Vivero Carolina',
  short: 'Vivero Carolina',
  rubro: 'Vivero',
  address: 'Fundo La Obra, Lote 3 C',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8403 5562',
  phoneTel: '+56984035562',
  whatsapp: '56984035562',
  reviews: 5,
  instagram: 'https://www.instagram.com/jardinvivero.carolina/',
  instagramFollowers: '1.355',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Jardin Vivero Carolina y quiero consultar por una planta',
)}`

export const WA_LINK_STOCK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Jardin Vivero Carolina y quiero saber qué plantas tienen disponibles',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Jardin Vivero Carolina, Fundo La Obra, Lote 3 C, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Fundo La Obra, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/jardin-vivero-carolina'
