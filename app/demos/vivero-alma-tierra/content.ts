/**
 * app/demos/vivero-alma-tierra/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre
 * (Vivero Alma tierra), categoría ("Vivero"), dirección (Quebrada de
 * Agua, Parcela 7, San Clemente), teléfono/WhatsApp, rating 5,0 y el
 * horario publicado (martes 9:30–13:30 y 15:00–17:30 — la ficha no
 * despliega la semana completa). Sin web ni redes públicas encontradas.
 * La foto de public/demos/vivero-alma-tierra/ es la única foto real de
 * la ficha (el invernadero con maceteros); el resto de la página va en
 * bosquejos marcados visiblemente.
 */

export const BIZ = {
  name: 'Vivero Alma Tierra',
  short: 'Alma Tierra',
  categoria: 'Vivero',
  address: 'Quebrada de Agua, Parcela 7',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8380 2640',
  phoneTel: '+56983802640',
  whatsapp: '56983802640',
  rating: '5,0',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Vivero Alma Tierra, quiero consultar por plantas',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vivero Alma Tierra, Quebrada de Agua Parcela 7, San Clemente, Chile',
)}`

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.5226693,-71.4880603&z=16&output=embed'

export const IMG = '/demos/vivero-alma-tierra'
