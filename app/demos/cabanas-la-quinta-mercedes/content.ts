/**
 * app/demos/cabanas-la-quinta-mercedes/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre
 * (CABAÑAS LA QUINTA MERCEDES), categoría ("Casa rural"), dirección
 * (Av. Mercedes 1141, Talca — sector rural a las afueras de la ciudad),
 * teléfono/WhatsApp y rating 5,0. Piscina, jardín, terraza,
 * estacionamiento y WiFi figuran en su publicación de arriendo
 * (fuentes públicas de alojamiento). Sin web ni redes propias
 * encontradas. La foto de public/demos/cabanas-la-quinta-mercedes/
 * es la única foto real de la ficha; las escenas interiores son
 * bosquejos marcados visiblemente.
 */

export const BIZ = {
  name: 'Cabañas La Quinta Mercedes',
  short: 'La Quinta Mercedes',
  categoria: 'Casa rural',
  address: 'Av. Mercedes 1141',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9699 7177',
  phoneTel: '+56996997177',
  whatsapp: '56996997177',
  rating: '5,0',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero consultar disponibilidad en Cabañas La Quinta Mercedes',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas La Quinta Mercedes, Av. Mercedes 1141, Talca, Chile',
)}`

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4706254,-71.5573406&z=15&output=embed'

export const IMG = '/demos/cabanas-la-quinta-mercedes'

/** Equipamiento publicado en su ficha de alojamiento. */
export const INCLUYE = [
  'Piscina',
  'Jardín y áreas verdes',
  'Terraza',
  'Estacionamiento',
  'WiFi',
] as const
