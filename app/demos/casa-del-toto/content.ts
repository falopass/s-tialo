/**
 * app/demos/casa-del-toto/content.ts
 *
 * Datos del mockup. REALES y verificados (29-09-2026):
 * - Ficha de Google Maps «casa del toto» (restaurante): Av. Quilvo,
 *   Romeral, Maule; teléfono +56 9 3021 4483; nota 4,3 con 12 opiniones.
 *   ATENCIÓN: la ficha marca «Cerrado temporalmente» — el sitio lo
 *   declara y no promete atención ni carta vigente.
 * - No se encontró Instagram/Facebook público verificable del local
 *   (los candidatos no exponen datos o piden login); se omite la red.
 * - Sin carta ni horario publicados: la sección de platos se presenta
 *   como propuesta de muestra, marcada como bosquejo, sin afirmar que
 *   es la carta real.
 * - Reseñas: texto real de la ficha de Google (autor y nota), tal cual.
 * - Fotos: solo 3 imágenes reales verificadas del lugar (ficha de Maps /
 *   Street View de Av. Quilvo); no se rellena con fotos ajenas.
 *   El mantel cuadrillé es un motivo CSS, no una imagen generada.
 */

export const BIZ = {
  name: 'Casa del Toto',
  short: 'El Toto',
  rubro: 'Casa de comidas',
  address: 'Av. Quilvo',
  city: 'Romeral',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3021 4483',
  phoneTel: '+56930214483',
  whatsapp: '56930214483',
  rating: 4.3,
  reviews: 12,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Casa del Toto en Romeral y quiero consultar si están atendiendo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Casa del Toto, Av. Quilvo, Romeral, Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Casa del Toto, Av. Quilvo, Romeral, Maule',
)}&output=embed`

export const IMG = '/demos/casa-del-toto'
