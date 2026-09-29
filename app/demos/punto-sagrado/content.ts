/**
 * app/demos/punto-sagrado/content.ts
 *
 * Datos del mockup. REALES y verificados (29-09-2026):
 * - Ficha de Google Maps «Punto Sagrado spa»: bar restaurante en San
 *   Luis, Sagrada Familia, Maule; nota 4,3 con 17 reseñas; teléfono
 *   9 9469 0130; abre a las 9:00 (martes hasta 23:30 según la ficha;
 *   el resto de la semana no se pudo leer completo en vista limitada).
 * - Sin sitio web ni redes encontradas: el nombre viene de la ficha.
 * - Datos tomados de las fotos reales de la ficha: platos caseros
 *   (plateada con puré, palta reina, chorrillana con huevo, pescado
 *   frito con papas), mesas de madera y el comedor de paredes rojas
 *   con la pizarra del menú.
 * - Reseñas: texto real de la ficha de Google (autor, fecha y nota).
 *   Sin imágenes generadas en este demo.
 */

export const BIZ = {
  name: 'Punto Sagrado',
  short: 'Punto Sagrado',
  rubro: 'Bar restaurante',
  address: 'San Luis',
  city: 'Sagrada Familia',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9469 0130',
  phoneTel: '+56994690130',
  whatsapp: '56994690130',
  rating: 4.3,
  reviews: 17,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Punto Sagrado y quiero consultar por el menú',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Punto Sagrado spa, San Luis, Sagrada Familia',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Punto Sagrado spa, San Luis, Sagrada Familia, Región del Maule',
)}&output=embed`

export const IMG = '/demos/punto-sagrado'
