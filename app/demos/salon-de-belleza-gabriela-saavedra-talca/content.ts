/**
 * app/demos/salon-de-belleza-gabriela-saavedra-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y página de
 * Facebook): nombre, rubro, dirección en Talca, teléfono/WhatsApp, las
 * 50 reseñas de Google y los 1.824 seguidores de Facebook. Todo lo
 * demás (servicios, precios, horarios, reseñas citadas) es contenido
 * de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Salón de Belleza Gabriela Saavedra Talca',
  short: 'Gabriela Saavedra',
  rubro: 'Centro de estética',
  address: 'Calle 32 Ote. 1327',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 221 2381',
  phoneTel: '+56712212381',
  whatsapp: '56712212381',
  reviews: 50,
  facebook: 'https://www.facebook.com/SalonGabrielaSaavedra',
  facebookFollowers: '1.824',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Salón de Belleza Gabriela Saavedra y quiero agendar una hora',
)}`

export const waServicio = (servicio: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página del Salón de Belleza Gabriela Saavedra y quiero consultar por ${servicio}`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Salón de Belleza Gabriela Saavedra, Calle 32 Ote. 1327, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 32 Ote. 1327, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/salon-de-belleza-gabriela-saavedra-talca'
