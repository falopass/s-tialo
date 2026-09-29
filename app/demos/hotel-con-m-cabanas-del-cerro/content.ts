/**
 * app/demos/hotel-con-m-cabanas-del-cerro/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps
 * "Otel con M - Cabañas del Cerro", Talca): nombre, dirección
 * (Camino a Pencahue, Cerro La Virgen), teléfono y rating/reseñas.
 * El resto del texto describe lo verificable en sus fotos: cabañas
 * independientes entre vegetación nativa, a ~150 m sobre la ciudad.
 * Lo que no se ve en la ficha (tarifas, horarios) se omite.
 */

export const BIZ = {
  name: 'Otel con M - Cabañas del Cerro',
  short: 'Cabañas del Cerro',
  comuna: 'Talca',
  region: 'Región del Maule',
  address: 'Camino a Pencahue km 2,5 · Cerro La Virgen, Talca',
  phoneDisplay: '+56 9 9426 9136',
  phoneTel: '+56994269136',
  whatsapp: '56994269136',
  rating: 3.9,
  ratingLabel: '3,9',
  reviews: 67,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas del Cerro y quiero consultar por una cabaña',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Otel con M - Cabañas del Cerro, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Otel con M - Cabañas del Cerro, Camino a Pencahue, Talca',
)}&output=embed`
