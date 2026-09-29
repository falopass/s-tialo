/**
 * app/demos/frupol-san-clemente/content.ts
 *
 * Datos del mockup. REALES (fuentes públicas verificadas):
 * - Ficha Google Maps: «Frupol San Clemente», San Clemente, Maule —
 *   fono (2) 2431 4200, rating 5,0 con 2 reseñas, plus code GFRR+27.
 * - El directorio público (chilopina.com) enlaza esa ficha con el
 *   sitio corporativo agricom.cl: Frupol es la agrícola del grupo
 *   Agricom, empresa del grupo Westfalia Fruit (logos reales del
 *   archivo de su sitio).
 * - Especies del grupo según perfiles públicos de sus administradores:
 *   cerezas, uva de mesa, paltos, mandarinas y clementinas, ciruelas,
 *   nogales, almendros y granadas.
 * - Fotos: archivo de agricom.cl (huerto, planta aérea, packing,
 *   equipo) y vista satelital real del predio en San Clemente
 *   (Google Maps). No hay foto inventada ni de terceros.
 * El sitio agricom.cl está caído en este momento (certificado
 * vencido): los CTA apuntan a su ficha de Maps y al teléfono.
 */

export const BIZ = {
  name: 'Frupol San Clemente',
  short: 'Frupol',
  rubro: 'Productora y exportadora de fruta',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '(2) 2431 4200',
  phoneTel: '+56224314200',
  plusCode: 'GFRR+27 San Clemente',
  googleRating: '5,0',
  googleReviews: '2',
  grupo: 'Grupo Agricom · Westfalia Fruit',
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Frupol San Clemente, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Frupol San Clemente, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/frupol-san-clemente'
