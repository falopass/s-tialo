/**
 * app/demos/girls-house-estetica/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, dirección (Quechereguas
 * 2120, Molina), el Instagram @valeferrettimakeup (5.784 seguidores)
 * y el WhatsApp. La ficha de Google aún no registra reseñas. Todo lo
 * demás — servicios, precios, duraciones y horarios — es contenido
 * de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Girls House Estética',
  short: 'GIRLS HOUSE',
  rubro: 'Centro de estética',
  address: 'Quechereguas 2120',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5198 8641',
  phoneTel: '+56951988641',
  whatsapp: '56951988641',
  reviews: 0,
  instagram: 'valeferrettimakeup',
  instagramFollowers: '5.784',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Girls House Estética y quiero reservar una hora',
)}`

export const waLinkServicio = (servicio: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página de Girls House Estética y quiero reservar: ${servicio}`,
  )}`

export const IG_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Girls House Estética, Quechereguas 2120, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Quechereguas 2120, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/girls-house-estetica'
