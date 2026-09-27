/**
 * app/demos/ferreteria-la-ruta/content.ts
 *
 * Datos del mockup. REALES (ficha pública): nombre, rubro, dirección,
 * comuna, WhatsApp, Facebook y las 71 reseñas de Google Maps. Todo lo
 * demás (productos, precios, servicios, horarios y testimonios) es
 * contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Ferretería La Ruta',
  short: 'La Ruta',
  rubro: 'Tienda de herramientas',
  address: 'Villa Santa Inés – K-60',
  postal: '3550000',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4275 4213',
  phoneTel: '+56942754213',
  whatsapp: '56942754213',
  reviews: 71,
  facebook: 'https://www.facebook.com/laruta.ferreteria.7',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ferretería La Ruta y quiero consultar por un producto',
)}`

export const WA_LINK_STOCK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ferretería La Ruta y quiero consultar stock y precio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ferretería La Ruta, K-60, Villa Santa Inés, Pencahue, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Villa Santa Inés K-60, Pencahue, Chile',
)}&output=embed`

export const IMG = '/demos/ferreteria-la-ruta'
