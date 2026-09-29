/**
 * app/demos/el-mexicano/content.ts
 *
 * Datos verificados:
 * - Google Maps: "El Mexicano de Villa alegre", Restaurante, 4,3 (190 reseñas),
 *   12 de Octubre 420, Villa Alegre, Maule. Plus code 87G4+2G.
 * - Turismo municipal (turismo.villalegre.cl/rutas/el-mexicano):
 *   tel +56 9 8691 7510, correo elmexicanodevillaalegre@gmail.com,
 *   tacos, quesadillas, tortas y micheladas; pago con tarjeta y estacionamiento.
 * - Horario: ficha de Google Maps.
 * - Precio real: pechuga a la plancha $7.990 (foto de su carta).
 * - Reseñas: textos reales de su ficha de Google.
 */

export const BIZ = {
  name: 'El Mexicano',
  nameFull: 'El Mexicano de Villa Alegre',
  rubro: 'Restaurante mexicano',
  tagline: 'Tacos, micheladas y más',
  address: '12 de Octubre 420',
  city: 'Villa Alegre',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8691 7510',
  phoneTel: '+56986917510',
  whatsapp: '56986917510',
  email: 'elmexicanodevillaalegre@gmail.com',
  instagram: 'https://www.instagram.com/elmexicanodevillaalegre/',
  facebook: 'https://www.facebook.com/elmexicanodevillaalegre/',
  igUser: '@elmexicanodevillaalegre',
  rating: '4,3',
  reviews: 190,
  mapsListing:
    'https://www.google.com/maps/place/El+Mexicano+de+Villa+alegre/@-35.6748857,-71.7436761,17z',
  hours: [
    ['lunes', '12:30–16:30'],
    ['martes', '12:30–21:00'],
    ['miércoles', '13:00–21:00'],
    ['jueves', '12:30–21:00'],
    ['viernes', '12:30–23:00'],
    ['sábado', '13:00–23:00'],
    ['domingo', '13:00–17:30'],
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Mexicano y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Mexicano y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'El Mexicano de Villa Alegre, 12 de Octubre 420, Villa Alegre',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'El Mexicano de Villa Alegre, 12 de Octubre 420, Villa Alegre',
)}&output=embed`

export const IMG = '/demos/el-mexicano'
