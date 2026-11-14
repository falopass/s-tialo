/**
 * app/demos/quincho-de-don-pancho-osorno/content.ts
 *
 * Datos del demo. REALES (ficha de Google Maps, 14-11-2026): nombre
 * "Quincho de Don Pancho" (su marca y logo es "DON PANCHO BBQ"),
 * categoría "recinto para eventos", dirección Las Pesebreras 19,
 * Osorno, WhatsApp +56 9 4938 8051, nota 4,9 con 23 opiniones y las
 * cuatro citas textuales de abajo.
 * Sin horario, precios, capacidad ni redes públicas: no se muestran.
 * El texto editorial (leña, brasas, cebollines, mesa de amigos) sale
 * de las fotos y reseñas de la misma ficha.
 */

export const BIZ = {
  name: 'Quincho de Don Pancho',
  brand: 'Don Pancho BBQ',
  rubro: 'Recinto para eventos',
  address: 'Las Pesebreras 19',
  city: 'Osorno',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 4938 8051',
  whatsapp: '56949388051',
  rating: '4,9',
  ratingValue: 4.9,
  reviews: 23,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Don Pancho, quiero consultar por un evento',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Quincho de Don Pancho, Las Pesebreras 19, Osorno',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Quincho de Don Pancho, Las Pesebreras 19, Osorno',
)}&output=embed`

/** Citas textuales de la ficha pública de Google. */
export const RESENAS: { quote: string; who: string; destacada?: boolean }[] = [
  {
    quote:
      'Me encantó! Un lugar con un ambiente tan cálido y relajado, es como ir a la casa de tus amigos.',
    who: 'Tatiana Sáenz',
    destacada: true,
  },
  {
    quote:
      'Espectacular la carne. Un lugar sencillo, acogedor y de extraordinaria cocina',
    who: 'Eduardo Sanguesa',
  },
  {
    quote:
      'Fantástico, comida exquisita, buen ambiente, entretenido, cómo en casa, el personal de primera calidad. Todo maravilloso. Agradecida.',
    who: 'María Angélica González',
  },
  {
    quote: 'La carne increíble muy muy bueno, Don Pancho realmente sabe su arte.',
    who: 'Andres Arias Pinto',
  },
] as const

export const IMG = '/demos/quincho-de-don-pancho-osorno'
