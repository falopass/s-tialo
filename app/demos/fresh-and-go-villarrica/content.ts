/**
 * app/demos/fresh-and-go-villarrica/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, leida el 11-11-2026):
 * nombre, rubro (lavanderia), direccion (Calle de la Aurora, sector Molco,
 * Villarrica), WhatsApp +56 9 9461 7531, 25 opiniones y las citas textuales
 * de RESENAS. "Desde 2020" sale de su propio delantal ("fresh and go,
 * lavanderia, Est. 2020"). El retiro y entrega a domicilio sale de una
 * opinion ("va a retirar la ropa a domicilio y la va a dejar"). La referencia
 * "pasado La Surena, cerca de la ruta" sale de la opinion de Max U. Maps no
 * publica horario ni nota: el horario se presenta como "coordina por
 * WhatsApp" y no se muestran estrellas. Dafne aparece solo dentro de las
 * citas textuales. No hay precios publicados: no se muestran.
 * Todo lo demas (titulares, invitaciones) es copy propio sin afirmar hechos.
 */

export const BIZ = {
  name: 'Fresh and go',
  short: 'fresh and go',
  rubro: 'Lavandería',
  address: 'Calle de la Aurora, sector Molco',
  city: 'Villarrica',
  region: 'Región de La Araucanía',
  phoneDisplay: '+56 9 9461 7531',
  whatsapp: '56994617531',
  reviews: 25,
  founded: 2020,
} as const

/** Lo que lavan, segun las opiniones de la ficha */
export const QUE_LAVAMOS = [
  {
    icono: 'polera' as const,
    titulo: 'Tu ropa de todos los días',
    detalle: 'La pila de la semana vuelve limpia y con rico olor.',
  },
  {
    icono: 'almohada' as const,
    titulo: 'Ropa de cama',
    detalle: 'Sábanas, fundas y cubrecamas: lo que más espacio ocupa en tu lavadora.',
  },
  {
    icono: 'plumon' as const,
    titulo: 'Plumones',
    detalle: 'El que no cabe en la lavadora de casa. Acá queda con rico olor.',
  },
] as const

/** Reseñas textuales de Google (nombre + texto de la ficha) */
export const RESENAS = [
  {
    autor: 'Marcela M.',
    texto:
      'Me encanta. Todos los veranos e inicios de invierno, yo llevo todo lo que es ropa de cama a la lavandería de Dafne, Fresh and go y la verdad es que es fantástica.',
  },
  {
    autor: 'Max U.',
    texto:
      'Excelente servicio, mandé a lavar un plumón y quedó con rico olor. Dafne un amor de persona. Y queda justo ahí en Molco, pasado la Sureña, cerca de la ruta. Genial!',
  },
  {
    autor: 'Alfonso G.',
    texto:
      'Fue genial encontrarla en medio de nuestras vacaciones, nos llevamos nuestra ropa impecable, aparte el camino para llegar al lugar es muy hermoso.',
  },
] as const

/** Pasos del retiro a domicilio (instrucciones, no datos) */
export const PASOS_RETIRO = [
  'Escríbenos por WhatsApp',
  'Coordinamos el retiro a tu domicilio',
  'Tu ropa vuelve limpia a tu casa',
] as const

// Enlaces exactos de la ficha (leidos el 11-11-2026).
export const WA_LINK =
  'https://wa.me/56994617531?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Fresh%20and%20go%20y%20quiero%20coordinar%20un%20lavado'

export const WA_RETIRO =
  'https://wa.me/56994617531?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Fresh%20and%20go%20y%20quiero%20coordinar%20el%20retiro%20a%20domicilio'

export const MAPS_URL =
  'https://www.google.com/maps/place/Fresh+and+go/@-39.2990831,-72.1106485,17z/data=!4m6!3m5!1s0x96147dc33919feef:0x2c82e048301ea8a3!8m2!3d-39.2990831!4d-72.1106485'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-39.2990831,-72.1106485&z=15&output=embed'

export const IMG = '/demos/fresh-and-go-villarrica'
