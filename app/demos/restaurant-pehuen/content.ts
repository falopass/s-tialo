/**
 * app/demos/restaurant-pehuen/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps + SERNATUR y el
 * pendón del propio local): nombre (ficha "Pehuen Restaurant"), dirección
 * (Max Jara 33, Yerbas Buenas), teléfonos (el pendón pintado en la fachada
 * muestra +56 9 4575 2242; el volante de sushi muestra delivery
 * +56 9 7902 3314), rating 4,1 con 95 reseñas, "comida casera típica
 * chilena" de día y "Pehuen Sushi" de noche con sus precios de promoción
 * del volante real, y las 3 reseñas citadas (texto original).
 */

export const BIZ = {
  name: 'Restaurant Pehuén',
  short: 'Pehuén',
  rubro: 'Cocina chilena de día · Sushi de noche',
  address: 'Max Jara 33',
  city: 'Yerbas Buenas',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4575 2242',
  phoneTel: '+56945752242',
  whatsapp: '56945752242',
  sushiDeliveryDisplay: '+56 9 7902 3314',
  sushiDeliveryTel: '+56979023314',
  rating: 4.1,
  reviews: 95,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant Pehuén y quiero consultar por el menú de hoy',
)}`

export const WA_LINK_SUSHI = `https://wa.me/${BIZ.sushiDeliveryTel}?text=${encodeURIComponent(
  'Hola, vi la página de Pehuén y quiero pedir sushi con delivery',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Pehuen Restaurant, Max Jara 33, Yerbas Buenas',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pehuen Restaurant, Max Jara 33, Yerbas Buenas, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/restaurant-pehuen'
