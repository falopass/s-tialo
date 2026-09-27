/**
 * app/demos/matrokin/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección (Camino a Agua Fría 767), WhatsApp y las 11 reseñas.
 * Todo lo demás (rituales, precios, horarios, reseñas) es contenido
 * de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Matrokin SPA',
  short: 'Matrokin',
  rubro: 'Spa y terapias',
  address: 'Camino a Agua Fría 767',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5401 6398',
  phoneTel: '+56954016398',
  whatsapp: '56954016398',
  reviews: 11,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Matrokin SPA y quiero reservar una hora',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Matrokin SPA, Camino a Agua Fría 767, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Matrokin SPA, Camino a Agua Fría 767, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/matrokin'
