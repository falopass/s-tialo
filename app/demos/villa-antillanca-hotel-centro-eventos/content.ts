/**
 * Datos confirmados en fuentes públicas consultadas el 28-09-2026.
 * No se encontraron perfiles sociales inequívocos para descargar fotos reales.
 */
export const BIZ = {
  name: 'Villa Antillanca, Hotel & Centro de Eventos',
  short: 'Villa Antillanca',
  rubro: 'Hotel y centro de eventos',
  address: 'Camino a San Clemente km 2,3',
  city: 'Talca',
  region: 'Región del Maule',
  whatsapp: '56979582177',
  phoneDisplay: '+56 9 7958 2177',
  hours: '24 horas',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Villa Antillanca y quiero consultar disponibilidad o un evento',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Villa Antillanca, Hotel & Centro de Eventos, Camino a San Clemente km 2,3, Talca, Chile',
)}`

export const SOURCES = [
  'Google Maps, ficha pública de Villa Antillanca: nombre, dirección, horario y fotos de usuarios.',
  'SERNATUR, ficha Hotel Antillanca: Sector Santa Mónica parcela 13, camino a San Clemente, Talca; +56 71 226 0765.',
  'Moteless, ficha pública: Cam. a Mango’s 1022, Talca; contacto móvil +56 9 7958 2177.',
  'VyMaps, ficha pública: hotel, centro de eventos, bar/restaurante y piscina; horario 24 horas.',
  'Instagram y Facebook: búsquedas por nombre exacto sin perfil oficial inequívoco disponible para reutilizar fotos.',
] as const
