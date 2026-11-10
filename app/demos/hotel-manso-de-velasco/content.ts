/**
 * app/demos/hotel-manso-de-velasco/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps verificada el
 * 10-11-2026):
 * - Nombre: «Hotel Manso de Velasco». Maps lo clasifica como hotel de
 *   3 estrellas.
 * - Dirección: Av. Manuel Rodríguez 421, San Fernando.
 * - Entrada desde las 15:00, salida hasta las 12:00. (ficha de Maps)
 * - WhatsApp +56 9 5816 4188.
 * - Reputación: 4,6 con 327 opiniones en Google. Las cuatro citas de
 *   REVIEWS son textuales, con nombre e inicial. (Google Maps)
 * - Lo que ofrecen, tal como lo reportan sus huéspedes y se ve en las
 *   fotos: habitaciones equipadas (frigobar, hervidor, caja de
 *   seguridad, cobertor extra), camas cómodas, desayuno con café,
 *   jugos, frutas, yogur y pastelería, estacionamiento, ubicación
 *   céntrica, terraza con vista a la ciudad y la cordillera, y una
 *   sala para reuniones.
 * - Fotos: todas del hotel, en public/demos/hotel-manso-de-velasco/.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y rótulos gráficos. Sin
 * precios, sin tarifas, sin promociones. No se afirma que el desayuno
 * esté incluido ni se inventan horarios de desayuno, wifi, piscina ni
 * capacidad de la sala.
 */

export const BIZ = {
  name: 'Hotel Manso de Velasco',
  short: 'Manso de Velasco',
  rubro: 'Hotel de 3 estrellas',
  address: 'Av. Manuel Rodríguez 421',
  city: 'San Fernando',
  region: 'Región de O’Higgins',
  phoneDisplay: '+56 9 5816 4188',
  whatsapp: '56958164188',
  rating: '4,6',
  ratingValue: 4.6,
  reviews: 327,
  checkin: '15:00',
  checkout: '12:00',
} as const

export const WA_LINK =
  'https://wa.me/56958164188?text=Hola%20Hotel%20Manso%20de%20Velasco%2C%20quiero%20consultar%20disponibilidad'

export const WA_REUNION = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Hotel Manso de Velasco, quiero consultar por la sala para reuniones',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hotel Manso de Velasco, Av. Manuel Rodríguez 421, San Fernando',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Hotel Manso de Velasco, Av. Manuel Rodríguez 421, San Fernando',
)}&output=embed`

/** Lo que destacan los huéspedes de las habitaciones (sus reseñas). */
export const EQUIPO = [
  'Frigobar',
  'Hervidor',
  'Caja de seguridad',
  'Cobertor extra',
  'Camas muy cómodas',
  'Piezas amplias e iluminadas',
] as const

/** El desayuno que se ve en sus fotos y repiten las opiniones. */
export const DESAYUNO = [
  'Café',
  'Jugos naturales',
  'Frutas frescas',
  'Yogur con granola',
  'Pastelería',
] as const

/** Opiniones textuales de Google (4,6 con 327 opiniones). */
export const REVIEWS = [
  {
    text: 'Muy cómoda la habitación, y extraordinariamente equipadas, contaba con frigobar, hervidor, caja de seguridad, cobertor extra, etc. El personal muy humano y profesional, las instalaciones muy bien cuidadas y bonitas, muy acogedora la estancia acá y el desayuno delicioso, sin duda una excelente opción.',
    author: 'Carlos P.',
  },
  {
    text: 'Excelente servicio. Desayuno maravilloso y una cama muy confortable.',
    author: 'Gonzalo P.',
  },
  {
    text: 'Excelente. Buena habitación y muy rico desayuno. Estacionamiento muy cómodo. La recepcionista un 7.',
    author: 'J. P.',
  },
  {
    text: 'El hotel es muy bueno, bien ubicado y con estacionamiento. La habitación, si bien no tenía una gran vista, era amplia y bien iluminada. La cama muy grande y cómoda, al igual que el baño.',
    author: 'Miette79',
  },
] as const

export const IMG = '/demos/hotel-manso-de-velasco'
