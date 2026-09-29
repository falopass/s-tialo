/**
 * app/demos/andrea-beauty/content.ts
 *
 * Datos REALES verificados (29-09-2026):
 * - Ficha de Google Maps: "Andrea Beauty", Centro de estética, Talca;
 *   teléfono +56 9 3393 4928; rating 5,0.
 * - AgendaPro (andreabeautyacademy.site.agendapro.com): "Andrea Beauty
 *   Academy", oficina 1319, Talca; mismo teléfono; profesionales
 *   Maria Morales, Mia Garcia, Michell Palma y Sofia Letelier;
 *   categorías publicadas: cursos, limpiezas faciales, manicure,
 *   microneedling, masajes, uñas, extensiones pelo a pelo, pestañas,
 *   tratamientos corporales.
 * - Instagram @andreabeauty.cl (17K seguidores): "Curso de pestañas
 *   Talca · Lifting · Reductivos · Uñas · Faciales" — las fotos del
 *   demo son de ese perfil (trabajos reales de uñas, lifting y
 *   pedicura) y de la ficha de Maps.
 */

export const BIZ = {
  name: 'Andrea Beauty',
  legal: 'Andrea Beauty Academy',
  rubro: 'Centro de estética y cosmetología',
  slogan: 'Belleza natural con protocolos profesionales',
  address: 'Oficina 1319',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3393 4928',
  phoneTel: '+56933934928',
  whatsapp: '56933934928',
  rating: 5.0,
  ratingLabel: '5,0',
  seguidores: '17 mil',
  instagram: 'https://www.instagram.com/andreabeauty.cl/',
  agenda: 'https://andreabeautyacademy.site.agendapro.com/cl/sucursal/395697',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Andrea Beauty, quiero agendar una hora',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Andrea Beauty, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Andrea Beauty, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/andrea-beauty'

/** Categorías publicadas en su agenda online */
export const SERVICIOS = [
  { nombre: 'Uñas y manicure', detalle: 'Esmaltado, nail art y cuidado completo de la mano.' },
  { nombre: 'Pestañas', detalle: 'Lifting y extensiones pelo a pelo.' },
  { nombre: 'Limpiezas faciales', detalle: 'Higiene profunda y protocolos con productos ISP.' },
  { nombre: 'Microneedling', detalle: 'Protocolos de regeneración con instrumental esterilizado.' },
  { nombre: 'Masajes y corporales', detalle: 'Tratamientos reductivos y de relajación.' },
  { nombre: 'Cursos', detalle: 'Academia: cursos de lifting de pestañas y técnicas para alumnas.' },
] as const

export const TRABAJOS = [
  {
    src: `${IMG}/glitter.webp`,
    nombre: 'Esmaltado glitter',
    detalle: 'Manicure rosa glitter terminado en su estación con vista.',
    alt: 'Manicura rosa glitter sobre mano de clienta con anillo',
  },
  {
    src: `${IMG}/pestanas-real.webp`,
    nombre: 'Lifting de pestañas',
    detalle: 'El resultado natural que las trae de vuelta: pestañas curvadas sin rímel.',
    alt: 'Clienta en camilla mostrando el resultado de su lifting de pestañas',
  },
  {
    src: `${IMG}/pedicura.webp`,
    nombre: 'Pedicura estética',
    detalle: 'Pedicura cosmetológica con acabado prolijo y productos profesionales.',
    alt: 'Pies de clienta con pedicura francesa, jeans y flores blancas',
  },
  {
    src: `${IMG}/leopardo.webp`,
    nombre: 'Nail art',
    detalle: 'Diseños a pedido: francesa, animal print y lo que traigas en el teléfono.',
    alt: 'Uñas con diseño de animal print sobre mano de clienta',
  },
] as const
