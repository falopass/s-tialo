/**
 * app/demos/el-rincon-de-faby/content.ts
 *
 * Datos REALES verificados (sep 2026):
 * - Catálogo de Turismo de la Ilustre Municipalidad de Empedrado (PDF
 *   oficial): "El Rincón de Faby", contacto Fabiola Gavilán,
 *   tel. +56 9 9244 8365, servicios: cabañas, camping, almuerzos y
 *   tinajas. Comuna de Empedrado, Región del Maule.
 * - El negocio NO tiene ficha de Google Maps ni perfil público de
 *   Instagram/Facebook localizado; ojo: hay un restaurante homónimo en
 *   Tayrona, Colombia, que NO es este negocio y no se usa.
 * - Por eso: no hay reseñas ni rating (no se inventan), no hay logo ni
 *   fotos del propio rincón. Las fotos de esta página son del SECTOR —
 *   Embalse Empedrado, valle de Empedrado, Complejo Turístico La Rana,
 *   Reserva Nacional Los Ruiles — bajadas de Google Maps y rotuladas
 *   "foto de la comuna". Las escenas del rincón (cabaña, carpa, tinaja,
 *   almuerzo) son ilustraciones SVG marcadas visiblemente "bosquejo".
 */

export const BIZ = {
  name: 'El Rincón de Faby',
  short: 'Rincón de Faby',
  rubro: 'Cabañas, camping, almuerzos y tinajas',
  duena: 'Fabiola Gavilán',
  address: 'Comuna de Empedrado',
  city: 'Empedrado',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9244 8365',
  phoneTel: '+56992448365',
  whatsapp: '56992448365',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Fabiola, vi la página de El Rincón de Faby en Empedrado y quiero consultar',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Fabiola, quiero reservar en El Rincón de Faby, Empedrado',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Empedrado, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Empedrado, Provincia de Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/el-rincon-de-faby'
