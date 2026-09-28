/**
 * app/demos/servicio-tecnico-automotriz-millycar/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y Facebook):
 * nombre, dirección, WhatsApp, horario (L-V 9:00–19:00), las 19
 * reseñas de Google (4.9★) y la página de Facebook. Servicios y
 * textos complementarios son contenido de muestra; precios no se
 * publican porque nunca fueron confirmados.
 */

export const BIZ = {
  name: 'Servicio Técnico Automotriz Millycar',
  short: 'Millycar',
  rubro: 'Taller mecánico',
  address: 'Av. Manso de Velasco 965',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6217 9684',
  phoneTel: '+56962179684',
  whatsapp: '56962179684',
  rating: '4.9',
  reviews: 19,
  facebook: 'http://www.facebook.com/millycar',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Millycar y quiero agendar una revisión',
)}`

export const WA_LINK_PRESUPUESTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Millycar y quiero pedir un presupuesto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Servicio Técnico Automotriz Millycar, Av. Manso de Velasco 965, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Servicio Técnico Automotriz Millycar, Av. Manso de Velasco 965, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/servicio-tecnico-automotriz-millycar'

/** Horario real de la ficha de Google Maps. */
export const HORAS = [
  { days: 'Lunes a viernes', time: '9:00 – 19:00' },
  { days: 'Sábado y domingo', time: 'Cerrado' },
] as const

/** Reseñas reales de Google Maps (las más nombran la honestidad). */
export const RESENAS = [
  {
    text: 'Me sorprendió su honestidad: me dijeron exactamente lo que tenía el auto y no inventaron nada más.',
    author: 'Edgar Montero',
    meta: 'reseña de Google',
  },
  {
    text: 'Muy honestos y buen trabajo. El auto quedó perfecto.',
    author: 'Isabeth Custodio',
    meta: 'reseña de Google',
  },
] as const
