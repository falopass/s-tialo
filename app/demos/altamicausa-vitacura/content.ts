/**
 * app/demos/altamicausa-vitacura/content.ts
 *
 * Datos del mockup. REALES (verificados el 5-11-2026 en fuentes del
 * propio negocio):
 * - Nombre, marca y rótulo: «Altamicausa Restaurant», «Comida peruana
 *   fusión · Internacional» (su logo). Bio de Instagram: «Cocina
 *   peruana e internacional». (@altamicausa.vitacura)
 * - Dirección: Av. Nueva Costanera 3666, local 2, Vitacura, Santiago.
 *   (ficha de Google Maps «Restaurante Altamicausa»)
 * - Horario: lunes a sábado 11:00 a 23:00, domingo cerrado. (Google
 *   Maps, actualizado por el local)
 * - Reservas por WhatsApp +56 9 5705 9320; Instagram
 *   @altamicausa.vitacura; TikTok @altamicausa3666.
 * - Reputación: 5,0 con 40 opiniones en Google. Las tres citas de
 *   REVIEWS son textuales, con nombre e inicial. (Google Maps)
 * - Presentaciones, carta y tragos: nombres y contenidos textuales de
 *   sus publicaciones y de la carta publicada por el local. Sin
 *   precios: el local los cambia seguido.
 * - Frases del copy («Una propuesta gastronómica que celebra…», «Cada
 *   plato tiene algo que contar», «Coctelería con identidad…», etc.)
 *   salen de sus propias publicaciones.
 * - Happy Hour: lunes a viernes 15:00 a 22:00, con Aperol Spritz,
 *   mojito, chilcano, piscola y pisco sour. (su post del 29-10-2026)
 * - Cumpleaños: «El cumpleañero no paga» con sus cuatro requisitos.
 *   (su post y destacada «Cumpleaños»)
 * - Fotos: todas del local, publicadas por ellos en Instagram, en
 *   public/demos/altamicausa-vitacura/.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, rótulos gráficos y descripciones
 * breves que enlazan sus frases. Sin precios ni descuentos.
 */

export const BIZ = {
  name: 'Altamicausa',
  brand: 'Altamicausa Restaurant',
  rubro: 'Cocina peruana e internacional',
  tagline: 'Comida peruana fusión · Internacional',
  address: 'Av. Nueva Costanera 3666, local 2',
  city: 'Vitacura',
  region: 'Santiago',
  phoneDisplay: '+56 9 5705 9320',
  phoneTel: '+56957059320',
  whatsapp: '56957059320',
  instagram: 'https://www.instagram.com/altamicausa.vitacura/',
  igUser: '@altamicausa.vitacura',
  tiktok: 'https://www.tiktok.com/@altamicausa3666',
  tiktokUser: '@altamicausa3666',
  rating: '5,0',
  ratingValue: 5.0,
  reviews: 40,
} as const

export const WA_LINK =
  'https://wa.me/56957059320?text=Hola%20Altamicausa%2C%20quiero%20reservar%20una%20mesa'

export const WA_COMPARTIR = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Altamicausa, quiero reservar una mesa para compartir',
)}`

export const WA_CARTA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Altamicausa, quiero la carta completa',
)}`

