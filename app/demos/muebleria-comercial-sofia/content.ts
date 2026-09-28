/**
 * app/demos/muebleria-comercial-sofia/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y su Facebook,
 * verificados 2026-09-28): nombre, rubro (Furniture manufacturer),
 * dirección en Catorce Oriente 1060, Talca, la reseña de Google, el
 * teléfono fijo (71) 224 1140 (solo llamadas; no publican WhatsApp) y la
 * página facebook.com/muebles1060. Los servicios —cocinas, closets,
 * baños, vanitorios y revestimientos— están pintados en el letrero de la
 * fachada, que es la foto hero. Las demás fotos son trabajos reales de
 * su ficha de Maps. Los precios de la lista son de muestra.
 */

export const BIZ = {
  name: 'Mueblería Comercial Sofia',
  short: 'Comercial Sofia',
  rubro: 'Fábrica de muebles',
  address: 'Catorce Ote. 1060',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '(71) 224 1140',
  phoneTel: '+56712241140',
  reviews: 1,
  fbUrl: 'https://www.facebook.com/muebles1060',
  fbFollowers: 133,
} as const

// La mueblería solo publica teléfono fijo: el CTA de contacto es una llamada.
export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mueblería Comercial Sofia, Catorce Oriente 1060, Talca, Chile',
)}`

// Embed con las coordenadas exactas de la ficha: el pin marca el taller.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4293576,-71.6452322&z=16&output=embed'

export const IMG = '/demos/muebleria-comercial-sofia'
