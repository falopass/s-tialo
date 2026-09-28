/**
 * app/demos/club-formas-molina/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + fotos de su propio
 * perfil): nombre, dirección Yerbas Buenas 1574, Molina, teléfono,
 * horario L–V 9–23 / Sáb 10–14, rating 4,7 con 53 opiniones y las
 * reseñas citadas en español. El entrenador es Juan — sus socios lo
 * nombran en las reseñas y las fotos del perfil lo muestran
 * compitiendo en fisicoculturismo. "El más económico de Molina" sale
 * de las reseñas, no de una tarifa publicada: no se publican precios.
 */

export const BIZ = {
  name: 'Club Formas',
  short: 'Club Formas',
  rubro: 'Gimnasio',
  address: 'Yerbas Buenas 1574',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4423 3979',
  phoneTel: '+56944233979',
  whatsapp: '56944233979',
  rating: 4.7,
  ratingLabel: '4,7',
  reviews: 53,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Club Formas, quiero preguntar por la membresía del gimnasio',
)}`

export const WA_LINK_CLASE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero ir a conocer el gimnasio. ¿Puedo pasar a una clase de prueba?',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Club Formas, Yerbas Buenas 1574, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Club Formas, Yerbas Buenas 1574, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/club-formas-molina'

/** Horario confirmado en la ficha de Maps */
export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '9:00 – 23:00' },
  { dia: 'Sábado', hora: '10:00 – 14:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
] as const

/** Lo que tiene la sala (fotos del propio perfil) */
export const SALA = [
  { titulo: 'Cardio', detalle: 'Bicicletas y máquinas para calentar y quemar.' },
  { titulo: 'Pesas libres', detalle: 'Barras, mancuernas y racks sobre pasto sintético.' },
  { titulo: 'Máquinas', detalle: 'Sala completa de máquinas para cada grupo muscular.' },
] as const

/** Reseñas reales de Google (texto original en español) */
export const RESENAS = [
  {
    texto:
      'Excelente gym en Molina. Con variedades de máquinas tanto para cardiovascular como pesas. Muy buena atención de Juan, te sientes como en casa.',
    autor: 'Fernando Carrasco',
  },
  {
    texto: 'Gym más económico de Molina, muy buena atención, las máquinas geniales.',
    autor: 'Paola Castiglioni',
  },
  {
    texto: 'Un lugar muy agradable, muy familiar.',
    autor: 'Leticia Pérez',
  },
] as const