export const WA_CUMPLE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Altamicausa, quiero reservar para un cumpleaños',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurante Altamicausa, Av. Nueva Costanera 3666, Vitacura, Santiago',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Nueva Costanera 3666, Vitacura, Santiago',
)}&output=embed`

/** Horario real de su ficha (actualizado por el local esta semana). */
export const HORARIO = [
  { dias: 'Lunes a sábado', horas: '11:00 a 23:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
] as const

/** Presentaciones para compartir, su sello (contenido de sus posts). */
export const PRESENTACIONES = [
  {
    numeral: 'I',
    nombre: 'Barco Altamicausa',
    foto: 'barco.webp',
    w: 1440,
    h: 1230,
    alt: 'Barco Altamicausa de madera cargado con arroces, ceviche, causa y leches de tigre',
    items: [
      'Arroz verde',
      'Tallarín salteado',
      'Arroz con mariscos',
      'Jalea mixta',
      'Causa limeña',
      'Ceviche',
      'Leches de tigre',
      'Y más',
    ],
  },
  {
    numeral: 'II',
    nombre: 'Maracanazo',
    foto: 'maracanazo.webp',
    w: 1440,
    h: 1250,
    alt: 'Maracanazo: bandeja en forma de estadio con cancha y arco, rodeada de sus platos',
    lema: 'La alineación perfecta',
    items: [
      'Tres tipos de leche de tigre',
      'Cóctel de camarón',
      'Sushi de causa',
      'Chaufa clásico',
      'Alitas en salsa de maracuyá',
      'Cerdo a la BBQ',
      'Aros de cebolla',
    ],
  },
  {
    numeral: 'III',
    nombre: 'Carrusel Criollo',
    foto: 'carrusel-criollo.webp',
    w: 1440,
    h: 1230,
    alt: 'Carrusel Criollo de dos pisos con brochetas y cocina criolla',
    items: [
      'Brochetas de pollo y carne',
      'Seco de carne',
      'Lomo saltado',
      'Cau cau de mariscos',
      'Ají de gallina',
    ],
  },
  {
    numeral: 'IV',
    nombre: 'Rueda de Alitas',
    foto: 'rueda-alitas.webp',
    w: 960,
    h: 1290,
    alt: 'Rueda de madera con alitas y aros de cebolla',
    items: [
      'Alitas acevichadas',
      'Alitas en salsa de maracuyá',
      'Costillas de cerdo en salsa barbacoa',
      'Yucas rellenas con queso',
      'Acompañada de aros de cebolla',
    ],
  },
] as const

/** Cuatro grupos de la carta real (nombres textuales, sin precios). */
export const CARTA = [
  {
    grupo: 'Ceviches y tiraditos',
    platos: [
      'Ceviche Altamicausa',
      'Ceviche Mixto',
      'Ceviche de Salmón Nikkei',
      'Ceviche de Champiñones',
      'Tiradito de Atún en Costra de Sésamo',
      'Tiradito de Pulpo en Salsa Thai y Toque de Soya',
      'Trilogía de Tiraditos',
      'Leche de Tigre',
    ],
  },
  {
    grupo: 'Causas',
    platos: [
      'Causa Rellena con Pulpa de Jaiba',
      'Causa de Pollo a la Limeña Fusión',
      'Maki Causa Acevichada',
    ],
  },
  {
    grupo: 'Criollos',
    platos: [
      'Lomo Saltado Criollo',
      'Lomo Saltado Mar y Monte',
      'Ají de Gallina',
      'Pollo Saltado Criollo',
      'Aeropuerto Altamicausa de la Casa',
      'Anticucho de Corazón de Vacuno a la Parrilla',
      'Garrón de Cordero con Tacu Tacu',
    ],
  },
  {
    grupo: 'Mar y parrilla',
    platos: [
      'Arroz con Mariscos al Estilo Altamicausa',
      'Chaufa Marino',
      'Parihuela',
      'Chupe de Camarones',
      'Pulpo a la Parrilla',
      'Salmón a la Parrilla en Salsa de Cau Cau',
      'Albacora a la Parrilla en Salsa de Ají de Maracuyá',
      'Costillar de Cerdo en BBQ de Cacao',
    ],
  },
] as const

/** Happy Hour: lunes a viernes 15:00 a 22:00 (post del 29-10-2026). */
export const TRAGOS = [
  'Pisco Sour',
  'Chilcano',
  'Mojito',
  'Aperol Spritz',
  'Piscola',
] as const

/** Opiniones textuales de Google (5,0 con 40 opiniones). */
export const REVIEWS = [
  {
    text: 'Muy bonito el local, la atención fue súper grata desde que llegamos y la comida excelente. Totalmente recomendado',
    author: 'Zac',
  },
  {
    text: 'Increíble restaurante, platos grandes y sabrosos, realmente una atención dedicada',
    author: 'Renata C.',
  },
  {
    text: '¡Excelente experiencia! La calidad de la comida es realmente excelente',
    author: 'Maria Victoria C.',
    extra: 'Local Guide',
  },
] as const

export const IMG = '/demos/altamicausa-vitacura'
