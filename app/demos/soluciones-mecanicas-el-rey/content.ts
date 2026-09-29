export const BIZ = {
  name: 'Soluciones Mecánicas El Rey',
  corto: 'El Rey',
  rubro: 'Taller mecánico · autos y motos',
  address: 'Dos y medio norte 3038, población Nuevo Horizonte, Talca',
  addressCorto: '2½ norte 3038, Nuevo Horizonte, Talca',
  referencia: 'Entre 22 y 23 oriente',
  phone: '+56 9 4695 7610',
  rating: '5,0',
  resenas: 62,
  hours: [
    { days: 'Lunes a viernes', time: '09:00–20:00' },
    { days: 'Sábado', time: '09:00–18:00' },
    { days: 'Domingo', time: 'Cerrado' },
  ],
}

export const WA_LINK =
  'https://wa.me/56946957610?text=Hola%2C%20quiero%20agendar%20una%20hora%20en%20Soluciones%20Mec%C3%A1nicas%20El%20Rey.'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Soluciones%20Mec%C3%A1nicas%20El%20Rey%2C%20Dos%20y%20medio%20norte%203038%2C%20Talca'

// Coordenadas exactas de la ficha de Google Maps.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4290135,-71.6337616&z=16&output=embed'

// Servicios tal como los lista el afiche publicado por el propio taller
// en su ficha de Google Maps.
export const SERVICIOS = [
  'Mecánica general',
  'Cambio de aceite',
  'Electricidad automotriz',
  'Iluminación',
  'Scanner',
  'DPF off',
  'Lavado',
  'Desabolladura y pintura',
  'Autos y motos',
]

// Reseñas verbatim de la ficha de Google Maps (todas 5 estrellas).
export const RESENAS = [
  {
    autor: 'Rene Valera',
    cuando: 'hace 6 meses',
    texto:
      'Buena atención, amabilidad y sobretodo solución para problemas de luces de un Peugeot que siempre es complicado.',
  },
  {
    autor: 'Cristian HT',
    cuando: 'hace 8 meses',
    texto:
      'Muy buen taller. Ya que en mi caso personal, me recomendaron marcas de repuestos para asegurar una buena reparacion, además de enviarme fotos del proceso y al final me entregaron las piezas cambiadas…',
  },
  {
    autor: 'Darwing Atilano',
    cuando: 'hace 2 años',
    texto: 'Excelente servicio muy profesional y responsable recomendado al 100%',
  },
  {
    autor: 'Mario González Sucre',
    cuando: 'hace 6 meses',
    texto: 'Muy buen servicio',
  },
]

// Fotos reales: la fachada y el afiche fueron subidos por el propio negocio
// a su ficha de Google Maps; las vistas de calle son del Street View de la
// ficha (marzo 2024). El logo se recortó del afiche.
export const FOTOS = {
  fachada: {
    src: '/demos/soluciones-mecanicas-el-rey/fachada.webp',
    alt: 'Fachada del taller Soluciones Mecánicas El Rey en 2½ norte 3038, Talca, publicada por el negocio en Google Maps',
  },
  afiche: {
    src: '/demos/soluciones-mecanicas-el-rey/afiche.webp',
    alt: 'Afiche publicado por Soluciones Mecánicas El Rey con sus servicios, teléfonos y dirección en Talca',
  },
  calleTaller: {
    src: '/demos/soluciones-mecanicas-el-rey/calle-taller.webp',
    alt: 'Vista de calle del taller El Rey en 2½ norte, población Nuevo Horizonte, Talca',
  },
  calleCuadra: {
    src: '/demos/soluciones-mecanicas-el-rey/calle-cuadra.webp',
    alt: 'Cuadra de 2½ norte entre 22 y 23 oriente donde está el taller El Rey, Talca',
  },
  logo: '/demos/soluciones-mecanicas-el-rey/logo.webp',
}

// Fuentes: ficha de Google Maps “Soluciones Mecánicas El Rey” (nombre,
// dirección, teléfono +56 9 4695 7610, horario, nota 5,0 con 62 reseñas
// —todas 5 estrellas—, entrada accesible, fotos de la fachada y el afiche);
// el afiche publicado por el negocio (servicios, segundo teléfono e
// Instagram @solucionesmecanicaselrey); Street View de la ficha (mar 2024).
