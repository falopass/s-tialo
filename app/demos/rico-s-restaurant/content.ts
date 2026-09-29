/**
 * app/demos/rico-s-restaurant/content.ts
 *
 * Datos reales de la ficha de Google Maps de Rico's Restaurant
 * (Balmaceda 1891, San Javier): dirección, teléfono, 4,4★ y 409 reseñas.
 * Las reseñas citadas son reales (Google). En la ficha el local figura
 * "cerrado temporalmente" — se informa tal cual. Sitio: ricosrestaurant.cl
 */

export const BIZ = {
  name: "Rico's Restaurant",
  short: "Rico's",
  rubro: 'Restaurant, parrilla y banquetería',
  address: 'Balmaceda 1891',
  city: 'San Javier de Loncomilla',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7513 0588',
  phoneTel: '+56975130588',
  whatsapp: '56975130588',
  web: 'ricosrestaurant.cl',
  rating: 4.4,
  reviews: 409,
  precio: '$5.000 – $10.000 por persona',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  "Hola, vi la página de Rico's Restaurant y quiero consultar",
)}`

export const WA_LINK_EVENTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  "Hola, vi la página de Rico's Restaurant y quiero cotizar banquetería para un evento",
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Rico's Restaurant, Balmaceda 1891, San Javier, Chile",
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Rico's Restaurant, Balmaceda 1891, San Javier, Chile",
)}&output=embed`

export const IMG = '/demos/rico-s-restaurant'
