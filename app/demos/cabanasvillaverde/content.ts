/**
 * app/demos/cabanasvillaverde/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + su sitio oficial
 * villaverdepelluhue.cl): nombre, dirección Arturo Prat 330 (Pelluhue),
 * WhatsApp (+56 9 8880 2544), nota 4,8 con 41 reseñas, correo de
 * contacto, tarifas por capacidad publicadas en su sitio, registro
 * SERNATUR y el nombre de la anfitriona (la señora Gloria) que repiten
 * las reseñas. Las reseñas citadas — y las respuestas del propietario —
 * son texto original en español. Las descripciones de ambiente son
 * redacción de muestra; las fotos, el logo y el sello SERNATUR son
 * reales de su ficha y su sitio.
 */

export const BIZ = {
  name: 'Cabañas Villa Verde',
  short: 'Villa Verde',
  rubro: 'Cabañas y hospedaje',
  address: 'Arturo Prat 330',
  city: 'Pelluhue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8880 2544',
  phoneTel: '+56988802544',
  whatsapp: '56988802544',
  email: 'villaverde330@gmail.com',
  site: 'villaverdepelluhue.cl',
  rating: 4.8,
  reviews: 41,
  host: 'la señora Gloria',
} as const

export const TARIFAS = [
  { cap: 4, precio: '$60.000' },
  { cap: 5, precio: '$70.000' },
  { cap: 6, precio: '$80.000' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Villa Verde en Pelluhue y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Gloria, quiero reservar una cabaña en Cabañas Villa Verde, Pelluhue',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Villa Verde, Arturo Prat 330, Pelluhue, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Villa Verde, Arturo Prat 330, Pelluhue, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanasvillaverde'
