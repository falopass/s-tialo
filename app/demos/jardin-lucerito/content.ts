/**
 * app/demos/jardin-lucerito/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps "Jardín
 * Lucerito", Talca): nombre, dirección (Diez 1/2 Sur 1, Población
 * Carlos Trupp), teléfono y rating/reseñas. De su ficha pública
 * JUNJI/SEA: jardín y sala cuna público, 85 días a 3 años 11 meses,
 * sello medioambientalista y actividades de cuidado ambiental.
 * Lo que no está confirmado (horarios, vacantes) se omite.
 */

export const BIZ = {
  name: 'Jardín Lucerito',
  short: 'Lucerito',
  comuna: 'Talca',
  region: 'Región del Maule',
  address: 'Diez 1/2 Sur 1, Población Carlos Trupp, Talca',
  phoneDisplay: '+56 9 3917 2265',
  phoneTel: '+56939172265',
  whatsapp: '56939172265',
  rating: 4.1,
  ratingLabel: '4,1',
  reviews: 55,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Jardín Lucerito y quiero consultar por matrícula',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Jardín Lucerito, Diez 1/2 Sur 1, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Jardín Lucerito, Diez 1/2 Sur 1, Talca',
)}&output=embed`
