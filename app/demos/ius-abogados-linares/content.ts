/**
 * app/demos/ius-abogados-linares/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y redes del
 * negocio): nombre, rubro, dirección, comuna, WhatsApp, Instagram (349
 * seguidores) y el número de reseñas en Google (12). Todo lo demás
 * (áreas, proceso, valores y textos) es contenido de muestra para
 * mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'IUS Abogados Linares',
  short: 'IUS Abogados',
  rubro: 'Abogado',
  address: 'Maipú 461, Ofi 405',
  postal: '3580000',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5056 0264',
  whatsapp: '56950560264',
  instagram: 'iusabogadoslinares',
  instagramFollowers: '349',
  reviews: 12,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de IUS Abogados Linares y quiero consultar por un caso',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'IUS Abogados Linares, Maipú 461, Linares, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Maipú 461, 3580000 Linares, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/ius-abogados-linares'
