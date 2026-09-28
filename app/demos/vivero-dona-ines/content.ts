/**
 * app/demos/vivero-dona-ines/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, 2026-09-28):
 * nombre, rubro, dirección en Itahue (sector Los Aromos), WhatsApp,
 * nota 4,0 y ~31 opiniones (la ficha muestra 4 cargadas + «ver más
 * opiniones (27)»). Las 4 fotos de /public/demos/vivero-dona-ines son
 * las publicadas en la misma ficha — la ficha no tiene más fotos.
 * No hay horario confirmado en la ficha: se invita a confirmarlo por
 * WhatsApp. No se citan reseñas textuales ni se inventan productos.
 */

export const BIZ = {
  name: 'Vivero Doña Inés',
  short: 'Doña Inés',
  rubro: 'Vivero y plantas',
  address: 'Itahue, caletera oriente S/N, Los Aromos',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6430 7017',
  whatsapp: '56964307017',
  rating: 4.0,
  ratingLabel: '4,0',
  reviewsLabel: 'más de 30 opiniones',
} as const

export const IMG = '/demos/vivero-dona-ines'

/** Fotos reales publicadas en la ficha de Google Maps. */
export const FOTOS = {
  plantas: {
    src: `${IMG}/plantas.webp`,
    alt: 'Arbustos y plantas jóvenes en bolsas de vivero al aire libre en Doña Inés',
  },
  almacigos: {
    src: `${IMG}/almacigos.webp`,
    alt: 'Hileras de almácigos verdes creciendo bajo malla sombra en el vivero',
  },
  arreglos: {
    src: `${IMG}/arreglos.webp`,
    alt: 'Arreglo de suculentas con espejos armado en el vivero',
  },
  llegada: {
    src: `${IMG}/llegada.webp`,
    alt: 'Letrero caminero del desvío a Itahue, a 500 metros de la Ruta 5',
  },
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Vivero Doña Inés y quiero consultar por una planta',
)}`

export const WA_LINK_STOCK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, ¿qué plantas tienen disponibles esta semana?',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vivero Doña Inés, Los Aromos, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Vivero Doña Inés, Itahue, Los Aromos, Molina, Chile',
)}&output=embed`
