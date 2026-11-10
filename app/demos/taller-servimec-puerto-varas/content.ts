/**
 * app/demos/taller-servimec-puerto-varas/content.ts
 *
 * Datos del mockup. REALES (verificados el 10-11-2026 en su ficha de
 * Google Maps y en sus fotos públicas):
 * - Nombre: «Taller SERVIMEC» en Maps y en el letrero del galpón; en sus
 *   autos de competencia usan la marca «SERVIMEC Motorsport». (Maps y
 *   fotos del negocio)
 * - Rubro en Maps: taller de automóviles.
 * - Dirección: Los Apeninos, Puerto Varas, Región de Los Lagos. Maps no
 *   publica número: la referencia es el galpón con el letrero SERVIMEC.
 * - Horario: lunes a viernes 8:30 a 13:30 y 14:30 a 18:30; sábado y
 *   domingo cerrado. (Maps)
 * - WhatsApp +56 9 7878 0375 (el contacto es solo por WhatsApp).
 * - Reputación: por encargo, no se muestran nota, estrellas ni número
 *   de opiniones. Las tres citas de REVIEWS son textuales de su ficha
 *   (Patricio C., Cacho G., S. L.).
 * - Qué hacen, según sus fotos: mecánica automotriz en galpón propio
 *   (foso, elevador, autos en reparación) y preparación de autos de
 *   competencia (autos de rally con la decoración naranja, azul y
 *   blanca de SERVIMEC Motorsport, en parque de asistencia y sobre el
 *   carro de arrastre frente al taller).
 * - Redes sociales: no confirmadas; no se enlazan.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, los rótulos de «etapa», los
 * pasos del proceso (sin plazos ni promesas) y las bajadas de cada
 * sección. Las fotos son reales del negocio, en
 * public/demos/taller-servimec-puerto-varas/.
 */

export const BIZ = {
  name: 'Taller SERVIMEC',
  short: 'SERVIMEC',
  sport: 'SERVIMEC Motorsport',
  mapsName: 'Taller SERVIMEC',
  rubro: 'Taller mecánico',
  address: 'Los Apeninos',
  city: 'Puerto Varas',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 7878 0375',
  whatsapp: '56978780375',
} as const

export const WA_LINK =
  'https://wa.me/56978780375?text=Hola%20Servimec%2C%20quiero%20agendar%20una%20revisi%C3%B3n'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Taller SERVIMEC, Los Apeninos, Puerto Varas, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Taller SERVIMEC, Los Apeninos, Puerto Varas, Chile',
)}&output=embed`

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '8:30 a 13:30 · 14:30 a 18:30' },
  { dias: 'Sábado y domingo', horas: 'Cerrado' },
] as const

/** Opiniones textuales de su ficha de Google (sin nota ni fecha). */
export const REVIEWS = [
  {
    text: 'Excelente servicio. Rapidez y puntualidad como una atención detallada.',
    author: 'Patricio C.',
  },
  {
    text: 'Excelente servicio.. responsabilidad absoluta...100/100 recomendable...',
    author: 'Cacho G.',
  },
  {
    text: 'Excelente trabajo, trabajadores que saben lo que hacen. Precio justo y trato cordial.',
    author: 'S. L.',
  },
] as const

export const IMG = '/demos/taller-servimec-puerto-varas'
