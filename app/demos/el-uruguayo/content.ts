/**
 * app/demos/el-uruguayo/content.ts
 *
 * Datos del mockup. REALES, verificados en la ficha pública de Google Maps
 * y en el sitio propio del taller (eluruguayo.cl): nombre, dirección,
 * comuna, teléfonos, horario, servicios, especialidad de marcas, años de
 * experiencia, rating (5,0 con 30 reseñas en Google) y los testimonios
 * con nombre publicados en su propio sitio.
 *
 * Nota: la tarea lo describía como restobar/parrilla, pero en Maps no
 * existe ningún restobar "El Uruguayo" en San Clemente; la única pyme
 * con ese nombre en la comuna es este taller mecánico a domicilio.
 */
export const BIZ = {
  name: 'Taller Mecánico El Uruguayo',
  short: 'El Uruguayo',
  rubro: 'Mecánica automotriz a domicilio',
  city: 'San Clemente',
  region: 'Región del Maule',
  address: 'Camino a Corralones km 25, sector Rota',
  phoneDisplay: '+56 9 9819 8248',
  whatsapp: '56998198248',
  phoneAlt: '+56 9 9785 4207',
  rating: 5.0,
  reviews: 30,
  experience: '20',
  schedule: 'Lunes a sábado · 09:00 a 18:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, necesito un servicio de mecánica a domicilio. ¿Cuándo pueden venir?',
)}`

export const WA_EMERGENCY = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quedé en pana y necesito ayuda. Estoy en:',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Taller mecánico El Uruguayo, Camino a Corralones, San Clemente, Región del Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Camino a Corralones, San Clemente, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/el-uruguayo'
