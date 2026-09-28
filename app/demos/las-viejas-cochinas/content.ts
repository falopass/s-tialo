/**
 * app/demos/las-viejas-cochinas/content.ts
 *
 * Datos del mockup. REALES (ficha pública): nombre, rubro, dirección
 * en Rivera poniente - Av. Río Claro, teléfono fijo (71) 222 1749
 * (solo llamadas; no publican WhatsApp), las 5.686
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
  reviews: 5686,
  followers: 3167,
  facebook: 'https://www.facebook.com/pages/category/Restaurant/Las-viejas-cochinas-105557124423869/',
} as const

// El restaurante solo publica teléfono fijo: el CTA de contacto es una llamada.
export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Las Viejas Cochinas, Av. Río Claro, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Las Viejas Cochinas, Rivera poniente Av. Río Claro, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/las-viejas-cochinas'
