/**
 * app/demos/experiencia-bliss/content.ts
 *
 * Datos del mockup. REALES (verificados el 6-11-2026 en fuentes del
 * propio negocio):
 * - Ficha de Google Maps «Clínica dental Experiencia Bliss»: dirección
 *   Marina de Chile 2889, depto. 6, Concepción; horario lunes a viernes
 *   9:30–20:30, sábado y domingo 10:30–14:00; 5,0 con 174 opiniones.
 *   Las tres citas de OPINIONES son textuales, con nombre e inicial.
 * - Texto del propietario en su ficha (la base de la sección de
 *   sedación): «La sedación consciente busca favorecer una experiencia
 *   más tranquila y cómoda… no se trata solamente de la sedación. Se
 *   trata de escuchar al paciente, entender sus preocupaciones y
 *   acompañarlo durante todo el proceso.»
 * - Instagram @experienciabliss: bio «Cultura de prevención eliminando
 *   el miedo al dentista», lema «Prevención es Bliss.» / «Vive la
 *   Experiencia Bliss.» Los servicios (odontopediatría, ortodoncia
 *   interceptiva y brackets, limpieza y destartraje, blanqueamiento
 *   previa evaluación, caries y pulpotomía en dientes de leche,
 *   extracciones y muelas del juicio, terapia miofuncional y sedación
 *   consciente con óxido nitroso) salen de su ficha y sus posts, igual
 *   que las frases «Los dientes de leche sí importan… y mucho.» y
 *   «La ortodoncia interceptiva permite detectar y corregir problemas
 *   a tiempo.»
 * - WhatsApp +56 9 7187 9378 (su único contacto) y agenda online por
 *   Dentalink (botón «Agenda online» de su perfil).
 * - Fotos: las de public/demos/experiencia-bliss/, publicadas por el
 *   negocio (mascota propia incluida).
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y rótulos. Sin precios y sin
 * promesas de resultado: es salud, el copy usa «buscamos» / «te
 * acompañamos», como ellos.
 */
export const BIZ = {
  name: 'Experiencia Bliss',
  brand: 'Bliss Dent',
  mapsName: 'Clínica dental Experiencia Bliss',
  rubro: 'Clínica dental',
  slogan: 'Prevención es Bliss.',
  bio: 'Cultura de prevención eliminando el miedo al dentista',
  address: 'Marina de Chile 2889, depto. 6',
  city: 'Concepción',
  region: 'Biobío',
  phoneDisplay: '+56 9 7187 9378',
  phoneTel: '+56971879378',
  whatsapp: '56971879378',
  instagram: 'https://www.instagram.com/experienciabliss/',
  instagramUser: '@experienciabliss',
  booking: 'https://agendamiento.softwaredentalink.com/agendas/agendamiento',
  rating: '5,0',
  ratingValue: 5.0,
  reviews: 174,
} as const

export const WA_LINK =
  'https://wa.me/56971879378?text=Hola%20Experiencia%20Bliss%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica dental Experiencia Bliss, Marina de Chile 2889, Concepción',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Marina de Chile 2889, Concepción, Chile',
)}&output=embed`

/** Horario real de su ficha de Google Maps. */
export const HORARIO = [
  { d: 'Lunes a viernes', h: '9:30–20:30' },
  { d: 'Sábado y domingo', h: '10:30–14:00' },
] as const

/** Lo que más se repite en sus opiniones de Google. */
export const SELLOS = [
  'Paciencia con niños y adultos',
  'Te explican todo con calma',
  'Trato empático y cercano',
] as const

/** Opiniones textuales de Google (5,0 con 174 opiniones). */
export const OPINIONES = [
  {
    text: 'Excelente atención. Sumamente personalizada. Mariela un amor. Muy atenta, preocupada. Sólo vine por una evaluación. Pero me voy feliz con la atención.',
    author: 'Karina L.',
  },
  {
    text: 'dentro de la consulta dejo que mi hijo mirara bingo y bluey, reviso con camarita los dientes. me encantó todo sobretodo su amabilidad',
    author: 'Soledad U.',
  },
  {
    text: 'La atención puntual, me voy contenta con la atención, me explico todo muy claro',
    author: 'Maribel G.',
  },
] as const

export const IMG = '/demos/experiencia-bliss'
