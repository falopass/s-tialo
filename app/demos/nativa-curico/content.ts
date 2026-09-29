/**
 * app/demos/nativa-curico/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + Instagram):
 * nombre, dirección (Torre Carmen, Carmen 775 Ofi. 304), nota 5,0 en
 * 10 reseñas de Google con los textos reales citados abajo, el Instagram
 * @nativa.curico, el WhatsApp y las fotos (tratamientos, equipo HIFU,
 * productos y logo). Los nombres Natalia y Valentina salen de las reseñas.
 * Precios y horarios no están publicados: se omiten.
 */

export const BIZ = {
  name: 'Nativa Curicó',
  short: 'NATIVA',
  rubro: 'Estética avanzada',
  address: 'Torre Carmen · Carmen 775, Ofi. 304',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9810 5749',
  phoneTel: '+56998105749',
  whatsapp: '56998105749',
  rating: 5.0,
  ratingLabel: '5,0',
  reviews: 10,
  instagram: 'nativa.curico',
  instagramFollowers: '4.033',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Nativa, vi su sitio web y quiero reservar una hora',
)}`

export const WA_LINK_EVAL = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Nativa, quiero consultar por una evaluación de mi piel',
)}`

export const IG_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Nativa Curicó, Carmen 775, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Torre Carmen, Carmen 775, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/nativa-curico'

/** Servicios reales según sus publicaciones (HIFU 25D, depilación,
 * corporales reductivos y mesoterapia facial Pink Glow). */
export const SERVICIOS = [
  {
    n: '01',
    src: `${IMG}/equipo.webp`,
    alt: 'Equipo de tratamiento corporal de Nativa aplicado sobre la piel',
    tag: 'Tecnología',
    name: 'HIFU 25D',
    desc: 'Ultrasonido focalizado que reafirma y tensa la piel, estimulando colágeno y elastina. Define el rostro y los resultados se notan desde la primera sesión.',
  },
  {
    n: '02',
    src: `${IMG}/axila.webp`,
    alt: 'Antes y después de depilación en Nativa Curicó',
    tag: 'Definitiva',
    name: 'Depilación',
    desc: 'Sesiones con tecnología de última generación para despedirte del vello en rostro y cuerpo, con seguimiento sesión a sesión.',
  },
  {
    n: '03',
    src: `${IMG}/abdomen.webp`,
    alt: 'Antes y después de tratamiento reductivo abdominal en Nativa',
    tag: 'Corporal',
    name: 'Tratamientos reductivos',
    desc: 'Protocolos corporales con aparatología y productos profesionales. El progreso se registra con fotos, como muestran en su propio Instagram.',
  },
  {
    n: '04',
    src: `${IMG}/producto.webp`,
    alt: 'Kit de mesoterapia facial Pink Glow usado en Nativa Curicó',
    tag: 'Facial',
    name: 'Mesoterapia y faciales',
    desc: 'Mesoterapia con activos profesionales (Pink Glow) y limpiezas faciales según tu tipo de piel, con plan de cuidado para la casa.',
  },
]

/** Antes/después reales publicados por Nativa en su ficha de Google. */
export const RESULTADOS = [
  { src: `${IMG}/dias.webp`, alt: 'Registro de abdomen día 1, día 45 y día 100 en Nativa' },
  { src: `${IMG}/perfil.webp`, alt: 'Antes y después de perfil facial en Nativa Curicó' },
  { src: `${IMG}/axila.webp`, alt: 'Antes y después de depilación de axila en Nativa' },
]

/** Reseñas reales de la ficha de Google (5,0 · 10 reseñas). */
export const REVIEWS = [
  {
    text: 'Excelente experiencia. Todo muy limpio y ordenado. La chica que atiende es muy empática, profesional y genera mucha confianza desde el primer momento. Me sentí muy cómoda durante todo el proceso.',
    author: 'Daniela Pinto',
    when: 'hace 7 meses',
  },
  {
    text: 'Si quieren ser la envidia de todas, visiten Nativa, lo mejor en Curicó. Un lugar acogedor, con lo necesario para cada tratamiento y atención 100% profesional.',
    author: 'Pamela Cerda',
    when: 'hace 8 meses',
  },
  {
    text: 'Excelente atención tanto de Natalia como Valentina, muy profesionales en los servicios que prestan.',
    author: 'Karina Hevia',
    when: 'hace 8 meses',
  },
  {
    text: 'Me gustó mucho que puedes reagendar en caso de no poder asistir a tu cita. Volveré a realizarme otros procedimientos.',
    author: 'Valescka Morales',
    when: 'hace 8 meses',
  },
]
