/**
 * app/demos/restaurant-y-residencial-juanita/content.ts
 *
 * Datos del mockup. REALES (fichas públicas): nombre, dirección
 * (José Gil Aguayo N°15, Curepto — SERNATUR y Municipalidad de
 * Curepto), teléfonos (+56 75 269 0014 fijo y +56 9 9153 4112),
 * rating 4,0 y 171 reseñas de Google Maps, capacidad de 70
 * hospedados con 14 habitaciones (9 con baño privado, 5 con
 * ducha de hidromasaje), pensión completa y TV cable (sitio de
 * turismo de la Municipalidad de Curepto), las reseñas citadas
 * y las fotos (bajadas de su ficha de Google Maps).
 */

export const BIZ = {
  name: 'Restaurant y Residencial Juanita',
  short: 'Residencial Juanita',
  rubro: 'Residencial y restaurant',
  address: 'José Gil Aguayo N°15',
  city: 'Curepto',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9153 4112',
  phoneTel: '+56991534112',
  fijoDisplay: '+56 75 269 0014',
  fijoTel: '+56752690014',
  whatsapp: '56991534112',
  rating: 4.0,
  reviews: 171,
  huespedes: 70,
  piezasBano: 9,
  piezasHidromasaje: 5,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Residencial Juanita en Curepto y quiero consultar por una pieza',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una pieza en Residencial Juanita, Curepto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Residencial Juanita, José Gil Aguayo 15, Curepto, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Residencial Juanita, Curepto, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/restaurant-y-residencial-juanita'

/** Lo que repiten las reseñas reales de su ficha de Google. */
export const RESENAS = [
  {
    text: 'Excelente residencial, todo muy limpio y bonito, las camas son cómodas y tiene todo lo necesario. El desayuno muy rico, la señora es muy amable y es totalmente recomendado.',
    who: 'Reseña de Google',
  },
  {
    text: 'La mejor atención de toda la región. Volveremos todos los años.',
    who: 'Reseña de Google',
  },
  {
    text: 'Muy buena comida casera y habitaciones muy confortables.',
    who: 'Reseña de Google',
  },
]

/** Lo mencionado en reseñas de Google (palabras de la propia ficha). */
export const VALORAN = [
  'La atención de la señora Juanita',
  'La comida casera y el desayuno',
  'Piezas limpias y camas cómodas',
  'Pensión completa, sin cocinar',
]
