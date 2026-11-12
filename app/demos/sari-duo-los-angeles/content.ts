/**
 * app/demos/sari-duo-los-angeles/content.ts
 *
 * Datos del mockup. REALES:
 * - Ficha de Google Maps (12-11-2026): "Sari duo", vivero en Los Ángeles,
 *   Biobío, a orilla de camino (plus code HM6G+7P; no publica calle ni
 *   número). Horario: lunes 10:00 a 17:30, martes a domingo 10:30 a 17:30.
 *   5,0 con 1 opinión; el texto de Jeannette R. es textual de la ficha.
 * - Letrero del vivero (foto de la ficha): "Sari Duo" en dorado sobre gris
 *   carbón, con un picaflor dorado libando una flor de lirio; WhatsApp
 *   +56 9 5710 6057. En el letrero aparece un Facebook "Sari Duo", no
 *   verificado: no se enlaza.
 * - Nómina del SAG (enero 2026): depósito de plantas inscrito y vigente.
 *   Se dice "inscrito en el SAG", sin número de registro.
 * - Foto del crespón en flor: única especie nombrable, solo en su pie de
 *   foto (se ve en la foto de la ficha).
 * DE MUESTRA: titulares, bajadas y textos de apoyo. No hay lista de plantas
 * publicada: no se nombran especies ni categorías, y no se muestran precios.
 */

export const BIZ = {
  name: 'Sari Duo',
  rubro: 'Vivero',
  city: 'Los Ángeles',
  region: 'Región del Biobío',
  plusCode: 'HM6G+7P',
  phoneDisplay: '+56 9 5710 6057',
  whatsapp: '56957106057',
  rating: '5,0',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Sari Duo, quiero consultar por plantas',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Sari duo, Los Ángeles, Biobío',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sari duo, Los Ángeles, Biobío',
)}&output=embed`

export const HORARIO = [
  { d: 'Lunes', h: '10:00–17:30' },
  { d: 'Martes a domingo', h: '10:30–17:30' },
] as const

export const OPINION = {
  autor: 'Jeannette R.',
  texto: 'Una excelente experiencia en atención y calidad',
} as const

export const IMG = '/demos/sari-duo-los-angeles'
