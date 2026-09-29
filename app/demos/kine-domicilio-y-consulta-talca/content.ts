/**
 * app/demos/kine-domicilio-y-consulta-talca/content.ts
 *
 * Datos REALES verificados el 2026-09-28:
 * - Ficha de Google Maps "KINE DOMICILIO Y CONSULTA TALCA": WhatsApp
 *   +56 9 4512 3779, Cam. Las Rastras 4140 (sector 5 Norte), Talca;
 *   nota 5,0 con 18 opiniones; horario Lun 8:30-20:00, Mar-Vie 8:30-20:30,
 *   Sáb 10:30-13:30, Dom cerrado.
 * - Instagram @kine_domicilio_talca ("M. Consuelo Díaz / Kinesióloga
 *   Talca"): consulta y domicilio, más de 9 años de experiencia,
 *   atención individual.
 * - Facebook facebook.com/kinedomiciliotalca: kinesiología a domicilio
 *   especializada en atención geriátrica.
 * - horaclick.cl/pro/406063: Registro Profesional N° 406063 y lista de
 *   servicios publicada por el propio negocio (masoterapia, ondas de
 *   choque, presoterapia, rehabilitación geriátrica y musculo-esquelética,
 *   terapias respiratorias, neuro-rehabilitación infantil, área estética).
 * - Reseñas citadas: textos reales de la ficha (nombre + antigüedad).
 * - Fotos reales: sesión en camilla, la kinesióloga y sesiones a
 *   domicilio (ficha de Maps + Instagram @kine_domicilio_talca);
 *   logo: avatar oficial de la ficha (4 rombos de colores).
 */

export const BIZ = {
  name: 'Kine Domicilio y Consulta Talca',
  short: 'Kine Talca',
  rubro: 'Kinesiología a domicilio y en consulta',
  profesional: 'María Consuelo Díaz',
  address: 'Camino Las Rastras 4140',
  addressExtra: 'sector 5 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4512 3779',
  whatsapp: '56945123779',
  instagram: 'kine_domicilio_talca',
  facebook: 'kinedomiciliotalca',
  registro: 'N° 406063',
  rating: '5,0',
  reviews: 18,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Kine Domicilio Talca y quiero agendar una hora',
)}`

export const IG_LINK = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'KINE DOMICILIO Y CONSULTA TALCA, Camino Las Rastras 4140, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'KINE DOMICIO Y CONSULTA TALCA, Camino Las Rastras 4140, Talca',
)}&output=embed`

export const IMG = '/demos/kine-domicilio-y-consulta-talca'

export const PASOS = [
  {
    paso: 'Agenda tu hora',
    texto:
      'Escríbenos por WhatsApp, cuéntanos qué necesitas y coordinamos la hora: en consulta en Camino Las Rastras o en tu casa.',
  },
  {
    paso: 'Evaluación personalizada',
    texto:
      'La kinesióloga evalúa tu condición en la primera sesión y arma un plan de tratamiento a tu medida — atención individual, de a un paciente a la vez.',
  },
  {
    paso: 'Tratamiento y seguimiento',
    texto:
      'Sesiones de rehabilitación con seguimiento de tu evolución. Si es a domicilio, el equipo llega con camilla e insumos.',
  },
] as const

/** Las 4 áreas publicadas en su carta de servicios (horaclick). */
export const AREAS = [
  {
    area: 'Rehabilitación geriátrica',
    detalle: 'Su especialidad: adultos mayores que necesitan recuperar movilidad, fuerza e independencia sin salir de casa.',
    servicios: ['Rehabilitación geriátrica', 'Rehabilitación musculo-esquelética'],
    color: '#e8890c',
  },
  {
    area: 'Dolor y musculo-esquelético',
    detalle: 'Para contracturas, lesiones y dolor crónico.',
    servicios: ['Masoterapia', 'Ondas de choque'],
    color: '#6040a0',
  },
  {
    area: 'Terapias respiratorias',
    detalle: 'Apoyo respiratorio en casa, niños y adultos.',
    servicios: ['Nebulización y succión de secreciones', 'Terapias respiratorias'],
    color: '#0ea5a0',
  },
  {
    area: 'Infantil y estética',
    detalle: 'Neuro-rehabilitación infantil y tratamientos complementarios.',
    servicios: ['Neuro-rehabilitación infantil', 'Presoterapia', 'Área estética'],
    color: '#20a040',
  },
] as const

export const HORARIO = [
  ['Lunes', '8:30 – 20:00'],
  ['Martes a viernes', '8:30 – 20:30'],
  ['Sábado', '10:30 – 13:30'],
  ['Domingo', 'Cerrado'],
] as const

/** Reseñas reales de la ficha de Google (nombre + antigüedad). */
export const RESENAS = [
  {
    texto:
      'Excelente profesional y muy empática a la hora de atender a sus pacientes la srta. María Consuelo, recomendada 100%.',
    autor: 'Ivonne Toro',
    detalle: 'hace 1 año',
  },
  {
    texto:
      'Excelente servicio y atención. Muy profesional, con mucha empatía y siempre respondiendo cualquier duda que como mamá pueda surgir. También muy amorosa con mi bebé de 1 año. Recomendada total.',
    autor: 'Katherine Garrao',
    detalle: 'hace 1 año',
  },
  {
    texto:
      'Desde hace aproximadamente 1 mes mi abuela de 83 años, con múltiples comorbilidades, redujo su capacidad de movilizarse asociado a dolor intenso. Hemos recibido la atención de Nicolás desde la segunda semana, ha sido…',
    autor: 'Victoria Henríquez Jorquera',
    detalle: 'hace 1 año',
  },
  {
    texto:
      'Excelente profesional, amable y empática, me ha ayudado mucho en mi terapia. La recomiendo 100%.',
    autor: 'Marcela Chamorro Oyarce',
    detalle: 'hace 1 año',
  },
] as const
