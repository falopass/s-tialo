/**
 * app/demos/one-club-barberia/content.ts
 *
 * Datos del mockup. REALES (verificados el 7-11-2026 en la ficha de
 * Google Maps «Barbería one club», Valdivia, y en Instagram
 * @studio_oneclub):
 * - Nombre «Studio One Club Salón», tal como aparece en su logo
 *   «1C ONE CLUB SALÓN»; en Maps figura como «Barbería one club».
 * - Dirección Av. Ramón Picarte 1093, Valdivia: ficha de Maps.
 * - Horario lunes a sábado 11:00-21:00 y domingo 11:00-18:00: ficha de
 *   Maps y la pieza de horarios publicada por el negocio.
 * - WhatsApp +56 9 9314 3697 e Instagram @studio_oneclub: perfiles del
 *   negocio. La agenda también se toma por mensaje directo de Instagram.
 * - 5,0 con 2 opiniones en Google; la cita de Esteban Á. es textual de
 *   esa ficha.
 * - Servicios (cortes: fade, textura, mullet, ondulados, mod cut; servicio
 *   clásico y servicio de barba; nuevo servicio de peluquería y
 *   estilismo), la frase «Fade + textura para un resultado limpio y con
 *   estilo.» y «primera semana en nuestra nueva casa»: publicaciones del
 *   propio negocio.
 * DE MUESTRA: titulares de sección, bajadas y textos de apoyo.
 */

export const BIZ = {
  name: 'Studio One Club Salón',
  short: 'One Club',
  rubro: 'Barbería',
  address: 'Av. Ramón Picarte 1093',
  city: 'Valdivia',
  region: 'Región de Los Ríos',
  phoneDisplay: '+56 9 9314 3697',
  phoneTel: '+56993143697',
  whatsapp: '56993143697',
  rating: '5,0',
  ratingValue: 5,
  reviews: 2,
  instagram: 'https://www.instagram.com/studio_oneclub/',
  igHandle: '@studio_oneclub',
} as const

export const WA_LINK =
  'https://wa.me/56993143697?text=Hola%20One%20Club%2C%20quiero%20agendar%20una%20hora'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Barbería one club, Av. Ramón Picarte 1093, Valdivia, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Ramón Picarte 1093, Valdivia, Chile',
)}&output=embed`

export const IMG = '/demos/one-club-barberia'

export const HORARIO = [
  { d: 'Lunes a sábado', h: '11:00–21:00' },
  { d: 'Domingo', h: '11:00–18:00' },
] as const

export const REVIEWS = [
  {
    text: 'Para ser la primera vez que voy la atención fue súper buena me atendió el barbero Hans recomendado',
    author: 'Esteban Á.',
    fuente: 'Reseña de Google',
  },
] as const
