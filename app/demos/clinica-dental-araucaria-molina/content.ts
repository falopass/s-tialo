/**
 * app/demos/clinica-dental-araucaria-molina/content.ts
 *
 * Datos del mockup. REALES y verificados (28-09-2026):
 * - Ficha de Google Maps «Clínica Dental Araucaria, Molina» (Dentista):
 *   Av. Sur 1666, 3380000 Molina, Maule — teléfono +56 9 4013 6827,
 *   5.0 estrellas con 10 reseñas y horario L-V 9–19, sábado 10–14,
 *   domingo cerrado.
 * - Los carteles de la puerta de madera (foto real de la ficha) nombran
 *   al equipo: Dra. Yuly Correa (cirujano dentista, Rehabilitación Oral
 *   Integral Estética) y Dra. Javiera Correa (cirujano dentista,
 *   Estética Orofacial) — correo clinica.araucaria.molina@gmail.com.
 * - El logo «Clínica Dental Araucaria» con el árbol es el publicado por
 *   la propia clínica en su ficha.
 * - Ojo: @clinicadentalaraucaria en Instagram es una clínica de
 *   Villarrica — homónimo, NO corresponde a esta pyme.
 * - Reseñas citadas: textos reales de la ficha (Myriam Espinoza,
 *   william suazo, Mario Delpino).
 */
export const BIZ = {
  name: 'Clínica Dental Araucaria',
  short: 'Araucaria',
  rubro: 'Clínica dental',
  address: 'Av. Sur 1666',
  addressFull: 'Av. Sur 1666, 3380000 Molina, Maule',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4013 6827',
  whatsapp: '56940136827',
  rating: 5.0,
  reviews: 10,
} as const

export const waLink = (msg: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(msg)}`

export const WA_LINK = waLink(
  'Hola, vi la página de Clínica Dental Araucaria y quiero agendar una hora',
)

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Dental Araucaria, Av. Sur 1666, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clínica Dental Araucaria, Av. Sur 1666, Molina, Maule, Chile',
)}&output=embed`

// Horario real de la ficha de Google Maps
export const HOURS = [
  { d: 'Lunes a viernes', h: '9:00 – 19:00' },
  { d: 'Sábado', h: '10:00 – 14:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

export const IMG = '/demos/clinica-dental-araucaria-molina'
