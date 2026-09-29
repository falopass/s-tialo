/**
 * app/demos/el-roble-de-vilches/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + sitio oficial
 * turismoelroble.cl + Instagram @complejoturisticoelroble): nombre,
 * dirección Km. 54 Vilches centro (San Clemente), nota 4,5 con 175
 * reseñas, teléfonos de reserva y consulta, horario de atención
 * telefónica, servicios publicados en su web y todas las fotos
 * (aéreo del complejo, cabaña, tinaja, sauna, quincho, sendero y
 * portón de entrada tomadas de su propio sitio e Instagram).
 * Además: el directorio turístico de la Municipalidad de San Clemente
 * (sanclemente.cl/turismo/servicios/rest.html) lista "El Roble" en
 * Vilches con el contacto del restaurant 9 8529 3925 y su sitio
 * turismoelroble.cl — mismo negocio confirmado por el dominio.
 */

export const BIZ = {
  name: 'Complejo Turístico El Roble',
  short: 'El Roble',
  rubro: 'Alojamiento y turismo',
  address: 'Km. 54 Vilches centro',
  city: 'Vilches',
  comuna: 'San Clemente',
  region: 'Región del Maule',
  rating: 4.5,
  ratingLabel: '4,5',
  reviews: 175,
  reserva1: { display: '71 224 2148', tel: '+56712242148' },
  reserva2: { display: '71 274 6250', tel: '+56712746250' },
  consultas: { display: '+56 9 2604 6903', tel: '+56926046903' },
  restaurant: { display: '+56 9 8529 3925', tel: '+56985293925' },
  email: 'contacto@turismoelroble.cl',
  web: 'https://turismoelroble.cl',
  instagram: 'https://www.instagram.com/complejoturisticoelroble/',
  igFollowers: '4.700',
  facebook: 'https://www.facebook.com/complejoturisticoelroble',
} as const

/** Atención telefónica publicada en su sitio oficial. */
export const ATENCION = 'Lunes a viernes 9:00–19:30 · sábado 9:00–13:00'

/** Servicios publicados en turismoelroble.cl (menú del sitio oficial). */
export const SERVICIOS = [
  'Cabañas',
  'Restaurant',
  'Piscinas',
  'Tinas calientes',
  'Sauna',
  'Masajes',
  'Shinrin-yoku (baños de bosque)',
  'Sonoterapia',
  'El Roble Kids',
  'Actividades outdoor',
  'Grupos y eventos',
] as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Complejo Turístico El Roble, Vilches, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Complejo Turístico El Roble, Vilches, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/el-roble-de-vilches'
