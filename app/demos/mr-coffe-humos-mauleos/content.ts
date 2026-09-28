/**
 * app/demos/mr-coffe-humos-mauleos/content.ts
 *
 * Datos del demo. REALES (ficha pública de Google Maps, hl=es): nombre
 * "Mr.Coffe/Humos Mauleños", rubro (restaurante), dirección en el bypass
 * de San Clemente, teléfono/WhatsApp, rating 4,8 sobre 503 reseñas,
 * horario publicado y las 3 reseñas citadas (textuales, en español).
 * Las fotos son reales de la ficha (fachada, interior, platos, jardín).
 * No publica carta con precios: los platos descritos salen de reseñas
 * y fotos de la ficha; los valores se confirman con el local.
 */

export const BIZ = {
  name: 'Mr.Coffe / Humos Mauleños',
  short: 'Mr.Coffe',
  rubro: 'Restaurante · smokehouse y café',
  address: 'Bypass San Clemente, a la salida de la ciudad',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5619 2336',
  phoneTel: '+56956192336',
  whatsapp: '56956192336',
  reviews: 503,
  rating: '4,8',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mr.Coffe Humos Mauleños y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mr.Coffe Humos Mauleños y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mr.Coffe/Humos Mauleños, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Mr.Coffe/Humos Mauleños, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/mr-coffe-humos-mauleos'

export const HORAS = [
  { d: 'Lunes', h: 'Cerrado' },
  { d: 'Martes a jueves', h: '11:00 a 21:30' },
  { d: 'Viernes y sábado', h: '11:00 a 22:30' },
  { d: 'Domingo', h: '11:00 a 20:30' },
]

export const RESENAS = [
  {
    name: 'Francisca Valencia',
    stars: 5,
    text: 'Excelente comida, pedimos costillas bbq y la carne estaba realmente deliciosa. De entrada pedimos ceviche de salmón y también muy rico. Los tragos frescos y con buen sabor.',
  },
  {
    name: 'Yaritza Daney Pino Díaz',
    stars: 5,
    text: 'Mr. Coffee se ha convertido en una parada necesaria para quienes transitan por la ruta. Su ubicación estratégica lo transforma en un lugar ideal para hacer una pausa, disfrutar del entorno y recargar energías antes de continuar el viaje.',
  },
  {
    name: 'Val Goycolea',
    stars: 4,
    text: 'Lindo lugar al lado de la autopista, tiene bella vista puesto que hay un jardín. Cuenta con estacionamiento, juegos y autitos, además de terraza para servirse afuera.',
  },
]
