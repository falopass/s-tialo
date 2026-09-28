/**
 * app/demos/alma-restaurant/content.ts
 *
 * Datos verificados en la ficha de Google Maps de «Alma restaurant»
 * (Camino a San Miguel 4943, Talca): teléfono, nota 4.5 con 20 reseñas
 * y horario publicado. Las reseñas citadas son reales de la ficha;
 * los platos corresponden a las fotos de la misma ficha.
 */

export const BIZ = {
  name: 'Alma restaurant',
  short: 'Alma',
  rubro: 'Restaurant y trattoria',
  address: 'Camino a San Miguel 4943, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6308 8830',
  phoneTel: '+56963088830',
  whatsapp: '56963088830',
  rating: 4.5,
  reviews: 20,
  hours: [
    ['Lunes', 'Cerrado'],
    ['Mar a jue', '13:00 - 22:00'],
    ['Vie y sáb', '13:00 - 23:30'],
    ['Domingo', '13:00 - 22:00'],
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Alma restaurant y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Alma restaurant, Camino a San Miguel 4943, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Alma restaurant, Camino a San Miguel 4943, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/alma-restaurant'
