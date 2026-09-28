/**
 * app/demos/central-fruticola-lontue/content.ts
 *
 * Datos del mockup. REALES: nombre (Central Frutícola Lontué SpA, ficha de
 * Google Maps), dirección (Lontué, comuna de Molina), teléfono/WhatsApp,
 * calificación 4,3 en 12 reseñas, las reseñas citadas y las cifras de la
 * planta (15.000 m²; 180 t/día manzanas orgánicas, 150 t/día convencionales;
 * línea de cerezas de 8 carriles a 65 t/día; inaugurada 2018 por Agrícola
 * San Clemente junto a Montes de Molina; certificación TMPS), publicadas
 * por sclem.cl. Fotos reales de la planta y de los huertos del grupo.
 */

export const BIZ = {
  name: 'Central Frutícola Lontué',
  short: 'CF Lontué',
  rubro: 'Recepción y packing de fruta',
  address: 'Lontué',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4856 8867',
  phoneTel: '+56948568867',
  whatsapp: '56948568867',
  rating: '4,3',
  reviews: 12,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Central Frutícola Lontué y quiero consultar por recepción de fruta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Central Frutícola Lontué, Molina, Región del Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Central Frutícola Lontué SpA, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/central-fruticola-lontue'
