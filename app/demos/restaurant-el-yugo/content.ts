/**
 * app/demos/restaurant-el-yugo/content.ts
 *
 * Datos del mockup. REALES (verificados en ficha de Google Maps y
 * reseñas): nombre, dirección (Dr. Bravo, comuna de Colbún), teléfono,
 * rating y reseñas de Google, el menú del día de su pizarra (platos y
 * acompañamientos) y el precio del menú ($7.000 según reseñas).
 * Los textos de secciones son de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Restaurant El Yugo',
  short: 'El Yugo',
  rubro: 'Restaurant familiar',
  address: 'Dr. Bravo, comuna de Colbún',
  city: 'Colbún',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8241 6164',
  phoneTel: '+56982416164',
  whatsapp: '56982416164',
  rating: 4.3,
  reviewsCount: 111,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola El Yugo, vi su página y quiero reservar para almorzar',
)}`

export const WA_LINK_MENU = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola El Yugo, vi su página y quiero consultar el menú del día',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurant El Yugo, Colbún, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurant El Yugo, Colbún, Chile',
)}&output=embed`

export const IMG = '/demos/restaurant-el-yugo'
