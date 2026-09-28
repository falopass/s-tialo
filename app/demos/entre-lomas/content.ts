/**
 * app/demos/entre-lomas/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps y elomas.cl):
 * nombre, ubicación (Santa Brígida, camino a Radal — Molina), teléfono
 * /WhatsApp (+56 9 4283 3308 de la ficha de Google), rating 4,2 con 126
 * reseñas y sitio elomas.cl. Los servicios (cabañas, tinajas, piscinas,
 * cafetería Las Terrazas, cervecería, restaurante, salón de eventos,
 * minimarket, visitas guiadas al Parque Nacional Radal Siete Tazas)
 * salen de elomas.cl. Las reseñas y descripciones detalladas de la
 * página son de muestra.
 */

export const BIZ = {
  name: 'Complejo Turístico Entre Lomas',
  short: 'Entre Lomas',
  rubro: 'Cabañas y turismo',
  address: 'Santa Brígida, camino a Radal Siete Tazas',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4283 3308',
  phoneTel: '+56942833308',
  whatsapp: '56942833308',
  rating: '4,2',
  reviews: 126,
  site: 'elomas.cl',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Entre Lomas, vi su página y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Complejo Entre Lomas, Molina',
)}`

export const SITE_URL = 'https://elomas.cl'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Complejo Turistico Entre Lomas, Molina, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Complejo Turistico Entre Lomas, Molina, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/entre-lomas'
