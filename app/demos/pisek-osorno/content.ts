/**
 * app/demos/pisek-osorno/content.ts
 *
 * Datos del mockup. REALES (verificados el 7-11-2026):
 * - Nombre, lema y rubro: ficha de Google Maps "Pisek Osorno" y su
 *   Facebook PisekOsorno ("Gran variedad de productos con un alto
 *   nivel de servicio."). Logo propio: "Písek, Sácate partido.".
 * - Dirección: Patricio Lynch 1384, Osorno (Maps y su logo).
 * - Horario de Maps: lunes a viernes 9:30-18:00, sábado 10:00-14:00,
 *   domingo cerrado.
 * - WhatsApp +56 9 9240 0832 · Facebook /PisekOsorno · Instagram
 *   @pisek.osorno.
 * - Lo que venden (de sus propias publicaciones): peluquería
 *   (tratamientos y líneas capilares, tinturas, planchas y
 *   herramientas), barbería (máquinas y trimmers), uñas (kits de
 *   manicure, geles, removedores, limas, acrílico), maquillaje y
 *   perfumería; para profesionales y para uso en casa. Marcas que
 *   muestran en sus fotos: Haskell, BaByliss PRO y L'Oréal.
 * - La cita de Constanza C. es textual de su ficha de Google.
 *   Por encargo del brief NO se muestra nota ni estrellas.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y rótulos (sin precios ni
 * stock, que el negocio confirma por WhatsApp).
 */

export const BIZ = {
  name: 'Písek',
  short: 'Písek',
  rubro: 'Tienda de productos de belleza y peluquería',
  city: 'Osorno',
  region: 'Región de Los Lagos',
  address: 'Patricio Lynch 1384',
  lema: 'Sácate partido.',
  descripcion: 'Gran variedad de productos con un alto nivel de servicio.',
  phoneDisplay: '+56 9 9240 0832',
  phoneTel: '+56992400832',
  whatsapp: '56992400832',
  instagram: 'https://www.instagram.com/pisek.osorno/',
  instagramUser: '@pisek.osorno',
  facebook: 'https://www.facebook.com/PisekOsorno/',
  horario: [
    { dias: 'Lunes a viernes', horas: '9:30 a 18:00' },
    { dias: 'Sábado', horas: '10:00 a 14:00' },
    { dias: 'Domingo', horas: 'Cerrado' },
  ],
} as const

export const WA_LINK =
  'https://wa.me/56992400832?text=Hola%20P%C3%ADsek%2C%20quiero%20consultar%20por%20un%20producto'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Písek, Patricio Lynch 1384, Osorno, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Patricio Lynch 1384, Osorno',
)}&output=embed`

export const IMG = '/demos/pisek-osorno'

/** Marcas que muestran en sus fotos, solo en texto (sin logos). */
export const MARCAS = ['Haskell', 'BaByliss PRO', "L'Oréal"] as const

/** Cita textual de su ficha de Google (sin nota ni estrellas). */
export const REVIEW = {
  text: 'Me gusta la variedad de marcas y productos que tienen, siempre tienen los colores de tinte que suelo ocupar a diferencia de otras tiendas',
  author: 'Constanza C.',
} as const
