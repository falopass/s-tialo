/**
 * Datos verificados en Google Maps, Instagram y Facebook.
 *
 * Fuentes:
 * - Google Maps: ficha pública de Hope Bakery Chile, consultada el 28-09-2026.
 * - Instagram: https://www.instagram.com/hopebakery_chile/
 * - Facebook: https://www.facebook.com/hopebakerychile/
 * - Ficha pública de pastelerías en Chile: referencia de dirección y teléfono.
 */

export const BIZ = {
  name: 'Hope Bakery Chile',
  short: 'Hope Bakery',
  rubro: 'Panadería y pastelería artesanal',
  address: 'Camino a la viña 4357, local 120A',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3316 5082',
  whatsapp: '56933165082',
  instagram: 'https://www.instagram.com/hopebakery_chile/',
  facebook: 'https://www.facebook.com/hopebakerychile/',
} as const

export const HOURS = [{ days: 'Domingo', time: '10:00–20:00' }] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Hope Bakery Chile y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}, Chile`,
)}`

/** Paleta del demo: harina, corteza tostada, centeno y un verde salvia de mesa de campo. */
export const C = {
  flour: '#FBF6EC',
  flour2: '#F1E8D8',
  crust: '#B4562E',
  crustDeep: '#8F3F1E',
  rye: '#3B2317',
  rye2: '#4E3122',
  wheat: '#E2B04A',
  wheatSoft: '#F2D48A',
  sage: '#5E6E4D',
  ink: '#2A1810',
  muted: '#6B554A',
  mutedOnDark: '#D9C9B8',
  line: 'rgba(42,24,16,0.14)',
  lineOnDark: 'rgba(251,246,236,0.16)',
} as const

/** Lo que la ficha pública destaca del taller de panadería. */
export const PILARES = [
  { n: '01', title: 'Masa madre de cultivo', desc: 'Pan elaborado con 100% masa madre de cultivo, con fermentación lenta.' },
  { n: '02', title: 'Producción orgánica', desc: 'Ingredientes de calidad, producción orgánica y sin aditivos químicos.' },
  { n: '03', title: 'Panadería y pastelería', desc: 'Pan y pastelería artesanal, en un mismo local de Talca.' },
] as const

export const PASOS = [
  { title: 'Escribe por WhatsApp', desc: 'Pregunta qué hay disponible o encarga con anticipación.' },
  { title: 'Se confirma tu pedido', desc: 'Con el detalle y el día para retirar.' },
  { title: 'Retiras en el local', desc: 'Camino a la viña 4357, local 120A.' },
] as const
