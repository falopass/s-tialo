/**
 * app/demos/restaurant-la-esquina/content.ts
 *
 * Datos verificados de la ficha de Google Maps de Restaurant y
 * Residencial «La Esquina» (Arturo Prat 223, Empedrado):
 * - Restaurante · 4,1 estrellas · 53 reseñas.
 * - Horario: lunes a viernes 8:30–22:00, sábado 10:00–22:00,
 *   domingo cerrado.
 * - Teléfono: +56 9 9014 0680.
 * - El nombre legal incluye la residencial: en el mismo edificio
 *   de la esquina funcionan el restaurant y las piezas de arriendo,
 *   además de un punto CajaVecina (letrero de la fachada).
 * - La carta se toma de la pizarra real de la vereda: desayunos,
 *   almuerzos, completos, cenas, pollo con papas, chorrillana,
 *   sandwich y empanadas de queso camarón.
 */

export const BIZ = {
  name: 'Restaurant y Residencial La Esquina',
  short: 'La Esquina',
  rubro: 'Restaurant y residencial',
  address: 'Arturo Prat 223',
  city: 'Empedrado',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9014 0680',
  whatsapp: '56990140680',
  rating: 4.1,
  reviews: 53,
  hours: [
    ['Lun a vie', '8:30 – 22:00'],
    ['Sábado', '10:00 – 22:00'],
    ['Domingo', 'Cerrado'],
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant La Esquina y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant La Esquina y quiero reservar',
)}`

export const MAPS_QUERY = 'Restaurant La Esquina, Arturo Prat 223, Empedrado, Chile'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY,
)}&output=embed`

export const IMG = '/demos/restaurant-la-esquina'

/** La pizarra real de la vereda, tal como está escrita en la fachada. */
export const PIZARRA = [
  'Desayunos',
  'Almuerzos',
  'Completos',
  'Cenas',
  'Pollo c/papas',
  'Chorrillana',
  'Sandwich',
  'Empanadas queso camarón',
] as const

/** Reseñas reales de la ficha de Google (4,1 estrellas, 53 reseñas). */
export const RESENAS = [
  {
    texto: 'Excelente comida y atención! 100% recomendado.',
    autor: 'Javiera Martínez',
    estrellas: 5,
  },
  {
    texto: 'Un restaurant de barrio donde se come bien y rico.',
    autor: 'Tomas Andrades',
    estrellas: 5,
  },
  {
    texto: 'Muy limpio, gastronomía poco variada.',
    autor: 'Julio Humberto Arellano',
    estrellas: 3,
  },
] as const
