/**
 * app/demos/estudio-chevere/content.ts
 *
 * Datos REALES verificados (2026-09-28):
 * - Ficha de Google Maps "Estudio Chevere": dirección, teléfono,
 *   nota 3.9 con 57 opiniones; la ficha solo declara horario del lunes.
 * - Prensa local (Diario Talca / Diario La Prensa): "Foto Studio
 *   Chévere", esquina de 1 Sur con 4 Oriente, abierto por Nicodemus
 *   "el Chévere" González en 1980; junto a Teresa Ayala lo mantienen
 *   como un clásico del centro de Talca, con su colección de fotos
 *   antiguas de la ciudad.
 * - Fotos de public/demos/estudio-chevere: publicadas en la ficha.
 * No hay precios ni lista completa de horario.
 */

export const BIZ = {
  name: 'Foto Studio Chevere',
  short: 'Chevere',
  address: 'Calle 1 Sur N° 1064, esquina 4 Oriente',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8818 0716',
  whatsapp: '56988180716',
  rating: 3.9,
  ratingLabel: '3,9',
  reviews: 57,
  sinceLabel: 'desde 1980',
  hours: [
    { days: 'Lunes', time: '9:15–19:00' },
    { days: 'Resto de la semana', time: 'Confirma por WhatsApp' },
  ],
} as const

export const IMG = '/demos/estudio-chevere'

/** Servicios visibles en su local y en reseñas de la ficha. */
export const SERVICIOS = [
  {
    n: 'Impresión desde tu celular',
    desc: 'Traes las fotos en el teléfono y salen impresas en el momento, en varios tamaños.',
  },
  {
    n: 'Fotos carnet y de documentos',
    desc: 'Para cédula, pasaporte y visas. Es lo que más piden en el local y sale rápido.',
  },
  {
    n: 'Postales y fotos antiguas de Talca',
    desc: 'La colección de don Nicodemus: imágenes históricas de la ciudad en formato postal.',
  },
  {
    n: 'Encargos fotográficos',
    desc: 'De todo en fotografía: reseñas destacan que el equipo sabe orientar lo que necesitas.',
  },
] as const

/** Fotos reales publicadas en la ficha de Google Maps. */
export const FOTOS = [
  { src: `${IMG}/esquina.webp`, alt: 'Esquina del Foto Studio Chevere en Talca: edificio histórico con letrero rosado y bandera chilena', tag: 'La esquina' },
  { src: `${IMG}/letrero.webp`, alt: 'Primer plano del letrero Foto Studio Chevere en letras amarillas', tag: 'El letrero' },
  { src: `${IMG}/local.webp`, alt: 'Entrada del local con cartel de impresión de fotos desde el celular', tag: 'El local' },
  { src: `${IMG}/dueno.webp`, alt: 'Don Nicodemus, dueño del Chevere, atendiendo a un cliente a la entrada del estudio', tag: 'Don Nicodemus' },
  { src: `${IMG}/edificio.webp`, alt: 'Vista completa del edificio esquinero del estudio Chevere con sus dos letreros', tag: 'El edificio' },
  { src: `${IMG}/letrero-nuevo.webp`, alt: 'Letrero rojo nuevo del Foto Studio Chevere sobre la reja del local', tag: 'Letrero nuevo' },
] as const

/** Reseñas públicas de la ficha de Google Maps (nombre de pila). */
export const REVIEWS = [
  { text: 'Nuevo local, pero conserva el ambiente acogedor que siempre lo ha caracterizado. La calidez, amabilidad y dedicación de su dueño hacen que cada visita sea una grata experiencia.', author: 'Héctor O.' },
  { text: 'Atiende personal muy atento, lugar confiable.', author: 'Héctor S.' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Foto Studio Chevere y quiero imprimir fotos',
)}`

const MAPS_QUERY = 'Estudio Chevere, 1 Sur 1064, Talca, Chile'
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`
