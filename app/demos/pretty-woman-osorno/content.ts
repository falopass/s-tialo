/**
 * app/demos/pretty-woman-osorno/content.ts
 *
 * Datos del mockup. REALES (verificados el 11-11-2026 en la ficha de
 * Google Maps «Centro de Bienestar y Belleza Pretty Woman», Osorno):
 * - Nombre «Centro de Bienestar y Belleza Pretty Woman» (corto:
 *   Pretty Woman). Su saludo de WhatsApp: «Bienvenid@ a Prettywoman,
 *   tu espacio de relajación y belleza en Osorno».
 * - Dirección Dr. Guillermo Buhler 1940, Osorno, Región de Los Lagos,
 *   y coordenadas -40.5907846, -73.125024: ficha de Maps.
 * - Horario martes a sábado 8:00-21:30, domingo y lunes cerrado: ficha.
 * - WhatsApp +56 9 8720 1531: ficha.
 * - 8 opiniones en Google (sin nota publicada): ficha.
 * - Citas de Montserrat R., Ricardo E. y Andrea B.: textuales de esa
 *   ficha. Lo de «te ofrecen de beber», «lugar calentito», masaje de
 *   relajación y masaje de embarazada sale de esas reseñas.
 * - Cursos y talleres de estética: se ven en las fotos de la ficha
 *   (material «Curso Limpieza Facial Profunda», clases en su sala,
 *   alumna practicando maquillaje). No se inventan contenidos,
 *   duraciones ni precios de los cursos.
 * DE MUESTRA: titulares de sección, bajadas y textos de apoyo.
 */

export const BIZ = {
  name: 'Pretty Woman',
  nameFull: 'Centro de Bienestar y Belleza Pretty Woman',
  saludo: 'tu espacio de relajación y belleza en Osorno',
  rubro: 'Centro de bienestar y belleza',
  address: 'Dr. Guillermo Buhler 1940',
  city: 'Osorno',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 8720 1531',
  whatsapp: '56987201531',
  reviews: 8,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pretty Woman y quiero agendar una hora',
)}`

export const WA_CURSOS = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pretty Woman y quiero información de los cursos',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Centro+de+Bienestar+y+Belleza+Pretty+Woman/@-40.5907846,-73.125024,17z/data=!4m6!3m5!1s0x9616372fa40054c3:0x173535d7743864b7!8m2!3d-40.5907846!4d-73.125024'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-40.5907846,-73.125024&z=16&output=embed'

export const IMG = '/demos/pretty-woman-osorno'

export const HORARIO = [
  { d: 'Martes a sábado', h: '8:00–21:30' },
  { d: 'Domingo y lunes', h: 'Cerrado' },
] as const

export const REVIEWS = [
  {
    text: 'Excelente todo! Desde que uno ingresa son muy amables te ofrecen de beber y el lugar es muy calentito. Me hicieron un masaje de embarazada y fue increíble la verdad es que estoy muy agradecida de verdad mi cuerpo descansó.',
    author: 'Montserrat R.',
    fuente: 'Reseña de Google',
  },
  {
    text: 'El masaje 100 % recomendable. Cálida atención y profesionales de primer nivel.',
    author: 'Ricardo E.',
    fuente: 'Reseña de Google',
  },
  {
    text: 'Entretenida tarde con mi amiga de infancia, rico picoteo, excelente masaje de relajación, una delicia, volveré.',
    author: 'Andrea B.',
    fuente: 'Reseña de Google',
  },
] as const
