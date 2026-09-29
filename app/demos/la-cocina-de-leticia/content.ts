/**
 * app/demos/la-cocina-de-leticia/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + Instagram
 * @lacocinadeleticiarestaurant + reseñas): nombre, sector El Colorado en
 * la Ruta Internacional Pehuenche (km 45, camino a Vilches), teléfono del
 * flyer del local, rating 4,4 con 19 opiniones, cafetería con precios de
 * su propia carta publicada en Instagram, y reseñas citadas con autor.
 * La ficha de Google no publica teléfono ni horario: ambos se indican
 * como "consultar por WhatsApp". Las fotos son de su ficha y su IG.
 */

export const BIZ = {
  name: 'La Cocina de Leticia',
  short: 'La Cocina de Leticia',
  rubro: 'Restaurante familiar',
  address: 'El Colorado, Ruta Internacional Pehuenche km 45',
  city: 'San Clemente',
  sector: 'Camino a Vilches',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8905 7184',
  phoneTel: '+56989057184',
  whatsapp: '56989057184',
  instagram: 'https://www.instagram.com/lacocinadeleticiarestaurant/',
  igUser: '@lacocinadeleticiarestaurant',
  rating: '4,4',
  reviews: 19,
  mapsUrl:
    'https://www.google.com/maps/place/La+Cocina+de+Leticia/@-35.633854,-71.2667716,17z/data=!4m6!3m5!1s0x96659d005b5b8ff1:0xb9858a44b2016406!8m2!3d-35.633854!4d-71.2667716!16s%2Fg%2F11yvg555dw',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Cocina de Leticia y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una mesa en La Cocina de Leticia',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'La Cocina de Leticia, El Colorado, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/la-cocina-de-leticia'

/** Lo que sirve la casa, según su propia carta de Instagram y las reseñas. */
export const FOGON = [
  'Parrilladas y gastronomía típica',
  'Cazuela y platos de olla',
  'Paila marina',
  'Filete y salmón a la plancha',
  'Chancho en piedra con ají y pan de la casa',
  'Ensaladas de temporada',
] as const

/** Precios reales de la carta de cafetería publicada en su Instagram. */
export const CAFE = [
  { name: 'Café tradicional', price: '$2.200' },
  { name: 'Americano', price: '$3.800' },
  { name: 'Espresso doble', price: '$3.800' },
  { name: 'Cortado', price: '' },
  { name: 'Latte · latte frío', price: '' },
  { name: 'Cappuccino', price: '' },
] as const

/** De la carta de sándwiches artesanales publicada en Instagram. */
export const SANDWICHES = ['Italiano', 'Barros luco'] as const

/** Reseñas reales de la ficha de Google, con autor. */
export const REVIEWS = [
  {
    text: 'Llegamos acá por casualidad y quedamos encantados con la comida: nos pusieron un plato con chancho en piedra y una salsa de ají con pan de la casa, muy rico. Para almorzar pedimos filete que estaba delicioso, muy jugoso, y una rica y abundante ensalada de temporada. También nos sorprendió la rapidez de la atención. La relación precio calidad, excelente.',
    author: 'Marcela Pinto',
    note: 'Local Guide · reseña de Google',
  },
  {
    text: 'Muy grato ambiente, buena relación precio/calidad, atención muy buena. ¡Lejos el mejor pebre que he probado!',
    author: 'Matías Blanco Rojas',
    note: 'Local Guide · reseña de Google',
  },
  {
    text: 'Rica comida, atención rápida y muy buena disposición. Tuve un inconveniente y fue solucionado de inmediato con una muy buena actitud. Muy recomendado.',
    author: 'Andres Aldea',
    note: 'reseña de Google',
  },
  {
    text: 'Rica comida, se nota mucho el cariño que le pusieron. En general lo recomiendo mucho.',
    author: 'Rodrigo Díaz Orellana',
    note: 'Local Guide · reseña de Google',
  },
  {
    text: 'Fui solo a tomar desayuno: rico, huevitos de campo, miel sabrosa.',
    author: 'Marco Subiabre',
    note: 'Local Guide · reseña de Google',
  },
] as const
