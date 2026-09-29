/**
 * app/demos/restaurante-aleman-nueva-baviera/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps, nuevabaviera.cl
 * e Instagram @restoranaleman el 29-09-2026): nombre, comuna, dirección
 * (Ruta 5 Sur km 333, Retiro), teléfono, horario (todos los días
 * 12:00-18:00 continuado), email, Instagram, platos de la casa,
 * valor promedio por persona y reseñas de Google.
 */

export const BIZ = {
  name: 'Restaurante Alemán Nueva Baviera',
  short: 'Nueva Baviera',
  rubro: 'Restaurante alemán',
  address: 'Ruta 5 Sur km 333, El Membrillo',
  city: 'Retiro',
  region: 'Región del Maule',
  phoneDisplay: '+56 73 246 5736',
  phoneTel: '+56732465736',
  whatsapp: '56732465736',
  email: 'restaurantenb@gmail.com',
  instagram: 'https://www.instagram.com/restoranaleman/',
  igUser: '@restoranaleman',
  web: 'https://www.nuevabaviera.cl',
  hours: 'Todos los días 12:00 a 18:00, horario continuado',
  since: '2007',
  rating: '4,3',
  reviews: '1.877',
  tripadvisor: 'N°1 de 17 restaurantes en Parral',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Nueva Baviera y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Nueva Baviera y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurante Alemán Nueva Baviera, Retiro, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurante Alemán Nueva Baviera, Ruta 5 Sur km 333, Retiro, Chile',
)}&output=embed`

export const IMG = '/demos/restaurante-aleman-nueva-baviera'
