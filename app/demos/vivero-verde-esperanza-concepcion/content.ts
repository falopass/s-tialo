/**
 * app/demos/vivero-verde-esperanza-concepcion/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps e Instagram
 * @viveromovilverde, verificados el 12-11-2026; publicación en un
 * grupo de Facebook):
 * - «Vivero Verde Esperanza» (en Maps e Instagram: «Vivero móvil verde
 *   esperanza»), un vivero móvil: «trabajamos principalmente a
 *   domicilio» (bio de Instagram).
 * - Repartos por rutas anunciados en Instagram (han ido a Cañete,
 *   Lota, Arauco, Curanilahue y Los Álamos), despachos a todo Chile y
 *   retiro en el local (publicación en Facebook).
 * - Local: Rodolfo Briceño 200 A, Concepción. Horario de Maps: lunes
 *   11:00 a 17:30, martes a jueves 11:00 a 17:00, viernes 11:00 a
 *   16:30; sábado y domingo cerrado.
 * - WhatsApp +56 9 4252 6193 («pide tu catálogo con precios», bio).
 * - Plantas de sus publicaciones: kiri o paulownia («árbol de rápido
 *   crecimiento, ideal para sombra y madera», textual), magnolios,
 *   hortensias variegadas, abedul, avellano, camelias y árboles de
 *   patio.
 * - Google: la ficha tiene reclamos; no se muestran nota ni opiniones.
 * DE MUESTRA: titulares, bajadas y textos de apoyo. Sin precios ni
 * fechas de rutas (el catálogo con precios se pide por WhatsApp).
 */

export const BIZ = {
  name: 'Vivero Verde Esperanza',
  short: 'Verde Esperanza',
  rubro: 'Vivero móvil',
  address: 'Rodolfo Briceño 200 A',
  city: 'Concepción',
  region: 'Región del Biobío',
  phoneDisplay: '+56 9 4252 6193',
  whatsapp: '56942526193',
  instagram: 'https://www.instagram.com/viveromovilverde/',
  instagramUser: '@viveromovilverde',
} as const

export const WA_LINK =
  'https://wa.me/56942526193?text=Hola%20Vivero%20Verde%20Esperanza%2C%20quiero%20pedir%20el%20cat%C3%A1logo'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vivero móvil verde esperanza, Rodolfo Briceño 200, Concepción, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Vivero móvil verde esperanza, Rodolfo Briceño 200, Concepción, Chile',
)}&output=embed`

export const HORARIO = [
  { d: 'Lunes', h: '11:00 a 17:30' },
  { d: 'Martes a jueves', h: '11:00 a 17:00' },
  { d: 'Viernes', h: '11:00 a 16:30' },
  { d: 'Sábado y domingo', h: 'Cerrado' },
] as const

/** Comunas por donde ha pasado el reparto, según sus publicaciones. */
export const LUGARES = [
  'Cañete',
  'Lota',
  'Arauco',
  'Curanilahue',
  'Los Álamos',
] as const

/** Especies ofrecidas en sus publicaciones. */
export const PLANTAS = [
  'Kiri (paulownia)',
  'Magnolios',
  'Hortensias variegadas',
  'Abedul',
  'Avellano',
  'Camelias',
  'Árboles de patio',
] as const

export const IMG = '/demos/vivero-verde-esperanza-concepcion'
