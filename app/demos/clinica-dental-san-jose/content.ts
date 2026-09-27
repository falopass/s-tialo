/**
 * app/demos/clinica-dental-san-jose/content.ts
 *
 * Datos del mockup. REALES: nombre, comuna, dirección (Quechereguas
 * 1667, Molina), WhatsApp, las 2 reseñas de Google Maps y el
 * Instagram @sanjose.clinicadental (211 seguidores). Todo lo demás
 * (servicios, precios, textos de reseñas, horarios) es contenido de
 * ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Clínica Dental San José',
  short: 'Dental San José',
  rubro: 'Clínica dental',
  address: 'Quechereguas 1667',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4432 8584',
  phoneTel: '+56944328584',
  whatsapp: '56944328584',
  reviews: 2,
  instagram: 'sanjose.clinicadental',
  instagramFollowers: 211,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica Dental San José y quiero agendar una hora',
)}`

export const WA_LINK_DOLOR = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, me duele una muela y necesito atención dental',
)}`

export const IG_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Dental San José, Quechereguas 1667, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Quechereguas 1667, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/clinica-dental-san-jose'
