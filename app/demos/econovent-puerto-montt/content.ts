/**
 * app/demos/econovent-puerto-montt/content.ts
 *
 * Datos del mockup. REALES:
 * - Ficha de Google Maps (leída el 12-11-2026): nombre (Econovent Puerto
 *   Montt), dirección (Pasaje Don Justo, Puerto Montt; plus code H495+9P)
 *   y horario (lunes a viernes 9:00 a 19:00; sábado y domingo cerrado).
 *   OJO: en Maps figura categorizada como fábrica de otra cosa, pero lo que
 *   fabrica son ventanas de PVC (verificado en sus redes).
 *   Google: 5,0 con 1 opinión sin texto -> no se muestra nota ni estrellas.
 * - Instagram @econoventpuertomont y Facebook "Econovent Puerto Montt":
 *   fabricación, instalación y distribución de ventanas de PVC, en PVC
 *   americano y PVC europeo; reparto gratis dentro de la comuna de
 *   Puerto Montt (Facebook).
 * - WhatsApp +56 9 4102 4034.
 * Fotos: fabrica.webp (su galpón de planchas con la bandera de Chile) y
 * obra.webp (casa de madera en construcción con ventanales instalados,
 * de su Instagram). No hay más fotos: las ventanas corredera y abatir se
 * dibujan con CSS como ilustración propia, sin especificaciones técnicas.
 * No hay: medidas, colores, marcas de perfiles, garantías, plazos ni
 * precios publicados; todo se cotiza por WhatsApp.
 */

export const BIZ = {
  name: 'Econovent Puerto Montt',
  short: 'Econovent',
  rubro: 'Fábrica de ventanas de PVC',
  address: 'Pasaje Don Justo',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 4102 4034',
  whatsapp: '56941024034',
} as const

export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '9:00 a 19:00' },
  { dia: 'Sábado y domingo', hora: 'Cerrado' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Econovent, quiero cotizar ventanas de PVC',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Econovent Puerto Montt, Pasaje Don Justo',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Econovent Puerto Montt, Pasaje Don Justo',
)}&output=embed`

export const IG_URL = 'https://www.instagram.com/econoventpuertomont/'
export const FB_URL = 'https://www.facebook.com/econovent.puerto.montt/'

export const IMG = '/demos/econovent-puerto-montt'
