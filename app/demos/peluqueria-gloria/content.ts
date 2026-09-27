/**
 * app/demos/peluqueria-gloria/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio): nombre,
 * dirección en Cumpeo, comuna de Río Claro, las 11 reseñas de la ficha
 * de Google, la página de Facebook y el WhatsApp. Todo lo demás —
 * servicios, precios, horarios y textos de reseña — es contenido de
 * muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Peluquería Gloria',
  short: 'Peluquería Gloria',
  rubro: 'Peluquería',
  address: 'Cumpeo',
  city: 'Río Claro',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8150 4275',
  phoneTel: '+56981504275',
  whatsapp: '56981504275',
  reviews: 11,
  facebook: 'http://www.facebook.com/peluqueriagloria',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Peluquería Gloria y quiero agendar una hora',
)}`

export const WA_LINK_SERVICIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Peluquería Gloria y quiero consultar por un servicio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Peluqueria Gloria, Cumpeo, Río Claro, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cumpeo, Río Claro, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/peluqueria-gloria'
