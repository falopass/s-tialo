/**
 * app/demos/clinica-t-renova-spa/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, AgendaPro, Facebook e
 * Instagram del negocio): nombre, dirección (Kurt Moller 23, Linares),
 * WhatsApp móvil (9 7349 6860), canal wa.me/trenovaspa, 4.7 estrellas con
 * 109 reseñas en Google, 5,2 mil seguidores en Facebook
 * (facebook.com/trenovaspa, 92% recomienda con 17 reseñas), Instagram
 * @clinica_trenova y los servicios publicados en sus redes (masajes,
 * limpieza facial, pestañas, uñas, sport recovery, podología clínica).
 * Las reseñas textuales son de ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Clínica T-Renova SPA',
  short: 'T-Renova',
  rubro: 'Clínica y spa',
  tagline: 'Un oasis de relajación',
  address: 'Kurt Moller 23',
  addressRef: 'frente a Kovacs, a pasos del Espacio Urbano',
  addressFull: 'Kurt Moller 23, 3581072 Linares, Maule',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7349 6860',
  phoneTel: '+56973496860',
  whatsapp: '56973496860',
  waChannel: 'https://wa.me/trenovaspa',
  waChannelUser: 'trenovaspa',
  rating: '4,7',
  reviews: 109,
  facebook: 'https://www.facebook.com/trenovaspa/',
  fbFollowers: '5,2 mil',
  instagram: 'clinica_trenova',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica T-Renova y quiero consultar por una hora',
)}`

export const waServicio = (servicio: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página de Clínica T-Renova y quiero consultar por ${servicio}`,
  )}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica T-Renova SPA, Kurt Moller 23, Linares, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clínica T-Renova SPA, Kurt Moller 23, Linares, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/clinica-t-renova-spa'
