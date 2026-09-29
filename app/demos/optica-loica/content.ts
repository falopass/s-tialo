/**
 * app/demos/optica-loica/content.ts
 *
 * Datos del mockup. REALES y verificados (28-09-2026):
 * - Ficha de Google Maps «Óptica Loica» (Óptica): 31 1/2 Oriente 1590,
 *   Talca, Maule — teléfono +56 9 6545 2303, nota 5.0 y horario
 *   publicado solo para lunes: 10:00–20:00 (la ficha muestra
 *   «Abre a las 10 a.m.»).
 * - Instagram @optica_loica (confirmado: mismo logo «ópTICA Loica» que
 *   el letrero pintado en el muro de la tienda, 4 publicaciones):
 *   armazones ópticos, lentes de sol (Picazzio, Formosa, Bulberries
 *   Eyewear) y accesorios (cadena para lentes). Las fotos de productos
 *   vienen de ese perfil y de la ficha.
 * - La ficha no muestra cantidad de reseñas ni texto de opiniones:
 *   solo la nota 5.0. Por eso no hay testimonios citados, solo la
 *   nota en Google.
 */
export const BIZ = {
  name: 'Óptica Loica',
  short: 'Loica',
  rubro: 'Óptica',
  address: '31 1/2 Oriente 1590',
  addressFull: '31 1/2 Oriente 1590, Talca, Maule',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6545 2303',
  whatsapp: '56965452303',
  rating: 5.0,
} as const

export const waLink = (msg: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(msg)}`

export const WA_LINK = waLink(
  'Hola, vi la página de Óptica Loica y quiero consultar por armazones y lentes de sol',
)

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Óptica Loica, 31 1/2 Oriente 1590, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Óptica Loica, 31 1/2 Oriente 1590, Talca, Maule, Chile',
)}&output=embed`

export const INSTAGRAM_URL = 'https://www.instagram.com/optica_loica/'

// Único horario publicado en la ficha de Google Maps
export const HOURS = [{ d: 'Lunes', h: '10:00 – 20:00' }]

export const IMG = '/demos/optica-loica'
