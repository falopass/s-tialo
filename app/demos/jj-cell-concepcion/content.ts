/**
 * app/demos/jj-cell-concepcion/content.ts
 *
 * Datos del mockup. REALES (verificados el 6-11-2026):
 * - Nombre y rubro: ficha de Google Maps "JJ CELL CONCEPCION" y su
 *   Instagram verificado @jjcellconcepcion.cl (más de 55 mil
 *   seguidores) y Facebook JJCELLCONCEPCION. Lemas de sus posts:
 *   "Somos tu solución.", "Tecnología en buenas manos." y
 *   "Tu servicio técnico premium en tecnología."
 * - Especialidad declarada: Apple (iPhone, iPad, iPod y MacBook),
 *   "conservamos el rendimiento y la calidad original de tus equipos";
 *   también smartphones de alta gama de todas las marcas (Samsung,
 *   Huawei, Xiaomi, Motorola, Oppo, Realme y más).
 * - Servicios publicados en sus posts: diagnóstico rápido y preciso,
 *   cambio de pantalla, cambio de batería, reparación de placas y
 *   conectores (códec de audio, IC de carga, señal, wifi, equipo
 *   apagado, parlantes, imagen), tapa trasera con máquina láser,
 *   flex de carga, baño químico, lentes de cámara y cámaras,
 *   ampliación de memoria, glass de Apple Watch, láminas de hidrogel.
 * - También publican: venta de iPhone seminuevos sin riesgo de
 *   bloqueo, compra de iPhone usados y recepción en parte de pago.
 * - Dirección: Colo Colo 805, esquina Carrera, Concepción ("a un
 *   costado de la Copec de Carrera"). Horario de Maps: lunes a
 *   viernes 10:00-19:45, sábado 10:00-18:00, domingo cerrado.
 * - WhatsApp +56 9 3126 6600, rating 4,8 con 888 opiniones en Google;
 *   las tres citas son textuales de su ficha (Antonio S., Eukaris G.,
 *   Francisco G., Local Guide).
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, rótulos del diagrama y los
 * pasos del proceso (sin plazos ni precios, que el negocio no publica).
 */

export const BIZ = {
  name: 'JJ Cell Concepción',
  short: 'JJ Cell',
  rubro: 'Servicio técnico de smartphones y tienda',
  city: 'Concepción',
  region: 'Región del Biobío',
  address: 'Colo Colo 805, esquina Carrera',
  addressNote: 'A un costado de la Copec de Carrera',
  phoneDisplay: '+56 9 3126 6600',
  phoneTel: '+56931266600',
  whatsapp: '56931266600',
  instagram: 'https://www.instagram.com/jjcellconcepcion.cl/',
  instagramUser: '@jjcellconcepcion.cl',
  facebook: 'https://www.facebook.com/JJCELLCONCEPCION/',
  lema: 'Somos tu solución.',
  lema2: 'Tecnología en buenas manos.',
  rating: '4,8',
  ratingValue: 4.8,
  reviews: 888,
  horario: [
    { dias: 'Lunes a viernes', horas: '10:00 a 19:45' },
    { dias: 'Sábado', horas: '10:00 a 18:00' },
    { dias: 'Domingo', horas: 'Cerrado' },
  ],
} as const

export const WA_LINK =
  'https://wa.me/56931266600?text=Hola%20JJ%20Cell%2C%20quiero%20cotizar%20una%20reparaci%C3%B3n'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'JJ Cell Concepción, Colo Colo 805, Concepción, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Colo Colo 805, Concepción',
)}&output=embed`

export const IMG = '/demos/jj-cell-concepcion'

/** Marcas que reparan, en texto (de su Instagram). */
export const MARCAS = [
  'iPhone',
  'iPad',
  'MacBook',
  'Apple Watch',
  'Samsung',
  'Huawei',
  'Xiaomi',
  'Motorola',
  'Oppo',
  'Realme',
] as const

/** Opiniones textuales de su ficha de Google (4,8 · 888). */
export const REVIEWS = [
  {
    text: 'El equipo que los atendió bastante simpáticos y dispuestos para resolver dudas, el trabajo rápido y muy bueno, realicé un cambio de tapa trasero y quedó como nueva.',
    author: 'Antonio S.',
  },
  {
    text: 'Fui a esta tienda de servicio técnico y la experiencia fue excelente. Desde el primer momento, el personal fue muy amable, profesional y dispuesto a ayudar.',
    author: 'Eukaris G.',
  },
  {
    text: 'Me atendieron con mucha amabilidad y respeto desde el primer momento. Me explicaron todo el proceso técnico de forma clara y sencilla, sin apuros ni tecnicismos',
    author: 'Francisco G.',
    tag: 'Local Guide',
  },
] as const
