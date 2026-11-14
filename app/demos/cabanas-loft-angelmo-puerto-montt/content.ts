/**
 * app/demos/cabanas-loft-angelmo-puerto-montt/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps «Cabañas Loft Angelmo»,
 * verificada el 14-11-2026, su afiche con el mismo teléfono en las fotos
 * de la ficha y las reseñas):
 * - Nombre: «Cabañas Loft Angelmo» en Maps y en el afiche. En el sitio se
 *   escribe «Angelmó» con tilde, como el barrio de Puerto Montt.
 * - Qué es: cabañas de alojamiento (Maps: «Casa rural»). Según fotos y
 *   reseñas: cabañas de madera de dos niveles con escalera exterior, baño
 *   privado, televisor, cocina equipada (cocina a gas, refrigerador,
 *   lavaplatos), dormitorio con cama, comedor con ventana y vista al
 *   puerto y al mar.
 * - Ubicación: Maps no publica calle ni número (solo «Puerto Montt, Los
 *   Lagos», código G29Q+5J). En el sitio solo se dice «Puerto Montt» y el
 *   rótulo de barrio «Angelmó».
 * - WhatsApp +56 9 5605 1588 (mismo número en la ficha y en el afiche).
 * - Instagram @cabanasloftangelmo (el perfil existe; solo como enlace).
 * - Google: 3,7 con 32 opiniones. La nota no se muestra; las tres citas
 *   de REVIEWS son textuales, con su nombre.
 * - Fotos: todas de la ficha de Maps, en public/demos/<slug>/.
 *
 * SIN DATOS, no se afirma: tarifas, capacidad, número de cabañas,
 * horarios de ingreso, servicios extra, estacionamiento, mascotas,
 * desayuno, calle ni número.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y rótulos.
 */

export const BIZ = {
  name: 'Cabañas Loft Angelmó',
  short: 'Loft Angelmó',
  rubro: 'Cabañas',
  city: 'Puerto Montt',
  barrio: 'Angelmó',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 5605 1588',
  whatsapp: '56956051588',
  igHandle: '@cabanasloftangelmo',
} as const

export const WA_LINK =
  'https://wa.me/56956051588?text=Hola%20Loft%20Angelm%C3%B3%2C%20quiero%20consultar%20disponibilidad'

export const IG_URL = 'https://www.instagram.com/cabanasloftangelmo/'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Loft Angelmo, Puerto Montt',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Loft Angelmo, Puerto Montt',
)}&output=embed`

/** Opiniones textuales de Google (3,7 con 32 opiniones; la nota no se muestra). */
export const REVIEWS = [
  {
    text: 'Excelente servicio!! Nos encantaron las cabañas, muy limpias y bien equipadas, igual a las fotos que nos enviaron, muchas gracias a Don José por su buena atención!!',
    author: 'Javiera Vergara Hitschfeld',
  },
  {
    text: 'Yo fui hace unos días a estas cabañas junto a mi pareja y nos encantaron, se encuentran en un lugar muy céntrico, seguro y tranquilo, además tienen una vista muy hermosa al mar y a la naturaleza',
    author: 'Javier Matamala Aguilar',
  },
  {
    text: 'Excelente servicio, muy atentos. Las cabañas están todas equipadas con televisor y baño privado.',
    author: 'Johan Acevedo',
  },
] as const

export const IMG = '/demos/cabanas-loft-angelmo-puerto-montt'
