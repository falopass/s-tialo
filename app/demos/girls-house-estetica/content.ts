/**
 * app/demos/girls-house-estetica/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, carta de servicios
 * del propio estudio e Instagram): nombre, dirección (Quechereguas
 * 2120, Molina), WhatsApp, el Instagram del estudio @estetica.molina
 * (1.853 seguidores) y el de Vale, la dueña, @valeferrettimakeup
 * (5.784 seguidores). Los 11 servicios son los de su carta publicada;
 * el único precio citado ("masaje capilar full hidratación desde
 * $10.000") sale de una foto real de su ficha. La ficha de Google aún
 * no registra reseñas ni horario publicado.
 */

export const BIZ = {
  name: 'Girls House Estética',
  short: 'Girls House',
  rubro: 'Centro de estética',
  address: 'Quechereguas 2120',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5198 8641',
  phoneTel: '+56951988641',
  whatsapp: '56951988641',
  reviews: 0,
  instagram: 'estetica.molina',
  instagramFollowers: '1.853',
  duenaInstagram: 'valeferrettimakeup',
  duenaFollowers: '5.784',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Girls House Estética y quiero reservar una hora',
)}`

export const waLinkServicio = (servicio: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página de Girls House Estética y quiero reservar: ${servicio}`,
  )}`

export const IG_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const IG_DUENA_URL = `https://www.instagram.com/${BIZ.duenaInstagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Girls House Estética, Quechereguas 2120, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Quechereguas 2120, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/girls-house-estetica'
