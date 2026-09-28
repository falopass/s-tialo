/**
 * app/demos/mia-centro-de-estetica/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, nota 4,8 en 31 reseñas de Google con las citas reales,
 * la página de Facebook y el WhatsApp. Las fotos son reales de la
 * ficha (manicure y fachada con el letrero de servicios). Los
 * precios y horarios siguen siendo de muestra.
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
  rating: 4.8,
  ratingLabel: '4,8',
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
