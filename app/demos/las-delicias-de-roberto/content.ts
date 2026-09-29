/**
 * app/demos/las-delicias-de-roberto/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): restaurante
 * "Las Delicias de Roberto" en Victoria 453, Cauquenes — el local con el
 * letrero de la foto (se trasladó desde su ubicación original junto al
 * terminal). De su propio letrero de bienvenida se confirma que reciben
 * vales Junaeb, Sodexo, Amipass y Ticket Restaurant, y el local queda
 * frente a la Plaza de Cauquenes (verificable en Street View).
 * Teléfono/WhatsApp verificado: no sale en la ficha de Maps (sin
 * reclamar), pero lo confirman los directorios restaurantess.cl y
 * chilopina.com para la dirección de Victoria, y el pendón fotografiado
 * en el local antiguo del terminal muestra el mismo número.
 * Horario y reseñas: los directorios que recopilan la ficha de Google
 * publican horario (L–V 11:30–21:00, sábado 12:00–22:00, domingo
 * 13:30–16:00) y ~12 opiniones con nota 3,8; las citas de REVIEWS son
 * textos reales de esa ficha (autores firmados con iniciales).
 * Los ítems de la carta son los publicados en su propio pendón
 * (colaciones, completos, churrascos, pizzas, salchipapas, papas fritas,
 * empanadas de queso); el menú del día no está publicado.
 */

export const BIZ = {
  name: 'Las Delicias de Roberto',
  short: 'Delicias de Roberto',
  rubro: 'Restaurante',
  address: 'Victoria 453',
  city: 'Cauquenes',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7903 3952',
  phoneTel: '+56979033952',
  whatsapp: '56979033952',
  frente: 'frente a la Plaza de Cauquenes',
  rating: '3,8',
  reviews: 12,
  hours: [
    ['Lunes a viernes', '11:30–21:00'],
    ['Sábado', '12:00–22:00'],
    ['Domingo', '13:30–16:00'],
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Las Delicias de Roberto, vi su página y quiero consultar por el almuerzo',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Las+Delicias+de+Roberto+Cauquenes'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Victoria 453, Cauquenes, Chile',
)}&output=embed`

export const IMG = '/demos/las-delicias-de-roberto'

/** Vales confirmados del letrero real del local. */
export const VALES = ['Junaeb', 'Sodexo', 'Amipass', 'Ticket Restaurant'] as const

/** Reseñas reales publicadas en Google (los autores firman con iniciales). */
export const REVIEWS = [
  {
    author: 'A. L. M.',
    text: 'Es un hermoso lugar, muy acogedor y hogareño. La comida exquisita y abundante. La atención del joven es excelente, muy cordial y atento. Recomendable.',
    stars: 5,
  },
  {
    author: 'M. M.',
    text: 'Las 3 B, muy acogedor y rica la comida.',
    stars: 5,
  },
  {
    author: 'C. P. M.',
    text: 'Muy bien lugar, económico, súper bien atendidos.',
    stars: 5,
  },
] as const
