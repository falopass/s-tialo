/**
 * app/demos/vivero-huilquilemu/content.ts
 *
 * Datos del mockup. REALES, con dos fuentes verificadas 2026-09-29:
 * la ficha de Google Maps (nombre Vivero Huilquilemu, Centro de
 * jardinería, sector Huilquilemu, Talca; teléfono +56 9 9073 9342;
 * nota 4.8 con 93 reseñas; martes a domingo 9:00–13:00 y 14:30–18:00,
 * lunes cerrado) y su propio sitio viverohuilquilemu.cl (hoy caído,
 * indexado en Google): fundado en 1994, tres hectáreas de especies
 * nativas con énfasis en conservación, Km 7 de la CH-115 camino a San
 * Clemente, Isabel González Bustos, y servicios de diseño de jardines,
 * reforestación y asesorías para municipalidades y universidades.
 * Las fotos de public/demos/vivero-huilquilemu/ salen de su ficha.
 */

export const BIZ = {
  name: 'Vivero Huilquilemu',
  nameFull: 'Vivero Huilquilemu · Vivero de especies nativas',
  rubro: 'Centro de jardinería',
  address: 'Km 7 camino a San Clemente, sector Huilquilemu',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9073 9342',
  whatsapp: '56990739342',
  googleRating: 4.8,
  googleReviews: 93,
  fundado: 1994,
  hectareas: 3,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Vivero Huilquilemu y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vivero Huilquilemu, Talca',
)}`

// Pin exacto de la ficha.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4685229,-71.5782636&z=15&output=embed'

export const IMG = '/demos/vivero-huilquilemu'

// Horario según su ficha: lunes cerrado, el resto con colación.
export const HORARIO = [
  { dia: 'Mar a Dom', hora: '9:00 – 13:00 y 14:30 – 18:00' },
  { dia: 'Lunes', hora: 'Cerrado' },
]

// Selección de su catálogo de nativos, tal cual aparece en
// viverohuilquilemu.cl/nativos/ (su sitio hoy está caído, pero el
// catálogo quedó indexado): árboles y, entre ellos, las especies en
// peligro que ellos mismos cuentan haber ayudado a recuperar.
export const NATIVAS = [
  { latin: 'Nothofagus alessandri', comun: 'Ruil' },
  { latin: 'Gomortega keule', comun: 'Queule' },
  { latin: 'Pitavia punctata', comun: 'Pitao' },
  { latin: 'Fitzroya cupressoides', comun: 'Alerce' },
  { latin: 'Peumus boldus', comun: 'Boldo' },
  { latin: 'Drimys winteri', comun: 'Canelo' },
  { latin: 'Aristotelia chilensis', comun: 'Maqui' },
  { latin: 'Quillaja saponaria', comun: 'Quillay' },
  { latin: 'Nothofagus alpina', comun: 'Raulí' },
  { latin: 'Eucryphia cordifolia', comun: 'Ulmo' },
]
