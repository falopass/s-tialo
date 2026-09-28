/**
 * app/demos/lavado-de-oidos-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps
 * "Lavado de oídos Talca", verificada 2026-09-28):
 * - Nombre en Maps, categoría (centro de salud), dirección
 *   (3 oriente / Tres Norte 1410, Edificio Bicentenario, Talca),
 *   teléfono (+56 9 6528 7415) y rating 5,0 con 355 reseñas.
 * - Horario de la ficha: lun–vie 9:00–20:30, sáb 9:00–17:00,
 *   domingo cerrado.
 * - El letrero de su fachada dice "INTEGRA — Centro de Salud
 *   Integral" (foto real de la ficha).
 * - La fonoaudióloga se llama Nicole: así la nombran sus
 *   pacientes en las reseñas ("Gracias Nicole por su trabajo").
 * - Las reseñas citadas son textuales de la ficha. Las fotos
 *   son las publicadas por el centro en su ficha de Maps.
 * - No publica sitio web ni redes: el contacto es el teléfono.
 */

export const BIZ = {
  name: 'Lavado de oídos Talca',
  brand: 'Integra · Centro de Salud Integral',
  short: 'Lavado de oídos',
  pro: 'Nicole, fonoaudióloga',
  rubro: 'Centro de salud · lavado de oídos',
  address: '3 Oriente con Tres Norte 1410, Edificio Bicentenario',
  addressShort: '3 Ote. con 3 Nte. 1410',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6528 7415',
  phoneTel: '+56965287415',
  rating: '5,0',
  reviews: 355,
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Lavado de oídos Talca, Tres Norte 1410, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Lavado de oídos Talca, Tres Norte 1410, Talca, Chile',
)}&output=embed`

/** Horario completo de la ficha. */
export const HOURS = [
  { days: 'Lunes a viernes', time: '9:00–20:30' },
  { days: 'Sábado', time: '9:00–17:00' },
  { days: 'Domingo', time: 'Cerrado' },
] as const

export const IMG = '/demos/lavado-de-oidos-talca'
