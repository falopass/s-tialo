/**
 * app/demos/hosteria-alcazar/content.ts
 *
 * Datos del mockup. REALES: nombre, dirección (Ruta 5 km 308,
 * Longaví), teléfono (+56 9 6606 0444), nota 4,2 con 1.279 reseñas en
 * Google, horario publicado (mar–lun 10:00–18:00, domingo cerrado),
 * rango de precios de la ficha y las reseñas citadas. Los nombres y
 * descripciones de los platos son contenido de muestra.
 */

export const BIZ = {
  name: 'Hostería Alcázar',
  short: 'Alcázar',
  rubro: 'Hostería y restaurante de carretera',
  address: 'Ruta 5 km 308',
  city: 'Longaví',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6606 0444',
  phoneTel: '+56966060444',
  whatsapp: '56966060444',
  rating: '4,2',
  reviews: 1279,
  priceRange: '$10.000–15.000 por persona, según Google',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Hostería Alcázar y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hostería Alcázar, Longaví, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Hostería Alcázar, Longaví, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/hosteria-alcazar'
