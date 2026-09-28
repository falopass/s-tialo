/**
 * app/demos/ultrasport19/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, verificada): nombre,
 * rubro, comuna (Pencahue, Región del Maule), el correo
 * ultrasport19@gmail.com (así figura como dirección en su ficha),
 * las 7 opiniones con nota 5,0, el teléfono +56 9 2924 4042, el
 * Instagram enlazado (@ultrasport_19) y el horario publicado.
 * Las fotos de public/demos/ultrasport19 son las 5 fotos reales de la
 * ficha; las reseñas citadas son textuales de Google Maps. Los
 * precios de los planes siguen siendo de muestra: el gimnasio no los
 * publica (se confirman por WhatsApp).
 */

export const BIZ = {
  name: 'Ultrasport19',
  short: 'U19',
  rubro: 'Gimnasio',
  city: 'Pencahue',
  region: 'Región del Maule',
  email: 'ultrasport19@gmail.com',
  postal: '2550000',
  phoneDisplay: '+56 9 2924 4042',
  phoneTel: '+56929244042',
  whatsapp: '56929244042',
  instagram: 'https://www.instagram.com/ultrasport_19/',
  igUser: '@ultrasport_19',
  igFollowers: '351',
  rating: '5,0',
  reviews: 7,
  hoursShort: 'Lun a sáb · dom cerrado',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ultrasport19 y quiero consultar',
)}`

export const WA_LINK_CLASE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ultrasport19 y quiero agendar una clase de prueba',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ultrasport19, Pencahue, Región del Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pencahue, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/ultrasport19'
