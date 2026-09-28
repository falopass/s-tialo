/**
 * Datos verificados — Constructora Avatar Limitada, Concepción.
 * Fuentes: ficha de Google Maps (dirección, teléfono, 5,0 con 1 reseña),
 * vellatrix.cl/grupo (Avatar ejecuta los edificios de departamentos de
 * Vellatrix e Inparco, actividades desde 2007), fichas de proyecto de
 * vellatrix.cl (Las Heras 1565, Vivo Rengo, Plaza Chiguayante) y fotos
 * reales de Maps del Edificio Las Heras 1565.
 */

export const BIZ = {
  name: 'Constructora Avatar Limitada',
  short: 'Avatar',
  rubro: 'Constructora',
  tag: 'Edificios de departamentos',
  address: 'Gral. Novoa 815',
  city: 'Concepción',
  phoneDisplay: '+56 41 246 3993',
  phoneTel: '+56412463993',
  rating: 5.0,
  ratingDisplay: '5,0',
  reviews: '1',
  since: '2007',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Constructora+Avatar+Limitada/@-36.8193169,-73.0201162,17z/data=!3m1!4b1!4m6!3m5!1s0x9669b43d29ceb3f7:0xd81dcb86a61b6ac8!8m2!3d-36.8193169!4d-73.0201162!16s%2Fg%2F11f1pgz_px'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Constructora+Avatar+Limitada,+Gral.+Novoa+815,+Concepci%C3%B3n&output=embed'

export const IMG = '/demos/constructora-avatar'

/** Obras confirmadas en vellatrix.cl y fichas públicas. */
export const OBRAS = [
  {
    id: '01',
    name: 'Edificio Las Heras 1565',
    place: 'Las Heras 1565, Concepción',
    status: 'Entregado',
    note: 'Torre de departamentos terminada y vendida en pleno centro.',
  },
  {
    id: '02',
    name: 'Edificio Vivo Rengo',
    place: 'Rengo 1170, Concepción',
    status: 'Entregado',
    note: 'Departamentos de 1 y 2 dormitorios con entrega inmediata.',
  },
  {
    id: '03',
    name: 'Condominio Plaza Chiguayante',
    place: 'Fresia 90, Chiguayante',
    status: 'Entregado',
    note: 'Dos torres frente a la plaza principal de Chiguayante.',
  },
  {
    id: '04',
    name: 'Mirador Don Camilo',
    place: 'Concepción',
    status: 'En ejecución',
    note: 'Obra en curso del grupo.',
  },
] as const
