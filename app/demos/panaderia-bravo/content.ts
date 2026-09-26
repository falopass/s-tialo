/**
 * app/demos/panaderia-bravo/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección y las 138 reseñas. El número de WhatsApp es de ejemplo —
 * reemplazar por el real antes de publicar. Todo lo demás
 * (productos, horarios, reseñas) es contenido de muestra para
 * mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Panadería Bravo',
  short: 'P. Bravo',
  rubro: 'Panadería y pastelería',
  address: 'Avenida Pte. 2123',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4617 2038',
  phoneTel: '+56946172038',
  whatsapp: '56946172038',
  reviews: 138,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Panadería Bravo y quiero hacer un pedido',
)}`

export const WA_LINK_TORTA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Panadería Bravo y quiero encargar una torta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Panadería Bravo, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Panadería Bravo, Avenida Pte. 2123, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/panaderia-bravo'
