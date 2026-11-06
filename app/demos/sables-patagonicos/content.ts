/**
 * app/demos/sables-patagonicos/content.ts
 *
 * Datos del mockup. REALES (verificados el 6-11-2026 en fuentes del
 * propio negocio: ficha de Google Maps «Restorant Sables Patagónicos»
 * e Instagram @sablespatagonicos):
 * - Nombre: «Sables Patagónicos». Bio de Instagram: «Sables Patagónicos
 *   | Restaurant & Buffet», «Carnes al sable | Experiencia gastronómica
 *   Patagonia», «Tablas, buffet, parrilladas y menú». Firma de sus
 *   publicaciones: «El sabor de reunirse.»
 * - Dirección: Carretera Austral km 11, Parque Turístico Kupange,
 *   Puerto Montt, en un entorno rodeado de naturaleza.
 * - Horario (Google Maps): lunes y martes cerrado; miércoles y jueves
 *   13:00 a 21:00; viernes y sábado 13:00 a 17:00 y 19:00 a 23:30;
 *   domingo 13:00 a 17:00. «Te recomendamos reservar».
 * - WhatsApp +56 9 4780 7042; Instagram @sablespatagonicos (más de 20
 *   mil seguidores); carta en línea en menu.fu.do.
 * - Reputación: 4,7 con 242 opiniones en Google. Las tres citas de
 *   REVIEWS son textuales, con nombre e inicial. (Google Maps)
 * - Oferta (sus publicaciones): carnes al sable y parrilladas («El
 *   corte justo, en el punto justo. Esa costra tostada y el jugo por
 *   dentro no se improvisan, se ganan a temperatura perfecta.»), tablas
 *   para compartir como la Tabla Caleta La Arena, menú diario de
 *   miércoles a sábado 13:00 a 17:00 con sus platos, guarniciones e
 *   incluidos («Comida honesta, porciones generosas, experiencia
 *   completa.»), domingos de buffet, coctelería de autor («En Sables no
 *   solo dominamos la brasa, también sabemos de buenos tragos.»),
 *   postres («Terminar la comida con algo dulce siempre es una buena
 *   idea.») y eventos a medida en Kupange («Escríbenos y arma tu evento
 *   a medida.»).
 * - Fotos: todas del local, en public/demos/sables-patagonicos/.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas y rótulos gráficos que enlazan
 * sus frases. Sin precios, sin descuentos, sin cifras inventadas.
 */

export const BIZ = {
  name: 'Sables Patagónicos',
  rubro: 'Restaurant & Buffet · Carnes al sable',
  address: 'Carretera Austral km 11, Parque Turístico Kupange',
  city: 'Puerto Montt',
  phoneDisplay: '+56 9 4780 7042',
  phoneTel: '+56947807042',
  whatsapp: '56947807042',
  instagram: 'https://www.instagram.com/sablespatagonicos/',
  igUser: '@sablespatagonicos',
  rating: '4,7',
  ratingValue: 4.7,
  reviews: 242,
} as const

export const WA_LINK =
  'https://wa.me/56947807042?text=Hola%20Sables%20Patag%C3%B3nicos%2C%20quiero%20reservar%20una%20mesa'

export const WA_EVENTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Sables Patagónicos, quiero cotizar un evento en Kupange',
)}`

export const CARTA_URL = 'https://menu.fu.do/sablespatag%C3%B3nicos/qr-menu'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Sables Patagónicos, Carretera Austral km 11, Puerto Montt',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sables Patagónicos, Carretera Austral km 11, Puerto Montt',
)}&output=embed`

/** Horario real de su ficha de Google Maps. */
export const HORARIO = [
  { dias: 'Lunes y martes', horas: 'Cerrado' },
  { dias: 'Miércoles y jueves', horas: '13:00 a 21:00' },
  { dias: 'Viernes y sábado', horas: '13:00 a 17:00 · 19:00 a 23:30' },
  { dias: 'Domingo', horas: '13:00 a 17:00' },
] as const

/** Menú diario (miércoles a sábado, 13:00 a 17:00), de sus publicaciones. */
export const MENU_PLATOS = [
  'Merluza',
  'Chuleta de cerdo',
  'Pollo a la plancha',
  'Milanesa de carne',
  'Milanesa de pollo',
  'Salmón',
] as const

export const MENU_GUARNICIONES = [
  'Risotto de champiñón',
  'Arroz',
  'Puré tradicional',
  'Puré de espinaca',
  'Puré picante',
  'Papas fritas',
  'Papas duquesas',
  'Papas bravas',
] as const

export const MENU_INCLUYE = [
  'Ensalada individual',
  'Postre del día',
  'Bebestible: bebida o copa de vino',
  'Bajativo de la casa',
] as const

/** Tipos de evento que reciben, de sus publicaciones. */
export const EVENTOS = [
  'Capacitaciones',
  'Conferencias',
  'Matrimonios',
  'Eventos corporativos',
  'Almuerzos',
  'Buffet',
  'Coffee break',
  'Cumpleaños',
  'Celebraciones de empresa',
  'Team building en Kupange',
] as const

/** Opiniones textuales de Google (4,7 con 242 opiniones). */
export const REVIEWS = [
  {
    text: 'Es un lugar hermoso, muy cálido la comida es muy rica.. Todo fresquito del día.. La atención un lujazo nada más que Agradecer.. Y los domingos hay delicioso bufet con carnes de primera calidad ilimitadas.',
    author: 'Viviana A.',
  },
  {
    text: 'Un lugar acogedor, con excelente cómida un gusto exquisito al paladar, atención personalizada con consejos y experiencia en lo que sirven',
    author: 'Erwin F.',
  },
  {
    text: 'Hermoso el lugar, cálido con muy buen ambiente. La comida maravillosa. Y la atención 10 de 10!',
    author: 'Helida P.',
  },
] as const

export const IMG = '/demos/sables-patagonicos'
