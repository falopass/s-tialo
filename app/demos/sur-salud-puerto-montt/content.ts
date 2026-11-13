/**
 * app/demos/sur-salud-puerto-montt/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps 13-11-2026 e Instagram
 * @sursaludpuerto): nombre (su logo dice "SurSalud, Centro de Ortodoncia
 * y Especialidades Dentales"), dirección Pedro Montt 160, Puerto Montt,
 * horario (lunes a viernes 9:00 a 18:30, sábado 9:00 a 13:30, domingo
 * cerrado), WhatsApp +56 9 5869 8414 (el mismo de la bio de Instagram),
 * Instagram, nota 5,0 con 35 opiniones en Google y las 3 citas
 * textuales con nombre. Los servicios son los de su bio: ortodoncia,
 * implantes, estética dental, blanqueamiento, tratamiento de caries y
 * cuidado de encías (gingivitis). Lema de la bio: "Servicios
 * odontológicos con alta calidad técnica y humana".
 * NO hay: precios, convenios, nombres de profesionales ni años de
 * experiencia; no se muestran.
 */

export const BIZ = {
  name: 'Sur Salud Puerto Montt',
  short: 'Sur Salud',
  rubro: 'Centro de Ortodoncia y Especialidades Dentales',
  address: 'Pedro Montt 160',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 5869 8414',
  whatsapp: '56958698414',
  instagram: 'sursaludpuerto',
  instagramUrl: 'https://www.instagram.com/sursaludpuerto/',
  lema: 'Servicios odontológicos con alta calidad técnica y humana',
  rating: '5,0',
  ratingValue: 5,
  reviews: 35,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Sur Salud, quiero agendar una hora',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Sur Salud Puerto Montt, Pedro Montt 160, Puerto Montt, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sur Salud Puerto Montt, Pedro Montt 160, Puerto Montt, Chile',
)}&output=embed`

export const HORARIO = [
  { d: 'Lunes a viernes', h: '9:00 a 18:30' },
  { d: 'Sábado', h: '9:00 a 13:30' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

export const OPINIONES = [
  {
    text: 'Muy buena experiencia en esta clínica dental. Los doctores destacan por su profesionalismo, dedicación y excelente atención. Brindan un servicio de calidad y hacen que uno se sienta cómodo y en confianza.',
    author: 'Dayli Valencia',
  },
  {
    text: 'Muy recomendada, llevo 4 años atendiéndome con la Dra Lorena y no hace doler, excelente profesional. Además la atención es súper buena desde la recepción.',
    author: 'Pia Guerrero',
  },
  {
    text: 'Excelente atención, el lugar es muy acogedor y son realmente muy preocupados con sus pacientes! Muy recomendado.',
    author: 'Javiera Maldonado',
  },
] as const

export const IMG = '/demos/sur-salud-puerto-montt'
