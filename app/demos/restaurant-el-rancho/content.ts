/**
 * app/demos/restaurant-el-rancho/content.ts
 *
 * Datos verificados:
 * - Google Maps: "Restaurant El Rancho", Panamericana Sur 3145, Longaví,
 *   4,2 estrellas · 89 reseñas · $10.000–15.000 · tel 9 8131 2026
 *   (desambiguado entre varios "El Rancho" de Chile: este es el de Longaví, Maule)
 * - Facebook: "Elrancho Restomarket" (fb.com/elrancho.restomarket),
 *   1.546 seguidores, "kilómetro 314 Ruta 5 Sur"
 * - Su propio letrero: "RESTORANT MINIMARKET ABIERTO 24 HRS" (foto de la ficha)
 * - Reseña citada: tal cual aparece publicada en Google Maps
 */

export const BIZ = {
  name: 'Restaurant El Rancho',
  short: 'El Rancho',
  rubro: 'Restorant y minimarket de ruta',
  address: 'Panamericana Sur 3145',
  km: 'km 314 Ruta 5 Sur',
  city: 'Longaví',
  region: 'Región del Maule',
  plusCode: '28WC+R5 Longaví',
  phoneDisplay: '+56 9 8131 2026',
  phoneTel: '+56981312026',
  whatsapp: '56981312026',
  facebook: 'https://www.facebook.com/elrancho.restomarket/',
  fbName: 'Elrancho Restomarket',
  fbFollowers: '1.546 seguidores',
  rating: 4.2,
  ratingLabel: '4,2',
  reviews: 89,
  priceRange: '$10.000 – $15.000',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant El Rancho y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, voy en la ruta y quiero avisar que paso a comer a El Rancho',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurant El Rancho, Panamericana Sur 3145, Longaví',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurant El Rancho, Panamericana Sur 3145, Longaví',
)}&output=embed`

export const IMG = '/demos/restaurant-el-rancho'

// Lo que publica su ficha y sus reseñas de Google.
export const PLATOS = [
  'Cazuela de vacuno',
  'Pescado frito con arroz',
  'Churrascas con ají',
  'Desayunos y onces',
  'Comida casera del día',
] as const

// Lo que se lee en las reseñas de Google (resumen de la propia ficha).
export const SELLOS = [
  'Porciones abundantes',
  'Buen precio',
  'Baños limpios',
  'Lleno de antigüedades',
] as const

export const RESENA = {
  nombre: 'Franchesca Paz Paz',
  texto:
    'Llegó un plato gigante con ensalada, churrascas con ají, bebida y té o café por unos $12.000. El local está lleno de antigüedades, hay música y la atención es buena.',
  fuente: 'Reseña en Google',
} as const
