/**
 * app/demos/pasteleria-y-panaderia-eluney/content.ts
 *
 * Datos del mockup. REALES (ficha pública del negocio): nombre,
 * dirección K-45, comuna, WhatsApp, página de Facebook y el dato de
 * las 17 reseñas en Google Maps. Todo lo demás (productos, precios,
 * horarios y textos) es contenido de muestra para mostrar cómo se
 * vería el sitio.
 */

export const BIZ = {
  name: 'Pasteleria y panaderia Eluney',
  short: 'Eluney',
  rubro: 'Pastelería y panadería',
  address: 'K-45, Pelarco, Maule',
  city: 'Pelarco',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7436 7136',
  phoneTel: '+56974367136',
  whatsapp: '56974367136',
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
