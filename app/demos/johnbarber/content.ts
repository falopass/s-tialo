/**
 * app/demos/johnbarber/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio): nombre,
 * dirección, comuna, WhatsApp, Instagram (111 seguidores) y el dato de
 * 9 reseñas en Google Maps. Todo lo demás (servicios, precios, horarios
 * y textos) es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'JohnBarber',
  short: 'JohnBarber',
  rubro: 'Barbería',
  address: 'Brisas de Pencahue — 2 calle 5, pasaje 3',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4079 9207',
  phoneTel: '+56940799207',
  whatsapp: '56940799207',
  instagram: 'johnbarber43',
  instagramFollowers: '111',
  googleReviews: '9',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola JohnBarber, vi su página y quiero agendar una hora',
)}`

export const WA_LINK_BARBA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola JohnBarber, vi su página y quiero consultar por un arreglo de barba',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'JohnBarber, Brisas de Pencahue 2 calle 5 pasaje 3, Pencahue, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Brisas de Pencahue, Pencahue, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/johnbarber'
