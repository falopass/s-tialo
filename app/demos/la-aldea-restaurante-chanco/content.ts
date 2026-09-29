/**
 * app/demos/la-aldea-restaurante-chanco/content.ts
 *
 * Datos reales verificados: nombre, comuna, dirección (esquina Teniente
 * Merino con Av. Errázuriz, según directorios y la ficha de Google),
 * teléfono/WhatsApp (Google Maps), horario, rating 5.0 y reseñas de la
 * ficha. La pizarra del día sale de una foto real del letrero en la
 * vereda. Sin Instagram/Facebook: sin perfil propio confirmado.
 */

export const BIZ = {
  name: 'La Aldea Restaurante',
  short: 'La Aldea',
  rubro: 'Restaurante',
  address: 'Teniente Merino con Av. Errázuriz',
  city: 'Chanco',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5772 4559',
  phoneTel: '+56957724559',
  whatsapp: '56957724559',
  rating: 5.0,
  reviews: 8,
  hours: 'Lun a vie 12:00 a 17:00 · dom 12:00 a 18:00 · sáb cerrado',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Aldea y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Aldea y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Aldea Restaurante, Chanco, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'La Aldea Restaurante, Chanco, Chile',
)}&output=embed`

export const IMG = '/demos/la-aldea-restaurante-chanco'
