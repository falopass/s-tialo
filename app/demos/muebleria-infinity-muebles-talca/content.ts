/**
 * app/demos/muebleria-infinity-muebles-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública): nombre, rubro, dirección,
 * Instagram y número de WhatsApp; también el conteo de reseñas de
 * Google (4). Todo lo demás (servicios, precios, horarios, reseñas)
 * es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Infinity Muebles',
  legal: 'Mueblería Infinity Muebles Talca',
  rubro: 'Carpintería y mueblería',
  address: 'Entre 10 y 12 Oriente, Once Sur',
  addressRaw: 'entre 10 & - 12 oriente, Once Sur, 3460000 Talca, Maule',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8840 2954',
  phoneTel: '+56988402954',
  whatsapp: '56988402954',
  instagram: 'https://www.instagram.com/infinity_muebles_talca',
  instagramUser: '@infinity_muebles_talca',
  reviews: 4,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Infinity Muebles y quiero cotizar un mueble a medida',
)}`

export const WA_LINK_MEDIDA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero agendar una visita para tomar medidas',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Infinity Muebles, Once Sur, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Infinity Muebles, Once Sur, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/muebleria-infinity-muebles-talca'
