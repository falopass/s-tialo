/**
 * app/demos/agroservi/content.ts
 *
 * Datos REALES verificados en Google Maps (sept 2026): ficha
 * "Agroservi Ltda." (place 0x9665956ca2999541:0x5ede05184a677bb0),
 * categoría "General contractor", Av. Huamachuco 183, San Clemente,
 * teléfono +56 71 262 1494, rating 4,0 con 1 reseña ("Good!",
 * Javi_guiaLocal, hace un año), abre 9:00.
 *
 * Giros comerciales según registros públicos de la empresa
 * (Agroservi Ltda., San Clemente): servicios agrícolas, transporte
 * de carga, arriendo de vehículos sin conductor y reparación de
 * vehículos a motor.
 *
 * Fotos: pergola.webp y shop.webp son fotos reales de su ficha de
 * Google Maps. patio.webp y camino.webp son capturas de Street View
 * del sector de Av. Huamachuco donde está la empresa. No existe logo
 * ni redes sociales confirmadas.
 */

export const BIZ = {
  name: 'Agroservi',
  legal: 'Agroservi Ltda.',
  rubro: 'Servicios agrícolas y de terreno',
  address: 'Av. Huamachuco 183, San Clemente',
  addressShort: 'Av. Huamachuco 183',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 262 1494',
  phoneTel: '+56712621494',
  rating: 4.0,
  ratingDisplay: '4,0',
  reviews: 1,
  opens: '9:00',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Agroservi Ltda., Av. Huamachuco 183, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Agroservi Ltda., Av. Huamachuco 183, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/agroservi'

/** Giros registrados de la empresa (registros públicos). */
export const GIROS = [
  {
    n: '01',
    title: 'Servicios agrícolas',
    detail: 'Apoyo y labores para el campo de la zona, a pedido del productor.',
  },
  {
    n: '02',
    title: 'Transporte de carga',
    detail: 'Traslado de carga por carretera desde San Clemente.',
  },
  {
    n: '03',
    title: 'Arriendo de vehículos y equipos',
    detail: 'Arriendo de vehículos sin conductor según disponibilidad.',
  },
  {
    n: '04',
    title: 'Reparación de vehículos a motor',
    detail: 'Servicio de reparación en taller propio.',
  },
] as const

/** Única reseña publicada en su ficha de Google. */
export const REVIEW = {
  author: 'Javi_guiaLocal',
  when: 'hace un año',
  text: 'Good!',
  stars: 4,
} as const
