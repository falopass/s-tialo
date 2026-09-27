/**
 * app/demos/servicio-tecnico-automotriz-millycar/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y Facebook):
 * nombre, dirección, WhatsApp, las 19 reseñas de Google y la página de
 * Facebook. Todo lo demás —servicios, precios, horarios y reseñas— es
 * contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Servicio Técnico Automotriz Millycar',
  short: 'Millycar',
  rubro: 'Taller mecánico',
  address: 'Av. Manso de Velasco 965',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6217 9684',
  phoneTel: '+56962179684',
  whatsapp: '56962179684',
  reviews: 19,
  facebook: 'http://www.facebook.com/millycar',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Millycar y quiero agendar una revisión',
)}`

export const WA_LINK_PRESUPUESTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Millycar y quiero pedir un presupuesto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Servicio Técnico Automotriz Millycar, Av. Manso de Velasco 965, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Servicio Técnico Automotriz Millycar, Av. Manso de Velasco 965, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/servicio-tecnico-automotriz-millycar'
