/**
 * Fuentes consultadas:
 * - Google Maps: ficha pública de Monky Coffee, consultada el 28-09-2026.
 * - Facebook: https://www.facebook.com/monkycoffee
 * - Instagram: https://www.instagram.com/monkycoffee/
 * - Revista Minga, “Monky: 10 años de historia”:
 *   https://www.revistaminga.cl/2024/11/10/monky-10-anos-de-historia/
 */

export const BIZ = {
  name: 'Monky Coffee',
  rubro: 'Cafetería',
  address: '1 Oriente #1385, esquina 3 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7447 6310',
  phoneTel: '+56974476310',
  whatsapp: '56974476310',
  instagram: 'https://www.instagram.com/monkycoffee/',
  facebook: 'https://www.facebook.com/monkycoffee',
} as const

export const HOURS = [
  { days: 'Lunes a viernes', time: '8:00–21:00' },
  { days: 'Sábado', time: '9:30–14:30' },
  { days: 'Domingo', time: 'Cerrado' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Monky Coffee y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}, Chile`,
)}`
