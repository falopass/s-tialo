/**
 * app/demos/mia-centro-de-estetica/content.ts
 *
 * Datos del mockup. REALES (ficha pública): nombre, dirección,
 * las 31 reseñas de Google Maps, la página de Facebook y el
 * número de WhatsApp. Todo lo demás (servicios, precios, horarios
 * y reseñas citadas) es contenido de muestra para mostrar cómo se
 * vería el sitio.
 */

export const BIZ = {
  name: 'Mía Centro De Estética',
  short: 'Mía',
  rubro: 'Centro de estética',
  address: 'Pje. R 8',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6540 5826',
  phoneTel: '+56965405826',
  whatsapp: '56965405826',
  reviews: 31,
  facebook: 'https://www.facebook.com/centrodeesteticamia/',
  facebookFollowers: '1.532',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mía Centro De Estética y quiero agendar una hora',
)}`

export const WA_LINK_SERVICIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mía Centro De Estética y quiero consultar por un servicio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mía Centro De Estética, Pje. R 8, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Mía Centro De Estética, Pje. R 8, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/mia-centro-de-estetica'
