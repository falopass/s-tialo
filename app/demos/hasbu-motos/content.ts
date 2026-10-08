/**
 * app/demos/hasbu-motos/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google de Hasbu Motos): nombre,
 * rubro (venta de motos), Talca, teléfono/WhatsApp y la cifra de 14 reseñas.
 * TODO lo demás es contenido de muestra: tipos de moto, precios, horarios,
 * garantías y textos. La ficha no publica catálogo, dirección, horarios ni
 * redes, así que esos espacios quedan como "[...]" editables.
 */

export const BIZ = {
  name: 'Hasbu Motos',
  short: 'Hasbu',
  rubro: 'Concesionario de motos',
  address: '[Dirección del local]',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6677 6616',
  phoneTel: '+56966776616',
  whatsapp: '56966776616',
  reviews: 14,
  /** Nota REFERENCIAL: la ficha real la define. Se reemplaza por la nota de Google. */
  ratingRef: 4.8,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Hasbu Motos y quiero cotizar una moto',
)}`

/** Mensaje prellenado por tipo de moto del catálogo. */
export function waMoto(tipo: string) {
  return `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página de Hasbu Motos y me interesa una moto tipo ${tipo}. ¿Qué tienen disponible?`,
  )}`
}

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hasbu Motos, Talca, Chile',
)}`

/** Catálogo de REFERENCIA por tipo de moto (no son modelos ni stock real). */
export const CATALOGO = [
  {
    kind: 'scooter',
    tipo: 'Scooter urbana',
    uso: 'Ciudad · diario',
    desc: 'Automática y ágil para el tráfico de todos los días.',
    chips: ['Automática', 'Bajo consumo', 'Ciudad'],
    precio: '$1.190.000',
    wide: true,
  },
  {
    kind: 'naked',
    tipo: 'Naked de calle',
    uso: 'Ciudad · ruta corta',
    desc: 'Postura cómoda y manejo liviano para ir y volver.',
    chips: ['Cambios', 'Versátil', 'Calle'],
    precio: '$1.590.000',
    wide: false,
  },
  {
    kind: 'enduro',
    tipo: 'Enduro / cross',
    uso: 'Tierra · campo',
    desc: 'Suspensión larga y ruedas altas para salir del pavimento.',
    chips: ['Off-road', 'Liviana', 'Campo'],
    precio: '$2.190.000',
    wide: false,
  },
  {
    kind: 'trail',
    tipo: 'Trail aventura',
    uso: 'Ruta · ripio',
    desc: 'Para el viaje largo: protección, autonomía y espacio de carga.',
    chips: ['Viajes', 'Carga', 'Ruta'],
    precio: '$2.890.000',
    wide: true,
  },
  {
    kind: 'custom',
    tipo: 'Custom / crucero',
    uso: 'Paseo · carretera',
    desc: 'Asiento bajo y estilo clásico para el paseo de fin de semana.',
    chips: ['Clásica', 'Asiento bajo', 'Paseo'],
    precio: '$3.490.000',
    wide: false,
  },
  {
    kind: 'deportiva',
    tipo: 'Deportiva',
    uso: 'Carretera · velocidad',
    desc: 'Carenado completo y postura agresiva para quien busca potencia.',
    chips: ['Carenada', 'Potencia', 'Carretera'],
    precio: '$3.990.000',
    wide: true,
  },
] as const

/** Textos genéricos y editables: Hasbu define sus condiciones reales. */
export const POR_QUE = [
  {
    n: '01',
    title: 'Garantía',
    text: 'Consulta las condiciones de garantía de cada moto, nueva o usada, antes de decidir.',
  },
  {
    n: '02',
    title: 'Atención directa',
    text: 'Escríbenos por WhatsApp: resolvemos dudas, mandamos fotos y confirmamos disponibilidad.',
  },
  {
    n: '03',
    title: 'Financiamiento',
    text: 'Pregunta por pie, cuotas y alternativas de financiamiento para tu moto.',
  },
  {
    n: '04',
    title: 'Servicio',
    text: 'Consulta por servicio y mantención para tu moto, nueva o usada.',
  },
] as const

/** Horarios REFERENCIALES: se reemplazan por los reales del local. */
export const HOURS = [
  { days: 'Lunes a viernes', time: '9:00–19:00' },
  { days: 'Sábado', time: '10:00–14:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

export const TICKER = [
  'Motos nuevas',
  'Motos usadas',
  'Financiamiento',
  'Garantía',
  'Servicio',
  'Talca',
]
