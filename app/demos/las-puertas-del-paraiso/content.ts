/**
 * app/demos/las-puertas-del-paraiso/content.ts
 *
 * Datos del mockup. REALES y verificados (29-09-2026):
 * - Ficha de Google Maps «LAS PUERTAS DEL PARAISO»: restaurante en
 *   Ruta Panamericana Sur 218 (km 218), Río Claro, Maule; nota 4,1 con
 *   1.008 reseñas; teléfono 9 7879 2609; abre a las 8:00; 218 fotos.
 * - La ficha no publica sitio web ni redes; no se encontró perfil de
 *   Instagram/Facebook de esta pyme (hay homónimos en el extranjero).
 * - Datos tomados de las fotos reales de la ficha: letrero «HOSTERIA»,
 *   pizarra de la entrada «HOY: plateada · asado de cerdo · pollo asado»,
 *   oferta de vinos de la zona «4 x $10.000» y «5 x $10.000», botellas
 *   del valle del Maule entre $7.000 y $12.000, escobas junto a la
 *   entrada y el par de portones de madera que da nombre al local.
 * - Reseñas: texto real de la ficha de Google (autor, fecha y nota).
 *   Sin imágenes generadas en este demo.
 */

export const BIZ = {
  name: 'Las Puertas del Paraíso',
  short: 'Puertas del Paraíso',
  rubro: 'Restaurante de carretera y hostería',
  address: 'Ruta Panamericana Sur, km 218',
  city: 'Río Claro',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7879 2609',
  phoneTel: '+56978792609',
  whatsapp: '56978792609',
  rating: 4.1,
  reviews: 1008,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Las Puertas del Paraíso y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Las Puertas del Paraiso, Ruta Panamericana Sur 218, Río Claro',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Las Puertas del Paraiso, Río Claro, Región del Maule',
)}&output=embed`

export const IMG = '/demos/las-puertas-del-paraiso'
