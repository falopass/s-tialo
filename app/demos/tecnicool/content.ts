/**
 * app/demos/tecnicool/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram
 * @tecnicoolcl): nombre, dirección, WhatsApp, Instagram y la nota de
 * Google (5,0 con 4 opiniones). Las fotos son reales del negocio
 * (hero.webp, equipo.webp, instalacion.webp, detalle.webp). Los textos
 * de servicios son de muestra, sin precios ni plazos; no hay horario
 * publicado, así que no se muestra.
 */

export const BIZ = {
  name: 'Tecnicool',
  rubro: 'Climatización y refrigeración',
  address: 'C. Francisco Bilbao 85',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 6724 0110',
  phoneTel: '+56967240110',
  whatsapp: '56967240110',
  rating: '5,0',
  reviews: 4,
  instagram: 'tecnicoolcl',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Tecnicool y quiero agendar una visita',
)}`

export const WA_LINK_COTIZA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Tecnicool y quiero cotizar una instalación',
)}`

export const INSTAGRAM_URL = 'https://www.instagram.com/tecnicoolcl'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Tecnicool, C. Francisco Bilbao 85, Puerto Montt, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Tecnicool, C. Francisco Bilbao 85, Puerto Montt, Chile',
)}&output=embed`

export const IMG = '/demos/tecnicool'
