/**
 * app/demos/imprenta-multigraf/content.ts
 *
 * Datos del mockup. REALES, de la ficha pública de Google Maps
 * «Imprenta MULTIGRAF» (Molina) y de sus propias fotos:
 * dirección (Maipú 2082), WhatsApp (+56 9 7760 1513 — el mismo número
 * impreso en su bolsa de marca), horario, 4.2 estrellas con 5 reseñas.
 * La lista de servicios sale textual de los vidrios de su puerta y del
 * logo de su bolsa (fotocopias, anillados, estampados, timbres, plotter,
 * grabado láser, copias de llaves, facturas, boletas, tarjetas de visita).
 * Las reseñas citadas son textuales de Google Maps.
 */

export const BIZ = {
  name: 'Imprenta MULTIGRAF',
  short: 'MULTIGRAF',
  rubro: 'Imprenta · librería · fotocopias',
  address: 'Maipú 2082',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7760 1513',
  whatsapp: '56977601513',
  fijo: '75 2 493407', // el fijo que imprimen en su bolsa
  rating: 4.2,
  reviews: 5,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Imprenta MULTIGRAF y quiero consultar por un trabajo de imprenta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Imprenta MULTIGRAF, Maipú 2082, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Imprenta MULTIGRAF, Maipú 2082, Molina, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/imprenta-multigraf'

// Horario real de la ficha de Google Maps
export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '10:00 – 19:00' },
  { dia: 'Sábado', hora: '10:00 – 13:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
] as const

// Servicios textuales de los vidrios de su puerta y de su bolsa de marca
export const SELLOS = [
  { grupo: 'Del papel', items: ['Fotocopias', 'Anillados', 'Plastificados', 'Facturas', 'Guías de despacho', 'Boletas', 'Tarjetas de visita'] },
  { grupo: 'Estampados', items: ['Tazones', 'Poleras', 'Polerones', 'Medallas', 'Llaveros', 'Publicidad gráfica'] },
  { grupo: 'Taller gráfico', items: ['Timbres', 'Plotter de corte', 'Señalética', 'Logotipos', 'Letreros', 'Copias de llaves', 'Grabado láser'] },
] as const

// Los trabajos que ellos mismos publicaron en su ficha
export const TRABAJOS = [
  {
    num: 'N° 01',
    title: 'Timbres al día',
    body: 'Sellos automáticos para empresas y proyectos — como los del Proyecto FCGB que salieron de su mesa.',
    src: `${IMG}/timbres.webp`,
    alt: 'Tres timbres automáticos del Proyecto FCGB estampados en prueba sobre papel, en la mesa de corte de MULTIGRAF',
  },
  {
    num: 'N° 02',
    title: 'Grabado láser',
    body: 'Corte y grabado sobre madera: reconocimientos, letreros y piezas finas hechas a pedido.',
    src: `${IMG}/grabado-laser.webp`,
    alt: 'Corazón de madera grabado a láser por MULTIGRAF: un reconocimiento escolar con el escudo de la escuela',
  },
  {
    num: 'N° 03',
    title: 'Entregas rápidas',
    body: 'Su propia bolsa lo dice: imprenta, librería y fotocopias con entregas rápidas en Maipú 2082.',
    src: `${IMG}/bolsa-marca.webp`,
    alt: 'Bolsa amarilla de marca con el logo circular de MULTIGRAF: imprenta, librería, fotocopias y entregas rápidas',
  },
] as const

// Citas textuales de las reseñas públicas en Google Maps
export const RESENAS = [
  {
    quote: 'Entrega de trabajos muy rápida y excelente calidad.',
    author: 'Carlos Baeza S.',
  },
] as const

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'El local', href: '#local' },
]
