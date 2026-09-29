/**
 * Somos Yerbas Buenas: portal comunitario de la comuna (Yerbas Buenas, Maule).
 * Perfil confirmado: sitio somosyerbasbuenas.com + ficha de Google Maps
 * (tel. +56 9 7543 5658 coincide con el encargo) + página de Facebook.
 * La ficha no tiene reseñas publicadas: por eso este demo no lleva sección
 * de opiniones, solo datos de su sitio y fotos reales de su página/FB.
 */
export const BIZ = {
  name: 'Somos Yerbas Buenas',
  short: 'Somos YB',
  kind: 'Guía comunal',
  city: 'Yerbas Buenas',
  region: 'Maule',
  phone: '56975435658',
  phoneDisplay: '+56 9 7543 5658',
  site: 'somosyerbasbuenas.com',
}

export const IMG = '/demos/somos-yerbas-buenas'

export const WA_LINK =
  'https://wa.me/56975435658?text=' +
  encodeURIComponent('Hola, vi la página de Somos Yerbas Buenas y quiero sumar mi emprendimiento a la guía.')

export const MAPS_EMBED =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('Somos Yerbas Buenas, Yerbas Buenas, Maule, Chile') +
  '&output=embed'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Somos Yerbas Buenas, Yerbas Buenas, Maule, Chile')
