/**
 * app/demos/jd-abogados/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, vista el
 * 2026-09-28): nombre, dirección, teléfono, nota 5,0 con 34 reseñas,
 * horario, categorías de práctica y las fotos de la oficina. Las
 * reseñas citadas son textos reales de la ficha. El claim
 * «Su equipo jurídico de confianza en Talca» es de su propia
 * publicidad. Las respuestas del FAQ son de muestra.
 */

export const BIZ = {
  name: 'J&D Abogados Talca',
  short: 'J&D Abogados',
  rubro: 'Estudio jurídico',
  address: 'Calle 1 Poniente 1258, Oficina 1112',
  building: 'Edificio Plaza Poniente',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8595 0428',
  phoneTel: '+56985950428',
  whatsapp: '56985950428',
  rating: 5,
  ratingLabel: '5,0',
  reviews: 34,
  horario: 'Lunes a sábado · 9:00–18:00',
  claim: 'Su equipo jurídico de confianza en Talca',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de J&D Abogados Talca y quiero consultar por mi caso',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'J&D Abogados Talca, Calle 1 Poniente 1258, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'J&D Abogados Talca, Calle 1 Poniente 1258, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/jd-abogados'
