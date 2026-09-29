/**
 * app/demos/koke-graf-publicidad/content.ts
 *
 * Datos REALES verificados (sept 2026): ficha de Google Maps + Instagram
 * @kokegraf (mismo teléfono y dirección: la identidad cuadra).
 * Las fotos son de su fachada y de trabajos publicados en su propio
 * Instagram; las reseñas citadas son textuales de su ficha de Google.
 */

export const BIZ = {
  name: 'Koke Graf Publicidad',
  short: 'Koke Graf',
  rubro: 'Agencia de publicidad e impresión',
  address: 'Cancha Rayada 1679',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '71 222 3228',
  phoneTel: '+56712223228',
  instagram: '@kokegraf',
  rating: 4.2,
  ratingDisplay: '4,2',
  reviews: '48',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Koke Graf Publicidad, Cancha Rayada 1679, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Koke Graf Publicidad, Cancha Rayada 1679, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/koke-graf-publicidad'

/** Horario real según su ficha de Google. */
export const HOURS = [
  { d: 'Lunes a viernes', h: '8:30 a 13:30 · 14:30 a 18:30' },
  { d: 'Sábado', h: 'Cerrado' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

/** Lo que hacen, según su propio letrero y sus publicaciones. */
export const SERVICES = [
  { name: 'Letreros y vallas', detail: 'Para fachadas, postes y terreno' },
  { name: 'Rotulación vehicular', detail: 'Autos, camionetas y flotas completas' },
  { name: 'Impresión gran formato', detail: 'Full color, como dice su letrero' },
  { name: 'Pendones y señalética', detail: 'Lonas, placas y señales de local' },
] as const

/** Trabajos reales publicados por @kokegraf en Instagram. */
export const WORKS = [
  {
    src: `${IMG}/letrero-rojas.webp`,
    alt: 'Valla negra con el logo amarillo de R Rojas instalada sobre una bodega',
    client: 'R Rojas',
    piece: 'Valla de terreno',
  },
  {
    src: `${IMG}/camion.webp`,
    alt: 'Camión de carga con rotulación publicitaria completa en la carrocería',
    client: 'Rotulación de camión',
    piece: 'Carrocería completa',
  },
  {
    src: `${IMG}/citroen.webp`,
    alt: 'Citroën Basalt negro con adhesivos blancos de test drive',
    client: 'Citroën Basalt · Posselot',
    piece: 'Rotulación vehicular',
  },
  {
    src: `${IMG}/letrero-cristal.webp`,
    alt: 'Valla verde del supermercado Cristal instalada en postes verdes',
    client: 'Supermercado Cristal',
    piece: 'Valla publicitaria',
  },
  {
    src: `${IMG}/letrero-punto-apuestas.webp`,
    alt: 'Tótem circular de Punto Apuestas en un poste junto a la vereda',
    client: 'Punto Apuestas',
    piece: 'Tótem en poste',
  },
] as const

/** Citas textuales de su ficha de Google (reseñas reales). */
export const REVIEWS = [
  {
    text: 'Un lugar bastante discreto pero con todas las opciones de impresiones y publicidad. Buena atención y buenos precios.',
    name: 'Miguel Hernández',
  },
  {
    text: 'Muy buena atención, del personal y su dueño, buen trabajo gráfico, y todo lo que a publicidad se refiere.',
    name: 'Neptali Sanabria',
  },
  {
    text: 'Excelentes diseños y precios, complacido con el trabajo que realizaron.',
    name: 'Edgar Sanchez',
  },
] as const
