/**
 * app/demos/la-gaviota/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps y Chilopina):
 * nombre, ubicación (Orsodeli 364, Licantén, comuna de la costa del
 * Maule), rating 4,4 con 78 reseñas, horario de almuerzos (lunes a
 * sábado 12:00–15:30, domingo cerrado), precio referencial del
 * almuerzo (~$4.000 según Google), empanadas y pan amasado, y la
 * pizarra de colaciones que se ve en las fotos reales del local
 * (porotos granados, pollo asado, cerdo al horno, carne al jugo,
 * pescado frito, cazuela de vacuno). El letrero del negocio dice
 * «Gato Típico Chileno — Restaurant La Gaviota». No hay teléfono
 * publicado: el contacto es la ficha de Google / llegar al local.
 * Las fotos son reales, de su ficha de Google y de Chilopina.
 */

export const BIZ = {
  name: 'Restaurant La Gaviota',
  short: 'La Gaviota',
  rubro: 'Restaurant · Comida casera',
  lema: 'Gato típico chileno',
  address: 'Orsodeli 364',
  city: 'Licantén',
  region: 'Región del Maule',
  rating: '4,4',
  reviews: 78,
  precio: '≈ $4.000 el almuerzo',
  horarioSemana: 'Lunes a sábado · 12:00 a 15:30',
  horarioDomingo: 'Domingo cerrado',
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurant La Gaviota, Orsodeli 364, Licantén, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurant La Gaviota, Orsodeli 364, Licantén, Chile',
)}&output=embed`

export const IMG = '/demos/la-gaviota'
