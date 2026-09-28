/**
 * app/demos/bravosgym/content.ts
 *
 * Datos del mockup. REALES (ficha pública): nombre, rubro, dirección
 * (Pje. 3 1657, Molina), el 5,0 de Google, la reseña citada de su
 * ficha, las fotos del local, el logo naranjo "B", el Instagram
 * @bravosgym_ (252 seguidores) y el WhatsApp. Todo lo demás
 * (servicios, horarios, precios y textos) es contenido de muestra
 * para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Bravosgym',
  short: 'Bravosgym',
  rubro: 'Gimnasio',
  address: 'Pje. 3 1657',
  commune: '3381650 Molina, Maule',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6202 3843',
  phoneTel: '+56962023843',
  whatsapp: '56962023843',
  reviews: 1,
  instagram: 'bravosgym_',
  instagramFollowers: 252,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Bravosgym y quiero consultar por los planes',
)}`

export const WA_LINK_VISITA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Bravosgym y quiero agendar una visita',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Bravosgym, Pje. 3 1657, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pje. 3 1657, 3381650 Molina, Maule, Chile',
)}&output=embed`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const IMG = '/demos/bravosgym'
