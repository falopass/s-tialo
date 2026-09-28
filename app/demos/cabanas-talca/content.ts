/**
 * app/demos/cabanas-talca/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre «Cabañas Talca», categoría alojamiento, teléfono/WhatsApp
 *   (+56 9 9599 3480), nota 3,8★ y 10 reseñas, plus code G88P+JQ y
 *   coordenadas (-35,4834, -71,6631): ficha pública de Google Maps.
 *   La ficha no tiene dirección postal; queda en el sector de la K-630,
 *   comuna de Maule (referencias cercanas: El Sauce / Unihue).
 * - La ficha no publica fotos ni sitio web, y las reseñas son solo
 *   notas sin texto — por eso la página no inventa amenities ni cita
 *   testimonios: lo no confirmado se presenta como pregunta al
 *   WhatsApp.
 * - Fotos en /demos/cabanas-talca: `aerea` es la vista satelital real
 *   del predio (Google Maps, imagen Airbus 2026). `cabanas`, `quincho`
 *   e `interior` son ILUSTRACIONES generadas, marcadas en la página
 *   como «bosquejo» — la pyme no tiene fotos publicadas.
 * Textos de sección son de muestra.
 */

export const BIZ = {
  name: 'Cabañas Talca',
  short: 'Cabañas Talca',
  rubro: 'Cabañas y alojamiento',
  address: 'Sector camino K-630',
  city: 'Comuna de Maule',
  region: 'Región del Maule',
  plusCode: 'G88P+JQ Maule',
  phoneDisplay: '+56 9 9599 3480',
  phoneTel: '+56995993480',
  whatsapp: '56995993480',
  rating: '3,8',
  reviews: 10,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Talca y quiero consultar por una cabaña',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Talca, Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-talca'
