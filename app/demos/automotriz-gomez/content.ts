/**
 * app/demos/automotriz-gomez/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, sep 2026):
 * nombre, dirección, WhatsApp, horario, rating 4.9 con 89 reseñas,
 * sello «empresa de mujeres» (Identifies as women-owned), el don de
 * José Luis por explicar el trabajo con fotos/videos y su colección
 * vintage, y el texto de las tres reseñas citadas (Tomás Crovetto,
 * Javier Navarrete, Anita Campos Reyman). El dominio que figura en su
 * ficha (automotrizgomez.cl) hoy no responde.
 * Servicios y orden del día son contenido de muestra.
 */

export const BIZ = {
  name: 'Automotriz Gomez',
  short: 'Gomez',
  rubro: 'Taller mecánico',
  address: 'Angol 636',
  city: 'Concepción',
  region: 'Región del Biobío',
  phoneDisplay: '+56 9 7771 2800',
  phoneTel: '+56977712800',
  whatsapp: '56977712800',
  rating: 4.9,
  reviews: 89,
  owner: 'José Luis',
  womenOwned: true,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Automotriz Gomez y quiero agendar una hora',
)}`

export const WA_LINK_PRESUPUESTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Automotriz Gomez y quiero pedir un diagnóstico',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Automotriz Gomez, Angol 636, Concepción, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Automotriz Gomez, Angol 636, Concepción, Chile',
)}&output=embed`

export const IMG = '/demos/automotriz-gomez'

export const HORARIO = [
  { d: 'Lunes a viernes', h: '9:00 – 18:00' },
  { d: 'Sábado', h: '9:00 – 13:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

export const SERVICIOS = [
  {
    t: 'Diagnóstico electrónico',
    d: 'Escáner y lectura de fallas con informe claro: qué tiene el auto, qué hay que hacer y cuánto sale.',
  },
  {
    t: 'Mecánica general',
    d: 'Motor, embrague, distribución, suspensión y dirección. Trabajo ordenado y con respaldo.',
  },
  {
    t: 'Frenos',
    d: 'Pastillas, discos, rectificado y revisión completa del sistema de frenado.',
  },
  {
    t: 'Mantención preventiva',
    d: 'Cambio de aceite, filtros y chequeo por kilometraje para que no te pille el desgaste.',
  },
  {
    t: 'Electricidad automotriz',
    d: 'Luces, alternador, motor de partida y cableado. Se busca la falla, no se cambia por cambiar.',
  },
  {
    t: 'Presupuesto antes de tocar nada',
    d: 'Nada avanza sin tu OK: ves el diagnóstico con fotos y apruebas cada paso.',
  },
] as const

/** Reseñas reales de Google (traducidas del original por el mismo servicio). */
export const RESENAS = [
  {
    nombre: 'Tomás Crovetto',
    cuando: 'hace 3 semanas',
    texto:
      'Excelente atención y servicio. José Luis es una persona muy profesional y transparente; explica todo el proceso, respaldado con videos y fotos de lo realizado. 100% recomendable. Y qué decir de su impresionante colección vintage en su oficina.',
  },
  {
    nombre: 'Anita Campos Reyman',
    cuando: 'hace 3 meses',
    texto:
      'Después de una mala experiencia en otro taller —diagnóstico errado y presupuesto inflado— llegamos a Automotriz Gomez. Don José Luis hizo una nueva revisión y encontró el problema real.',
  },
  {
    nombre: 'Javier Navarrete',
    cuando: 'hace 3 meses',
    texto:
      'Excelente servicio. José Luis es una persona transparente y clara, con muy buena atención. Pero lo que más me impresionó fue su colección vintage en la oficina, ¡increíble!',
  },
] as const
