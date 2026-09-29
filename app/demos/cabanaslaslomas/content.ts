/**
 * app/demos/cabanaslaslomas/content.ts
 *
 * Datos del mockup. REALES, verificados en Google Maps (ficha
 * «Cabañas las Lomas», El Torreón, San Clemente — 5,0★, 12 reseñas)
 * y en su sitio cabanaslaslomas.cl:
 * nombre, dirección (Parcelación 31 A 6, Las Lomas Norte), WhatsApp
 * +56 9 9776 1672, horario 9:00–22:30 todos los días, cabañas Don
 * Gustavo (3 pers.) y Doña Ángela (4 pers.) con tarifas $50.000
 * dom–jue / $55.000 vie–sáb–fest, qué incluye cada cabaña, check-in
 * 15:00–22:00 / check-out 12:00, Café Al Paso, Pub La Taverna,
 * piscina familiar y salón de eventos. Las reseñas citadas son las
 * publicadas en Google por Barbara M., Paulina C., Lucy P. y Andrés A.
 * Fotos y logo: bajados de cabanaslaslomas.cl.
 */

export const BIZ = {
  name: 'Cabañas Las Lomas',
  short: 'Las Lomas',
  rubro: 'Cabañas y campo',
  address: 'Parcelación 31 A 6, Las Lomas Norte',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9776 1672',
  phoneTel: '+56997761672',
  whatsapp: '56997761672',
  rating: '5,0',
  reviews: 12,
  site: 'cabanaslaslomas.cl',
  hours: 'Todos los días, 9:00 a 22:30',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Cabañas Las Lomas, vi su página y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Cabañas Las Lomas, San Clemente',
)}`

export const SITE_URL = 'https://cabanaslaslomas.cl'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas las Lomas, Las Lomas Norte, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas las Lomas, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanaslaslomas'
