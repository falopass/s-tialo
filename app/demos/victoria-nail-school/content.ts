/**
 * app/demos/victoria-nail-school/content.ts
 *
 * Datos del mockup. REALES (ficha pública): nombre, rubro, dirección,
 * comuna, WhatsApp, cuenta de Instagram (~75 mil seguidores) y las 3
 * reseñas de Google. Todo lo demás (servicios, precios, horarios y
 * textos de reseñas) es contenido de muestra para mostrar cómo se
 * vería el sitio.
 */

export const BIZ = {
  name: 'Victoria Nail School®',
  short: 'Victoria Nail School',
  rubro: 'Salón de manicura y pedicura',
  address: 'Brisas de Pencahue 2, Pasaje 3 245, calle 5',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4543 6704',
  phoneTel: '+56945436704',
  whatsapp: '56945436704',
  instagram: '@victorianailschool_',
  instagramUrl: 'https://www.instagram.com/victorianailschool_',
  followers: '75 mil',
  reviews: 3,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Victoria Nail School y quiero agendar una hora',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Victoria Nail School, Pencahue, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Brisas de Pencahue 2, Pasaje 3, Pencahue, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/victoria-nail-school'
