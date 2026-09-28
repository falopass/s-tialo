/**
 * app/demos/vidrieria-poniente/content.ts
 *
 * Datos REALES (ficha de Google Maps + Facebook @vidrieriaponiente.talca):
 * nombre, dirección 19 Sur #506 esquina 4 Poniente, teléfono/WhatsApp,
 * horario, rating 4,1 con 22 reseñas y los textos de las reseñas citadas
 * (solo citas de 5 estrellas, verbatims de Google en español).
 */

export const BIZ = {
  name: 'Vidriería Poniente',
  short: 'Vidriería Poniente',
  rubro: 'Vidriería · aluminio y PVC',
  address: 'Diecinueve Sur 506',
  esquina: 'esquina 4 Poniente',
  city: 'Talca',
  phoneDisplay: '+56 9 6406 0552',
  whatsapp: '56964060552',
  rating: '4,1',
  reviews: 22,
  facebook: 'https://www.facebook.com/vidrieriaponiente.talca',
  hours: [{ d: 'Lunes a viernes', h: '9:00 – 13:00 y 15:00 – 19:30' }],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Vidriería Poniente, vi su página y quiero cotizar un trabajo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vidriería Poniente, Diecinueve Sur 506, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Vidriería Poniente, Diecinueve Sur 506, Talca',
)}&output=embed`

export const IMG = '/demos/vidrieria-poniente'
