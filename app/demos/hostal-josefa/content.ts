/**
 * app/demos/hostal-josefa/content.ts
 *
 * Datos del mockup. REALES (ficha pública): nombre, dirección,
 * WhatsApp, Facebook, las 106 reseñas de Google Maps y las fotos
 * (bajadas de su ficha de Maps y su flyer publicado). Las tarifas
 * son contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Hostal Josefa',
  short: 'H. Josefa',
  rubro: 'Hostal y hospedaje',
  address: 'Sgto. Aldea 407',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4040 4959',
  phoneTel: '+56940404959',
  whatsapp: '56940404959',
  reviews: 106,
  facebook: 'http://www.facebook.com/residencialjosefa',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Hostal Josefa y quiero consultar por una pieza',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una pieza en Hostal Josefa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hostal Josefa, Sargento Aldea 407, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Hostal Josefa, Sargento Aldea 407, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/hostal-josefa'
