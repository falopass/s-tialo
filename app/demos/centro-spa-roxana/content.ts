/**
 * app/demos/centro-spa-roxana/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + Instagram
 * @sparoxana): nombre, rubro, dirección (Julio Montt 1170, Curicó),
 * nota 4,2 en 149 reseñas, horario (Lu-Sa 10:00-19:00, domingo
 * cerrado), WhatsApp, logo y fotos reales del centro (casita rosada,
 * jardín, sauna barril, jacuzzi, camilla, pestañas). La carta de
 * depilación está transcrita de la carta publicada por el propio
 * centro en su perfil.
 */

export const BIZ = {
  name: 'Centro Spa Roxana',
  short: 'Spa Roxana',
  rubro: 'Centro de estética',
  address: 'Julio Montt 1170',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9350 1540',
  phoneTel: '+56993501540',
  whatsapp: '56993501540',
  reviews: 149,
  rating: 4.2,
  ratingLabel: '4,2',
  instagram: 'https://instagram.com/sparoxana?igshid=MzRlODBiNWFlZA==',
  instagramHandle: '@sparoxana',
  followers: '7.727',
} as const

export const HORARIO = [
  { d: 'Lunes a sábado', h: '10:00 – 19:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

/**
 * Carta de depilación del centro, publicada en su perfil de Google.
 * Son los valores de esa carta — se confirman al agendar.
 */
export const CARTA = [
  { t: 'Cejas', p: '$2.500' },
  { t: 'Bozo', p: '$1.000' },
  { t: 'Mentón', p: '$1.000' },
  { t: 'Patillas', p: '$2.500' },
  { t: 'Axilas', p: '$2.500' },
  { t: 'Rostro completo con perfilado', p: '$7.500' },
  { t: 'Piernas completas', p: '$5.000' },
  { t: 'Brazos completos', p: '$4.000' },
  { t: 'Rebaje simple', p: '$3.000' },
  { t: 'Rebaje brasileño', p: '$6.000' },
] as const

export const CARTA_NOTA =
  'Carta de depilación publicada por el centro en su perfil de Google. Los valores se confirman al agendar.'

/** Servicios con evidencia real en las fotos de su ficha. */
export const SERVICIOS = [
  { t: 'Depilación', d: 'La carta completa del centro, más abajo.' },
  { t: 'Pestañas', d: 'Trabajo de pestañas, como se ve en sus fotos.' },
  { t: 'Masajes y relajación', d: 'En camilla, dentro de la casita.' },
  { t: 'Sauna finlandés', d: 'El barril de madera del jardín.' },
  { t: 'Jacuzzi con hidromasaje', d: 'Entre las plantas del patio.' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Centro Spa Roxana y quiero pedir una hora',
)}`

export const WA_LINK_CONSULTA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Centro Spa Roxana y quiero consultar por un servicio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Centro Spa Roxana, Julio Montt 1170, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro Spa Roxana, Julio Montt 1170, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/centro-spa-roxana'
