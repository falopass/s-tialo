/**
 * app/demos/taller-mecanico-servimac/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, Facebook e
 * Instagram @servimacspa): nombre, dirección, teléfono/WhatsApp, las
 * 11 reseñas de Google (5,0 estrellas, citas textuales en la página),
 * la página de Facebook (202 seguidores), Instagram (997 seguidores)
 * y el horario publicado por el propio taller en sus redes. Las fotos
 * son reales (ficha de Maps e Instagram). La tabla de precios es de
 * muestra: los valores reales se cotizan por WhatsApp.
 */

export const BIZ = {
  name: 'Taller mecánico Servimac',
  short: 'Servimac',
  rubro: 'Taller de reparación de automóviles',
  address: 'Luis Cruz Martínez 3581',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8931 3400',
  phoneTel: '+56989313400',
  whatsapp: '56989313400',
  reviews: 11,
  rating: '5,0',
  facebook: 'https://m.facebook.com/servimac.molina',
  fbFollowers: 202,
  instagram: 'servimacspa',
  igFollowers: 997,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Taller Servimac y quiero agendar una revisión',
)}`

export const WA_LINK_PRESUPUESTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Taller Servimac y quiero pedir un presupuesto',
)}`

export const INSTAGRAM_URL = 'https://www.instagram.com/servimacspa/'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Taller mecánico Servimac, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Taller mecánico Servimac, Luis Cruz Martínez 3581, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/taller-mecanico-servimac'
