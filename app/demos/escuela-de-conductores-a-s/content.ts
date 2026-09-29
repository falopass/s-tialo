/**
 * app/demos/escuela-de-conductores-a-s/content.ts
 *
 * Datos REALES verificados (sept 2026): ficha de Google Maps de
 * Escuela de Conductores A & S, 2 Sur 1064, Talca, tel 71 221 5609.
 * El horario se tomó del letrero pegado en su propia puerta (foto real
 * de la ficha), que es más preciso que el horario genérico de Maps.
 * Su rating en Google es bajo (1,9 con 7 reseñas), así que este demo
 * no lleva bloque de reseñas: la venta se apoya en el lugar, el horario
 * real y el camino hacia la licencia.
 */

export const BIZ = {
  name: 'Escuela de Conductores A & S',
  short: 'A & S',
  rubro: 'Escuela de conductores',
  address: '2 Sur 1064',
  addressHint: 'entre 3 y 4 Oriente',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '71 221 5609',
  phoneTel: '+56712215609',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Escuela de Conductores A&S, 2 Sur 1064, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Escuela de Conductores A&S, 2 Sur 1064, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/escuela-de-conductores-a-s'

/** Horario real: el letrero pegado en su puerta. */
export const HOURS = [
  { d: 'Lunes a viernes', h: '8:15 a 13:30 · 15:00 a 20:30' },
  { d: 'Sábado', h: '9:30 a 13:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

/**
 * El camino a la licencia clase B en Chile (proceso estándar):
 * la escuela cubre la parte de aprender; la municipalidad examina.
 */
export const RUTA = [
  {
    t: 'Inscripción',
    d: 'Llegas con tu cédula de identidad y tu certificado de estudios. En la oficina de 2 Sur te ordenan el resto.',
  },
  {
    t: 'Clases teóricas',
    d: 'Las reglas del manual del conductor: señalización, convivencia vial y lo que pregunta el examen teórico.',
  },
  {
    t: 'Clases prácticas',
    d: 'Manejo real con instructor: partidas, giros, estacionamiento y recorrer la ciudad hasta que salga natural.',
  },
  {
    t: 'Exámenes',
    d: 'Evaluación médica, examen teórico y prueba práctica en la municipalidad para salir con la licencia clase B.',
  },
] as const

/** Las dos fotos reales de su ficha: el patio y la oficina. */
export const PHOTOS = [
  {
    src: `${IMG}/patio.webp`,
    alt: `Patio de la ${BIZ.name} en 2 Sur, Talca, con su letrero de escuela de conductores`,
    cap: 'El patio donde se practica',
  },
  {
    src: `${IMG}/oficina.webp`,
    alt: `Puerta de la oficina de la ${BIZ.name} con el letrero de horario de atención`,
    cap: 'La oficina, con el horario en la puerta',
  },
] as const
