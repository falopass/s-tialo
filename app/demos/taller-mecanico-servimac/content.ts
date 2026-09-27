/**
 * app/demos/taller-mecanico-servimac/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y Facebook):
 * nombre, dirección, teléfono/WhatsApp, las 11 reseñas de Google y la
 * página de Facebook (202 seguidores). Todo lo demás —servicios,
 * precios, horarios y reseñas— es contenido de muestra para mostrar
 * cómo se vería el sitio.
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
  facebook: 'https://m.facebook.com/servimac.molina',
  fbFollowers: 202,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Taller Servimac y quiero agendar una revisión',
)}`

export const WA_LINK_PRESUPUESTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Taller Servimac y quiero pedir un presupuesto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Taller mecánico Servimac, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Taller mecánico Servimac, Luis Cruz Martínez 3581, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/taller-mecanico-servimac'
