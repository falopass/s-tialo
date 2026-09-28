/**
 * app/demos/ms-electric-spa/content.ts
 *
 * Datos REALES (ficha pública de Google Maps): nombre, dirección en
 * San Pedro de la Paz 605 (Maule), teléfono/WhatsApp, horario, rating
 * 5,0 con 11 reseñas y los textos de las reseñas citadas.
 */

export const BIZ = {
  name: 'MS Electric SPA',
  short: 'MS Electric',
  rubro: 'Electricista · Instalador certificado',
  address: 'San Pedro de la Paz 605',
  city: 'Maule',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3421 2093',
  phoneTel: '+56934212093',
  whatsapp: '56934212093',
  rating: '5,0',
  reviews: 11,
  hours: [
    { d: 'Lunes a sábado', h: '8:00 – 19:00' },
    { d: 'Domingo', h: 'Cerrado' },
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola MS Electric, vi su página y quiero cotizar un trabajo eléctrico',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'MS Electric SPA, San Pedro de la Paz 605, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'MS Electric SPA, San Pedro de la Paz 605, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/ms-electric-spa'
