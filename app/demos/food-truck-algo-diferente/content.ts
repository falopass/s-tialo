/**
 * app/demos/food-truck-algo-diferente/content.ts
 *
 * Datos del mockup. REALES y verificados (29-09-2026):
 * - Ficha de Google Maps «Food Truck Algo Diferente»: Pasado Peaje
 *   Retiro Hacia el Sur, 3640000 Retiro, Maule; teléfono
 *   +56 9 6332 4640; nota 5,0 con 12 reseñas; horario Lun–Vie
 *   5:00–11:00, sábado y domingo cerrado.
 * - Carta real de la tarjeta del negocio (foto de la ficha): sandwich
 *   de lengua, churrasco queso, pernil, queso fresco, malaya,
 *   arrollado, ave-mayo y pimentón; consomé y pan amasado casero;
 *   atiende José Agurto Almuna; pago con tarjeta (Webpay).
 * - Reseñas: texto real de la ficha de Google (autor, fecha y nota).
 * - Fotos: descargadas de la ficha de Maps del negocio.
 *   Sin imágenes generadas en este demo.
 */

export const BIZ = {
  name: 'Food Truck Algo Diferente',
  short: 'Algo Diferente',
  rubro: 'Food truck',
  dueno: 'José Agurto Almuna',
  address: 'Pasado el peaje de Retiro, hacia el sur',
  city: 'Retiro',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6332 4640',
  phoneTel: '+56963324640',
  whatsapp: '56963324640',
  rating: 5.0,
  reviews: 12,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Algo Diferente y quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Food Truck Algo Diferente, Retiro, Región del Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Food Truck Algo Diferente, Pasado Peaje Retiro, Retiro, Región del Maule',
)}&output=embed`

export const IMG = '/demos/food-truck-algo-diferente'
