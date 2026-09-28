// Datos verificados en Google Maps (ficha "Kids Art Talca") + redes oficiales
// (@kids.art_talca en Instagram — Vanessa Barros; "Kids Art Centro de eventos
// infantiles" en Facebook). Revisado: 2025.

export const BIZ = {
  slug: 'kids-art-talca',
  name: 'Kids Art Talca',
  short: 'Kids Art',
  rubro: 'Centro de eventos infantiles',
  tagline: 'Cumpleaños, baby showers y reuniones familiares en Villa Edén.',
  address: 'Pje. San Juan 481, Villa Edén',
  city: 'Talca',
  region: 'Maule',
  phone: '+56 9 9003 5219',
  phoneTel: '+56990035219',
  wa: '56990035219',
  // Ficha Google: 3.9★ (28 reseñas)
  rating: '3.9',
  reviews: 28,
  instagram: '@kids.art_talca',
  facebook: 'Kids Art Centro de eventos infantiles',
  mapQuery: 'Kids Art Talca, Talca',
}

export const WA_TEXT = encodeURIComponent(
  'Hola Kids Art, los encontré en su nueva página web. Quiero cotizar una fecha para un evento.',
)

// Lo que incluye el local, según sus publicaciones y reseñas reales.
export const INCLUYE = [
  { titulo: 'Local solo para tu evento', detalle: 'Se reserva completo: nadie más entra mientras celebran.' },
  { titulo: 'Juegos para los niños', detalle: 'Juego inflable y cama elástica, los favoritos según las reseñas.' },
  { titulo: 'Candy bar y mesón', detalle: 'Mesa de dulces y espacio para servir la comida.' },
  { titulo: 'Cocina equipada', detalle: 'Cocina y refrigerador disponibles para preparar y guardar.' },
  { titulo: 'Jardín y piscina', detalle: 'Sector exterior con jardín; las reseñas destacan la piscina.' },
  { titulo: 'Talleres de temporada', detalle: 'Además del arriendo, realizan talleres y club para niños de 6 a 13 años.' },
]

// Tipos de evento que anuncian en sus redes.
export const EVENTOS = [
  'Cumpleaños infantiles',
  'Baby shower',
  'Reuniones familiares',
  'Celebraciones escolares',
]

// Reseñas reales de la ficha de Google (texto resumido al original).
export const RESENAS = [
  {
    autor: 'Paulina B.',
    texto: 'Es un lugar excelente para poder celebrar los cumpleaños, mis niños lo pasaron increíble.',
  },
  {
    autor: 'Judith L.',
    texto: 'Hermoso lugar con juego inflable y cama elástica. Los niños quedaron felices.',
  },
  {
    autor: 'María José A.',
    texto: 'La atención maravillosa. Un lugar con todos los implementos para tener una celebración cómoda.',
  },
]

export const PASOS = [
  { n: '01', t: 'Escríbenos por WhatsApp', d: 'Cuéntanos la fecha, el tipo de evento y cuántos invitados son.' },
  { n: '02', t: 'Agenda tu visita o reserva', d: 'Confirmamos disponibilidad y te mostramos el local si quieres conocerlo.' },
  { n: '03', t: 'Llega y celebra', d: 'El local queda listo para tu evento. Tú solo traes la fiesta.' },
]

export const FOTOS = [
  { src: '/demos/kids-art-talca/interior.webp', alt: 'Interior del local de Kids Art: mesa de trabajo, pared decorada y sillas de colores' },
  { src: '/demos/kids-art-talca/mesa.webp', alt: 'Niños haciendo manualidades alrededor de la mesa de trabajo de Kids Art' },
  { src: '/demos/kids-art-talca/cocina.webp', alt: 'Cocina equipada con refrigerador y microondas disponible para los eventos' },
  { src: '/demos/kids-art-talca/manualidad.webp', alt: 'Niño pintando una manualidad con plumas de colores en un taller de Kids Art' },
  { src: '/demos/kids-art-talca/estrella.webp', alt: 'Niño pintando una estrella amarilla en la mesa de un taller de Kids Art' },
]
