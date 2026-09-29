/**
 * app/demos/ferreteria-mapani/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre
 * (Ferreteria Mapani), categoría ("Tienda de herramientas"), dirección
 * (Alejandro Cruz 754, San Clemente), teléfono/WhatsApp, rating 3,9 y
 * horario (Lu–Sa 8:30–13:30 / 14:30–19:00, Do 9:30–14:00, confirmado
 * contra el horario publicado en la ficha). Sin web ni redes públicas
 * encontradas. La foto de public/demos/ferreteria-mapani/ es la fachada
 * real de la ficha; el resto de la ficha traía fotos de otras
 * ferreterías cercanas y se descartaron. Las escenas interiores son
 * bosquejos marcados visiblemente.
 */

export const BIZ = {
  name: 'Ferretería Mapani',
  short: 'Mapani',
  rubro: 'Tienda de herramientas',
  address: 'Alejandro Cruz 754',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8291 1638',
  phoneTel: '+56982911638',
  whatsapp: '56982911638',
  rating: '3,9',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Ferretería Mapani, quiero consultar por una herramienta o material',
)}`

export const WA_LINK_COTIZA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Ferretería Mapani, quiero cotizar: ',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ferretería Mapani, Alejandro Cruz 754, San Clemente, Chile',
)}`

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.5385239,-71.4871632&z=16&output=embed'

export const IMG = '/demos/ferreteria-mapani'

/** Horario publicado en la ficha de Google Maps. */
export const HORARIO = [
  { dias: 'Lunes a sábado', manana: '8:30–13:30', tarde: '14:30–19:00' },
  { dias: 'Domingo', manana: '9:30–14:00', tarde: '' },
] as const
