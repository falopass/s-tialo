/**
 * app/demos/emporio-vintage-cafe/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram):
 * nombre, dirección, comuna, WhatsApp, las 12 reseñas de Google y los
 * 3.996 seguidores de Instagram. Todo lo demás (carta, precios,
 * horarios, reseñas citadas) es contenido de muestra para mostrar
 * cómo se vería el sitio publicado.
 */

export const BIZ = {
  name: 'Emporio Vintage Café',
  short: 'Emporio Vintage',
  rubro: 'Cafetería',
  address: 'Tres Nte. 1471',
  addressFull: 'Tres Nte. 1471, 3461732 Talca, Maule',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7762 2207',
  phoneTel: '+56977622207',
  whatsapp: '56977622207',
  reviews: 12,
  followers: '3.996',
  instagram: 'https://www.instagram.com/emporiovintagecafe',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Emporio Vintage Café y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Emporio Vintage Café, Tres Nte. 1471, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Tres Nte. 1471, 3461732 Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/emporio-vintage-cafe'
