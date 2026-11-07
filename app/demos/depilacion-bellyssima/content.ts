/**
 * app/demos/depilacion-bellyssima/content.ts
 *
 * Datos del mockup. REALES (verificados el 7-11-2026 en la ficha de
 * Google Maps «Depilación Bellyssima Estética», Puerto Montt, en su
 * Facebook «Depilación a domicilio Puerto Montt» @depilacionhogar y en
 * su propio logo/panel):
 * - Nombre «Bellyssima, Depilación y Estética» tal como aparece en su
 *   logo y en el panel del local; Instagram @bellyssimaestetica (el
 *   usuario que muestra ese mismo panel).
 * - Dirección Sargento Silva 543, Puerto Montt, y horario (lunes a
 *   viernes 10:00-19:00, sábado 11:00-17:00, domingo cerrado): ficha
 *   de Maps. También atienden a domicilio (su Facebook se llama
 *   «Depilación a domicilio Puerto Montt»).
 * - WhatsApp +56 9 9460 0219: ficha de Maps.
 * - 4,9 con 53 opiniones en Google; las citas de Camila F., Rayen F. y
 *   Madelinne D. son textuales de esa ficha.
 * - Servicios (depilación con cera en local y a domicilio, manicure y
 *   pedicure permanente, lifting de pestañas, perfilado de cejas,
 *   limpieza facial profunda y básica, paquetes combinados) y la frase
 *   «el mejor servicio con productos totalmente profesionales»:
 *   publicaciones del propio negocio en Facebook.
 * DE MUESTRA: titulares de sección, bajadas y textos de apoyo.
 */

export const BIZ = {
  name: 'Bellyssima',
  full: 'Bellyssima, Depilación y Estética',
  rubro: 'Depilación y estética',
  address: 'Sargento Silva 543',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 9460 0219',
  phoneTel: '+56994600219',
  whatsapp: '56994600219',
  rating: '4,9',
  ratingValue: 4.9,
  reviews: 53,
  instagram: 'https://www.instagram.com/bellyssimaestetica/',
  igHandle: '@bellyssimaestetica',
  facebook: 'https://m.facebook.com/depilacionhogar',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Bellyssima, quiero agendar una hora',
)}`

export const waServicio = (servicio: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola Bellyssima, quiero agendar una hora para ${servicio}`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Depilación Bellyssima Estética, Sargento Silva 543, Puerto Montt, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sargento Silva 543, Puerto Montt, Chile',
)}&output=embed`

export const IMG = '/demos/depilacion-bellyssima'

export const HORARIO = [
  { d: 'Lunes a viernes', h: '10:00–19:00' },
  { d: 'Sábado', h: '11:00–17:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

export const REVIEWS = [
  {
    text: 'Maravillosa experiencia la profesional un 7 y los productos super buenos. No duele nada llegue muy nerviosa y me fui feliz con los resultados 100% recomendada.',
    author: 'Camila F.',
  },
  {
    text: 'Excelente atención, me encantó... Me sentí súper cómoda !! Hizo un trabajo estupendo. Estaba buscando un lugar así !!',
    author: 'Rayen F.',
  },
  {
    text: 'Excelente servicio! Súper profesional, producto buenísimo! La recomiendo 1000%',
    author: 'Madelinne D.',
  },
] as const
