/**
 * app/demos/gasfiter-en-talca/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "Gasfiter en talca", categoría Fontanero,
 *   Calle 24 Pte. 853, Talca. Rating 4,8. Horario de la ficha:
 *   "Abierto las 24 horas". Teléfono 9 7722 6112 — el mismo número
 *   del encargo (56977226112).
 *   URL: maps/place/Gasfiter+en+talca — coords -35.4418146,-71.7032436.
 * - La ficha no enlaza sitio web ni redes; no se encontró Instagram,
 *   Facebook ni dominio propio asociado a ese número.
 * - Fotos: la ficha tiene una sola foto — el interior de un calefont
 *   con los quemadores prendidos en azul y el serpentín de cobre.
 *   Es la única imagen real disponible; el resto de los visuales del
 *   demo son bosquejos marcados como tal.
 * - Sin textos de reseñas accesibles en vista limitada de Maps:
 *   se muestra solo la nota 4,8, sin citar comentarios.
 * - No publica tarifas: no se muestran precios.
 * - Los consejos de urgencia (ventilar ante olor a gas, cerrar la
 *   llave de paso) son recomendaciones de seguridad estándar, no
 *   claims del negocio.
 */

export const BIZ = {
  name: 'Gasfiter en Talca',
  short: 'Gasfiter en Talca',
  rubro: 'Fontanero · guardia 24 horas',
  address: 'Calle 24 Pte. 853',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7722 6112',
  phoneTel: '+56977226112',
  whatsapp: '56977226112',
  rating: '4,8',
  reviews: 'reseñas en Google',
  horario: 'Abierto las 24 horas',
  mapsPlaceUrl:
    'https://www.google.com/maps/place/Gasfiter+en+talca/data=!4m7!3m6!1s0x9665c5002d262a3f:0x4770aa468fd7f9d4!8m2!3d-35.4418146!4d-71.7032436!16s%2Fg%2F11wpp3y73g',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, tengo una urgencia de gasfitería en Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Gasfiter en talca Calle 24 Pte 853 Talca Maule Chile',
)}&output=embed`

export const IMG = '/demos/gasfiter-en-talca'

// Urgencias típicas del oficio fontanero — redactadas como escenarios,
// no como servicios publicados por el negocio.
export const ALARMAS = [
  {
    cod: 'ALM-01',
    t: 'Olor a gas en la cocina',
    d: 'Ventila, no prendas ni apagues interruptores y avisa al tiro. Una revisión a tiempo es lo que importa.',
    accion: 'Ventila y escribe',
  },
  {
    cod: 'ALM-02',
    t: 'El calefont no enciende',
    d: 'Sin piloto, sin agua caliente. Revisión de quemadores, bujías y ducto — como el de la foto de arriba.',
    accion: 'Pedir revisión',
  },
  {
    cod: 'ALM-03',
    t: 'Cañería que gotea o reventó',
    d: 'Cierra la llave de paso general y manda foto por WhatsApp para llegar con lo necesario.',
    accion: 'Cierra la llave',
  },
  {
    cod: 'ALM-04',
    t: 'Flexibles y conexiones de gas',
    d: 'Mangueras, llaves de paso y uniones se revisan y cambian antes de que fallen.',
    accion: 'Agendar visita',
  },
] as const

export const PASOS = [
  { n: '01', t: 'Escribes o llamas', d: 'El mismo número atiende WhatsApp y llamadas, de día y de noche.' },
  { n: '02', t: 'Describes el problema', d: 'Una foto del calefont o de la fuga ayuda a llegar preparado.' },
  { n: '03', t: 'Se coordina la visita', d: 'Fontanero a domicilio en Talca, sector poniente y alrededores.' },
] as const

export const FICHA = [
  { k: 'Rubro', v: 'Fontanero — gasfitería a domicilio' },
  { k: 'Dirección', v: 'Calle 24 Pte. 853, Talca' },
  { k: 'Horario', v: 'Abierto las 24 horas' },
  { k: 'Teléfono', v: '+56 9 7722 6112' },
  { k: 'Nota Google', v: '4,8' },
] as const
