/**
 * app/demos/cabanas-rocas-de-pellines/content.ts
 *
 * Datos REALES verificados (sep 2026):
 * - Asetur / turismoconstitucion.cl: "Cabañas Rocas de Pellines",
 *   Ruta M-50 km 20, camino a Chanco (sector Pellines, Constitución),
 *   tel. +56 9 6505 0909, mail cabanasrocasdepellines@gmail.com.
 * - Ficha de Google Maps: 4,2 estrellas en 50 opiniones. De las
 *   reseñas reales salen: acceso/salida directa a la playa, piscina,
 *   quincho, cabañas totalmente equipadas (loza, hervidor,
 *   refrigerador, agua caliente), habitaciones además de cabañas,
 *   no se aceptan mascotas, check-out temprano.
 * - Fotos: bajadas de la galería pública de la ficha de Maps.
 * - Sitio oficial www.cabanasrocasdepellines.cl existe pero el
 *   certificado HTTPS está mal configurado (ERR_CERT_COMMON_NAME_INVALID);
 *   no se pudo usar su contenido.
 */

export const BIZ = {
  name: 'Cabañas Rocas de Pellines',
  short: 'Rocas de Pellines',
  rubro: 'Cabañas frente al mar',
  address: 'Ruta M-50 km 20, camino a Chanco',
  city: 'Pellines, Constitución',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6505 0909',
  phoneTel: '+56965050909',
  whatsapp: '56965050909',
  email: 'cabanasrocasdepellines@gmail.com',
  rating: '4,2',
  reviews: 50,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Rocas de Pellines y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Rocas de Pellines, camino a Chanco',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Caba%C3%B1as%20Rocas%20De%20Pellines%20Constituci%C3%B3n'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Rocas De Pellines, Ruta M-50, Constitución, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-rocas-de-pellines'
