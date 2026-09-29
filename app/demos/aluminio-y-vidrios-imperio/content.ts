/**
 * app/demos/aluminio-y-vidrios-imperio/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + exhibidor de
 * Construex "imperio_aluminio_y_vidrios", 2026-09-29): nombre, rubro
 * (cristalero / tienda de ventanas), dirección en 11 Oriente entre 6 y 7
 * Norte (Talca), teléfono/WhatsApp, horario Lun–Vie 8:21–19:00, rating
 * 3,7 con 26 reseñas y las citas de clientes. El catálogo de vidrios
 * (doble acristalamiento I–IV, laminado, templado, control solar,
 * simple) sale de su exhibidor público en Construex. Las fotos de
 * /public/demos/aluminio-y-vidrios-imperio son las publicadas en la
 * ficha de Maps. La pyme NO tiene sitio web ni redes encontradas: el
 * contacto es por WhatsApp. Las frases de venta son de muestra.
 */

export const BIZ = {
  name: 'Aluminio y Vidrios Imperio',
  short: 'Imperio',
  rubro: 'Cristalero · tienda de ventanas',
  address: '11 Oriente, entre 6 y 7 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3312 9996',
  whatsapp: '56933129996',
  rating: '3,7',
  reviews: 26,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Aluminio y Vidrios Imperio y quiero cotizar',
)}`

export const WA_LINK_MEDIDA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero cotizar un vidrio a medida. El ancho es __ cm y el alto es __ cm',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Aluminio y vidrios imperio, 11 Oriente, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Aluminio y vidrios imperio, 11 Oriente, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/aluminio-y-vidrios-imperio'

/** Horario publicado en su ficha de Google Maps. */
export const HORAS = [
  { days: 'Lunes a viernes', time: '8:21 a 19:00' },
  { days: 'Sábado y domingo', time: 'Cerrado' },
] as const
