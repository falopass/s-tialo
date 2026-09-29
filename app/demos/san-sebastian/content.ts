/**
 * San Sebastián — el supermercado de barrio de San Clemente.
 *
 * Datos confirmados en su ficha de Google Maps (nombre, rubro de
 * supermercado, comuna, teléfono, horario, 3.9 estrellas y 681 reseñas)
 * y su página de Facebook. Las citas de la boleta son reseñas reales de
 * su ficha de Google. Todas las fotos son de su ficha pública.
 */

export const IMG = '/demos/san-sebastian'

export const BIZ = {
  name: 'Supermercado San Sebastián',
  short: 'San Sebastián',
  rubro: 'Supermercado',
  city: 'San Clemente',
  phoneDisplay: '71 262 1268',
  phoneTel: '+56 71 262 1268',
  rating: 3.9,
  reviews: 681,
}

export const TEL_LINK = `tel:${BIZ.phoneTel.replace(/\s/g, '')}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Supermercado San Sebastián, San Clemente'
)}`
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.5371094,-71.4879369&z=17&output=embed'
