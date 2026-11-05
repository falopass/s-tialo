/**
 * app/demos/baby-angus/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps y Facebook del
 * negocio, verificados oct-2026): nombre "Baby Angus Osorno", tienda
 * de ropa infantil en Consistorial 718 (Osorno, Los Lagos), WhatsApp
 * +56 9 8143 2351, Facebook facebook.com/babyangus2.0, rating 4,8 con
 * 17 opiniones en Google y última publicación de Facebook del
 * 22-10-2026. El horario NO está publicado: se omite y se deriva a
 * WhatsApp/Facebook. Las fotos son reales del negocio. Los textos de
 * las secciones son de muestra.
 */

export const BIZ = {
  name: 'Baby Angus Osorno',
  short: 'Baby Angus',
  rubro: 'Tienda de ropa infantil',
  address: 'Consistorial 718',
  city: 'Osorno',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 8143 2351',
  phoneTel: '+56981432351',
  whatsapp: '56981432351',
  facebook: 'https://m.facebook.com/babyangus2.0',
  fbUser: 'babyangus2.0',
  fbLastPost: '22 de octubre de 2026',
  rating: '4,8',
  reviews: 17,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Baby Angus y quiero consultar por la ropa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Baby Angus Osorno, Consistorial 718, Osorno, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Baby Angus Osorno, Consistorial 718, Osorno, Chile',
)}&output=embed`

export const IMG = '/demos/baby-angus'
