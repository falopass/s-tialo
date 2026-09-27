/**
 * app/demos/agrocesped-del-maule/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro (vivero mayorista), dirección
 * (Av. Huamachuco, San Clemente), WhatsApp, las 4 reseñas de la ficha
 * de Google y el Facebook (146 seguidores). Todo lo demás —líneas de
 * producto, formatos de venta y precios— es contenido de ejemplo para
 * mostrar cómo se vería el sitio; los valores van marcados como
 * muestra.
 */

export const BIZ = {
  name: 'AgroCesped Del Maule',
  short: 'AgroCesped',
  rubro: 'Vivero mayorista',
  address: 'Av. Huamachuco, San Clemente',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9428 3138',
  phoneTel: '+56994283138',
  whatsapp: '56994283138',
  reviews: 4,
  fbFollowers: 146,
  facebook: 'https://www.facebook.com/share/1G3cQuTUST/?mibextid=wwXIfr',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de AgroCesped Del Maule y quiero cotizar plantas por volumen',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'AgroCesped Del Maule, Av. Huamachuco, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'AgroCesped Del Maule, Av. Huamachuco, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/agrocesped-del-maule'
