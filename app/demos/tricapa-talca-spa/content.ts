/**
 * Datos públicos verificados el 28-09-2026 en Google Maps y sus perfiles
 * enlazados. No se encontró un horario detallado publicado; se omite.
 */

export const BIZ = {
  name: 'Tricapa Talca spa',
  displayName: 'Tricapa Talca',
  rubro: 'Pintura, desabolladura y venta de repuestos',
  address: '6 Oriente 16, Sur 0168, y 18',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 9 7706 4403',
  whatsapp: '56977064403',
  reviews: 6,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Tricapa Talca y quiero consultar por un trabajo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}, ${BIZ.region}, Chile`,
)}`

export const SOURCES = [
  'Google Maps / ficha de Tricapa Talca spa (Pintura, Desabolladura y Venta de Repuestos)',
  'Perfiles de Instagram y Facebook enlazados desde la ficha',
] as const
