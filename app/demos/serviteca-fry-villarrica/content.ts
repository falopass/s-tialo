/**
 * app/demos/serviteca-fry-villarrica/content.ts
 *
 * Datos del mockup. REALES (verificados el 11-11-2026 en su ficha
 * de Google Maps):
 * - Nombre: «Serviteca Fry» (la ficha figura como «SERVITECA FRY»),
 *   taller mecánico.
 * - Dirección: km 1,5 camino Villarrica a Licán Ray, Villarrica,
 *   Región de La Araucanía. (Google Maps)
 * - Horario: lunes a viernes 8:30 a 18:30, sábado 9:00 a 13:00,
 *   domingo cerrado. (Google Maps)
 * - WhatsApp +56 9 7613 3654. (Google Maps)
 * - La ficha tiene 6 opiniones; por decisión del brief no se muestra
 *   nota ni estrellas, solo citas textuales.
 * - De las opiniones salen las afirmaciones: hacen mantenciones y
 *   cambios de aceite; explican con detalle y muestran los arreglos;
 *   usan productos de buena calidad; tienen una aplicación para
 *   llevar el registro de las mantenciones del auto (citada
 *   textualmente, sin nombre ni funciones inventadas).
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, rótulos de la ficha y
 * epígrafes de fotos. Sin precios, sin marcas ni años de
 * experiencia: el taller no los publica. Redes: no confirmadas.
 * Fotos: las dos únicas de su ficha de Maps (el taller por dentro y
 * la camioneta sobre el elevador); los recortes de detalle son
 * encuadres distintos de esas mismas fotos.
 */

export const BIZ = {
  name: 'Serviteca Fry',
  short: 'Serviteca Fry',
  rubro: 'Taller mecánico',
  address: 'Km 1,5 camino Villarrica a Licán Ray',
  city: 'Villarrica',
  region: 'Región de La Araucanía',
  phoneDisplay: '+56 9 7613 3654',
  whatsapp: '56976133654',
  reviews: '6',
} as const

export const WA_LINK =
  'https://wa.me/56976133654?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Serviteca%20Fry%20y%20quiero%20agendar%20una%20mantenci%C3%B3n'

export const MAPS_URL =
  'https://www.google.com/maps/place/SERVITECA+FRY/@-39.3084141,-72.2332054,17z/data=!4m6!3m5!1s0x96146359021de7a3:0xf580d3de1ef6d13c!8m2!3d-39.3084141!4d-72.2332054'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-39.3084141,-72.2332054&z=15&output=embed'

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '8:30 a 18:30' },
  { dias: 'Sábado', horas: '9:00 a 13:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
] as const

/** Citas textuales de su ficha de Google. */
export const OPINIONES = [
  {
    text: 'Excelente atención y muy buen servicio. Muy profesionales y siempre atentos a cualquier consulta. Tienen una aplicación excelente para llevar registro de mantenciones, cambios de aceite, etc.',
    author: 'Vladimir Z.',
  },
  {
    text: 'Atención personalizada, me da mucha confianza dejar mi auto ya que me explican con detalle, me muestran los arreglos, utilizan productos de buena calidad, el personal es muy cercano, detallistas, amables. Voy cada vez que tengo dudas y me solucionan con rapidez, eficacia y muy accesible al bolsillo.',
    author: 'Verónica P.',
  },
  {
    text: 'Excelente atención y muy profesionales. Resolvieron rápido y con conocimiento. Agradecido y los recomiendo 100%.',
    author: 'Esteban G.',
  },
] as const

export const IMG = '/demos/serviteca-fry-villarrica'
