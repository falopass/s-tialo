/**
 * app/demos/fonoaudiologa-karen-oyarce/content.ts
 *
 * Datos del mockup. REALES:
 * - Doctoralia y AgendaPro (Centro Médico MediCare SpA / Hacienda
 *   Salud): nombre de la profesional, especialidad, dirección de
 *   atención (Camino Las Rastras 1285, Centro Pichimapu, torre norte,
 *   2do piso, of. 203, Talca), servicios, precios, horarios de
 *   atención, WhatsApp de reserva y reseña 5.0.
 * - AgendaPro publica los servicios con su valor: consulta $30.000,
 *   lavado de oído $30.000, evaluación en domicilio $45.000 y
 *   evaluación ADOS TEA $60.000 (2 sesiones).
 * - La foto es su retrato profesional real publicado en AgendaPro.
 * No se encontró Instagram/Facebook personal: se omite.
 */

export const BIZ = {
  name: 'Karen Oyarce',
  full: 'Fonoaudióloga Karen Oyarce',
  rubro: 'Fonoaudiología',
  address: 'Camino Las Rastras 1285, Centro Pichimapu',
  detail: 'Torre Norte, piso 2, oficina 203',
  commune: 'Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4017 3626',
  phoneTel: '+56940173626',
  whatsapp: '56940173626',
  rating: '5,0',
  reviews: 1,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Karen, vi tu página y quiero agendar una consulta de fonoaudiología',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Camino Las Rastras 1285, Centro Pichimapu, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Camino Las Rastras 1285, Talca, Maule, Chile',
)}&output=embed`

/** Horario publicado en AgendaPro: Lun–Vie 10:00–13:00 y Sáb 10:00–18:00. */
export const HOURS = [
  { days: 'Lunes a viernes', time: '10:00–13:00' },
  { days: 'Sábado', time: '10:00–18:00' },
] as const

export const IMG = '/demos/fonoaudiologa-karen-oyarce'
