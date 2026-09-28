/**
 * app/demos/turismo-las-brujas/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + registro
 * SERNATUR, sep-2026): nombre "Turismo Las Brujas" — camping familiar
 * en Ruta L-21, sector Las Brujas, Colbún; teléfono/WhatsApp
 * +56 9 5785 5309; 4,4★ / 210 reseñas. Las fotos son las reales
 * publicadas en la ficha y las reseñas citadas son textos reales
 * (extractos). Los servicios descritos salen de las reseñas y fotos:
 * piscina/laguna natural, quinchos y parrillas, mesas con sombra,
 * baños y vestidores, estacionamiento, negocio, camping y cabañas.
 * Precios y horarios no están confirmados: se consulta por WhatsApp.
 */

export const BIZ = {
  name: 'Turismo Las Brujas',
  rubro: 'Camping, piscina natural y cabañas',
  address: 'Ruta L-21, sector Las Brujas',
  city: 'Colbún',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5785 5309',
  phoneTel: '+56957855309',
  whatsapp: '56957855309',
  rating: '4,4',
  reviews: 210,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Turismo Las Brujas y quiero consultar',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Turismo Las Brujas y quiero reservar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Turismo Las Brujas, L-21, Colbún, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Turismo Las Brujas, L-21, Colbún, Chile',
)}&output=embed`

export const IMG = '/demos/turismo-las-brujas'
