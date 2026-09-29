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

// Fotos reales de la ficha de Google Maps y de su Instagram.
export const FOTOS = [
  { src: '/demos/kids-art-talca/inflable.webp', alt: 'Niña jugando dentro del juego inflable de colores de Kids Art', w: 900, h: 1200 },
  { src: '/demos/kids-art-talca/fachada.webp', alt: 'Fachada de colores del local de eventos infantiles en Villa Edén', w: 1200, h: 900 },
  { src: '/demos/kids-art-talca/mesa-fiesta.webp', alt: 'Mesa de cumpleaños decorada con arco de globos y banderines en Kids Art', w: 1200, h: 900 },
  { src: '/demos/kids-art-talca/deco-cumple.webp', alt: 'Muro decorado con letrero feliz cumpleaños y arco de globos', w: 1200, h: 675 },
  { src: '/demos/kids-art-talca/piscina.webp', alt: 'Piscina del jardín de Kids Art cercada para los eventos', w: 1100, h: 619 },
  { src: '/demos/kids-art-talca/pelotero.webp', alt: 'Pelotero de colores dentro del local de Kids Art', w: 1200, h: 900 },
  { src: '/demos/kids-art-talca/juegos-jardin.webp', alt: 'Taca taca y piscina en el jardín exterior del local', w: 750, h: 1000 },
  { src: '/demos/kids-art-talca/jardin.webp', alt: 'Árboles y sector de jardín del local de eventos Kids Art', w: 640, h: 640 },
]
