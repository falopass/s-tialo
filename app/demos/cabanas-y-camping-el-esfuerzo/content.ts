/**
 * app/demos/cabanas-y-camping-el-esfuerzo/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Ficha de Google Maps: «Cabañas y camping el esfuerzo», categoría
 *   cabaña para acampar, Molina (Maule), nota 4.8 con 13 reseñas,
 *   teléfono 9 7573 4223, 8 fotos, link a Instagram.
 * - Instagram oficial @el.esfuerzo__ (Nicole Carrasco Mora): bio
 *   «Camping y Cabañas el Esfuerzo / Solo abrimos en verano», teléfonos
 *   +56 9 4668 4610 y +56 9 7573 4223 (el mismo de Maps).
 * - Servicios: literales de las reseñas de Google — río al lado, duchas
 *   con agua caliente, baños, enchufes para cargar celulares, luz de
 *   ~21:00 a 01:00, parrillas en cada sitio, sitios techados y con
 *   pasto, negocio que «vende de todo»; valor ~$5.000 p/p citado por
 *   un reseñante.
 * - Negocio: precios visibles en su propio letrero (post de Instagram):
 *   hielo $2.000 / $1.000, carbón, carga de celular $500, golosinas.
 * - Reseñas: citas literales de la ficha de Google.
 */

export const BIZ = {
  name: 'Cabañas y Camping El Esfuerzo',
  rubro: 'Camping y cabañas',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7573 4223',
  phoneAlt: '+56 9 4668 4610',
  whatsapp: '56975734223',
  instagram: '@el.esfuerzo__',
  instagramUrl: 'https://www.instagram.com/el.esfuerzo__/',
  rating: '4.8',
  reviews: '13',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Camping El Esfuerzo y quiero reservar un sitio',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Caba%C3%B1as+y+camping+el+esfuerzo/@-35.4168125,-71.0407137,17z/data=!3m1!4b1!4m6!3m5!1s0x96650d00016ed655:0x54730852c7eb6cc1!8m2!3d-35.4168125!4d-71.0407137!16s%2Fg%2F11ld296d95'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas y camping el esfuerzo, Molina, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-y-camping-el-esfuerzo'
