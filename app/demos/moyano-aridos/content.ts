/**
 * app/demos/moyano-aridos/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + página oficial
 * de Facebook facebook.com/moyanoaridos): nombre, rubro, dirección,
 * comuna, WhatsApp, horario, rating, textos de reseñas, logo y fotos.
 * El resto (lista de áridos, despacho y textos de apoyo) es contenido de
 * muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Moyano Áridos',
  short: 'Moyano Áridos',
  rubro: 'Venta de áridos y movimiento de tierras',
  address: 'Punta Diamante s/n, Bajos de Lircay',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5820 7376',
  phoneTel: '+56958207376',
  whatsapp: '56958207376',
  facebook: 'moyanoaridos',
  followers: '178',
  googleRating: '4,8',
  googleReviews: '8',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Moyano Áridos y quiero cotizar áridos para mi obra',
)}`

export const WA_LINK_RETRO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Moyano Áridos y quiero consultar por el servicio de retroexcavadora',
)}`

export const FACEBOOK_URL = `https://www.facebook.com/${BIZ.facebook}/`

export const MAPS_URL =
  'https://www.google.com/maps/place/MOYANO+ARIDOS/@-35.4926189,-71.3073164,17z/data=!4m6!3m5!1s0x966599aea0c09633:0xf98aa1c7198f8a93'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'MOYANO ARIDOS, Punta Diamante, San Clemente',
)}&output=embed`

export const IMG = '/demos/moyano-aridos'
