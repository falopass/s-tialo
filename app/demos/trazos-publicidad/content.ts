/**
 * app/demos/trazos-publicidad/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + letrero de la
 * fachada + reseñas de Google): nombre, dirección en 5 Sur 1631 (Talca),
 * teléfonos, correo, rating 4.1 con 54 reseñas y las citas de clientes.
 * Los textos de venta son de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Trazos Publicidad',
  short: 'Trazos',
  rubro: 'Taller de imagen y publicidad',
  address: '5 Sur 1631',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '71 222 3543',
  phoneTel: '+56712223543',
  phone2Display: '71 223 3979',
  phone2Tel: '+56712233979',
  email: 'contacto@trazos.cl',
  web: 'trazos.cl',
  rating: 4.1,
  reviews: 54,
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Trazos Publicidad, 5 Sur 1631, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Trazos Publicidad, 5 Sur 1631, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/trazos-publicidad'

/** Lo que ofrece el taller, según el letrero de su propia fachada. */
export const SERVICIOS = [
  'Impresión digital y láser',
  'Gigantografías',
  'Rotulación vehicular',
  'Letreros y luminosos',
  'Grabado láser',
  'Señalética',
  'Pendones',
  'Merchandising y estampados',
  'Plotter de corte',
] as const

/** Reseñas reales publicadas en su ficha de Google. */
export const RESENAS = [
  {
    author: 'Ana Rojas',
    stars: 5,
    text: 'Super amables se pasaron, me ayudaron con las dudas, me dieron ideas. Las señoritas que atienden un amor de personas, y el trabajo impecable.',
  },
  {
    author: 'Alex Ramirez',
    stars: 5,
    text: 'Excelente lugar para hacer estampados en tazas o poner fotos de un familiar en la lápida del cementerio. Su personal es altamente calificado. Lo recomiendo.',
  },
  {
    author: 'Cliente de Google',
    stars: 5,
    text: 'Conforme con la impresión de mi publicidad.',
  },
] as const

/** Trabajos reales publicados en su ficha de Google Maps. */
export const TRABAJOS = [
  {
    src: `${IMG}/bus.webp`,
    alt: 'Bus interurbano con franjas rosadas y azules rotulado por Trazos',
    tag: 'rotulación vehicular',
    title: 'Un bus entero como vitrina',
  },
  {
    src: `${IMG}/furgon.webp`,
    alt: 'Furgón blanco rotulado con logo rojo, visto desde atrás',
    tag: 'rotulación vehicular',
    title: 'Furgón con marca, en calle',
  },
  {
    src: `${IMG}/sprinter.webp`,
    alt: 'Van Mercedes Sprinter blanca con rotulado lateral y trasero',
    tag: 'flota',
    title: 'Flota con la misma identidad',
  },
  {
    src: `${IMG}/bus-instalacion.webp`,
    alt: 'Dos personas instalando un vinilo gigante sobre la carrocería de un bus',
    tag: 'en terreno',
    title: 'El wrap en plena instalación',
  },
  {
    src: `${IMG}/ambulancia.webp`,
    alt: 'Ambulancia blanca con franja amarilla y logos rotulados',
    tag: 'vehículo de emergencia',
    title: 'También vehículos de servicio',
  },
  {
    src: `${IMG}/vidriera.webp`,
    alt: 'Vidriera de local con película y gráfica adhesiva instalada',
    tag: 'vidrieras',
    title: 'Vidriera que trabaja sola',
  },
] as const
