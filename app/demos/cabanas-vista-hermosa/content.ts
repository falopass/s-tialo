/**
 * app/demos/cabanas-vista-hermosa/content.ts
 *
 * Datos del mockup. REALES: nombre, comuna, WhatsApp (+56 9 7526 4235),
 * Instagram (@cabanasvistahermosa_7tazas, 691 seguidores) y las 13
 * reseñas de la ficha de Google. Todo lo demás (descripciones de las
 * cabañas, tarifas, reseñas y horarios) es contenido de ejemplo para
 * mostrar cómo se vería el sitio: los valores de la boleta van
 * marcados como muestra.
 */

export const BIZ = {
  name: 'Cabañas Vista Hermosa',
  short: 'Vista Hermosa',
  rubro: 'Cabañas y hospedaje',
  address: '3510000, Río Claro',
  city: 'Río Claro',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7526 4235',
  phoneTel: '+56975264235',
  whatsapp: '56975264235',
  reviews: 13,
  igHandle: '@cabanasvistahermosa_7tazas',
  igFollowers: 691,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Vista Hermosa y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Vista Hermosa, Río Claro',
)}`

export const IG_URL = 'https://instagram.com/cabanasvistahermosa_7tazas'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Vista Hermosa, Río Claro, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Vista Hermosa, Río Claro, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-vista-hermosa'
