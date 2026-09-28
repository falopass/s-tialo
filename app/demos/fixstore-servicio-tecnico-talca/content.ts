/**
 * app/demos/fixstore-servicio-tecnico-talca/content.ts
 *
 * Datos REALES verificados en Google Maps e Instagram (@fixstore_spa):
 * nombre, dirección, teléfono, horario, rating y reseñas.
 */

export const BIZ = {
  name: 'Fix Store - Servicio Técnico de Celulares',
  short: 'Fix Store',
  address: '1 Norte 1209, local 5, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3546 2702',
  phoneTel: '+56935462702',
  whatsapp: '56935462702',
  instagram: 'fixstore_spa',
  rating: 4.9,
  ratingLabel: '4,9',
  reviews: 86,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Fix Store, mi celular necesita reparación y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'FIXSTORE SERVICIO TECNICO DE CELULARES TALCA, 1 Norte 1209, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'FIXSTORE SERVICIO TECNICO DE CELULARES TALCA, 1 Norte 1209, Talca, Chile',
)}&output=embed`

export const HOURS = [
  { d: 'Lunes a viernes', h: '10:00 - 19:00' },
  { d: 'Sábado', h: '10:30 - 17:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

export const REVIEWS = [
  {
    name: 'Amber Veloso',
    txt: 'Vine a ver si podían cambiarle el chasis en la parte trasera a mi iPhone 12 Pro Max, y súper buen trabajo, precios y atención.',
    when: 'Hace 4 meses',
  },
  {
    name: 'Carlos Lavergnie',
    txt: 'Excelente servicio y atención, además de barato considerando lo que se realizó a mi dispositivo: reemplazaron la batería y arreglaron la tapa trasera que se encontraba despegada.',
    when: 'Hace 4 meses',
  },
  {
    name: 'Víctor Díaz Magaña',
    txt: 'Muy buen servicio, personal amable y siempre dispuestos a ayudar con la mejor solución, recomendado.',
    when: 'Hace un mes',
  },
  {
    name: 'Jose Fung',
    txt: 'Totalmente satisfecho con la atención y el servicio, la chica que me atendió muy amigable y profesional en lo que hace. Reparé mi iPhone 15 Pro Max y compré unos accesorios.',
    when: 'Hace un año',
  },
] as const
