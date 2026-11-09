/**
 * app/demos/kinesiologa-viktoria-asencio/content.ts
 *
 * Datos del mockup. REALES (verificados el 9-11-2026 en la ficha de
 * Google Maps y en el mensaje de bienvenida de su propio WhatsApp):
 * - Nombre y rótulo: «Kinesióloga Viktoria Asencio. Especialista en
 *   piso pélvico y oncología». (Google Maps)
 * - Cómo se presenta ella (su mensaje de WhatsApp, textual): «Soy
 *   Viktoria Asencio, kinesióloga dedicada a la salud de la mujer,
 *   rehabilitación de piso pélvico y oncología de mama.»
 * - Atiende en Clínica Nueva Austria, San Martín 706, Villarrica.
 *   (Google Maps y su mensaje)
 * - Horario (Google Maps): lunes 8:45 a 19:00, miércoles 8:45 a 19:00,
 *   sábado 8:45 a 12:30; martes, jueves, viernes y domingo cerrado.
 * - Sesiones de 45 minutos. Atiende particular y Fonasa. (su mensaje)
 * - WhatsApp +56 9 6287 5415. Reputación: 5,0 con 29 opiniones en
 *   Google. Las cuatro citas de REVIEWS son textuales, con nombre e
 *   inicial del apellido. (Google Maps)
 * - Las cinco áreas de atención de AREAS son textuales de su mensaje.
 * - Redes sociales: no confirmadas; no se muestran.
 * - Fotos: de su ficha de Google Maps, en
 *   public/demos/kinesiologa-viktoria-asencio/. Las personas que
 *   aparecen atendidas no se nombran.
 *
 * TEXTO DE EJEMPLO: titulares, rótulos, bajadas y líneas de contexto
 * que enlazan sus frases. Sin precios, sin claims clínicos.
 */

export const BIZ = {
  name: 'Viktoria Asencio',
  brand: 'Kinesióloga Viktoria Asencio',
  rubro: 'Kinesiología · piso pélvico y oncología de mama',
  tagline: 'Especialista en piso pélvico y oncología',
  clinic: 'Clínica Nueva Austria',
  address: 'San Martín 706',
  city: 'Villarrica',
  region: 'La Araucanía',
  phoneDisplay: '+56 9 6287 5415',
  phoneTel: '+56962875415',
  whatsapp: '56962875415',
  rating: '5,0',
  ratingValue: 5.0,
  reviews: 29,
} as const

export const WA_LINK =
  'https://wa.me/56962875415?text=Hola%20Viktoria%2C%20quiero%20agendar%20una%20sesi%C3%B3n'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Nueva Austria, San Martín 706, Villarrica',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'San Martín 706, Villarrica',
)}&output=embed`

/** Horario real de su ficha de Google Maps. */
export const HORARIO = [
  { dias: 'Lunes', horas: '8:45 a 19:00' },
  { dias: 'Miércoles', horas: '8:45 a 19:00' },
  { dias: 'Sábado', horas: '8:45 a 12:30' },
  { dias: 'Martes, jueves, viernes y domingo', horas: 'Cerrado' },
] as const

/** Las cinco áreas de atención, textuales de su mensaje, con una línea
    de contexto cada una (sin claims clínicos). */
export const AREAS = [
  {
    n: '01',
    name: 'Embarazo y preparación para el parto',
    desc: 'Acompañamiento durante el embarazo y preparación del cuerpo para el parto.',
  },
  {
    n: '02',
    name: 'Recuperación postparto y diástasis abdominal',
    desc: 'Recuperación después del parto, con foco en el abdomen y el piso pélvico.',
  },
  {
    n: '03',
    name: 'Incontinencia urinaria y prolapsos',
    desc: 'Evaluación y trabajo guiado para la incontinencia urinaria y los prolapsos.',
  },
  {
    n: '04',
    name: 'Dolor pélvico y disfunciones sexuales',
    desc: 'Un espacio seguro para hablar de dolor pélvico y disfunciones sexuales.',
  },
  {
    n: '05',
    name: 'Rehabilitación oncológica de mama',
    desc: 'Rehabilitación en cada etapa del tratamiento oncológico de mama.',
  },
] as const

/** Su frase de presentación, textual de su mensaje de WhatsApp. */
export const PRESENTACION =
  'Soy Viktoria Asencio, kinesióloga dedicada a la salud de la mujer, rehabilitación de piso pélvico y oncología de mama.'

/** Datos de la sesión (su mensaje: 45 minutos, particular y Fonasa;
    el ambiente cómodo sale de sus reseñas). */
export const SESION = [
  { big: '45 minutos', small: 'dura cada sesión' },
  { big: 'Particular y Fonasa', small: 'las dos modalidades de atención' },
  { big: 'Un espacio cómodo', small: 'lo que más repiten sus pacientes' },
] as const

/** Opiniones textuales de Google (5,0 con 29 opiniones). */
export const REVIEWS = [
  {
    text: 'Viktoria es muy profesional y muy actualizada en todos los temas referentes a piso pélvico. Me sentí súper cómoda en todas las consultas que además son súper entretenidas! (además de eficaces que es lo más importante). La recomiendo 100%.',
    author: 'Denisse C.',
  },
  {
    text: 'Quiero recomendar sinceramente a mi kinesióloga de piso pélvico. Desde el primer momento me hizo sentir muy cómoda, escuchada y tranquila. Es muy cercana, amable y transmite mucha confianza.',
    author: 'Bianca C.',
  },
  {
    text: 'Muy buena experiencia con Viktoria. Es una profesional muy cercana, amable y que transmite mucha confianza desde el primer momento. Se nota que tiene mucho conocimiento y experiencia en el área de suelo pélvico.',
    author: 'Daniela R.',
  },
  {
    text: 'Excelente kinesióloga! Atendimos a mi abuelita con ella y quedamos súper conformes con su atención, destacamos como familia enormemente su calidad humana y profesionalismo.',
    author: 'Alexandra B.',
  },
] as const

export const IMG = '/demos/kinesiologa-viktoria-asencio'
