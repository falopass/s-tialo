/**
 * app/demos/hotel-marcos-gamero/content.ts
 *
 * Datos verificados (ficha pública de Google Maps + sitio oficial
 * hotelmarcosgamero.cl, sept. 2026): nombre, categoría (hotel 4 estrellas),
 * dirección en 1 Oriente 1070, Talca, teléfono +56 71 222 3388, correo de
 * reservas, web, redes, nota 4,6 y las 389 reseñas de Google. Las reseñas
 * citadas son textuales de Google/Tripadvisor. Fotos: sitio oficial del hotel.
 */

export const BIZ = {
  name: 'Hotel Marcos Gamero',
  short: 'Marcos Gamero',
  rubro: 'Hotel boutique · 4 estrellas',
  address: '1 Oriente 1070',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 222 3388',
  phoneTel: '+56712223388',
  email: 'reservas@marcosgamero.cl',
  web: 'https://hotelmarcosgamero.cl',
  instagram: 'https://www.instagram.com/hotel_marcosgamero/',
  facebook: 'https://web.facebook.com/hotelmarcosgamero/',
  rating: 4.6,
  reviews: 389,
} as const

export const TEL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hotel Marcos Gamero, 1 Oriente 1070, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Hotel Marcos Gamero, 1 Oriente 1070, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/hotel-marcos-gamero'
