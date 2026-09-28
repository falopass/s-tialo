/**
 * app/demos/psicologa-maria-ignacia-flores-talca/content.ts
 *
 * Datos del mockup. REALES: ficha de Google Maps ("Psicóloga Clínica
 * María Ignacia Flores", 30 Oriente 4 1/2 Norte — Centro Las Rastras
 * III #1562, piso 5 oficina 512, Talca; teléfono +56 9 7529 5465;
 * rating 5,0 con 20 opiniones; horario lun–vie, fin de semana
 * cerrado), su perfil de Doctoralia ("Ps. María Ignacia Flores
 * Inostroza", psicóloga clínica UCM, Núm. Colegiado 624264, consulta
 * particular desde 2021, atiende adultos y mujeres jóvenes desde los
 * 12 años) e Instagram @nachitaflores. Las reseñas citadas son textos
 * reales de Google, todas 5 estrellas.
 */

export const BIZ = {
  name: 'María Ignacia Flores',
  nameLegal: 'Ps. María Ignacia Flores Inostroza',
  rubro: 'Psicóloga clínica',
  address: 'Centro Las Rastras III #1562, piso 5 of. 512',
  addressCalle: '30 Oriente 4 1/2 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7529 5465',
  phoneTel: '+56975295465',
  whatsapp: '56975295465',
  rating: 5.0,
  ratingLabel: '5,0',
  reviews: 20,
  instagram: 'https://www.instagram.com/nachitaflores/',
  doctoralia: 'https://www.doctoralia.cl/maria-ignacia-flores-inostroza/psicologo/talca',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola María Ignacia, quisiera consultar por una primera sesión',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Centro Las Rastras III, 30 Oriente, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro Las Rastras III 1562, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/psicologa-maria-ignacia-flores-talca'

/** Temas confirmados por su bio de Doctoralia */
export const TEMAS = [
  {
    tema: 'Ansiedad y crisis emocionales',
    detalle: 'Cuando la cabeza no para y el cuerpo lo siente.',
  },
  {
    tema: 'Depresión',
    detalle: 'Procesos que quitan fuerza y sentido, acompañados sin juicio.',
  },
  {
    tema: 'Autoestima',
    detalle: 'Volver a mirarte con respeto y a ponerte límites con otros.',
  },
  {
    tema: 'Duelos afectivos',
    detalle: 'Rupturas, pérdidas y despedidas que todavía pesan.',
  },
  {
    tema: 'Relaciones interpersonales',
    detalle: 'Vínculos que repiten el mismo dolor o la misma distancia.',
  },
] as const

/** Bio real, extraída de su presentación en Doctoralia */
export const BIO = {
  quote: 'Hablar con alguien que te acompaña de verdad',
  cuerpo:
    'Psicóloga clínica titulada de la Universidad Católica del Maule, con experiencia en el área pública y privada. Desde 2021 atiende en su consulta particular, con un enfoque cercano, humano y respetuoso de cada historia personal. Hoy acompaña principalmente a adultos y mujeres jóvenes desde los 12 años.',
  credenciales: [
    'Psicóloga clínica, Universidad Católica del Maule',
    'Núm. Colegiado 624264',
    'Consulta particular desde 2021',
    'Adultos y jóvenes desde los 12 años',
  ],
} as const

export const PROCESO = [
  {
    paso: 'I',
    nombre: 'Escribes por WhatsApp',
    detalle: 'Le cuentas brevemente qué te trae y coordinan una primera hora.',
  },
  {
    paso: 'II',
    nombre: 'Primera sesión',
    detalle: 'Un espacio para entender qué te pasa y conversar el plan de trabajo.',
  },
  {
    paso: 'III',
    nombre: 'El proceso',
    detalle: 'Sesiones con encuadre profesional, cálido y confidencial, a tu ritmo.',
  },
] as const

export const HORARIO = [
  { dia: 'Lunes', horas: '15:15 a 20:00' },
  { dia: 'Martes a jueves', horas: '10:00 a 20:00' },
  { dia: 'Viernes', horas: 'Mañana, con cita' },
  { dia: 'Sábado y domingo', horas: 'Cerrado' },
] as const

/** Reseñas reales de Google, todas 5 estrellas */
export const RESENAS = [
  {
    nombre: 'Daniel Camus',
    texto:
      'Llegué con Nacha después de una dolorosa ruptura y me acompañó a entender lo que sentía sin sentirme juzgado. Hoy miro el proceso y agradezco haberla encontrado.',
    hace: 'hace 7 meses',
  },
  {
    nombre: 'Kamila Fernanda Roblero',
    texto:
      'Excelente profesional, muy cercana y asertiva en sus devoluciones. Me ayudó mucho en un momento difícil.',
    hace: 'hace 9 meses',
  },
  {
    nombre: 'Pía Cona',
    texto: 'Una seca, me encantó su forma de trabajar y la comodidad que transmite la consulta.',
    hace: 'hace 9 meses',
  },
] as const
