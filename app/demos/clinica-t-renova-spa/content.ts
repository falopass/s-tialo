/**
 * app/demos/clinica-t-renova-spa/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro (tienda de belleza y
 * salud), dirección (Kurt Moller 23, Linares), WhatsApp móvil
 * (9 7349 6860, página de agenda AgendaPro), canal wa.me/trenovaspa
 * y las 109 reseñas de la ficha de Google.
 * Todo lo demás (servicios, proceso, precios, reseñas textuales y
 * fotos) es contenido de ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Clínica T-Renova SPA',
  short: 'T-Renova',
  rubro: 'Tienda de belleza y salud',
  address: 'Kurt Moller 23',
  addressFull: 'Kurt Moller 23, 3581072 Linares, Maule',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7349 6860',
  phoneTel: '+56973496860',
  whatsapp: '56973496860',
  waChannel: 'https://wa.me/trenovaspa',
  waChannelUser: 'trenovaspa',
  reviews: 109,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica T-Renova y quiero consultar por una hora',
)}`

export const WA_LINK_SERVICIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica T-Renova y quiero consultar por un tratamiento',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica T-Renova SPA, Kurt Moller 23, Linares, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clínica T-Renova SPA, Kurt Moller 23, Linares, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/clinica-t-renova-spa'
