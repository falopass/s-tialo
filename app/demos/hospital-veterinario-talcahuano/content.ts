/**
 * Datos verificados: Hospital Veterinario Talcahuano
 * Fuentes: ficha de Google Maps (Las Hortensias 5060, Talcahuano;
 * +56 2 2717 4707 fijo; abierto 24 h; 4.0★/961 reseñas; temas más
 * mencionados: urgencias, hospitalización, tiempo de espera) y fotos
 * publicadas en el mismo perfil. Teléfono fijo: sin WhatsApp.
 */

const SLUG = 'hospital-veterinario-talcahuano'

export const BIZ = {
  name: 'Hospital Veterinario Talcahuano',
  rubro: 'Hospital veterinario 24 horas',
  address: 'Las Hortensias 5060',
  city: 'Talcahuano',
  region: 'Región del Biobío',
  phoneDisplay: '+56 2 2717 4707',
  phoneTel: 'tel:+56227174707',
  rating: 4.0,
  reviews: 961,
  open24: true,
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}`,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}`,
)}&output=embed`

export const IMG = `/demos/${SLUG}`

/** Servicios publicados en el perfil de Maps y en la señalética. */
export const SERVICIOS = [
  { t: 'Urgencias 24 h', d: 'Atención de urgencia todos los días del año, día y noche.' },
  { t: 'Hospitalización', d: 'Pacientes internados con vigilancia continua.' },
  { t: 'Cirugía', d: 'Pabellón quirúrgico para procedimientos programados y de urgencia.' },
  { t: 'Medicina interna', d: 'Diagnóstico y tratamiento de enfermedades complejas.' },
  { t: 'Odontología', d: 'Limpieza y tratamiento dental para perros y gatos.' },
  { t: 'Especialidades', d: 'Dermatología, cardiología y oftalmología veterinaria.' },
] as const

/** Temas más repetidos en las 961 reseñas de Google (según la propia ficha). */
export const TEMAS_RESENAS = [
  { tema: 'Urgencias médicas', menciones: 90 },
  { tema: 'Hospitalización', menciones: 37 },
  { tema: 'Tiempo de espera', menciones: 23 },
] as const

export const HORARIO_24H = 'Abierto las 24 horas, todos los días'
