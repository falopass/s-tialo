/**
 * app/demos/atenas/content.ts
 *
 * Datos del mockup. REALES y verificados (29-09-2026):
 * - Ficha de Google Maps «Atenas» (Gimnasio): Libertad 1318, Molina —
 *   teléfono +56 9 4710 8736, 5.0 estrellas con 10 reseñas (todas de
 *   5), horario lunes a viernes 9:00-10:00 y 18:00-21:00, sábado y
 *   domingo cerrado. Etiqueta «LGBTQ+ friendly» en su ficha.
 * - Instagram @atenasentrenamientocorporal (697 seguidores): clases
 *   full body grupales guiadas; su afiche oficial dice «DISCIPLINA
 *   HOY, RESULTADOS MAÑANA — CLASES FULL BODY — LUNES A VIERNES —
 *   LIBERTAD 1318» y es la fuente del eslogan usado en la página.
 * - Las reseñas citadas son textuales de Google Maps: mencionan al
 *   «profe Jorge», las clases guiadas y el buen ambiente («no es solo
 *   fierros»).
 * - Logo: rondel negro y dorado con el Partenón y el texto «ATENAS
 *   ENTRENAMIENTO CORPORAL», recortado de su propio afiche.
 */

export const BIZ = {
  name: 'Atenas · Entrenamiento Corporal',
  short: 'Atenas',
  rubro: 'Gimnasio · clases full body',
  address: 'Libertad 1318',
  addressFull: 'Libertad 1318, Molina, Maule',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4710 8736',
  whatsapp: '56947108736',
  rating: 5.0,
  reviews: 10,
  instagram: 'atenasentrenamientocorporal',
} as const

export const waLink = (msg: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(msg)}`

export const WA_LINK = waLink(
  'Hola, vi la página de Atenas y quiero consultar por las clases full body en Libertad 1318',
)

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Atenas gimnasio, Libertad 1318, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Atenas gimnasio, Libertad 1318, Molina, Maule, Chile',
)}&output=embed`

export const INSTAGRAM_URL = 'https://www.instagram.com/atenasentrenamientocorporal/'

// Horario real de la ficha de Google Maps
export const HOURS = [
  { d: 'Lunes a viernes', h: '9:00 – 10:00' },
  { d: 'Lunes a viernes', h: '18:00 – 21:00' },
  { d: 'Sábado y domingo', h: 'Cerrado' },
]

// Equipamiento visible en las fotos reales de la ficha / su Instagram
export const EQUIPO = [
  'Barras olímpicas y discos',
  'Kettlebells y balones',
  'Cajones pliométricos',
  'Cuerdas y TRX colgados del techo',
  'Colchonetas de piso',
]

// Reseñas textuales de Google Maps
export const REVIEWS = [
  {
    q: 'Profesor 100% comprometido con sus alumnos. Grande Atenas.',
    a: 'Roberto Durán Catalán',
  },
  {
    q: 'Espacio donde ejercitar y compartir, con la atenta compañía del profe Jorge. No es solo fierros.',
    a: 'Francesco Canepa',
  },
  {
    q: 'Bien equipado, buen ambiente y el profesor Jorge muy dinámico.',
    a: 'Carla Sepúlveda Cepeda',
  },
  {
    q: 'Jorge exige a medida y te deja full motivado.',
    a: 'Sofía Oyarzún',
  },
]

export const IMG = '/demos/atenas'
