/**
 * app/demos/cabanas-villa-verde/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps): nombre,
 * dirección (Arturo Prat 330, Pelluhue) y teléfono/WhatsApp
 * (+56 9 8880 2544). Su sitio villaverdepelluhue.cl figuraba en el
 * directorio pero hoy responde error, así que no se enlaza.
 * La ficha de Google no muestra reseñas, por eso la página no tiene
 * sección de opiniones — se mantiene honesta.
 * Las descripciones de las piezas son de muestra.
 */

export const BIZ = {
  name: 'Cabañas Villa Verde',
  short: 'Villa Verde',
  rubro: 'Cabañas y hospedaje',
  address: 'Arturo Prat 330',
  city: 'Pelluhue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8880 2544',
  phoneTel: '+56988802544',
  whatsapp: '56988802544',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Villa Verde en Pelluhue y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar en Cabañas Villa Verde, Arturo Prat 330, Pelluhue',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Villa Verde, Arturo Prat 330, Pelluhue, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Villa Verde, Arturo Prat 330, Pelluhue, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-villa-verde'
