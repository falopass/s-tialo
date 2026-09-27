/**
 * app/demos/las-viejas-cochinas/content.ts
 *
 * Datos del mockup. REALES (ficha pública): nombre, rubro, dirección
 * en Rivera poniente - Av. Río Claro, teléfono/WhatsApp, las 5.686
 * reseñas de Google Maps y los 3.167 seguidores de Facebook. Todo lo
 * demás (platos, formatos, precios, horarios) es contenido de muestra.
 */

export const BIZ = {
  name: 'Las Viejas Cochinas',
  rubro: 'Restaurante',
  address: 'Rivera poniente - Av. Río Claro s/n',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 222 1749',
  phoneTel: '+56712221749',
  whatsapp: '56712221749',
  reviews: 5686,
  followers: 3167,
  facebook: 'https://www.facebook.com/pages/category/Restaurant/Las-viejas-cochinas-105557124423869/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Las Viejas Cochinas y quiero hacer una consulta',
)}`

export const WA_LINK_GRUPO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Las Viejas Cochinas y quiero reservar para un grupo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Las Viejas Cochinas, Av. Río Claro, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Las Viejas Cochinas, Rivera poniente Av. Río Claro, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/las-viejas-cochinas'
