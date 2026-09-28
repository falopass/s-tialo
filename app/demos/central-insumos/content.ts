/**
 * app/demos/central-insumos/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * rubro (almacén de insumos de repostería y emprendedores),
 * dirección (Calle Aromo 1466, Molina), teléfono/WhatsApp
 * (+56 9 4581 5572), horario, rating 4.9 con 7 reseñas y los textos
 * de esas reseñas. Las fotos son las publicadas por el propio
 * negocio en su ficha. Lo demás — textos y descripciones — es
 * contenido de muestra.
 */

export const BIZ = {
  name: 'Central Insumos',
  short: 'Central Insumos',
  rubro: 'Insumos de panadería, pastelería y decoración',
  address: 'Calle Aromo 1466',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4581 5572',
  phoneTel: '+56945815572',
  whatsapp: '56945815572',
  rating: '4.9',
  reviews: 7,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Central Insumos y quiero consultar por insumos',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Central Insumos, Calle Aromo 1466, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle Aromo 1466, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/central-insumos'
