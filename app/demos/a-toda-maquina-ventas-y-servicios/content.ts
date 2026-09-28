/**
 * app/demos/a-toda-maquina-ventas-y-servicios/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio): nombre,
 * rubro, dirección, comuna, WhatsApp, Facebook y las 23 reseñas en
 * Google Maps. Todo lo demás (servicios, precios, horarios y textos de
 * reseñas) es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'A Toda Maquina Ventas y Servicios',
  short: 'A Toda Maquina',
  rubro: 'Tienda de máquinas de coser',
  address: 'Alfarfares 808',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8204 7466',
  phoneTel: '+56982047466',
  whatsapp: '56982047466',
  facebook: 'gloriaatodamaquina',
  googleReviews: '23',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de A Toda Maquina y quiero consultar por una máquina de coser',
)}`

export const WA_LINK_SERVICIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de A Toda Maquina y quiero consultar por servicio técnico para mi máquina de coser',
)}`

export const FACEBOOK_URL = `https://www.facebook.com/${BIZ.facebook}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'A Toda Maquina Ventas y Servicios, Linares, Región del Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'A Toda Maquina Ventas y Servicios, Linares, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/a-toda-maquina-ventas-y-servicios'
