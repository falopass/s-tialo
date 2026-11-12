/**
 * app/demos/econovent-puerto-montt/content.ts
 *
 * Datos del mockup. REALES:
 * - Ficha de Google Maps (leída el 12-11-2026): nombre (Econovent Puerto
 *   Montt), dirección (Pasaje Don Justo, Puerto Montt; plus code H495+9P)
 *   y horario (lunes a viernes 9:00 a 19:00; sábado y domingo cerrado).
 *   OJO: en Maps figura como "fábrica de muebles". La línea de producto
 *   (ventanas de PVC) sale de cuentas con el mismo nombre en Puerto Montt.
 *   Google: 5,0 con 1 opinión sin texto -> no se muestra nota ni estrellas.
 * - NO VERIFICADO por número (cuentas con el mismo nombre, otros teléfonos): Instagram @econoventpuertomont y Facebook "Econovent Puerto Montt";
 *   no se enlazan ni se usan sus fotos ni sus promesas (reparto, instalación).
 *   De ahí sale solo la línea de producto: ventanas de PVC americano y europeo.
 * - WhatsApp +56 9 4102 4034.
 * Fotos: solo fabrica.webp (su galpón, de la ficha de Maps con su número).
 * Las ventanas se
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


export const IMG = '/demos/econovent-puerto-montt'
