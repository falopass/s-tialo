/**
 * app/demos/centro-spa-roxana/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram
 * @sparoxana): nombre, rubro, dirección, comuna, nota 4,2 en 149 reseñas,
 * horario (Lu-Sa 10:00-19:00, domingo cerrado), el WhatsApp, el logo y
 * las fotos (Google Maps + perfil de Instagram). Los precios y las
 * reseñas citadas siguen siendo contenido de muestra.
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
  followers: '7.727',
} as const

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
