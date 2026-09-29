/**
 * app/demos/restaurant-germania/content.ts
 *
 * Datos verificados:
 * - Google Maps: "Germania Restaurant Molina", Maipú 1988, Molina,
 *   4,6 estrellas · 866 reseñas · $15.000–30.000 · tel 9 9524 9452
 * - restaurantgermania.com: logo blanco "Germania", terraza, slogan
 *   "La esquina de la buena mesa" (también en su letrero de la esquina)
 * - Instagram @restaurant_germania_molina: 4.885 seguidores
 * - Menú del día: transcrito de la foto publicada en su ficha de Maps
 * - Reseñas citadas: tal cual aparecen publicadas en Google Maps
 */

export const BIZ = {
  name: 'Restaurant Germania',
  short: 'Germania',
  rubro: 'Restaurant',
  claim: 'La esquina de la buena mesa',
  address: 'Maipú 1988',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9524 9452',
  phoneTel: '+56995249452',
  whatsapp: '56995249452',
  web: 'restaurantgermania.com',
  webUrl: 'https://restaurantgermania.com',
  instagram: 'https://www.instagram.com/restaurant_germania_molina/',
  igUser: '@restaurant_germania_molina',
  igFollowers: '4.885 seguidores',
  rating: 4.6,
  ratingLabel: '4,6',
  reviews: 866,
  priceRange: '$15.000 – $30.000',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant Germania y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una mesa en Restaurant Germania',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Germania Restaurant, Maipú 1988, Molina',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Germania Restaurant, Maipú 1988, Molina',
)}&output=embed`

export const IMG = '/demos/restaurant-germania'

// Menú del día real, transcrito de la foto publicada en su ficha de Google.
export const MENU_DIA = {
  entrada: 'Copa de ceviche germania — salmón, camarón, mango, palta, cebollín, cilantro',
  fondos: [
    'Filete mignon con risotto de zetas y ensalada verde',
    'Lomo vetado con papas asadas crocante tocino y ensalada verde',
    'Salmón a la mantequilla rubia con risotto de camarón y ensalada verde',
  ],
  postres: ['Torta germania', 'Tiramisú', 'Mousse de maracuyá', 'Cheese cake'],
} as const

export const RESENAS = [
  {
    nombre: 'Sergio Correa',
    texto:
      'Excelente plato de guatitas a la jardinera. Sabroso y buena porción. La atención muy amable, preocupados de que no pasáramos frío.',
    fuente: 'Reseña en Google',
  },
  {
    nombre: 'María Belén Cortez',
    texto: 'Pasada obligatoria, comida exquisita y excelente atención, recomendado al 100%.',
    fuente: 'Reseña en Google',
  },
] as const
