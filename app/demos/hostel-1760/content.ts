/**
 * app/demos/hostel-1760/content.ts
 *
 * Datos verificados en Google Maps y SERNATUR: nombre, dirección
 * (3 Sur 1760, Talca), WhatsApp (+56 9 7615 1994), rating Google
 * 3.9/194 reseñas y Booking 8.2/10·379 evaluaciones, amenities del
 * listing (Wi-Fi, desayuno, estacionamiento, piscina, pet friendly,
 * recepción 24 h, cocina compartida, jardín, terraza, tours) y las
 * reseñas citadas. Fotos reales del perfil en public/demos/hostel-1760/.
 */
export const BIZ = {
  name: 'Hostel 1760',
  short: 'Hostel 1760',
  rubro: 'Hostal y hospedaje',
  address: '3 Sur 1760',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7615 1994',
  phoneTel: '+56976151994',
  whatsapp: '56976151994',
  email: 'hostel1760talca@gmail.com',
  googleRating: 3.9,
  googleReviews: 194,
  bookingRating: 8.2,
  bookingReviews: 379,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Hostel 1760 y quiero consultar disponibilidad',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hostel 1760, 3 Sur 1760, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Hostel 1760, 3 Sur 1760, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/hostel-1760'
