/**
 * app/demos/pasteleria-y-panaderia-eluney/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección en la K-45, comuna, WhatsApp, página de Facebook,
 * 4,8 estrellas y 17 reseñas, y los horarios (lunes a viernes
 * 8:30-19:00, sábado 8:30-14:00). Los precios de la carta son de
 * muestra: no hay cartelera pública de precios confirmada.
 * Las fotos son las reales de la ficha de Google del negocio.
 */

export const BIZ = {
  name: 'Pastelería y panadería Eluney',
  short: 'Eluney',
  rubro: 'Pastelería y panadería',
  address: 'K-45, Pelarco, Maule',
  city: 'Pelarco',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7436 7136',
  phoneTel: '+56974367136',
  whatsapp: '56974367136',
  googleRating: '4,8',
  googleReviews: '17',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Eluney y quiero hacer un pedido',
)}`

export const WA_LINK_TORTA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Eluney y quiero consultar por una torta por encargo',
)}`

export const FACEBOOK_URL =
  'https://m.facebook.com/profile.php?id=100009213578754&ref=content_filter'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Pasteleria y panaderia Eluney, K-45, Pelarco, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'K-45, Pelarco, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/pasteleria-y-panaderia-eluney'
