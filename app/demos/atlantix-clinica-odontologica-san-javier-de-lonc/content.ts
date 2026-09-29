/**
 * app/demos/atlantix-clinica-odontologica-san-javier-de-lonc/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, Instagram
 * @clinicaatlantix y su agenda pública en AgendaPro): nombre, dirección,
 * 4,8 estrellas en 58 reseñas con citas reales, WhatsApp, horarios y la
 * lista de servicios publicada (afiche + agenda online). El titular del
 * hero es el eslogan pintado en su propia vitrina. Las fotos son reales:
 * fachada y letreros de Maps; mural del logo en la pared, ortodoncia,
 * carillas y restauraciones de su IG (@clinicaatlantix).
 */

export const BIZ = {
  name: 'Atlantix Clínica Odontológica',
  short: 'Atlantix',
  rubro: 'Clínica dental',
  address: 'Sgto. Aldea 2610',
  city: 'San Javier de Loncomilla',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 2014 8665',
  phoneTel: '+56920148665',
  whatsapp: '56920148665',
  instagram: 'clinicaatlantix',
  instagramFollowers: '1.649',
  instagramUrl: 'https://instagram.com/clinicaatlantix',
  rating: 4.8,
  ratingLabel: '4,8',
  reviews: 58,
} as const

/** Eslogan pintado en la vitrina del local (visible en las fotos). */
export const SLOGAN = 'La sonrisa es el mensaje más potente que existe'

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Atlantix Clínica Odontológica y quiero agendar una hora',
)}`

export const WA_LINK_EVAL = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Atlantix Clínica Odontológica y quiero consultar por una evaluación',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Atlantix Clinica Odontologica, Sgto. Aldea 2610, San Javier de Loncomilla, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sgto. Aldea 2610, San Javier de Loncomilla, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/atlantix-clinica-odontologica-san-javier-de-lonc'

/** Los 6 del afiche difundido por la clínica en sus redes. */
export const SERVICIOS_AFICHE = [
  'Limpieza dental',
  'Tapaduras',
  'Extracciones',
  'Ortodoncia',
  'Ortopedia maxilar',
  'Periodoncia',
] as const

/** Los que figuran además en su agenda online de AgendaPro. */
export const SERVICIOS_AGENDA = [
  'Blanqueamiento',
  'Implantes',
  'Endodoncia',
  'Odontopediatría',
  'Prótesis dentales',
  'Carillas',
  'Restauraciones',
  'Cirugía oral',
  'Radiografías',
] as const

/** Horario real de su agenda pública en AgendaPro. */
export const HORARIO = [
  { days: 'Lunes a viernes', time: '10:00–19:00' },
  { days: 'Sábado', time: '10:00–14:00' },
  { days: 'Domingo', time: 'Cerrado' },
] as const

/** Reseñas reales citadas desde la ficha pública de Google Maps. */
export const REVIEWS = [
  {
    author: 'Anita Gloria',
    when: 'hace un año',
    text: 'Estuvimos años deambulando por todos los dentistas del país hasta que encontramos a los mejores, son geniales, además son una pareja de doctores que trabajan siempre a la par y obviamente con el cuidado para que sus pacientes no sufran ningún dolor.',
  },
  {
    author: 'Julio Mena Muñoz',
    when: 'hace un año',
    text: 'Excelente la atención de Alejandra, muy preocupada siempre que estemos informados con antelación de nuestra hora y día de atención.',
  },
  {
    author: 'Él NICHE',
    when: 'hace un año',
    text: 'Una excelente atención en recepción, el lugar es muy bonito, tienen la mejor atención en San Javier, muy recomendable para cuidar tus dientes.',
  },
  {
    author: 'Nasho Vera',
    when: 'hace 8 meses',
    text: 'Recomendados al 100%. Excelente calidad y buenos precios.',
  },
] as const
