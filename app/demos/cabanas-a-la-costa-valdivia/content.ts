/**
 * app/demos/cabanas-a-la-costa-valdivia/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps «Cabañas a la Costa»,
 * leída el 12-11-2026):
 * - Nombre: «Cabañas a la Costa» (Maps: cabañas).
 * - Dirección: T-350 4720, Valdivia, Los Ríos (la T-350 es el camino
 *   de Valdivia hacia la costa: «en el camino a la costa»).
 * - WhatsApp: +56 9 9746 8898.
 * - Reputación: 4,0 con 73 opiniones en Google; las tres citas de
 *   REVIEWS son textuales de Google, con nombre e inicial.
 * - Qué ofrecen (reseñas y fotos de la ficha): cabañas blancas de dos
 *   pisos con escalera interior, cocina equipada (cocina, refrigerador,
 *   microondas, TV), dormitorio; jardín con pasto, mesas, quitasoles y
 *   quincho de madera con parrilla; sector tranquilo y seguro, cerca de
 *   lugares para visitar y rodeado de naturaleza; anfitrión amable.
 * - Horario: no publicado; se invita a consultar por WhatsApp.
 * - Redes sociales: no confirmadas; no se muestran.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, rótulos y leyendas de fotos.
 * Sin precios, capacidad, wifi, estacionamiento ni distancias.
 */

export const BIZ = {
  name: 'Cabañas a la Costa',
  short: 'A la Costa',
  rubro: 'Cabañas',
  address: 'T-350 4720',
  city: 'Valdivia',
  region: 'Región de Los Ríos',
  phoneDisplay: '+56 9 9746 8898',
  whatsapp: '56997468898',
  rating: '4,0',
  reviews: 73,
} as const

export const WA_LINK =
  'https://wa.me/56997468898?text=Hola%20Caba%C3%B1as%20a%20la%20Costa%2C%20quiero%20consultar%20disponibilidad'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas a la Costa, T-350 4720, Valdivia',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas a la Costa, T-350 4720, Valdivia',
)}&output=embed`

/** Opiniones textuales de Google (4,0 con 73 opiniones). */
export const REVIEWS = [
  {
    text: 'Recomiendo al 100% es un muy buen lugar donde quedarse, bien ubicado ya que está cercano a lugares para visitar. En cuanto a las cabañas muy cómodas, tienen todo lo necesario para tener una buena estadía.',
    author: 'Paulina C.',
  },
  {
    text: 'Fue una experiencia super grata! En base a la amabilidad de su dueño y de la atención que tuvo con nosotros, para quienes necesiten un lugar central la recomiendo muchísimo (es un sector muy tranquilo y seguro de Valdivia).',
    author: 'Marco G.',
  },
  {
    text: 'Primero que todo agradecer de su anfitrión super amable! Las cabañas cómodas, el lugar agradable para descansar y conectado con harta naturaleza.',
    author: 'María José P.',
  },
] as const

export const IMG = '/demos/cabanas-a-la-costa-valdivia'
