/**
 * app/demos/la-terraza/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram,
 * verificados 2026-09-28): nombre, rubro (Hamburger restaurant), dirección
 * en El Cerrillo (Cumpeo, Río Claro), WhatsApp/delivery, Instagram
 * @laterrazacl ("La Terraza Ltda", 1.334 seguidores), las 17 reseñas de
 * Google, la promo de alitas a $5.000 de su Instagram y "desde 2021" de su
 * logo. Las fotos de public/demos/la-terraza/ salen de su ficha y su IG.
 * Horario: su ficha abre todos los días a las 15:30 (el cierre varía).
 */

export const BIZ = {
  name: 'La Terraza',
  rubro: 'Hamburguesería',
  address: 'El Cerrillo, 3480084 Cumpeo',
  city: 'Río Claro',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7522 0922',
  whatsapp: '56975220922',
  instagram: 'laterrazacl',
  instagramFollowers: '1.334',
  googleReviews: 17,
  since: '2021',
  hours: 'Todos los días · desde las 15:30',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Terraza y quiero hacer un pedido',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Terraza y quiero consultar por una mesa',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Terraza, El Cerrillo, 3480084 Cumpeo, Río Claro, Maule',
)}`

// Embed con las coordenadas exactas de su ficha: el pin queda en el local,
// no en una búsqueda genérica del sector (era el "mapa vacío" del audit).
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.2911569,-71.2328702&z=16&output=embed'

export const IMG = '/demos/la-terraza'
