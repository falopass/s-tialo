/**
 * app/demos/agrocesped-del-maule/content.ts
 *
 * Datos del mockup. REALES: nombre, producto (pasto en rollo, según
 * su logo y sus redes), dirección (Av. Huamachuco, San Clemente),
 * WhatsApp, las reseñas de la ficha de Google (5,0 en 4 reseñas), el
 * Facebook e Instagram. Todo lo demás —formatos de venta y precios—
 * es contenido de ejemplo para mostrar cómo se vería el sitio; los
 * valores van marcados como muestra.
 */

export const BIZ = {
  name: 'AgroCesped Del Maule',
  short: 'AgroCesped',
  rubro: 'Pasto en rollo',
  address: 'Av. Huamachuco, San Clemente',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9428 3138',
  phoneTel: '+56994283138',
  whatsapp: '56994283138',
  reviews: 4,
  fbFollowers: 146,
  igFollowers: 90,
  facebook: 'https://www.facebook.com/share/1G3cQuTUST/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/agrocespeddelmaule/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de AgroCesped Del Maule y quiero cotizar pasto en rollo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'AgroCesped Del Maule, Av. Huamachuco, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'AgroCesped Del Maule, Av. Huamachuco, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/agrocesped-del-maule'
