/**
 * app/demos/le-petit-pasteleria/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram):
 * nombre, dirección, WhatsApp, las 6 reseñas y la cuenta @lepetitsdm.
 * Todo lo demás (productos, precios, horarios y textos de reseñas)
 * es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Le Petit Pasteleria',
  short: 'Le Petit',
  rubro: 'Pastelería',
  address: '2 Ote. 1133',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8769 6437',
  phoneTel: '+56987696437',
  whatsapp: '56987696437',
  reviews: 6,
  instagram: '@lepetitsdm',
  instagramUrl: 'https://www.instagram.com/lepetitsdm',
  followers: '5.456',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Le Petit Pasteleria y quiero hacer un pedido',
)}`

export const WA_LINK_TORTA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Le Petit Pasteleria y quiero encargar una torta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Le Petit Pasteleria, 2 Ote. 1133, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Le Petit Pasteleria, 2 Ote. 1133, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/le-petit-pasteleria'
