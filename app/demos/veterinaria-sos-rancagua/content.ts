/**
 * Datos verificados: Veterinaria S.O.S Rancagua y Farmacia Veterinaria
 *
 * Fuentes:
 * - Google Maps: Pedro de Valdivia 033, Rancagua; +56 72 253 4939;
 *   4,2★ / 608 reseñas; categoría Veterinario; abierto 10:00-02:00.
 * - Instagram @sosveterinariarancagua (Dra. Leslie Gómez): WhatsApp
 *   +56 9 4466 3455; horario de atención Lun-Vie 10-21, Sáb-Dom 10-20,
 *   feriados 9-21; "urgencias hasta las 2 AM".
 * - Reseñas citadas con nombre y fecha aproximada, tomadas del perfil.
 * - Fotos: descargadas del perfil de Maps y publicaciones propias de IG.
 */

const SLUG = 'veterinaria-sos-rancagua'

export const BIZ = {
  name: 'Veterinaria S.O.S Rancagua',
  nameFull: 'Veterinaria S.O.S Rancagua y Farmacia Veterinaria',
  rubro: 'Veterinaria y farmacia',
  address: 'Pedro de Valdivia 033',
  city: 'Rancagua',
  region: "Región de O'Higgins",
  phoneDisplay: '+56 72 253 4939',
  phoneTel: 'tel:+56722534939',
  waDisplay: '+56 9 4466 3455',
  wa: 'https://wa.me/56944663455',
  mapsUrl:
    'https://www.google.com/maps/place/Veterinaria+S.O.S+Rancagua+y+Farmacia+Veterinaria/@-34.1760391,-70.7359691,17z/data=!3m1!4b1!4m6!3m5!1s0x966343267a304d4f:0xe5f8c88a37d4aae7!8m2!3d-34.1760391!4d-70.7359691!16s%2Fg%2F11fklsrqs6',
  rating: 4.2,
  reviews: 608,
  urgenciaHasta: '2:00 AM',
} as const

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.nameFull}, ${BIZ.address}, ${BIZ.city}`,
)}&output=embed`

export const IMG = `/demos/${SLUG}`

/** Horario publicado en su Instagram (bio oficial). */
export const HORARIOS = [
  { d: 'Lunes a viernes', h: '10:00 - 21:00' },
  { d: 'Sábado y domingo', h: '10:00 - 20:00' },
  { d: 'Feriados', h: '9:00 - 21:00' },
  { d: 'Urgencias', h: 'hasta las 2:00 AM' },
] as const

/**
 * Servicios confirmados por la ficha de Maps (temas de reseñas:
 * ecografía, ozonoterapia, servicio de emergencias), las fotos del
 * local (estantes de farmacia, afiche "Horas disponibles Cardiología",
 * jornada de adopción) y reseñas que mencionan corte de uñas.
 */
export const BOLETA_ITEMS = [
  { item: 'Consulta general', detalle: 'todos los días' },
  { item: 'Urgencias', detalle: 'hasta las 2:00 AM' },
  { item: 'Ecografía', detalle: 'diagnóstico por imagen' },
  { item: 'Ozonoterapia', detalle: 'terapia complementaria' },
  { item: 'Cardiología', detalle: 'horas disponibles' },
  { item: 'Vacunas y desparasitación', detalle: 'calendario al día' },
  { item: 'Corte de uñas', detalle: 'sin hora' },
  { item: 'Farmacia veterinaria', detalle: 'en el mismo local' },
  { item: 'Jornadas de adopción', detalle: 'adopción responsable' },
] as const

/** Reseñas reales del perfil de Google Maps. */
export const RESENAS = [
  {
    nombre: 'Camila Vidal Rojas',
    estrellas: 5,
    cuando: 'hace 6 meses',
    texto:
      'Muy buena atención, íbamos por primera vez. El veterinario super capacitado.',
  },
  {
    nombre: 'Melissa Torres',
    estrellas: 5,
    cuando: 'hace un mes',
    texto: 'Muy amables con mis retoños, buen diagnóstico y muy buen trato.',
  },
  {
    nombre: 'Gabriela Vega Arenas',
    estrellas: 5,
    cuando: 'hace 6 meses',
    texto:
      'Quiero agradecer enormemente el cuidado y el profesionalismo que realizaron con mi mascota que estaba grave. Muchas gracias a todos, en especial al veterinario Don Luis Sandoval.',
  },
] as const

/** Temas que repiten las reseñas en Google Maps (n = menciones). */
export const TEMAS = [
  { t: 'urgencias', n: 8 },
  { t: 'vocación', n: 5 },
  { t: 'adopción', n: 3 },
  { t: 'ecografía', n: 3 },
  { t: 'diagnósticos certeros', n: 2 },
  { t: 'ozonoterapia', n: 2 },
] as const
