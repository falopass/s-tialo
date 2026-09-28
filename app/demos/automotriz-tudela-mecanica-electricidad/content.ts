/**
 * Datos confirmados en fuentes públicas consultadas el 28-09-2026.
 * No se encontraron perfiles sociales inequívocos para descargar fotos reales.
 */
export const BIZ = {
  name: 'Automotriz Tudela',
  short: 'Automotriz Tudela',
  rubro: 'Mecánica y electricidad automotriz',
  address: 'Pje. 6 1/2 Pte. 1243',
  city: 'Talca',
  region: 'Región del Maule',
  whatsapp: '56972547754',
  phoneDisplay: '+56 9 7254 7754',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Automotriz Tudela y quiero consultar por mi vehículo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Automotriz Tudela, Pje. 6 1/2 Pte. 1243, Talca, Chile',
)}`

export const SOURCES = [
  'Google Maps, ficha pública de Taller mecánico y electricidad Automotriz Tudela: nombre, dirección, teléfono y horario.',
  'Chilopina, ficha indexada de Google Maps: Pje. 6 1/2 Pte. 1243, Talca; +56 9 7254 7754; lunes a viernes 09:00–19:00; sábado y domingo cerrado.',
  'Instagram y Facebook: búsquedas por nombre exacto sin perfil oficial inequívoco disponible para reutilizar fotos.',
] as const
