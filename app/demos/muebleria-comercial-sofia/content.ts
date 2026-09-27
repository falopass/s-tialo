/**
 * app/demos/muebleria-comercial-sofia/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes): nombre, rubro,
 * dirección en Talca, la reseña de Google Maps, el teléfono/WhatsApp
 * y la página de Facebook. Todo lo demás (servicios, precios, textos
 * y testimonios) es contenido de muestra para mostrar cómo se vería
 * el sitio.
 */

export const BIZ = {
  name: 'Mueblería Comercial Sofia',
  short: 'Comercial Sofia',
  rubro: 'Fábrica de muebles',
  address: 'Catorce Ote. 1060',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 224 1140',
  phoneTel: '+56712241140',
  whatsapp: '56712241140',
  reviews: 1,
  fbUrl: 'https://www.facebook.com/muebles1060',
  fbFollowers: 133,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mueblería Comercial Sofia y quiero cotizar un mueble',
)}`

export const WA_LINK_MEDIDA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mueblería Comercial Sofia y quiero encargar un mueble a medida',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mueblería Comercial Sofia, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Mueblería Comercial Sofia, Catorce Ote. 1060, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/muebleria-comercial-sofia'
