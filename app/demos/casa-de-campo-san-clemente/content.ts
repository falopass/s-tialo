/**
 * app/demos/casa-de-campo-san-clemente/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre, rubro (restaurant), dirección (El Álamo Norte, parcela 5
 *   lote B, San Clemente), teléfono (+56 9 3035 0448), nota 4,0★ y
 *   557 reseñas, rango de precio (CLP 10.000–15.000 por persona),
 *   servicios (comer en el local, retiro, delivery): ficha pública de
 *   Google Maps. Misma ficha cruzada con el registro SERNATUR
 *   («Restorant casa de campo», El Álamo Norte parcela B).
 * - Horario (lunes cerrado; mar–jue y dom 12:30–16:30; vie–sáb
 *   12:30–22:30): ficha de Google.
 * - Platos y amenities: reseñas y fotos de la propia ficha (lomo a lo
 *   pobre, porotos, mariscos, pollo a la plancha con champiñones,
 *   chorrillana, cazuela, plateada, pollo asado, merluza; terraza,
 *   piscina, sauna y tinajas, estacionamiento, estufa a leña).
 * - Reseñas citadas: textos originales en español de su ficha de Google.
 * - Fotos en /demos/casa-de-campo-san-clemente: subidas por el negocio
 *   y sus clientes a la ficha de Google.
 * Textos de descripción de secciones son de muestra, basados en las
 * fotos, los platos y las reseñas.
 */

export const BIZ = {
  name: 'Casa de Campo',
  short: 'Casa de Campo',
  rubro: 'Restaurant campestre',
  address: 'El Álamo Norte, parcela 5 lote B',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3035 0448',
  phoneTel: '+56930350448',
  whatsapp: '56930350448',
  rating: '4,0',
  reviews: 557,
  priceRange: '$10.000 – $15.000 por persona',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Casa de Campo y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Casa de campo San clemente, El Álamo Norte, San Clemente',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Casa de campo San clemente, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/casa-de-campo-san-clemente'
