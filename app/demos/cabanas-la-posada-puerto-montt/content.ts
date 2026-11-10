/**
 * app/demos/cabanas-la-posada-puerto-montt/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps «Cabañas La Posada»,
 * verificada el 10-11-2026, y su distintivo de Booking.com):
 * - Nombre: «Cabañas La Posada» (Maps: cabañas de madera).
 * - Dirección: Calle Las Quemas 1470, Puerto Montt.
 * - Horario en Maps: abierto las 24 horas, todos los días.
 * - WhatsApp: +56 9 8548 3177.
 * - Reputación: 4,4 con 137 opiniones en Google; distintivo Traveller
 *   Review Awards 2025 de Booking.com, nota 9,2.
 * - Las tres citas de REVIEWS son textuales de Google, con nombre e
 *   inicial del apellido.
 * - Equipamiento y detalles (cocina con horno y refrigerador, comedor,
 *   baño con ducha, atención del propio dueño, estacionamiento junto a
 *   las cabañas, supermercado cerca, ubicación en un alto de la ciudad,
 *   lugar tranquilo y seguro) salen de las reseñas y fotos de la ficha.
 * - Fotos: todas de su ficha, en public/demos/cabanas-la-posada-puerto-montt/.
 * - Redes sociales: no confirmadas; no se muestran.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y rótulos gráficos. Sin precios
 * ni tarifas; los detalles se confirman por WhatsApp.
 */

export const BIZ = {
  name: 'Cabañas La Posada',
  short: 'La Posada',
  rubro: 'Cabañas de madera',
  address: 'Calle Las Quemas 1470',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 8548 3177',
  whatsapp: '56985483177',
  rating: '4,4',
  ratingValue: 4.4,
  reviews: 137,
  booking: '9,2',
} as const

export const WA_LINK =
  'https://wa.me/56985483177?text=Hola%20Caba%C3%B1as%20La%20Posada%2C%20quiero%20consultar%20disponibilidad'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas La Posada, Las Quemas 1470, Puerto Montt',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas La Posada, Las Quemas 1470, Puerto Montt',
)}&output=embed`

/** Opiniones textuales de Google (4,4 con 137 opiniones). */
export const REVIEWS = [
  {
    text: 'Excelente alternativa, cabañas limpias, bien equipadas, es un lugar seguro, atendido por el propio dueño.',
    author: 'Juan M.',
  },
  {
    text: 'Muy lindas cabañas! Está bien equipada para poder cocinar. Todo limpio e impecable. Buenos colchones. Y tranquilo para descansar!',
    author: 'Irina P.',
  },
  {
    text: 'Buenas cabañas con todo lo necesario, excelente atención, muy buena ubicación para moverse desde y hacia Puerto Montt.',
    author: 'Jaime G.',
  },
] as const

export const IMG = '/demos/cabanas-la-posada-puerto-montt'
