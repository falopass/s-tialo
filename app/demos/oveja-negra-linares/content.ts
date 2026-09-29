/**
 * app/demos/oveja-negra-linares/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificados
 * 2026-09-29): nombre, rubro (Restaurant), dirección Manuel Rodríguez 644,
 * teléfono, horario de colación, nota 3.9 con 47 reseñas, rango de precio
 * CLP 10–15 mil por persona y las reseñas citadas. Las fotos de
 * public/demos/oveja-negra-linares/ salen de su ficha de Google Maps.
 * El precio "$5.500 el menú" viene de una reseña real de Google.
 */

export const BIZ = {
  name: 'Oveja Negra',
  nameFull: 'Oveja Negra Restobar',
  rubro: 'Restobar · almuerzos',
  address: 'Manuel Rodríguez 644',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4038 3474',
  whatsapp: '56940383474',
  googleRating: 3.9,
  googleReviews: 47,
  hours: 'Lun a Vie 12:30–15:30 · Sáb 12:30–17:00',
  hoursShort: 'Domingo cerrado',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Oveja Negra y quiero consultar por el menú del día',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Oveja Negra Linares, Manuel Rodríguez 644, Linares, Maule',
)}`

// Coordenadas exactas de la ficha: el pin cae sobre el local.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.844731,-71.5963762&z=16&output=embed'

export const IMG = '/demos/oveja-negra-linares'
