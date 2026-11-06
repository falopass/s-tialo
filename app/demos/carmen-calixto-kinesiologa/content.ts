/**
 * app/demos/carmen-calixto-kinesiologa/content.ts
 *
 * Datos del mockup. REALES (verificados el 5-11-2026 en sus fuentes):
 * - Ficha de Google Maps "Carmen Calixto Kinesióloga": dirección
 *   Av. Pedro Montt 700, Valdivia; horario Lun 14:00–20:00,
 *   Mar cerrado, Mié 14:00–20:00, Jue 14:00–19:00, Vie 14:00–17:00,
 *   Sáb y Dom cerrado; 5,0 con 1 opinión. La cita de Angela O. es
 *   textual de su ficha. Frase de la ficha: "Kinesiología individual
 *   y personalizada en Valdivia."
 * - Instagram @kine.carmencalixto (bio y posts 2026): "Dolor crónico
 *   y Neurorehabilitación", "sesiones individuales de 1 hora", agenda
 *   por WhatsApp, evaluación inicial antes de tratar; se declara
 *   diplomada en Neurorehabilitación Adulto. Las listas de lo que
 *   atiende (ACV, Parkinson, esclerosis múltiple, nervios periféricos;
 *   espalda y cuello, artrosis y artritis, fibromialgia, hombro,
 *   fascitis plantar; masaje descontracturante y presoterapia) y las
 *   frases citadas salen de sus propias publicaciones.
 * - WhatsApp +56 9 4575 9367: su único contacto.
 * - "Mensaje de un paciente": texto que ella publicó, sin nombre.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y rótulos gráficos. Sin
 * precios (no publica vigentes) y sin promesas de resultado: es
 * salud, el copy usa "te ayuda a" / "trabajamos para", como ella.
 */
export const BIZ = {
  name: 'Carmen Calixto',
  fullName: 'Carmen Calixto H.',
  mapsName: 'Carmen Calixto Kinesióloga',
  rubro: 'Kinesióloga',
  credentials: 'Diplomada en Neurorehabilitación Adulto',
  focus: 'Dolor crónico y neurorehabilitación',
  address: 'Av. Pedro Montt 700',
  city: 'Valdivia',
  region: 'Los Ríos',
  phoneDisplay: '+56 9 4575 9367',
  phoneTel: '+56945759367',
  whatsapp: '56945759367',
  instagram: 'https://www.instagram.com/kine.carmencalixto/',
  instagramUser: '@kine.carmencalixto',
  rating: '5,0',
  ratingValue: 5.0,
  reviews: 1,
} as const

/** Horario real de su ficha de Google Maps. */
export const HORARIO: { d: string; h: string; cerrado?: boolean }[] = [
  { d: 'Lunes', h: '14:00–20:00' },
  { d: 'Martes', h: 'Cerrado', cerrado: true },
  { d: 'Miércoles', h: '14:00–20:00' },
  { d: 'Jueves', h: '14:00–19:00' },
  { d: 'Viernes', h: '14:00–17:00' },
  { d: 'Sábado', h: 'Cerrado', cerrado: true },
  { d: 'Domingo', h: 'Cerrado', cerrado: true },
]

export const WA_LINK =
  'https://wa.me/56945759367?text=Hola%20Carmen%2C%20vi%20tu%20p%C3%A1gina%20y%20quiero%20agendar%20una%20evaluaci%C3%B3n'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Carmen Calixto Kinesióloga, Av. Pedro Montt 700, Valdivia',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Pedro Montt 700, Valdivia, Chile',
)}&output=embed`

export const IMG = '/demos/carmen-calixto-kinesiologa'
