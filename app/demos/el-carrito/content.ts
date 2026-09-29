/**
 * El Carrito, restaurante de comida rápida en Parral, Maule.
 * Perfil confirmado en su ficha de Google Maps: tel. +56 9 6916 7974 (coincide
 * con el encargo), 4,4 estrellas en 347 opiniones, «completos» mencionado en
 * 35 opiniones. El lema «sacamos tu apetito» sale del mural del propio carrito.
 * El horario publicado en la ficha viene inconsistente: se omite.
 */
export const BIZ = {
  name: 'El Carrito',
  short: 'El Carrito',
  kind: 'Comida rápida',
  city: 'Parral',
  region: 'Región del Maule',
  address: 'Parral',
  phone: '56969167974',
  phoneDisplay: '+56 9 6916 7974',
  rating: '4,4',
  ratingCount: '347',
}

export const IMG = '/demos/el-carrito'

export const WA_LINK =
  'https://wa.me/56969167974?text=' +
  encodeURIComponent('Hola, vi la página del Carrito y quiero hacer un pedido.')

export const MAPS_EMBED =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('El Carrito, Parral, Maule, Chile') +
  '&output=embed'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('El Carrito, Parral, Maule, Chile')
