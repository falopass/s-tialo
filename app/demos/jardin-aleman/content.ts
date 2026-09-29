/**
 * app/demos/jardin-aleman/content.ts
 *
 * Datos REALES verificados en Google Maps (sept 2026): ficha
 * "Jardín Alemán" (place 0x9665c0d222c75e17:0x8b2721887d44bb55),
 * categoría "Garden center", Ruta 115, Talca (camino a San Clemente,
 * km 3 aprox.), teléfono +56 71 224 2517, rating 4,5 con 130
 * reseñas, delivery disponible. Horario de la ficha: lunes a sábado
 * 9:00-13:00 y 15:30-18:00, domingo cerrado. Vivero administrado por
 * sus trabajadores desde ~2006.
 *
 * Reseñas citadas (reales, de su ficha; traducidas por Google al
 * español): Pía Barrios, Jacqueline Cornejo, Rosita Huerta. Temas
 * frecuentes en reseñas: variedad de especies, árboles frutales,
 * surtido.
 *
 * Fotos: todas son fotos reales de su ficha de Google Maps,
 * descargadas de lh3.googleusercontent.com. No hay logo confirmado;
 * la identidad se toma de sus propias fotos.
 */

export const BIZ = {
  name: 'Jardín Alemán',
  rubro: 'Vivero y centro de jardín',
  address: 'Ruta 115, Talca',
  addressLong: 'Ruta 115, camino a San Clemente, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 224 2517',
  phoneTel: '+56712242517',
  rating: 4.5,
  ratingDisplay: '4,5',
  reviews: 130,
  plusCode: 'H95R+36 Talca',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Jardín Alemán, Ruta 115, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Jardín Alemán, Ruta 115, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/jardin-aleman'

/** Temas que la gente más menciona en reseñas (según su ficha). */
export const TEMAS = ['Variedad de especies', 'Árboles frutales', 'Surtido de plantas'] as const

/** Fotos con su descripción real. */
export const FOTOS = [
  {
    src: 'flores',
    n: 'N°01',
    caption: 'Temporada de flores en el vivero',
    alt: 'Hileras de plantas con flores de colores en el vivero Jardín Alemán, Talca',
  },
  {
    src: 'pasillo',
    n: 'N°02',
    caption: 'Pasillos de suculentas y cactus',
    alt: 'Pasillo con macetas de suculentas y cactus en Jardín Alemán',
  },
  {
    src: 'visita',
    n: 'N°03',
    caption: 'Recorrido entre los pasillos',
    alt: 'Persona recorriendo los pasillos de plantas del vivero',
  },
  {
    src: 'frutales',
    n: 'N°04',
    caption: 'Frutales listos para llevar',
    alt: 'Limonero en maceta dentro del vivero Jardín Alemán',
  },
] as const

/** Horario real según su ficha de Google. */
export const HOURS = [
  { d: 'Lunes a sábado', h: '9:00 a 13:00' },
  { d: '', h: '15:30 a 18:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

/** Reseñas reales de su ficha de Google. */
export const REVIEWS = [
  {
    author: 'Jacqueline Cornejo',
    detail: 'Local Guide · hace 8 meses',
    stars: 5,
    text: 'El Jardín Alemán ha sido una parada obligada por más de 20 años. Siempre excelente atención, precios convenientes y amplia variedad de flores y árboles frutales.',
  },
  {
    author: 'Pía Barrios',
    detail: 'Local Guide · hace 5 años',
    stars: 5,
    text: 'Amplia variedad de plantas y árboles, un lugar espacioso y buena atención. Hay delivery por un costo adicional. Recomendado.',
  },
  {
    author: 'Rosita Huerta',
    detail: 'Local Guide · hace 6 años',
    stars: 5,
    text: 'Excelente atención. Precios muy razonables.',
  },
] as const
