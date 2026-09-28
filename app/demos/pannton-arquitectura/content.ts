/**
 * app/demos/pannton-arquitectura/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, 2026-09-28):
 * nombre, dirección, horario, teléfono/WhatsApp, nota y reseñas. Las fotos
 * de /public/demos/pannton-arquitectura son las publicadas en la misma
 * ficha; los nombres de los trabajos describen lo que se ve en cada foto
 * (Municipalidad de Talca, CESFAM Faustino González, UCM, CTV). No hay
 * precios ni plazos.
 */

export const BIZ = {
  name: 'Pannton, Arquitectura y Soluciones Gráficas',
  short: 'Pannton',
  address: 'Diez Oriente 3057, entre 19 y 20 Norte, Lomas de Lircay',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7645 6647',
  whatsapp: '56976456647',
  rating: 4.2,
  ratingLabel: '4,2',
  reviews: 22,
  hours: [
    { days: 'Lunes a viernes', time: '9:00–13:15 y 15:00–18:30' },
    { days: 'Sábado y domingo', time: 'Cerrado' },
  ],
} as const

export const IMG = '/demos/pannton-arquitectura'

/** Fotos reales de la ficha de Google Maps; el título nombra lo que se ve. */
export const WORKS = [
  {
    src: `${IMG}/hero.webp`,
    alt: 'Tomos anillados del Parque Público Cerro La Virgen impresos para la Municipalidad de Talca',
    name: 'Libros para la Municipalidad de Talca',
    desc: 'Tomos anillados del Parque Público Cerro La Virgen, portada a todo color.',
  },
  {
    src: `${IMG}/carnet-cesfam.webp`,
    alt: 'Pila de carnets de control multimorbilidad impresos para el CESFAM Faustino González de Talca',
    name: 'Carnets para el CESFAM Faustino González',
    desc: 'Carnets de control multimorbilidad para el consultorio de la Municipalidad de Talca.',
  },
  {
    src: `${IMG}/dipticos.webp`,
    alt: 'Tiraje de cuadernos pedagógicos del Foro de Culturas Ciudadanas para la UCM',
    name: 'Cuaderno pedagógico para la UCM',
    desc: 'Tiraje de cuadernos del Foro de Culturas Ciudadanas para la Universidad Católica del Maule.',
  },
  {
    src: `${IMG}/adhesivos.webp`,
    alt: 'Rollos de etiquetas adhesivas impresas sobre el mesón de corte de Pannton',
    name: 'Etiquetas en rollo',
    desc: 'Etiquetas adhesivas impresas en rollo para productos y envases.',
  },
  {
    src: `${IMG}/tarjetas.webp`,
    alt: 'Tacos de tarjetas impresas para el Centro Tecnológico de la Vid y el Vino',
    name: 'Tarjetas para el Centro de la Vid y el Vino',
    desc: 'Tarjetas de registro para el Centro Tecnológico de la Vid y el Vino.',
  },
  {
    src: `${IMG}/colgantes-madera.webp`,
    alt: 'Colgantes de madera grabados con nombre, curso y generación para una graduación',
    name: 'Colgantes de madera grabados',
    desc: 'Piezas grabadas con nombre y generación para colegios y ceremonias.',
  },
  {
    src: `${IMG}/empaste.webp`,
    alt: 'Tesis empastada en tapa dura con portada impresa y el nombre del titulado',
    name: 'Empaste de tesis y memorias',
    desc: 'Tapa dura con portada impresa: tesis, memorias y libros a pedido.',
  },
] as const

/** Reseñas públicas de la ficha de Google Maps (nombre de pila). */
export const REVIEWS = [
  { text: 'Calidad, rapidez y responsabilidad en los tiempos de entrega.', author: 'Cristian' },
  { text: 'Excelente forma de atender y buena disposición para ayudar en las solicitudes de diseño. Está cerca de la Universidad de Talca y sus precios son accesibles.', author: 'Victoria' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pannton y quiero cotizar un trabajo',
)}`

const MAPS_QUERY = 'Pannton, Arquitectura y Soluciones Graficas, Diez Oriente 3057, Talca, Chile'
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`
