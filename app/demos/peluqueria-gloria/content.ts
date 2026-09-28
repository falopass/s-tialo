/**
 * app/demos/peluqueria-gloria/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps y perfil público en
 * AgendaPro): nombre, Cumpeo (Río Claro), WhatsApp, 4,5 estrellas y
 * 11 reseñas, horario lun-sáb 11:00-13:00 y 14:00-21:30, servicios y
 * precios publicados (corte $12.000, corte+barba $15.000, full $25.000)
 * y las reseñas citadas con su autor. Las fotos son las reales de su
 * ficha de Google (logo pintado en el muro e interior del salón).
 */

export const BIZ = {
  name: 'Peluquería Gloria',
  short: 'Gloria',
  rubro: 'Peluquería',
  address: 'Cumpeo',
  city: 'Río Claro',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8150 4275',
  phoneTel: '+56981504275',
  whatsapp: '56981504275',
  rating: '4,5',
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
