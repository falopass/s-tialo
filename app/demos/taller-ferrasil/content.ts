/**
 * app/demos/taller-ferrasil/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps):
 * nombre, dirección, horario, calificación y las reseñas citadas
 * (Myriam, Gustavo, Ema, Ricardo). El taller no publica teléfono:
 * el contacto del demo es el pin de Maps, como en la vida real.
 * Todo lo demás es contenido de muestra para mostrar cómo se vería
 * el sitio.
 */

export const BIZ = {
  name: 'Taller Ferrasil',
  short: 'Ferrasil',
  rubro: 'Taller de reparación de automóviles',
  address: 'Patricio Lynch 451',
  addressAlt: 'Patricio Lynch 451 a 465',
  city: 'Concepción',
  region: 'Región del Biobío',
  hours: 'Lunes a viernes 8:30 a 19:00 · sábado 8:30 a 13:30',
  rating: 4.8,
  reviews: 47,
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Taller Ferrasil, Patricio Lynch 451, Concepción, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Taller Ferrasil, Patricio Lynch 451, Concepción, Chile',
)}&output=embed`

export const IMG = '/demos/taller-ferrasil'
