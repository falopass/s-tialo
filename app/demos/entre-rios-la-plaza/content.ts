/**
 * app/demos/entre-rios-la-plaza/content.ts
 *
 * Datos del mockup. REALES: nombre y dirección por registro SERNATUR
 * ("Entre Ríos La Plaza", Carlos Silva Renard 712, San Clemente) +
 * ficha de Google Maps ("Entre Ríos Restaurant Delivery", misma
 * dirección, rating 4,2 con ~550 opiniones) + reseñas históricas.
 *
 * Nota de honestidad: la ficha actual de Google figura "cerrado
 * permanentemente", por eso este mockup no muestra horario ni afirma
 * que el local opera hoy. El celular es el publicado en el registro
 * SERNATUR del establecimiento.
 */

export const BIZ = {
  name: 'Entre Ríos',
  long: 'Entre Ríos La Plaza',
  rubro: 'Marisquería y cocina chilena',
  address: 'Carlos Silva Renard 712',
  city: 'San Clemente',
  region: 'Región del Maule',
  phone: '56988082453',
  phoneDisplay: '+56 9 8808 2453',
  rating: 4.2,
  ratingLabel: '4,2',
  reviews: '+500',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Entre Ríos y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Entre Ríos Restaurant, Carlos Silva Renard 712, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Entre Ríos Restaurant Delivery, Carlos Silva Renard 712, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/entre-rios-la-plaza'
