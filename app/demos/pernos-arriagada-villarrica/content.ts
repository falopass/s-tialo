/**
 * app/demos/pernos-arriagada-villarrica/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps y letreros del local,
 * leídos el 11-11-2026): nombre, categoría (tornería), dirección
 * (Cerros de Melilahuen 3855, Villarrica), WhatsApp, horario (lun a vie
 * 9:00 a 13:00 y 15:00 a 19:00, sáb 9:00 a 14:00, dom cerrado), el
 * atributo "se identifica como mujer empresaria" y las 3 opiniones con
 * su única cita textual (sin nota publicada: no mostramos estrellas).
 * SERVICIOS y MURO son textuales de los letreros de la fachada; las
 * tres partidas del muro solo ordenan la lista (sin precios ni stock:
 * todo se consulta por WhatsApp). Las marcas citadas (Würth, Yato,
 * Force) se ven en las fotos de la fachada. Fotos: todas de la ficha
 * de Maps del negocio.
 */

export const BIZ = {
  name: 'Pernos Arriagada',
  short: 'Pernos Arriagada',
  rubro: 'Tornería, maestranza y pernos',
  address: 'Cerros de Melilahuen 3855',
  city: 'Villarrica',
  region: 'Región de La Araucanía',
  phoneDisplay: '+56 9 4063 7555',
  whatsapp: '56940637555',
  reviews: 3,
  womenLed: 'Empresa liderada por una mujer',
} as const

export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '9:00 a 13:00 y 15:00 a 19:00' },
  { dia: 'Sábado', hora: '9:00 a 14:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
] as const

// Textual del letrero "Servicios de maestranza" de la fachada.
export const SERVICIOS = [
  {
    n: '01',
    titulo: 'Fabricación de piezas en torno, fresa y cepillo',
    detalle:
      'Bujes, pasadores, fabricación de estrías, hilos interior y exterior, rectificado de discos y tambores de freno, recuperación de piezas.',
  },
  {
    n: '02',
    titulo: 'Soldaduras al arco y MIG',
    detalle: 'Para la pieza que se rompió o la que hay que unir.',
  },
  {
    n: '03',
    titulo: 'Perforaciones',
    detalle: 'El agujero exacto donde la pieza lo necesita.',
  },
] as const

// Textual de los letreros de la fachada; las partidas solo ordenan
// la lista. Sin precios ni stock: todo se consulta por WhatsApp.
export const MURO = [
  {
    partida: 'Pernos y fijación',
    items: [
      'Pernos',
      'Pernos acero inox',
      'Perno racor',
      'Tuercas',
      'Golillas de aluminio y cobre',
      'Golilla para perno culata',
      'Espárragos',
      'Prisioneros',
      'Anclajes',
      'Chavetas',
      'Seguros seeger',
      'Remaches',
      'Pinez elástico',
    ],
  },
  {
    partida: 'Motor y sellado',
    items: [
      'Sello de bronce motor',
      'Orring',
      'Banjo',
      'Tapón cárter',
      'Tapa radiadores',
      'Graseras',
      'Abrazaderas',
      'Roscalata',
      'Hilo metro',
      'Terminales eléctricos',
    ],
  },
  {
    partida: 'Herramientas y consumo',
    items: [
      'Brocas',
      'Widias torno',
      'Juego de machos',
      'Terrajas',
      'Dados',
      'Discos de corte',
      'Sierra copa bimetal',
      'Lijas',
      'Soldaduras: aluminio, super alloy, inox, fundido, 7018, 6011',
      'Herramientas',
      'Paño limpieza mecánica',
    ],
  },
] as const

// Las palabras que corren por su letrero LED y por sus letreros pintados.
export const LED_ITEMS = [
  'Tuercas y pernos',
  'Soldaduras',
  'Brocas',
  'Anclajes',
  'Remaches',
  'Espárragos',
  'Chavetas',
  'Terrajas',
  'Graseras',
  'Roscalata',
  'Abrazaderas y herramientas',
] as const

// Única cita con texto de la ficha (3 opiniones, sin nota publicada).
export const OPINION = {
  autor: 'Francisco P.',
  texto: 'Está bueno, también ofrecen servicio de Maestranza menor.',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pernos Arriagada y quiero cotizar una pieza',
)}`

export const WA_REPUESTOS = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pernos Arriagada y quiero consultar por pernos y repuestos',
)}`

// URL real de la ficha (leída el 11-11-2026).
export const MAPS_URL =
  'https://www.google.com/maps/place/Pernos+Arriagada/@-39.3102651,-72.2113047,17z/data=!4m6!3m5!1s0x961463822f2d91cb:0x2d285f5453aa926c!8m2!3d-39.3102651!4d-72.2113047'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-39.3102651,-72.2113047&z=16&output=embed'

export const IMG = '/demos/pernos-arriagada-villarrica'
