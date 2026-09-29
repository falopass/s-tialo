/**
 * app/demos/lircay-experience/content.ts
 *
 * Datos del mockup. REALES y verificados en dos fuentes:
 *  - Directorio turístico de la Municipalidad de San Clemente
 *    (sanclemente.cl/turismo/servicios/otros.html): "Lircay Experience
 *    Marley Coffee", Vilches Alto, lircayexperience@gmail.com, 978726786.
 *  - mundochileno.com: "Lircay Experience Outdoor Coffee", Vilches Alto
 *    (3520000) San Clemente; rubros publicados: tours, cafeterías,
 *    organización de eventos, escalada y senderismo, bares y
 *    confiterías, camas elásticas; tel +56 9 7872 6786; atención
 *    reportada martes a domingo 8:30–21:00.
 *
 * El negocio NO tiene ficha en Google Maps (verificado: la búsqueda
 * devuelve "¿Este sitio debería estar en Google Maps?") ni Instagram o
 * Facebook público localizado — por eso todas las imágenes del demo son
 * ilustraciones marcadas visiblemente como bosquejo.
 */

export const BIZ = {
  name: 'Lircay Experience Outdoor Coffee',
  altName: 'Lircay Experience Marley Coffee',
  short: 'Lircay Experience',
  rubro: 'Cafetería outdoor',
  sector: 'Vilches Alto',
  comuna: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7872 6786',
  phoneTel: '+56978726786',
  email: 'lircayexperience@gmail.com',
  horario: 'Martes a domingo 8:30 – 21:00',
  horarioNota: 'Horario reportado en directorios; conviene confirmar antes de subir.',
} as const

/** Rubros publicados en mundochileno + municipalidad de San Clemente. */
export const SERVICIOS = [
  { n: 'Café y confitería', d: 'El punto de café del valle, camino a la reserva.' },
  { n: 'Tours y senderismo', d: 'Salidas guiadas hacia los senderos del valle del Lircay.' },
  { n: 'Escalada', d: 'Actividad outdoor publicada en su ficha de directorio.' },
  { n: 'Camas elásticas', d: 'Para que los niños gasten energía mientras los grandes toman café.' },
  { n: 'Eventos', d: 'Organización de eventos al aire libre.' },
] as const

/** Atractivos reales del entorno (fichas de Google Maps del sector). */
export const CERCA = [
  { n: 'Reserva Nacional Altos de Lircay', nota: '4,8 · reserva nacional' },
  { n: 'Enladrillado', nota: '4,9 · sendero' },
  { n: 'Laguna del Alto', nota: '5,0 · mirador' },
  { n: 'Mirador Punta del Águila', nota: '4,9 · mirador' },
] as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vilches Alto, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Vilches Alto, San Clemente, Maule, Chile',
)}&output=embed`
