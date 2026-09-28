/**
 * app/demos/bodega-liquidadora-neumaticos/content.ts
 *
 * Datos verificados en Google Maps y Diario Oficial: razón social
 * (Bodega Liquidadora de Neumáticos SpA, RUT 76.559.589-4), dirección
 * (15 Oriente 1043, Talca), WhatsApp (+56 9 9090 3001), rating
 * 4.5/52 reseñas, cierre 18:00 y los servicios del letrero real del
 * local (neumáticos, lubricantes, vulcanización, balanceo, llantas,
 * fierros, montaje). Las reseñas citadas y las fotos son del perfil.
 */
export const BIZ = {
  name: 'Bodega Liquidadora de Neumáticos',
  short: 'La Bodega',
  razon: 'Bodega Liquidadora de Neumáticos SpA',
  rut: '76.559.589-4',
  rubro: 'Venta de neumáticos y taller',
  address: '15 Oriente 1043',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9090 3001',
  phoneTel: '+56990903001',
  whatsapp: '56990903001',
  googleRating: 4.5,
  googleReviews: 52,
  cierre: '18:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de la Bodega Liquidadora de Neumáticos y quiero cotizar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Bodega Liquidadora de Neumaticos, 15 Oriente 1043, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Bodega Liquidadora de Neumaticos, 15 Oriente 1043, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/bodega-liquidadora-neumaticos'
