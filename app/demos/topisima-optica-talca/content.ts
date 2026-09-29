/**
 * app/demos/topisima-optica-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada
 * 2026-09-29): nombre Topisima Optica Talca, rubro óptica, dirección
 * Calle 6 Ote. 1035 (centro de Talca), teléfono +56 9 6704 0741, nota
 * 4.9 con 266 reseñas y horario de semana 10:00–18:30 y sábado hasta
 * las 15:00. Las fotos de public/demos/topisima-optica-talca/ salen de
 * su ficha; el logo es el ícono de su letrero, recortado de la foto de
 * la fachada. Las reseñas citadas son de su ficha.
 */

export const BIZ = {
  name: 'Topísima Óptica',
  nameFull: 'Topisima Optica Talca',
  rubro: 'Óptica',
  address: '6 Oriente 1035, local del centro',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6704 0741',
  whatsapp: '56967040741',
  googleRating: 4.9,
  googleReviews: 266,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Topísima Óptica y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Topisima Optica Talca, 6 Oriente 1035, Talca',
)}`

// Pin exacto de la ficha.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4284544,-71.6585964&z=16&output=embed'

export const IMG = '/demos/topisima-optica-talca'

// Horario según su ficha: de lunes a viernes y sábado más corto.
export const HORARIO = [
  { dia: 'Lun a Vie', hora: '10:00 – 18:30' },
  { dia: 'Sábado', hora: '10:00 – 15:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
]
