/**
 * app/demos/transportes-opazo/content.ts
 *
 * Datos REALES verificados el 2026-09-29 en la ficha de Google Maps
 * "Transportes Opazo" (San Javier de Loncomilla, Maule):
 * - Categoría en Maps: empresa de transporte por camión.
 * - Fono de la ficha: +56 73 232 1235 (red fija; no publican WhatsApp).
 * - Nota 4,6 con 16 reseñas (13 de 5 estrellas, 3 de 3 estrellas).
 * - La puerta del camión forestal de la foto real dice
 *   "TRANSPORTES OPAZO LTDA." (razón social).
 * - Prensa regional (sabes.cl, 2025): el dueño es Carlos Opazo, empresa
 *   familiar de San Javier con camiones y maquinaria, que presta
 *   servicios también a proyectos fuera de la región.
 * - Ojo: el brief decía San Clemente; la ficha con este teléfono es la de
 *   San Javier de Loncomilla (queda a ~30 km). Se usa el dato real.
 * - Fotos reales: camión plano con tractores (2 tomas) y camión forestal
 *   cargado de troncos (ficha de Maps). bosquejo-*.webp son imágenes de
 *   referencia generadas: van marcadas como bosquejo en la página.
 * Todo lo demás (tipos de carga, formulaciones) es contenido de muestra
 * basado en lo que muestran las fotos (carga general, forestal, maquinaria).
 */

export const BIZ = {
  name: 'Transportes Opazo',
  legal: 'Transportes Opazo Ltda.',
  short: 'T. Opazo',
  rubro: 'Transporte de carga por camión',
  address: 'San Javier de Loncomilla',
  city: 'San Javier',
  region: 'Región del Maule',
  phoneDisplay: '+56 73 232 1235',
  phoneTel: '+56732321235',
  rating: '4,6',
  reviews: 16,
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Transportes Opazo, San Javier de Loncomilla, Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Transportes Opazo, San Javier de Loncomilla, Maule',
)}&output=embed`

export const IMG = '/demos/transportes-opazo'

/** Lo que mueven según sus propias fotos: troncos, maquinaria, carga general. */
export const CARGAS = [
  {
    code: 'C-01',
    nombre: 'Carga general',
    detalle: 'Fletes para empresas y particulares: lo que hay que mover, coordinado por teléfono y a la medida.',
  },
  {
    code: 'C-02',
    nombre: 'Forestal y troncos',
    detalle: 'Camión forestal con estacas para rollizos; la madera del Maule y la zona sur es su pan de cada día.',
  },
  {
    code: 'C-03',
    nombre: 'Maquinaria y agro',
    detalle: 'Cama plana para tractores, implementos y equipos: se amarra, se carga y se entrega.',
  },
  {
    code: 'C-04',
    nombre: 'Proyectos fuera de la región',
    detalle: 'También trabajan para obras y proyectos en otras regiones, con camiones y maquinaria propia.',
  },
] as const

/** La flota que se ve en su ficha (3 fotos reales) + referencias marcadas. */
export const FLOTA = [
  {
    img: 'forestal',
    bosquejo: false,
    caption: 'El forestal cargado, listo para la ruta',
    alt: 'Camión real de Transportes Opazo Ltda. cargado con troncos de pino junto a una excavadora',
  },
  {
    img: 'tractores',
    bosquejo: false,
    caption: 'Cama plana con mini tractores amarrados',
    alt: 'Camión plano real de Transportes Opazo trasladando mini tractores amarrados con cinchas',
  },
  {
    img: 'camion',
    bosquejo: false,
    caption: 'La plana en el patio, entre viajes',
    alt: 'Camión plano real de Transportes Opazo estacionado con tractores cargados',
  },
  {
    img: 'bosquejo-patio',
    bosquejo: true,
    caption: 'El patio de San Javier, base de la flota',
    alt: 'Bosquejo de referencia: dos camiones blancos en un patio de grava con pilas de troncos al atardecer',
  },
  {
    img: 'bosquejo-ruta',
    bosquejo: true,
    caption: 'La ruta del sur al amanecer',
    alt: 'Bosquejo de referencia: camión cargado de troncos por una carretera rural entre praderas y plantaciones al amanecer',
  },
] as const

/** Reseñas reales de la ficha de Google (texto + nombre + antigüedad). */
export const RESENAS = [
  {
    texto: 'Muy buen lugar donde estacionar.',
    autor: 'Carlos Castillo',
    detalle: 'hace 1 año',
    estrellas: 5,
  },
  {
    texto: 'Buena empresa de transporte.',
    autor: 'Baudilio Jofré',
    detalle: 'hace 3 años',
    estrellas: 5,
  },
  {
    texto: 'Cargan 2,65 para nueva aldea.',
    autor: 'Rene Mauricio Zúñiga Bravo',
    detalle: 'hace 4 años',
    estrellas: 5,
  },
] as const
