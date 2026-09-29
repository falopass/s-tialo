/**
 * app/demos/rosita-cocina-chilena/content.ts
 *
 * Datos reales confirmados:
 * - Ficha Google Maps: Rosita Cocina Chilena, Av. Presidente Ibáñez 0782,
 *   Linares — tel +56 73 221 5868, 4.5★ / 77 opiniones,
 *   lun–vie 8:00–17:00, sáb–dom cerrado.
 * - Facebook facebook.com/rositacocinachilena: logo real y pizarras con la
 *   carta del día (pastel de choclo + ensaladas $7.000, empanadas $2.800).
 * - WhatsApp del local impreso en su letrero de fachada: +56 9 9906 6619
 *   ("Pide el menú a nuestro whatsapp").
 * - Reseñas reales tomadas de la ficha de Google.
 */

export const BIZ = {
  name: 'Rosita Cocina Chilena',
  short: 'Rosita',
  rubro: 'Cocina chilena · almuerzo casero',
  address: 'Av. Presidente Ibáñez 0782',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 73 221 5868',
  phoneTel: '+56732215868',
  whatsapp: '56999066619',
  facebook: 'https://www.facebook.com/rositacocinachilena',
  rating: 4.5,
  reviews: 77,
  hours: 'Lun a vie · 8:00–17:00',
  hoursExtra: 'Sábado y domingo cerrado',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero pedir el menú de hoy',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Rosita Cocina Chilena, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Rosita Cocina Chilena, Av. Presidente Ibáñez 0782, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/rosita-cocina-chilena'
