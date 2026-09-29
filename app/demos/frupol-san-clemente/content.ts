/**
 * app/demos/frupol-san-clemente/content.ts
 *
 * Datos del mockup. REALES (fuentes públicas):
 * - Ficha Google Maps: "Frupol San Clemente" — asociación agrícola en el
 *   cruce K-565/K-569, San Clemente, Maule (-35.4599672,-71.5093592);
 *   5,0 estrellas, 2 reseñas; tel +56 2 2431 4200.
 * - Frupol S.A. (Agrícola Polpaico S.A., RUT 79.645.260-9) opera junto a
 *   Agricom (CONICYT/FONDEF) — grupo ligado a Westfalia Fruit, exportador
 *   de paltas, cítricos, cerezas, manzanas y berries.
 * - Las fotos de planta son de la operación del grupo en el Maule
 *   (Romeral, Curicó) publicadas en su ficha de Google Maps; la vista
 *   satelital es del propio predio de San Clemente.
 * El teléfono es fijo; el contacto se muestra como llamada, no WhatsApp.
 */

export const BIZ = {
  name: 'Frupol San Clemente',
  short: 'Frupol',
  legal: 'Frupol S.A. (Agrícola Polpaico S.A.)',
  rut: '79.645.260-9',
  rubro: 'Asociación agrícola · frutícola',
  grupo: 'Grupo Agricom · Westfalia Fruit',
  address: 'Cruce K-565 con K-569, sector El Enladrillado',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 2 2431 4200',
  phoneTel: '+56224314200',
  rating: '5,0',
} as const

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Frupol San Clemente, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4599672,-71.5093592&z=15&output=embed'

export const IMG = '/demos/frupol-san-clemente'

export const REVIEWS = [
  {
    author: 'Enrique Tolosa',
    stars: 5,
    when: 'Hace 4 años',
    text: 'Excelente y un ambiente de tranquilidad para elaborar.',
  },
]
