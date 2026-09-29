/**
 * app/demos/consulta-medica-san-clemente/content.ts
 *
 * Datos REALES verificados el 2026-09-29:
 * - Ficha de Google Maps "Consulta Médica San Clemente": Humberto Silva 202,
 *   San Clemente (dentro de Almacén Florencia), tel. +56 71 262 2356,
 *   nota 4,4 con 5 reseñas, categoría médico, abre 8:30.
 * - Doctoralia (doctoralia.cl): la especialización de la consulta es
 *   kinesiología; el profesional listado es el kinesiólogo
 *   Yovan Andrés Oyarce Sepúlveda, con primera visita, visitas sucesivas
 *   y visita domiciliaria. Previsiones publicadas: Fonasa e isapres
 *   (Banmédica, Colmena, Consalud, Cruz Blanca, Nueva Masvida, Vida Tres).
 * - Fanspage histórica del negocio ("Kinesiología San C", Facebook):
 *   rehabilitación kinésica traumatológica (desgarros, tendinitis,
 *   esguinces, fracturas, lumbago), neurológica (ACV, Parkinson),
 *   kinesiterapia respiratoria en niños, masaje de relajación, taping,
 *   y atención a domicilio; horario de mañana y tarde de lunes a viernes.
 * - Fotos reales: solo hay vista de calle de la esquina (Street View) —
 *   la consulta no publica fotos. Los interiores van como bosquejo marcado.
 * Todo lo demás (pasos de atención, formulaciones) es contenido de muestra.
 */

export const BIZ = {
  name: 'Consulta Médica San Clemente',
  short: 'Consulta San Clemente',
  rubro: 'Kinesiología y rehabilitación',
  address: 'Humberto Silva 202',
  addressExtra: 'interior de Almacén Florencia',
  city: 'San Clemente',
  region: 'Región del Maule',
  profesional: 'Yovan Andrés Oyarce Sepúlveda',
  profesionalRol: 'Kinesiólogo',
  phoneDisplay: '+56 71 262 2356',
  phoneTel: '+56712622356',
  rating: '4,4',
  reviews: 5,
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Consulta Médica San Clemente, Humberto Silva 202, San Clemente',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Consulta Médica San Clemente, Humberto Silva 202, San Clemente',
)}&output=embed`

export const IMG = '/demos/consulta-medica-san-clemente'

/** Lo que publican en su fanspage y Doctoralia. */
export const AREAS = [
  {
    nombre: 'Rehabilitación traumatológica',
    detalle: 'Desgarros, tendinitis, esguinces, fracturas y lumbago: recuperación guiada paso a paso.',
  },
  {
    nombre: 'Rehabilitación neurológica',
    detalle: 'Acompañamiento kinésico tras accidente cerebrovascular, Parkinson y otras condiciones.',
  },
  {
    nombre: 'Kinesiterapia respiratoria en niños',
    detalle: 'Apoyo respiratorio kinésico pensado para los más chicos de la casa.',
  },
  {
    nombre: 'Masaje de relajación',
    detalle: 'Masoterapia para soltar tensiones y dolor muscular acumulado.',
  },
  {
    nombre: 'Vendaje neuromuscular (taping)',
    detalle: 'Colocación y distribución de taping para lesiones y soporte muscular.',
  },
  {
    nombre: 'Atención a domicilio',
    detalle: 'Si no puedes acercarte, la rehabilitación también llega a tu casa.',
  },
] as const

export const PASOS = [
  {
    paso: 'Llamas y agendas',
    texto: 'Coordinas tu hora por teléfono, en consulta en Humberto Silva 202 o a domicilio.',
  },
  {
    paso: 'Evaluación inicial',
    texto: 'Primera visita de kinesiología: se evalúa tu condición y se arma un plan a tu medida.',
  },
  {
    paso: 'Sesiones y seguimiento',
    texto: 'Visitas sucesivas según tu plan, con seguimiento de cómo vas recuperando movimiento.',
  },
] as const

/** Previsiones publicadas en su ficha de Doctoralia. */
export const PREVISIONES = [
  'Fonasa',
  'Isapre Banmédica',
  'Isapre Colmena',
  'Isapre Consalud',
  'Isapre Cruz Blanca',
  'Isapre Nueva Masvida',
  'Isapre Vida Tres',
] as const
