/**
 * app/demos/club-union-social/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + reseñas + nota de
 * prensa de El Amaule sobre la casona restaurada): nombre, dirección,
 * teléfono, horario, rating, servicios y las reseñas citadas.
 * La historia del inmueble (casona patrimonial, salón con piso de
 * ajedrez, salón Verdejo) viene de la nota periodística citada.
 */

export const BIZ = {
  name: 'Club Unión Social',
  rubro: 'Club y restaurante',
  address: '3 Oriente 1040',
  city: 'Talca',
  region: 'Región del Maule',
  phone: '56931307504',
  phoneDisplay: '+56 9 3130 7504',
  rating: 4.5,
  ratingLabel: '4,5',
  reviews: 138,
  hours: [
    { d: 'Lunes a sábado', h: '12:00–21:00' },
    { d: 'Domingo', h: '13:00–15:30' },
  ],
  servicios: ['Consumo en el lugar', 'Para llevar'],
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página del Club Unión Social y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Club Unión Social, 3 Oriente 1040, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Club Unión Social, 3 Oriente 1040, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/club-union-social'
