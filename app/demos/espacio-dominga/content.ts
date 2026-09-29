/**
 * Datos verificados de Heladería Espacio Dominga (San Clemente, Maule).
 * Fuentes: ficha de Google Maps (dirección, teléfono, horario, rating,
 * reseña) + Instagram @espaciodominga_ ("Somos una heladería con
 * productos San Francisco en San Clemente, estamos ubicados en
 * Huamachuco", post "frente a maderas Chemito").
 * Las fotos son las publicadas por la propia pyme y sus clientes en
 * Maps/Instagram. No se inventan sabores: solo se afirman las marcas
 * que venden (San Francisco y Timaukel), declaradas por ellos mismos.
 */

export const BIZ = {
  name: 'Heladería Espacio Dominga',
  short: 'Espacio Dominga',
  rubro: 'Heladería',
  city: 'San Clemente',
  region: 'Maule',
  address: 'Av. Huamachuco 1305',
  landmark: 'Frente a Maderas Chemito',
  phoneDisplay: '+56 9 6306 9005',
  whatsapp: '56963069005',
  instagram: 'espaciodominga_',
  instagramFollowers: '427',
  rating: '5.0',
  reviewCount: 1,
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola ${BIZ.short}, vi su sitio y quiero hacer un pedido`,
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL =
  'https://www.google.com/maps/place/Helader%C3%ADa+Espacio+Dominga/@-35.5339956,-71.4938981,17z/'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.5339956,-71.4938981&z=16&output=embed'

export const IMG = '/demos/espacio-dominga'

/** Horario publicado en su ficha de Google Maps. */
export const HOURS = [{ d: 'Todos los días', h: '15:30 – 20:00' }]

/** Única reseña de Google publicada a la fecha (verbatim de la ficha). */
export const REVIEWS = [
  {
    author: 'Olga Alba Mendoza Rojas',
    stars: 5,
    when: 'hace 8 meses',
    text: 'The ice cream is São Francisco, the best! The portion is large, the place is very cozy, and the owner is a sweetheart!',
  },
]
