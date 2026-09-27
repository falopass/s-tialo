/**
 * app/demos/brutal-curico/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, dirección (Yungay 1065,
 * Curicó), WhatsApp, Instagram y las 917 reseñas de la ficha de
 * Google. Todo lo demás (servicios, planes, precios, horarios y
 * textos) es contenido de ejemplo para mostrar cómo se vería el
 * sitio: al publicar van los datos reales del gimnasio.
 */

export const BIZ = {
  name: 'Brutal Curicó',
  short: 'Brutal',
  rubro: 'Gimnasio',
  address: 'Yungay 1065',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6474 1978',
  phoneTel: '+56964741978',
  whatsapp: '56964741978',
  instagram: 'https://instagram.com/gimnasiobrutal/',
  instagramHandle: '@gimnasiobrutal',
  reviews: 917,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Brutal Curicó y quiero consultar por las membresías',
)}`

export const WA_LINK_CLASE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Brutal Curicó y quiero agendar una clase de prueba',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Brutal Curicó, Yungay 1065, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Yungay 1065, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/brutal-curico'
