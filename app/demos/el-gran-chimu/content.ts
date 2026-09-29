/**
 * app/demos/el-gran-chimu/content.ts
 *
 * Datos del mockup. REALES (verificados 2026-09-29 en ficha de Google
 * Maps, SERNATUR y su página de Facebook /elgranchimu): nombre,
 * dirección (Enrique Mac Iver 1142, frente a la primera playa de
 * Constitución), teléfono/WhatsApp, rubro (restaurante peruano),
 * nota 4,7/5 con 125 reseñas y textos de reseñas de la ficha.
 * La carta y los precios son de muestra.
 */

export const BIZ = {
  name: 'El Gran Chimú',
  short: 'El Gran Chimú',
  rubro: 'Restaurante peruano',
  address: 'Enrique Mac Iver 1142',
  city: 'Constitución',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9045 3187',
  phoneTel: '+56990453187',
  whatsapp: '56990453187',
  facebook: 'https://www.facebook.com/elgranchimu/',
  fbUser: 'facebook.com/elgranchimu',
  rating: '4,7',
  reviews: 125,
  playa: 'Frente a la primera playa',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Gran Chimú y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Gran Chimú y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'El Gran Chimú, Enrique Mac Iver 1142, Constitución, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'El Gran Chimú, Enrique Mac Iver 1142, Constitución, Chile',
)}&output=embed`

export const IMG = '/demos/el-gran-chimu'
