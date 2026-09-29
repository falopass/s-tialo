/**
 * app/demos/cabanas-cerro-colorado/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "Cabañas Cerro Colorado", categoría
 *   "Cabaña de montaña", Lago Colbún – Ruta 115, San Clemente, Maule
 *   (plus code 9P8P+4W Vilches). Rating 4,6 · 289 reseñas.
 *   Teléfono/WhatsApp +56 9 7596 8288 — su "sitio web" en la ficha es
 *   literalmente el link wa.me.
 * - Check-in 13:30 / check-out 10:30 (horario de la ficha).
 * - Precio referencial visto en la ficha (~$80.000/noche vía Booking) —
 *   se muestra solo como referencia, no como tarifa oficial.
 * - Fotos: 8 imágenes reales de la galería de la ficha de Maps
 *   (pabellón sobre el lago, cabañas en pilotes, tinaja interior,
 *   dormitorios, terrazas, quincho, vista nocturna).
 * - No se citan textos de reseñas (la vista de Maps no los expuso);
 *   solo el rating verificable.
 */

export const BIZ = {
  name: 'Cabañas Cerro Colorado',
  rubro: 'Cabañas de montaña',
  address: 'Ruta 115, Lago Colbún',
  sector: 'Vilches, San Clemente',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7596 8288',
  whatsapp: '56975968288',
  rating: '4,6',
  reviews: 289,
  checkin: '13:30',
  checkout: '10:30',
  mapsPlaceUrl:
    'https://www.google.com/maps/place/Caba%C3%B1as+Cerro+Colorado/@-35.6346727,-71.2627354,17z/data=!4m9!3m8!1s0x96659d67f5abd05b:0x91775e0fc5e5246d!5m2!4m1!1i2!8m2!3d-35.6346727!4d-71.2627354!16s%2Fg%2F11fjzy4l1v',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Cerro Colorado y quiero consultar disponibilidad',
)}`

export const WA_LINK_FECHAS = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero consultar por fechas y precios en Cabañas Cerro Colorado',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Cerro Colorado Ruta 115 Lago Colbún San Clemente Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-cerro-colorado'

export const LO_QUE_SE_VE = [
  {
    img: 'cabana-pilotes',
    t: 'Cabañas en pilotes',
    d: 'Construcción de madera elevada sobre el terreno, con terraza protegida entre los árboles.',
  },
  {
    img: 'tinaja',
    t: 'Baño con vista al bosque',
    d: 'Una bañera junto al ventanal, mirando el verde — la foto más comentada de su galería.',
  },
  {
    img: 'terraza',
    t: 'Terraza lounge',
    d: 'Sofá exterior bajo techo abierto al jardín, para el asado de tarde o el café de mañana.',
  },
  {
    img: 'quincho',
    t: 'Quincho y comedor exterior',
    d: 'Mesas al aire libre entre nalca y árboles nativos, al lado de las cabañas.',
  },
  {
    img: 'noche',
    t: 'De noche',
    d: 'Cuando baja el sol la madera se enciende desde adentro; el cielo de Vilches hace el resto.',
  },
  {
    img: 'dormitorio',
    t: 'Dormitorios con luz de mañana',
    d: 'Piezas textiles claras y madera, pensadas para descansar sin reloj.',
  },
] as const
