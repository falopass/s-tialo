/**
 * app/demos/passport/content.ts
 *
 * Datos del mockup. REALES (verificados 2026-09-29 en ficha de Google
 * Maps y en su carta publicada en queresto.com/passport): nombre,
 * dirección (Av. Enrique Donn 735, Constitución), teléfono/WhatsApp,
 * Instagram (@passport.cl), horario (13:00–00:00), nota 4,2/5 con 33
 * reseñas y la carta con precios — hamburguesas, pizzas y piqueos con
 * nombres de ciudades del mundo, de ahí el concepto "pasaporte".
 */

export const BIZ = {
  name: 'Passport',
  short: 'Passport',
  rubro: 'Restaurant · bar',
  slogan: 'Cómete el mundo',
  address: 'Av. Enrique Donn 735',
  city: 'Constitución',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4582 8943',
  phoneTel: '+56945828943',
  whatsapp: '56945828943',
  instagram: 'https://www.instagram.com/passport.cl',
  igUser: '@passport.cl',
  rating: '4,2',
  reviews: 33,
  hours: 'Todos los días · 13:00 a 00:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Passport y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Passport y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'PASSPORT, Av. Enrique Donn 735, Constitución, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'PASSPORT, Av. Enrique Donn 735, Constitución, Chile',
)}&output=embed`

export const IMG = '/demos/passport'
