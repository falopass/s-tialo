/**
 * app/demos/promax-servicio-tecnico-talca/content.ts
 *
 * Datos REALES verificados en Google Maps e Instagram (@promax.ste):
 * nombre, dirección, teléfono, horario, rating y reseñas.
 */

export const BIZ = {
  name: 'Promax Servicio Técnico de Celulares',
  short: 'Promax',
  address: '2 Oriente esquina 1 Sur, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4283 5329',
  phoneTel: '+56942835329',
  whatsapp: '56942835329',
  instagram: 'promax.ste',
  rating: 4.9,
  ratingLabel: '4,9',
  reviews: 49,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Promax, necesito un servicio técnico para mi celular',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Promax Servicio Técnico de celulares, 2 Oriente esquina 1 Sur, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Promax Servicio Técnico de celulares, 2 Oriente esquina 1 Sur, Talca, Chile',
)}&output=embed`

export const HOURS = [
  { d: 'Lunes a viernes', h: '9:00 - 21:00' },
  { d: 'Sábado', h: '9:00 - 15:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

export const REVIEWS = [
  {
    name: 'Claudia Muñoz',
    txt: 'Excelente atención, personal atento y con mucha experiencia. Arreglaron el celular de mi hijo en menos de 1 hora y cobran lo justo. Lo recomiendo 100%.',
    when: 'Hace 4 meses',
  },
  {
    name: 'Deny Concha',
    txt: 'Atención 10/10, siempre preocupados de informar de manera clara. Lo más importante: no te inventan problemas que quizá tu equipo no tiene. Confiables.',
    when: 'Hace 3 meses',
  },
  {
    name: 'Rossana Sandrini',
    txt: 'Informan de manera clara todo el proceso y cada intervención que realizan en el equipo, lo que da mucha confianza. Responsables con los tiempos comprometidos.',
    when: 'Hace 5 meses',
  },
  {
    name: 'Fernando Montecinos',
    txt: 'Llevé mi celular para cambiar la pantalla y la experiencia fue 10/10. Muy atentos, claros con la información y el tiempo de entrega se cumplió tal cual lo prometieron.',
    when: 'Hace 6 meses',
  },
] as const
