/**
 * app/demos/pannton-arquitectura/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, 2026-09-28):
 * nombre, dirección, horario, teléfono/WhatsApp, nota y reseñas. Las fotos
 * de /public/demos/pannton-arquitectura son las publicadas en la misma
 * ficha. Los textos de servicios describen lo que muestran esas fotos y el
 * nombre del negocio; no hay precios ni plazos.
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

/** Fotos publicadas por el negocio en su ficha de Google Maps. */
export const WORKS = [
  { src: `${IMG}/adhesivos.webp`, alt: 'Rollo de adhesivos impresos con la marca Pannton sobre la mesa de trabajo', name: 'Adhesivos y etiquetas', desc: 'Etiquetas en rollo y adhesivos impresos para productos y envases.' },
  { src: `${IMG}/empaste.webp`, alt: 'Libro empastado en tapa dura con portada impresa a color', name: 'Empastes y libros', desc: 'Tesis, memorias y libros con tapa dura y portada impresa.' },
  { src: `${IMG}/dipticos.webp`, alt: 'Dípticos y folletos impresos a color desplegados en abanico', name: 'Folletería', desc: 'Dípticos, trípticos y volantes para difusión y eventos.' },
  { src: `${IMG}/tarjetas.webp`, alt: 'Pilas de tarjetas y volantes impresos recién cortados', name: 'Tarjetas y papelería', desc: 'Tarjetas de presentación y papelería impresa en tirajes a medida.' },
  { src: `${IMG}/colgantes-madera.webp`, alt: 'Colgantes de madera grabados con nombres, para graduación', name: 'Grabado y piezas personalizadas', desc: 'Colgantes y recuerdos grabados en madera para ceremonias.' },
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
