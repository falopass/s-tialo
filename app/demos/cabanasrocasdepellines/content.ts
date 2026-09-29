/**
 * app/demos/cabanasrocasdepellines/content.ts
 *
 * Datos verificados de Cabañas Rocas de Pellines (Pellines, Constitución):
 *
 * - Google Maps: «Cabañas Rocas De Pellines», 4,2 estrellas, categoría
 *   hotel, dirección M50, Constitución; teléfono +56 9 6505 0909.
 * - Asetur Constitución (turismoconstitucion.cl): «Ruta M50 Km. 20
 *   camino a Chanco», fono +56 9 6505 0909, correo
 *   cabanasrocasdepellines@gmail.com, sitio cabanasrocasdepellines.cl
 *   (hoy sin contenido).
 * - Fotos: todas de la galería pública de su ficha de Google Maps
 *   (cabañas, piscina, entrada, interiores, playa y rocas del sector).
 * - Sin reseñas de texto públicas en la ficha: se muestra solo la
 *   nota 4,2 — no se citan opiniones ni se inventan conteos.
 */

export const BIZ = {
  name: 'Cabañas Rocas de Pellines',
  short: 'Rocas de Pellines',
  rubro: 'Cabañas · turismo',
  address: 'Ruta M-50 km 20, camino a Chanco',
  city: 'Pellines, Constitución',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6505 0909',
  whatsapp: '56965050909',
  email: 'cabanasrocasdepellines@gmail.com',
  rating: 4.2,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Cabañas Rocas de Pellines, vi su página y quiero consultar disponibilidad',
)}`

export const MAPS_QUERY = 'Cabañas Rocas De Pellines, M50, Constitución, Maule'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Rocas De Pellines, Constitución',
)}&output=embed`

export const IMG = '/demos/cabanasrocasdepellines'

export const INCLUYE = [
  'Cabañas de madera equipadas con cocina',
  'Piscina al aire libre dentro del complejo',
  'Entrada con portón y estacionamiento interior',
  'A pasos de la playa y las rocas de Los Pellines',
] as const
