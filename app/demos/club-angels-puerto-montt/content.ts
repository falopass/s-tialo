/**
 * app/demos/club-angels-puerto-montt/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps "Discotheque Club
 * Angels", verificada el 10-11-2026):
 * - Nombre: Club Angels (la barra lleva el sello "#NightLife").
 * - Dirección: Av. Chinquihue, Puerto Montt (sin número publicado).
 * - Maps la marca como amigable con LGBTQ+; sus fotos muestran el muro
 *   de franjas arcoíris y la bandera del orgullo en el escenario.
 * - Horario confirmado en Maps: viernes desde las 23:00. Las reseñas
 *   hablan también de noches de sábado; el resto se consulta por
 *   WhatsApp.
 * - WhatsApp +56 9 9065 1389; 186 opiniones en Google (sin nota a
 *   pedido del brief).
 * - Las tres citas son textuales de su ficha (Lisette C., Marcos C.,
 *   Roberto B.). Las reseñas confirman: varios espacios, pista con
 *   luces, barra con tragos, shows drag, noches temáticas, música
 *   electrónica y reggaeton, ambiente respetuoso y seguro, y lista
 *   para la entrada.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y epígrafes de fotos. Sin
 * precios ni fechas de eventos, que el negocio no publica en Maps.
 */

export const BIZ = {
  name: 'Club Angels',
  short: 'Club Angels',
  rubro: 'Discoteca',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  address: 'Av. Chinquihue, Puerto Montt',
  phoneDisplay: '+56 9 9065 1389',
  whatsapp: '56990651389',
  reviews: 186,
} as const

export const WA_LINK =
  'https://wa.me/56990651389?text=Hola%20Club%20Angels%2C%20quiero%20saber%20qu%C3%A9%20hay%20este%20fin%20de%20semana'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Discotheque Club Angels, Av. Chinquihue, Puerto Montt',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Discotheque Club Angels, Av. Chinquihue, Puerto Montt',
)}&output=embed`

export const IMG = '/demos/club-angels-puerto-montt'

/** Opiniones textuales de su ficha de Google. */
export const REVIEWS = {
  lisette:
    'Agradable lugar, varios espacios disponibles, los baños están bien y la verdad es que lo más importante es el ambiente respetuoso y seguro, nunca me había sentido tan segura bailando reggaeton en un local con mis amigas.',
  marcos: 'Muy buen show de las drag y buena atención de los garzones.',
  roberto:
    'Me agradó por la música. Hubo varias canciones favoritas que me ayudaron a entrar en confianza.',
} as const
