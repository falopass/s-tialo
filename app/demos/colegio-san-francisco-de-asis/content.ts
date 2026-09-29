/**
 * app/demos/colegio-san-francisco-de-asis/content.ts
 *
 * Datos verificados (ficha pública de Google Maps + sitio oficial
 * colegiosanfranciscotalca.cl, sept. 2026): nombre, categoría (escuela
 * católica), dirección en Calle 2 Poniente 929, Talca, teléfono
 * (71) 268 1034, horario de atención Lu–Vi 8:15–18:45, correo y web.
 * Fotos: ficha de Maps y blog oficial del colegio. Sin reseñas en Google.
 */

export const BIZ = {
  name: 'Colegio San Francisco de Asís',
  short: 'San Francisco de Asís',
  rubro: 'Escuela católica',
  address: 'Calle 2 Poniente 929',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '(71) 268 1034',
  phoneTel: '+56712681034',
  email: 'colegio@colegiosanfranciscotalca.cl',
  web: 'https://www.colegiosanfranciscotalca.cl',
} as const

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Colegio San Francisco de Asis, Calle 2 Poniente 929, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Colegio San Francisco de Asis, Calle 2 Poniente 929, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/colegio-san-francisco-de-asis'
