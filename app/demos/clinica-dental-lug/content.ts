/**
 * app/demos/clinica-dental-lug/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps verificada el 9-11-2026):
 * - Nombre: «Clínica Dental Lüg» (su logo escribe LÜG con diéresis, que
 *   forman los ojos de una cara sonriente; en Maps figura «Clínica Dental Lug»).
 * - Dirección: Egaña 931, Puerto Montt.
 * - Horario: lunes a viernes 9:00 a 20:00, sábado 9:00 a 14:00, domingo cerrado.
 * - WhatsApp +56 9 4957 5300 (también aparece en su letrero).
 * - Reputación: 5,0 con 56 opiniones en Google. Las cuatro citas de
 *   REVIEWS son textuales, con nombre e inicial del apellido.
 * - Texto del propietario en Maps (base de la sección de prótesis):
 *   «Las prótesis dentales pueden ayudar a recuperar función, estética y
 *   confianza al sonreír. En Clínica Dental LÜG evaluamos cada caso de forma
 *   personalizada para definir la alternativa más adecuada según las
 *   necesidades del paciente, explicando cada etapa con claridad. Nuestro
 *   objetivo es que cada persona entienda su tratamiento y pueda avanzar
 *   con tranquilidad.»
 * - Oferta: prótesis dentales (texto del propietario), ortodoncia (reseña de
 *   Karla C.), escáner intraoral y planificación digital en pantalla (fotos),
 *   radiografías revisadas junto al paciente (foto) y evaluación como puerta
 *   de entrada. Sin precios, sin convenios, sin promesas clínicas.
 * - Redes: no confirmadas; no se muestran.
 * - Fotos: todas de su ficha de Google Maps, en public/demos/clinica-dental-lug/.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, rótulos y descripciones breves que
 * enlazan los datos reales. Nada clínico más allá de lo que declara el
 * propietario.
 */

export const BIZ = {
  name: 'Clínica Dental Lüg',
  brand: 'LÜG',
  rubro: 'Clínica dental',
  address: 'Egaña 931',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 4957 5300',
  phoneTel: '+56949575300',
  whatsapp: '56949575300',
  rating: '5,0',
  ratingValue: 5.0,
  reviews: 56,
} as const

export const WA_LINK =
  'https://wa.me/56949575300?text=Hola%20Cl%C3%ADnica%20L%C3%BCg%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Dental Lug, Egaña 931, Puerto Montt, Los Lagos, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Egaña 931, Puerto Montt, Los Lagos, Chile',
)}&output=embed`

/** Horario real de su ficha de Google Maps. */
export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '9:00 a 20:00' },
  { dias: 'Sábado', horas: '9:00 a 14:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
] as const

/** Los pasos de la atención, su sello: explicar cada etapa con claridad. */
export const PASOS = [
  {
    num: '01',
    title: 'Evaluación',
    desc: 'La puerta de entrada: revisamos tu caso de forma personalizada antes de proponer nada.',
  },
  {
    num: '02',
    title: 'Tu radiografía, en pantalla',
    desc: 'Vemos juntos tus radiografías y te explicamos qué muestran, con calma y sin lenguaje críptico.',
  },
  {
    num: '03',
    title: 'Plan a tu medida',
    desc: 'Definimos la alternativa más adecuada según tus necesidades, con cada etapa clara antes de empezar.',
  },
  {
    num: '04',
    title: 'Tratamiento con tranquilidad',
    desc: 'Avanzas entendiendo qué viene en cada visita, con tecnología digital como el escáner intraoral.',
  },
] as const

/** Lo que trabajan, según su ficha, sus reseñas y sus fotos. */
export const SERVICIOS = [
  {
    name: 'Evaluación personalizada',
    desc: 'Todo tratamiento parte aquí: entender tu caso y explicarte las alternativas.',
  },
  {
    name: 'Prótesis dentales',
    desc: 'Pueden ayudar a recuperar función, estética y confianza al sonreír.',
  },
  {
    name: 'Ortodoncia',
    desc: 'Alineación con avances revisados contigo, etapa por etapa.',
  },
  {
    name: 'Tecnología digital',
    desc: 'Escáner intraoral, modelo 3D en pantalla y radiografías explicadas en el momento.',
  },
] as const

/** Palabras del propietario en su ficha de Google Maps, casi textuales. */
export const PROTESIS_TEXTO =
  'Las prótesis dentales pueden ayudar a recuperar función, estética y confianza al sonreír. En Clínica Dental LÜG evaluamos cada caso de forma personalizada para definir la alternativa más adecuada según las necesidades del paciente, explicando cada etapa con claridad. Nuestro objetivo es que cada persona entienda su tratamiento y pueda avanzar con tranquilidad.'

/** Opiniones textuales de Google (5,0 con 56 opiniones), con nombre e inicial. */
export const REVIEWS = [
  {
    text: 'El ambiente y sus profesionales son increíbles. Con respecto a mi progreso en mi ortodoncia estoy muy feliz y satisfecha con los resultados. Todo excelente.',
    author: 'Karla C.',
  },
  {
    text: 'Antes de atenderme con un dentista, busco calidad de personas, y en esta clínica hay de sobra eso, profesionales empáticos, gente con real preocupación por mejorar tu sonrisa.',
    author: 'Héctor C.',
  },
  {
    text: 'Atención de primer nivel. Un profesional cercano y preocupado, pendiente en todo momento de la atención para que estés con el mínimo dolor posible y sin incomodidades.',
    author: 'Nicole V.',
  },
] as const

/** La cita de Tamara P. abre la sección para quien le tiene miedo al dentista. */
export const REVIEW_TAMARA = {
  text: 'Uno de mis miedos, producto de malas experiencias anteriores, es precisamente la visita al dentista. Sin duda alguna, la clínica Lug y sus profesionales vinieron a derribar traumas al respecto.',
  author: 'Tamara P.',
} as const

export const IMG = '/demos/clinica-dental-lug'
