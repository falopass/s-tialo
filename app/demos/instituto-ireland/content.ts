/**
 * app/demos/instituto-ireland/content.ts
 *
 * Datos verificados (directorios públicos: citiservi.cl con teléfono que
 * coincide con el lead, registro CNED/decreto N°267 del 30 jul 1999,
 * sept. 2026): nombre legal Instituto Ireland Ltda., operando como CFT
 * Ireland en 3 Oriente 1264, Talca, teléfono (71) 221 2719, RUT
 * 77.168.390-8. Sin ficha de Google Maps ni redes propias: las únicas
 * fotos reales disponibles son Street View de la cuadra; las escenas
 * ilustrativas van marcadas como bosquejo.
 */

export const BIZ = {
  name: 'CFT Ireland',
  legal: 'Instituto Ireland Ltda.',
  rubro: 'Centro de Formación Técnica',
  address: '3 Oriente 1264',
  entre: 'entre 1 y 2 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '(71) 221 2719',
  phoneTel: '+56712212719',
  rut: '77.168.390-8',
  decreto: 'Decreto N°267 · 30 jul 1999',
} as const

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  '3 Oriente 1264, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '3 Oriente 1264, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/instituto-ireland'
