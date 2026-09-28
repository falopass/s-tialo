/**
 * Datos públicos verificados el 28-09-2026 en Google/Instagram/Facebook.
 * No se encontró un teléfono ni un horario publicado; se omiten.
 */

export const BIZ = {
  name: 'Convergencia Estudio Jurídico Talca',
  short: 'Convergencia',
  rubro: 'Estudio jurídico',
  address: '1 Oriente 690, oficina 508 (quinto piso), Edificio Plaza Talca',
  city: 'Talca',
  region: 'Región del Maule',
  instagram: 'convergenciaestudiojuridico',
  instagramUrl: 'https://www.instagram.com/convergenciaestudiojuridico/',
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.address}, ${BIZ.city}, ${BIZ.region}, Chile`,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.address}, ${BIZ.city}, ${BIZ.region}, Chile`,
)}&output=embed`

export const SOURCES = [
  'Google Search / ficha y resultados locales para “Estudio Jurídico Talca”',
  'Instagram: @convergenciaestudiojuridico',
  'Facebook: Convergencia Estudio Jurídico Talca',
] as const
