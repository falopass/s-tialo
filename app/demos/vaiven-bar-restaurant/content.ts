/**
 * app/demos/vaiven-bar-restaurant/content.ts
 *
 * Datos del mockup. REALES (verificados en ficha de Google Maps, sitio
 * oficial vaivenlinares.cl y sus redes): nombre, dirección
 * (Av. Presidente Ibáñez 510, Linares), WhatsApp del sitio oficial,
 * horarios, rating y reseñas de Google, Instagram y Facebook.
 * Los platos y textos de secciones son contenido de muestra inspirado
 * en sus fotos y reseñas reales para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Vaivén',
  full: 'Vaivén - Bar Restaurant',
  rubro: 'Bar restaurante',
  address: 'Av. Presidente Ibáñez 510, Linares',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8989 3360',
  phoneTel: '+56989893360',
  whatsapp: '56989893360',
  instagram: 'https://www.instagram.com/vaivenlinares',
  igUser: '@vaivenlinares',
  facebook: 'https://www.facebook.com/Vaivn-Linares-112403431033338',
  rating: 4.4,
  reviewsCount: 265,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Vaivén, vi su página y quiero reservar una mesa',
)}`

export const WA_LINK_CARTA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Vaivén, vi su página y quiero consultar la carta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vaivén - Bar Restaurant, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Vaivén - Bar Restaurant, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/vaiven-bar-restaurant'
