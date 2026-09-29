/**
 * app/demos/restaurant-mane/content.ts
 *
 * Datos del mockup. REALES: ficha de Google Maps ("Restaurant Mane",
 * Av. Diego Portales N°21, Rauco — rating 4,6 con 43 reseñas, rango
 * $10.000–15.000 por persona) + su página de Facebook
 * (facebook.com/Restaurantmane: "Comida Tradicional — Disfruta el
 * verdadero sabor tradicional", servicios de eventos, banquetería y
 * coffee break). Los platos citados son los destacados de su ficha
 * (carne al jugo con papas al gratin, pollo al jugo con puré picante)
 * y los mencionados en reseñas (humitas, costillar, pastel de papas).
 * El letrero "Donde Mane" es foto real de su puerta.
 */

export const BIZ = {
  name: 'Mane',
  long: 'Restaurant Mane',
  rubro: 'Comida tradicional chilena',
  address: 'Av. Diego Portales N°21',
  city: 'Rauco',
  region: 'Región del Maule',
  phone: '56978733059',
  phoneDisplay: '+56 9 7873 3059',
  fb: 'facebook.com/Restaurantmane',
  rating: 4.6,
  ratingLabel: '4,6',
  reviews: '43',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant Mane y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurant Mane, Av. Diego Portales 21, Rauco, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurant Mane, Av. Diego Portales 21, Rauco, Chile',
)}&output=embed`

export const IMG = '/demos/restaurant-mane'
