/**
 * app/demos/centro-de-eventos-las-bandurrias/content.ts
 *
 * Datos del mockup. REALES (verificados 9-11-2026 en la ficha de Google
 * Maps "Las Bandurrias, Centro de Eventos" y en su logo): nombre,
 * dirección Cruce Ruta V-505, Colonia Alerce, km 7, Puerto Varas,
 * WhatsApp +56 9 9689 3343 y 39 opiniones en Google (la nota no se
 * muestra; las citas son textuales). La oferta (salón cerrado y
 * calefaccionado con estufa a leña, inflable con tobogán, máquinas de
 * peluches, taca-taca, juegos al aire libre, cancha, parrilla adentro
 * y afuera, amplio estacionamiento, "totalmente equipado, solo llevas
 * la comida", vista a los volcanes desde el terreno) sale de las
 * reseñas y fotos de su ficha. No publica horario ni redes sociales:
 * se reserva por WhatsApp. Los textos de apoyo de la página son de
 * muestra.
 */

export const BIZ = {
  name: 'Las Bandurrias, Centro de Eventos',
  short: 'Las Bandurrias',
  rubro: 'Cumpleaños infantiles y eventos familiares',
  address: 'Cruce Ruta V-505, Colonia Alerce, km 7',
  city: 'Puerto Varas',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 9689 3343',
  whatsapp: '56996893343',
  reviews: 39,
} as const

export const WA_LINK =
  'https://wa.me/56996893343?text=Hola%20Las%20Bandurrias%2C%20quiero%20consultar%20disponibilidad%20para%20un%20cumplea%C3%B1os'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Centro de Eventos Las Bandurrias, Colonia Alerce, Puerto Varas',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro de Eventos Las Bandurrias, Colonia Alerce, Puerto Varas',
)}&output=embed`

export const IMG = '/demos/centro-de-eventos-las-bandurrias'
