/**
 * app/demos/peppo-las-rastras/content.ts
 *
 * Datos del demo, verificados el 2026-09-29 en la ficha de Google Maps
 * de Peppo Las Rastras y en su sitio peppo.cl:
 *  - Nombre: "Peppo Las Rastras" (restaurante chileno)
 *  - Dirección: 2 Nte. 3230, Local B C D, Talca
 *  - Teléfono: +56 9 4495 7289 (mismo que entregó el contacto)
 *  - Web: peppo.cl · IG: @peppo_restaurant (desde peppo.cl)
 *  - Horario: lun-sáb 12:00–23:00, dom 13:00–22:00
 *  - Google: 4.3 estrellas, 443 reseñas
 *  - Marca real: "Parrilladas · Sandwich · Cafetería", "Rico en
 *    tradición, desde 1999" (sello del sitio oficial)
 * Las reseñas citadas son textos reales de la ficha. Los platos
 * nombrados salen de lo que la gente menciona en Google (parrilla,
 * pastas, mariscos, sándwiches, jugos naturales); no se publican
 * precios porque el local no los tiene en línea.
 */

export const BIZ = {
  name: 'Peppo Las Rastras',
  short: 'Peppo',
  rubro: 'Restaurante chileno',
  address: '2 Nte. 3230, Local B C D',
  city: 'Talca',
  hood: 'Las Rastras',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4495 7289',
  phoneTel: '+56944957289',
  whatsapp: '56944957289',
  site: 'https://peppo.cl',
  siteHost: 'peppo.cl',
  instagram: 'https://www.instagram.com/peppo_restaurant',
  igUser: '@peppo_restaurant',
  rating: 4.3,
  reviews: 443,
  since: '1999',
  hoursWeek: 'Lun a Sáb · 12:00–23:00',
  hoursSun: 'Dom · 13:00–22:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Peppo Las Rastras y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar mesa en Peppo Las Rastras',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Peppo Las Rastras, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Peppo Las Rastras, 2 Norte 3230, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/peppo-las-rastras'
