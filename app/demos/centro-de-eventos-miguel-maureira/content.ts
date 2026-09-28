/**
 * app/demos/centro-de-eventos-miguel-maureira/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + Facebook
 * «Carpas y Eventos Miguel Maureira», ~1.7 mil seguidores): nombre
 * «Centro De Eventos Miguel Maureira», rubro recinto para eventos,
 * camino K-675 (sector rural entre Talca y San Clemente), WhatsApp
 * +56 9 9593 6477, nota 4,2 con 77 reseñas y las reseñas citadas
 * (nombres y texto de la ficha). Características confirmadas por
 * reseñas y fotos: salón para fiestas de gala, dos piscinas (adultos
 * y niños), cancha de futbolito, mesas y sillas, baños amplios,
 * estacionamiento privado, jardines con sombra, animales del recinto
 * y banquetería/montaje. Se arrienda para eventos, previa reserva.
 * Fotos reales en public/demos/centro-de-eventos-miguel-maureira/
 * + logo real «MyM Recepciones y Eventos». Textos de apoyo son de
 * muestra.
 */

export const BIZ = {
  name: 'Centro de Eventos Miguel Maureira',
  short: 'Miguel Maureira',
  rubro: 'Recinto para eventos',
  camino: 'K-675',
  city: 'Talca',
  region: 'Región del Maule',
  address: 'Camino K-675, sector rural de Talca',
  phoneDisplay: '+56 9 9593 6477',
  phoneTel: '+56995936477',
  whatsapp: '56995936477',
  facebook: 'facebook.com/carpasyeventosmiguelmaureira',
  rating: '4,2',
  reviewCount: '77',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Centro de Eventos Miguel Maureira y quiero cotizar la fecha',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Centro+De+Eventos+Miguel+Maureira/@-35.5002411,-71.5510937,17z/data=!4m6!3m5!1s0x9665bfe845837079:0xe8a9518b2cf2180b!8m2!3d-35.5002411!4d-71.5510937!16s%2Fg%2F11f2k8xfkg'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro De Eventos Miguel Maureira, K-675, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/centro-de-eventos-miguel-maureira'

/** Actos del recinto: lo que se ve en sus fotos reales. */
export const ACTOS = [
  {
    acto: 'Acto I',
    nombre: 'El salón de las fiestas de gala',
    desc: 'Un salón amplio con escenario y mesas dispuestas para recepciones: el escenario de las fiestas de gala que cuentan las reseñas.',
    foto: 'banquete',
    alt: 'Salón de eventos con mesas redondas montadas en Centro de Eventos Miguel Maureira',
  },
  {
    acto: 'Acto II',
    nombre: 'Los jardines con sombra',
    desc: 'Jardines con arboleda para la sobremesa afuera: mucha sombra para compartir, dicen los que han ido.',
    foto: 'jardin',
    alt: 'Jardines con sombra y mesas al aire libre del recinto',
  },
  {
    acto: 'Acto III',
    nombre: 'Las dos piscinas',
    desc: 'Dos piscinas, una para adultos y otra para niños: aptas para todos en las jornadas de verano.',
    foto: 'piscina',
    alt: 'Piscina al aire libre del Centro de Eventos Miguel Maureira',
  },
  {
    acto: 'Acto IV',
    nombre: 'Los animales del recinto',
    desc: 'El recinto tiene sus propios animales para conocer — la llama de la foto es de la casa.',
    foto: 'llama',
    alt: 'Llama del recinto del Centro de Eventos Miguel Maureira',
  },
] as const

/** Confirmado por reseñas, fotos y su propia página de Facebook. */
export const INCLUYE = [
  'Salón de eventos con escenario',
  'Carpas y montaje',
  'Mesas y sillas',
  'Dos piscinas (adultos y niños)',
  'Cancha de futbolito',
  'Baños amplios',
  'Estacionamiento privado',
  'Jardines con sombra',
  'Animales del recinto',
  'Grupos grandes con reserva',
] as const

/** Reseñas reales de la ficha de Google (texto y autoría tal cual). */
export const REVIEWS = [
  {
    nombre: 'Pamela Angelica Rodriguez',
    texto: 'Fuimos a la fiesta de gala de mi hija, todo perfecto, bello lugar, comida exquisita.',
    fecha: 'Hace 9 meses',
    nota: 5,
  },
  {
    nombre: 'María Raquel Valdebenito',
    texto: 'Hermoso lugar, con animales para conocer, dos piscinas aptas para adultos y niños. Gran espacio para compartir.',
    fecha: 'Hace 7 años',
    nota: 5,
  },
  {
    nombre: 'Ambar Makeup',
    texto: 'Lugar amplio, lindo, ideal para aprovechar la piscina, se puede venir en grupos grandes, previa reserva. Estacionamiento privado, baños amplios.',
    fecha: 'Hace 6 años',
    nota: 5,
  },
] as const
