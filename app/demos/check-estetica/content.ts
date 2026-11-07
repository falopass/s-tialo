/**
 * app/demos/check-estetica/content.ts
 *
 * Datos del mockup. REALES (verificados el 7-11-2026 en la ficha de
 * Google Maps «CHECK ESTÉTICA» y en Instagram @check_estetica):
 * - Nombre «Check Estética Integral» (su logo dice «CHECK, Estética
 *   Integral» con una silueta humana estilizada).
 * - Dirección Av. San Sebastián 956, local 7, segundo piso, strip center
 *   Boulevard Aromo, Lomas de San Sebastián, Concepción: ficha de Maps.
 * - Horario de atención (Maps): lunes a viernes 10:00-20:00, sábado
 *   10:00-14:00, domingo cerrado. Atención administrativa y telefónica
 *   11:00-18:00: publicación de la clínica.
 * - WhatsApp +56 9 7731 1835 e Instagram @check_estetica (más de 19 mil
 *   seguidores): perfil de Instagram.
 * - 4,5 con 42 opiniones en Google; las citas de Inostroza C. y Stephy A.
 *   son textuales de esa ficha.
 * - Tratamientos y programas (HIFU facial con ultrasonido focalizado y 3
 *   cabezales, sesiones de cerca de una hora; toxina botulínica con
 *   Dysport®; hilos tensores de tracción; protocolo Renew con láser CO₂
 *   fraccionado + mesoterapia con vitaminas + Hollywood Peel; ácido
 *   hialurónico; scanner facial con recomendación de skincare; HIFU
 *   íntimo; láser CO₂ fraccionado íntimo; EMS de piso pélvico; Cintura
 *   Check 360°, programa de moldeamiento de 4 semanas con yesoterapia +
 *   drenaje linfático + EMS escultura; depilación Tri Láser también para
 *   hombres; evaluación online previa; jornadas de bienestar para
 *   empresas; arriendo de box de procedimientos con resolución sanitaria
 *   SEREMI): publicaciones propias de la clínica.
 * - Frases de la clínica («En estética, cada detalle cuenta...», «Tu
 *   evaluación es el primer paso.», «Puedes realizar una evaluación
 *   online previa.»): sus publicaciones.
 * DE MUESTRA: titulares de sección, bajadas y textos de apoyo.
 */

export const BIZ = {
  name: 'Check Estética Integral',
  short: 'Check',
  rubro: 'Estética integral',
  address: 'Av. San Sebastián 956, local 7',
  addressExtra: 'Segundo piso · Strip center Boulevard Aromo',
  sector: 'Lomas de San Sebastián',
  city: 'Concepción',
  region: 'Región del Biobío',
  phoneDisplay: '+56 9 7731 1835',
  phoneTel: '+56977311835',
  whatsapp: '56977311835',
  rating: '4,5',
  ratingValue: 4.5,
  reviews: 42,
  instagram: 'https://www.instagram.com/check_estetica/',
  igHandle: '@check_estetica',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Check Estética, quiero agendar una evaluación',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Check Estética, Av. San Sebastián 956, Concepción, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. San Sebastián 956, Concepción, Chile',
)}&output=embed`

export const IMG = '/demos/check-estetica'

export const HORARIO = [
  { d: 'Lunes a viernes', h: '10:00–20:00' },
  { d: 'Sábado', h: '10:00–14:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

export const REVIEWS = [
  {
    text: 'La atención es excelente, desde que ingresas hasta las profesionales que atienden; particularmente, la recepcionista es muy afable en el trato ya sea en persona como en la comunicación permanente que tiene a través de wsp.',
    author: 'Inostroza C.',
    fuente: 'Reseña de Google',
  },
  {
    text: '¡100% recomendada! Responsabilidad, confianza y, sobre todo, soluciones para esas pequeñas fijaciones que nos dicen: “¡Arréglame!”',
    author: 'Stephy A.',
    fuente: 'Reseña de Google',
  },
] as const
