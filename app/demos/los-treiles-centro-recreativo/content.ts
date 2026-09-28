/**
 * app/demos/los-treiles-centro-recreativo/content.ts
 *
 * Datos del mockup. REALES (verificados en la ficha de Google Maps de
 * Los Treiles Centro Recreativo y en la guía municipal de Pelarco,
 * culturayturismopelarco.cl/los-treiles/): nombre, dirección (Sitio
 * 28-B, sector Quesería, San Francisco, Pelarco), teléfono
 * (+56 9 4265 1303) y rating 4,6 con 39 opiniones en Google. Los
 * detalles del recinto salen de la guía de Pelarco: ~5.000 m² de
 * terreno, dos cabañas equipadas (para 6 y para 2 personas), piscina
 * de 90 m², tinaja de agua caliente, quincho techado, áreas verdes y
 * venta de artesanía en madera, atendido por sus propios dueños.
 */

export const BIZ = {
  name: 'Los Treiles Centro Recreativo',
  short: 'Los Treiles',
  rubro: 'Piscina, cabañas y recreo campestre',
  address: 'Sitio 28-B, sector Quesería, San Francisco',
  city: 'Pelarco',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4265 1303',
  phoneTel: '+56942651303',
  whatsapp: '56942651303',
  rating: '4,6',
  reviews: 39,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Los Treiles, vi su página y quiero reservar',
)}`

export const WA_LINK_CABANA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Los Treiles, quiero consultar por las cabañas',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Los Treiles Centro Recreativo, San Francisco, Pelarco',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Los Treiles Centro Recreativo, San Francisco, Pelarco',
)}&output=embed`

export const IMG = '/demos/los-treiles-centro-recreativo'

/** El recorrido del recinto, según la guía municipal de Pelarco. */
export const RECORRIDO = [
  {
    paso: '01',
    nombre: 'La piscina',
    detalle:
      'Noventa metros cuadrados de agua al sol del Maule, con sombrillas y reposeras alrededor. La excusa perfecta para no hacer nada.',
    foto: 'piscina-jardin',
    alt: 'Segunda piscina de Los Treiles entre pasto y árboles, con reposeras azules',
  },
  {
    paso: '02',
    nombre: 'Las cabañas',
    detalle:
      'Dos cabañas equipadas: una para seis personas y otra para dos, pensadas para quedarse la noche sin que falte nada.',
    foto: 'cabana',
    alt: 'Cabaña de madera de Los Treiles rodeada de áreas verdes, con cierre blanco',
  },
  {
    paso: '03',
    nombre: 'Quincho y tinaja',
    detalle:
      'Quincho techado para el asado y una tinaja de agua caliente para terminar el día mirando el campo.',
    foto: 'quincho',
    alt: 'Quincho techado de Los Treiles con parrilla y mesas de madera',
  },
  {
    paso: '04',
    nombre: 'Pradera y artesanía',
    detalle:
      'Cinco mil metros cuadrados de áreas verdes y venta de artesanía en madera, el recuerdo que sí cabe en el auto.',
    foto: 'pradera',
    alt: 'Pradera verde de Los Treiles con árboles y casas de fondo en San Francisco, Pelarco',
  },
] as const

export const CABANAS = [
  {
    nombre: 'Cabaña familiar',
    capacidad: 'Hasta 6 personas',
    detalle: 'Equipada, amplia y con salida directa al terreno. Ideal para la semana en familia.',
  },
  {
    nombre: 'Cabaña de a dos',
    capacidad: '2 personas',
    detalle: 'La versión compacta para escaparse en pareja, con lo mismo de equipada.',
  },
] as const

/** Reseñas reales de Google. */
export const RESENAS = [
  {
    texto: 'Buen lugar para quedarse, amplia cabaña y bien equipada.',
    autor: 'Esteban Gárate',
    nota: '5 estrellas',
  },
  {
    texto: 'Muy buen lugar, ameno y especial para desestresarse.',
    autor: 'David Dinamarca',
    nota: '5 estrellas',
  },
] as const
