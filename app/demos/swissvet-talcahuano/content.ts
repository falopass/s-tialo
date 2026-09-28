/**
 * Datos verificados — SwissVet Talcahuano.
 * Fuentes: ficha de Google Maps (Claudio Gay 3848, +56 41 264 9143,
 * 4,7 con 48 reseñas, horario), letrero del local (lista de servicios)
 * y reseñas reales en español.
 */

export const BIZ = {
  name: 'SwissVet Talcahuano',
  short: 'SwissVet',
  rubro: 'Veterinaria y peluquería',
  tag: 'Clínica veterinaria',
  address: 'Claudio Gay 3848',
  city: 'Talcahuano',
  phoneDisplay: '+56 41 264 9143',
  phoneTel: '+56412649143',
  rating: 4.7,
  ratingDisplay: '4,7',
  reviews: '48',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL =
  'https://www.google.com/maps/place/SwissVet+Talcahuano/@-36.75012,-73.0849131,17z/data=!3m1!4b1!4m6!3m5!1s0x96684b48b660a615:0x2dfd1857fb1d4e3!8m2!3d-36.75012!4d-73.0849131!16s%2Fg%2F11rtdgp4c3'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=SwissVet+Talcahuano,+Claudio+Gay+3848,+Talcahuano&output=embed'

export const IMG = '/demos/swissvet-talcahuano'

export const HOURS = [
  { d: 'Lunes a viernes', h: '10:00 a 20:00' },
  { d: 'Sábado', h: '10:00 a 19:00' },
] as const

/** Servicios leídos del letrero del local. */
export const SERVICIOS = [
  { id: '01', name: 'Consulta veterinaria', note: 'Atención clínica de perros y gatos.' },
  { id: '02', name: 'Cirugías', note: 'Procedimientos quirúrgicos programados.' },
  { id: '03', name: 'Exámenes complementarios', note: 'Apoyo diagnóstico en el mismo local.' },
  { id: '04', name: 'Farmacia veterinaria', note: 'Venta de medicamentos en el local.' },
  { id: '05', name: 'Salud dental', note: 'Higiene y tratamiento dental.' },
  { id: '06', name: 'Peluquería', note: 'Corte y baño para tu mascota.' },
  { id: '07', name: 'Alimentos', note: 'Alimento de buena gama y accesorios.' },
] as const

/** Profesionales que los clientes nombran en las reseñas de Google. */
export const EQUIPO = [
  { name: 'Dra. Javiera Ramírez', role: 'Nombrada por su dedicación y paciencia' },
  { name: 'Dr. Javier Vargas', role: 'Nombrado por su vocación y su equipo' },
  { name: 'Mauricio Mora', role: 'Nombrado por su trato claro y respetuoso' },
] as const

export const REVIEWS = [
  {
    name: 'Yohana Cuevas',
    text: 'Destaco la atención del lugar, especialmente por parte del profesional Mauricio Mora, quien ha demostrado un alto nivel de compromiso, dedicación y sensibilidad en el trato con mi perrita.',
  },
  {
    name: 'Camila Urra',
    text: 'Muy buena clínica, agradezco lo dedicado que son sus profesionales. Destacar a la Dra. Javiera Ramírez por su dedicación y paciencia con mis perritos, volvería sin dudarlo.',
  },
  {
    name: 'Marcela Rivera',
    text: 'Increíble la vocación de los profesionales a cargo. Agradezco profundamente la atención del vet Javier Vargas y su equipo. Recomiendo esta veterinaria 100%.',
  },
] as const
