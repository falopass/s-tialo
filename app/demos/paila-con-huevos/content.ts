/**
 * app/demos/paila-con-huevos/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): el local figura
 * como "La paila de huevos", restaurante de comida casera en San Rafael,
 * al costado de la carretera junto al cruce Pelarco (plus code MC7R+8G).
 * Teléfono/WhatsApp +56 9 8779 6054, 4,4 estrellas con 276 reseñas,
 * CLP 5.000-10.000 por persona, consumo en el lugar y para llevar
 * (sin delivery), abre 6:00. Ficha sin sitio web ni reclamar.
 *
 * Datos de reseñas y actualizaciones de visitantes en Maps: almuerzo
 * ~$5.500 (cazuela, cerdo y pollo al horno y al jugo, con pan amasado y
 * ensalada), autoservicio (se paga antes, bandeja en menos de 5 min),
 * "desayuno de campeones" = churrasco con huevo frito, atendido por sus
 * dueños con más de 20 años de experiencia, picada de camioneros,
 * el almuerzo se agota ~14:00. Platos de la pestaña Carta: churrasco con
 * huevo frito, chanco a la parrilla con puré, chanchito con ensalada mixta.
 * Las reseñas citadas son reales, con su autor (texto original en español).
 */

export const BIZ = {
  name: 'La Paila de Huevos',
  mapsName: 'La paila de huevos',
  short: 'La Paila',
  rubro: 'Picada y comida casera',
  address: 'San Rafael, al costado de la carretera (cruce Pelarco)',
  city: 'San Rafael',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8779 6054',
  phoneTel: '+56987796054',
  whatsapp: '56987796054',
  rating: '4,4',
  reviews: 276,
  ticket: '$5.000 a $10.000 por persona (según Google)',
  plusCode: 'MC7R+8G San Rafael',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Paila de Huevos y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La paila de huevos, San Rafael, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'La paila de huevos, San Rafael, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/paila-con-huevos'

/** Reseñas reales de la ficha de Google (autor + fecha). */
export const REVIEWS = [
  {
    author: 'Carol Gonzalez',
    when: 'hace 7 meses',
    text: 'Comida casera de verdad. Todo muy sabroso y rico, 10 de 10. La atención es muy rápida y te sirven al instante de haber hecho tu pedido. El horario de almuerzo es temprano: llegamos a las 13 hrs y a las 14 hrs ya no quedaban almuerzos. Muy bueno de verdad, menú surtido, es picada de camioneros.',
    stars: 5,
  },
  {
    author: 'Nicol Silva',
    when: 'hace 2 años',
    text: 'Un lugar bonito, bueno y barato. Además es atendido por sus propios dueños, que tienen más de 20 años de experiencia. Tiene autoservicio: hay que pagar antes y se retira la bandeja en menos de 5 minutos.',
    stars: 5,
  },
  {
    author: 'Margarita Amigo',
    when: 'hace 2 años',
    text: 'Excelente servicio, la comida te la entregan en menos de 5 minutos. Es una picada de camioneros, por lo tanto abundante el plato. Cuenta con ventiladores y pago con Redbanc.',
    stars: 5,
  },
] as const
