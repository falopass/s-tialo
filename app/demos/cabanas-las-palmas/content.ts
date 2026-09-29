// Datos verificados (sep 2026): ficha de Google Maps "Cabaña Las Palmas",
// Pedro de Valdivia 24, Chanco (homestay, sin reseñas ni fotos públicas).
// Teléfono (73) 55 1514 confirmado en directorios chilenos (es fijo → "Llamar").
// Ojo: existen cabañas homónimas en Iloca (SERNATUR) — descartadas.
// Sin fotos propias de la cabaña → escenas ilustrativas marcadas "bosquejo";
// el resto de las fotos son reales del sector: su calle, la Reserva Nacional
// Federico Albert (a unas cuadras) y la playa de Chanco.

const BIZ = {
  name: 'Cabañas Las Palmas',
  short: 'Las Palmas',
  rubro: 'Cabañas equipadas',
  address: 'Pedro de Valdivia 24',
  city: 'Chanco',
  region: 'Maule',
  phoneDisplay: '(73) 551 514',
  phoneTel: 'tel:+5673551514',
} as const

export { BIZ }

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Caba%C3%B1a+Las+Palmas+Pedro+de+Valdivia+Chanco'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=Caba%C3%B1a+Las+Palmas,+Pedro+de+Valdivia,+Chanco&z=16&output=embed'

export const IMG = '/demos/cabanas-las-palmas'

// El cuaderno de la costa: entradas de bitácora con lo que hay alrededor.
// Reserva Nacional Federico Albert: 145 ha, senderos entre eucaliptos y
// el mirador de las dunas — a unas cuadras de la cabaña.
export const BITACORA = [
  {
    n: 'n°01',
    titulo: 'Reserva Nacional Federico Albert',
    texto:
      'A unas cuadras de la cabaña: 145 hectáreas de bosque de eucaliptos y senderos que terminan en el mirador de las dunas sobre el mar.',
    img: 'sendero',
    pie: 'camino entre eucaliptos de la reserva',
  },
  {
    n: 'n°02',
    titulo: 'Sendero Las Dunas',
    texto:
      'El paseo clásico del parque: tablones, bosque y dunas antes de abrirse hacia la costa. Se recorre sin apuro en menos de una hora.',
    img: 'dunas',
    pie: 'acceso del Sendero Las Dunas',
  },
  {
    n: 'n°03',
    titulo: 'Playa de Chanco',
    texto:
      'Al final del tablón de madera: una playa larga y abierta, con mar bravo. La caminata de todos los días de quien se queda en Las Palmas.',
    img: 'playa',
    pie: 'pasarela hacia la playa de Chanco',
  },
] as const

export const FOTOS = {
  playa: {
    src: `${IMG}/playa.webp`,
    alt: 'Pasarela de madera hacia la playa de Chanco, con dunas al fondo',
    real: true,
  },
  calle: {
    src: `${IMG}/calle.webp`,
    alt: 'Calle Pedro de Valdivia en Chanco, donde quedan las cabañas',
    real: true,
  },
  reserva: {
    src: `${IMG}/reserva.webp`,
    alt: 'Letrero del Sendero Las Dunas en la Reserva Nacional Federico Albert',
    real: true,
  },
  sendero: {
    src: `${IMG}/sendero.webp`,
    alt: 'Camino entre eucaliptos dentro de la reserva',
    real: true,
  },
  dunas: {
    src: `${IMG}/dunas.webp`,
    alt: 'Entrada del Sendero Las Dunas, parque de Chanco',
    real: true,
  },
  bosque: {
    src: `${IMG}/bosque.webp`,
    alt: 'Sendero entre el bosque de la reserva',
    real: true,
  },
  eucalipto: {
    src: `${IMG}/eucalipto.webp`,
    alt: 'Eucaliptos altos de la reserva Federico Albert',
    real: true,
  },
  cabana: {
    src: `${IMG}/bosquejo-cabana.webp`,
    alt: 'Bosquejo ilustrativo: cabaña de madera entre árboles',
    real: false,
  },
  interiorCabana: {
    src: `${IMG}/bosquejo-interior.webp`,
    alt: 'Bosquejo ilustrativo: interior acogedor de una cabaña',
    real: false,
  },
} as const
