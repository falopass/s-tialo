/**
 * app/demos/emporio-vintage-cafe/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram
 * @emporiovintagecafe): nombre, dirección, comuna, WhatsApp, nota 5,0
 * en Google, los 4.001 seguidores de Instagram, el horario de lunes a
 * viernes de la bio, el logo y las fotos (Google Maps + posts de IG).
 * La carta, los precios y las reseñas citadas siguen siendo de muestra.
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
  rating: 5,
  ratingLabel: '5,0',
  followers: '4.001',
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
