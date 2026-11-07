/**
 * app/demos/barrakuda-villarrica/content.ts
 *
 * Datos del mockup. REALES (verificados el 7-11-2026 en fuentes del
 * propio negocio: ficha de Google Maps «BarraKuda» e Instagram
 * @barrakuda.bargrill):
 * - Nombre: «BarraKuda Bar & Grill» (su logo: «Barra Kuda, restaurant
 *   & bar»). Bio: «Gastronomía completa. Lo mejor para tu paladar.»
 * - Dirección: Av. Pedro de Valdivia 1110, Villarrica.
 * - Horario (Google Maps): lunes a sábado 12:30 a 00:00; domingo
 *   12:30 a 18:00.
 * - Reservas: WhatsApp +56 9 7657 2228 y +56 9 3388 7748 (los dos en
 *   su bio). Carta digital: micartaqr.cl/BARRAKUDA.
 * - Reputación: 4,6 con 196 opiniones en Google. Lo más mencionado:
 *   ambiente, ceviche, parrillada, ensalada, música, pisco sour,
 *   consomé, salmón, sopaipillas y brasero. Las citas de REVIEWS son
 *   textuales (Google Maps).
 * - Oferta (sus publicaciones): parrillada para 2 con vino y mejores
 *   cortes a las brasas; ceviches, chupe de locos, pailas marinas y
 *   salmón margarita; lomo a lo pobre, chorrillana, sándwiches y
 *   tablas; pisco sour, Barbie Drink (vodka, jugo de piña, granadina
 *   y leche condensada), happy hour y cerveza artesanal; música en
 *   vivo desde las 21:00 (baladas en español e inglés), karaoke y
 *   salones para eventos y celebraciones.
 * - Fotos: todas del negocio (Instagram, Facebook y ficha de Maps),
 *   en public/demos/barrakuda-villarrica/.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y rótulos gráficos. Sin
 * precios, sin promociones, sin días fijos de música, sin nombres de
 * personas.
 */

export const BIZ = {
  name: 'BarraKuda Bar & Grill',
  rubro: 'Restobar · parrilla, mariscos y coctelería',
  address: 'Av. Pedro de Valdivia 1110',
  city: 'Villarrica',
  phoneDisplay: '+56 9 7657 2228',
  phoneTel: '+56976572228',
  phone2Display: '+56 9 3388 7748',
  phone2Tel: '+56933887748',
  whatsapp: '56976572228',
  instagram: 'https://www.instagram.com/barrakuda.bargrill/',
  igUser: '@barrakuda.bargrill',
  rating: '4,6',
  ratingValue: 4.6,
  reviews: 196,
} as const

export const WA_LINK =
  'https://wa.me/56976572228?text=Hola%20BarraKuda%2C%20quiero%20reservar%20una%20mesa'

export const WA_EVENTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola BarraKuda, quiero cotizar un evento o celebración',
)}`

export const CARTA_URL = 'https://www.micartaqr.cl/BARRAKUDA'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'BarraKuda, Pedro de Valdivia 1110, Villarrica',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pedro de Valdivia 1110, Villarrica',
)}&output=embed`

/** Horario real de su ficha de Google Maps. */
export const HORARIO = [
  { dias: 'Lunes a sábado', horas: '12:30 a 00:00' },
  { dias: 'Domingo', horas: '12:30 a 18:00' },
] as const

/** Parrilla y clásicos, de sus propias publicaciones. */
export const PARRILLA = [
  { plato: 'Parrillada para 2', detalle: 'Con vino de la casa' },
  { plato: 'Cortes a las brasas', detalle: 'Los mejores cortes' },
  { plato: 'Lomo a lo pobre', detalle: 'El clásico contundente' },
  { plato: 'Chorrillana', detalle: 'Para el centro de la mesa' },
  { plato: 'Sándwiches', detalle: 'De la casa' },
  { plato: 'Tablas', detalle: 'Para compartir' },
] as const

/** Del mar, de sus propias publicaciones. */
export const DEL_MAR = [
  'Ceviches',
  'Chupe de locos',
  'Pailas marinas',
  'Salmón margarita',
  'Consomé',
  'Ensaladas',
] as const

/** La barra, de sus propias publicaciones. */
export const BARRA = [
  { trago: 'Pisco sour', detalle: 'El clásico de la casa' },
  {
    trago: 'Barbie Drink',
    detalle: 'Vodka, jugo de piña, granadina y leche condensada',
  },
  { trago: 'Cerveza artesanal', detalle: 'De la casa' },
  { trago: 'Happy hour', detalle: 'Consulta en la barra' },
] as const

/** Opiniones textuales de Google (4,6 con 196 opiniones). */
export const REVIEWS = [
  {
    text: 'Todo increíble, partiendo por la atención, nos atendió un joven, muy amable y muy atento, parrillada para 2, exquisita y contundente, cerveza artesanal, ensalada y buen vino, sin duda volvería',
    author: 'Carla B.',
  },
  {
    text: 'De casualidad con mi pareja llegamos a este restaurante y terminamos dejando una valoración por lo grato y bueno que estuvo comer ahí. Primero que todo, la atención de la garzona es muy buena y cordial. La comida 10/10 y bien abundante',
    author: 'Marlon J.',
  },
  {
    text: 'Una grata experiencia ... De cortesía unas sopaipillas recién elaboradas con pebre.',
    author: 'gusnucam',
  },
] as const

export const IMG = '/demos/barrakuda-villarrica'
