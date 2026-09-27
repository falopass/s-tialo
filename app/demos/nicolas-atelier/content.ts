/**
 * app/demos/nicolas-atelier/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, dirección (Neuquén 384,
 * Linares), teléfono/WhatsApp, las 25 reseñas de la ficha de Google,
 * el Instagram @nicolas.atelier y sus 1.964 seguidores. Todo lo demás
 * (servicios, precios, textos y reseñas citadas) es contenido de
 * ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Nicolás Atelier',
  short: 'Nicolás Atelier',
  rubro: 'Peluquería',
  address: 'Neuquén 384',
  addressFull: 'Neuquén 384, 3580000 Linares, Maule',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8188 3154',
  phoneTel: '+56981883154',
  whatsapp: '56981883154',
  reviews: 25,
  igHandle: '@nicolas.atelier',
  igFollowers: '1.964',
  instagram: 'https://www.instagram.com/nicolas.atelier',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Nicolás, vi tu página y quiero reservar una hora',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Nicolás Atelier, Neuquén 384, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Nicolás Atelier, Neuquén 384, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/nicolas-atelier'
