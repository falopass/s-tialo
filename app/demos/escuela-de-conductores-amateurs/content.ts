/**
 * app/demos/escuela-de-conductores-amateurs/content.ts
 *
 * Datos del demo. REALES:
 * - Ficha de Google Maps: 'Escuela de Conductores Amateurs',
 *   autoescuela en Calle 6 Ote. 1497 (esquina Alameda), Talca;
 *   4,8★; teléfono/WhatsApp +56 9 6249 5352; martes 10:00–20:00;
 *   la ficha declara «se identifica como mujer empresaria».
 * - Facebook @EscueladeConductoresAmateurs e Instagram
 *   @escueladeconductoresamateurs (handle visible en sus afiches).
 * - De sus propios afiches publicados: «32 años enseñando», cursos
 *   nuevos todos los martes, aceptan Visa y Mastercard, y el detalle
 *   de los dos cursos (teórico y completo) con sus horarios de teoría.
 * - Fotos: logo real + 6 afiches/fotos de su Facebook. La ficha de
 *   Maps solo publica una foto de portada — el material fuerte es el
 *   que ellos mismos difunden; no se inventó nada.
 */

export const BIZ = {
  name: 'Escuela de Conductores Amateurs',
  short: 'Amateurs',
  rubro: 'Escuela de conductores',
  address: 'Calle 6 Oriente 1497',
  addressHint: 'esquina Alameda',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6249 5352',
  wa: '56962495352',
  rating: '4,8',
  reviews: 'más de mil reseñas en Google',
  years: '32 años enseñando',
  ig: 'escueladeconductoresamateurs',
  fb: 'https://www.facebook.com/EscueladeConductoresAmateurs/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.wa}?text=${encodeURIComponent(
  'Hola, vi la página de la Escuela de Conductores Amateurs y quiero consultar por los cursos',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Escuela de Conductores Amateurs, Calle 6 Oriente 1497, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Escuela de Conductores Amateurs, Calle 6 Oriente 1497, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/escuela-de-conductores-amateurs'

// Lo que anuncian sus propios afiches
export const CURSOS = [
  {
    n: 'A',
    name: 'Curso completo',
    items: [
      '12 clases prácticas + una clase especial el día antes de tu examen',
      '10 clases teóricas',
      '4 clases psicotécnicas y examen visual',
      'Préstamo de auto para rendir tu examen',
      'Libro para la conducción en Chile',
      'Duración aproximada: 2 meses',
    ],
  },
  {
    n: 'B',
    name: 'Curso teórico',
    items: [
      'Para quien ya sabe conducir pero reprobó el examen teórico',
      '10 clases en aula, presencial u online, de 1 hora y media',
      'Incluye 3 clases psicotécnicas y examen visual',
      'Libro + material exclusivo de preguntas y respuestas',
    ],
  },
] as const

export const HORARIOS_TEORIA = ['9:00', '10:30', '18:30', '20:00'] as const
