/**
 * app/demos/casona-las-camelias/content.ts
 *
 * Datos del mockup. REALES (ficha de Google vía Ciudad Emprendedor y
 * delvecchio.cl): nombre “Casona Las Camelias de Villaseca”, dirección
 * (Villaseca 776, Buin), teléfono/WhatsApp (+56 9 6306 4689), Facebook
 * (centrodeeventosvillaseca205), sitio del productor (delvecchio.cl),
 * nota 4,8/5 con 5 reseñas, banquetería “con todo incluido” con mínimo
 * de 50 invitados y Eventos Del Vecchio operando desde 2013.
 * Los textos de ambiente y el orden del “día del evento” son de muestra;
 * no se publicaron reseñas con texto, solo la nota.
 */

export const BIZ = {
  name: 'Casona Las Camelias de Villaseca',
  short: 'Las Camelias',
  rubro: 'Centro de eventos',
  address: 'Villaseca 776',
  city: 'Buin',
  region: 'Región Metropolitana',
  phoneDisplay: '+56 9 6306 4689',
  phoneTel: '+56963064689',
  whatsapp: '56963064689',
  rating: '4,8',
  ratingCount: 5,
  site: 'delvecchio.cl',
  producer: 'Eventos Del Vecchio',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Casona Las Camelias de Villaseca y quiero cotizar un evento',
)}`

export const WA_LINK_FECHA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero consultar disponibilidad de fecha en Casona Las Camelias de Villaseca',
)}`

export const FB_URL = 'https://www.facebook.com/centrodeeventosvillaseca205'
export const SITE_URL = `https://www.${BIZ.site}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Casona Las Camelias de Villaseca, Villaseca 776, Buin, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Casona Las Camelias de Villaseca, Villaseca 776, Buin, Chile',
)}&output=embed`

export const IMG = '/demos/casona-las-camelias'
