/**
 * app/demos/cafe-la-francesa/content.ts
 *
 * Datos del mockup. REALES y verificados el 28-09-2026: ficha de Google
 * Maps (nombre, categoría cafetería, Manuel Rodriguez 552 en Linares,
 * fijo (73) 247 2127 solo para llamadas, 4.2 estrellas con 811 reseñas,
 * horario lun-vie 8:30-22:30 y sáb-dom 9:00-23:00), página de Facebook
 * @cafelafrancesa (28.398 seguidores, 11.888 visitas registradas) y
 * ficha SERNATUR que publica el móvil 9 7988 4338 usado como WhatsApp.
 * La relación con la Panadería La Francesa de la familia Artus sale de
 * la nota de RedBakery (redbakery.cl). Carta y precios: muestra.
 */

export const BIZ = {
  name: 'Café La Francesa',
  short: 'La Francesa',
  rubro: 'Cafetería',
  address: 'Manuel Rodriguez 552',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7988 4338',
  phoneTel: '+56979884338',
  whatsapp: '56979884338',
  rating: '4.2',
  reviews: 811,
  followers: '28.398',
  facebook: 'https://www.facebook.com/cafelafrancesa',
  horarioSemana: 'Lun a vie 8:30-22:30',
  horarioFinde: 'Sáb y dom 9:00-23:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Café La Francesa y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Café La Francesa, Manuel Rodriguez 552, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Manuel Rodriguez 552, 3581385 Linares, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cafe-la-francesa'
