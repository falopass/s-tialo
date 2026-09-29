/**
 * app/demos/catedral-restaurant/content.ts
 *
 * Datos reales verificados: nombre, localidad (Panimávida, comuna de
 * Colbún), dirección (Dr. Bravo S/N, según ficha de Google y SERNATUR),
 * teléfono/WhatsApp (Google Maps y SERNATUR), rating y reseñas de la
 * ficha. Los platos nombrados salen de las reseñas reales. Sin horario:
 * la ficha de Google marca "cerrado permanentemente" y los directorios
 * desactualizados no son confiables, así que se omite.
 * Sin Instagram/Facebook: sin perfil propio confirmado.
 */

export const BIZ = {
  name: 'Catedral Restaurant',
  short: 'Catedral',
  rubro: 'Restaurant',
  address: 'Dr. Bravo S/N, Panimávida',
  city: 'Colbún',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5018 1852',
  phoneTel: '+56950181852',
  whatsapp: '56950181852',
  rating: 4.2,
  reviews: 66,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Catedral Restaurant y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Catedral Restaurant y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'CATEDRAL RESTAURANT, Panimávida, Colbún, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'CATEDRAL RESTAURANT, Panimávida, Colbún, Chile',
)}&output=embed`

export const IMG = '/demos/catedral-restaurant'
