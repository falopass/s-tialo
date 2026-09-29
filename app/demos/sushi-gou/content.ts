/**
 * app/demos/sushi-gou/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps y en las fotos del
 * propio local): nombre (ficha "Sushi Gou"), dirección (Av. Las Delicias
 * Sur, Parral), teléfono/WhatsApp (+56 9 4452 9841, coincide con la
 * ficha), horario de la pizarra real (local 13:00 a 00:00, delivery
 * 17:00 a 00:00), precios de la pizarra real del local, el hashtag
 * #GouLovers de su pizarra, rating 3,5 con 86 reseñas y las reseñas
 * citadas (texto original).
 */

export const BIZ = {
  name: 'Sushi Gou',
  rubro: 'Restaurante de sushi',
  address: 'Av. Las Delicias Sur',
  city: 'Parral',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4452 9841',
  phoneTel: '+56944529841',
  whatsapp: '56944529841',
  rating: 3.5,
  reviews: 86,
  hashtag: '#GouLovers',
  horaLocal: 'Local: 13:00 a 00:00',
  horaDelivery: 'Delivery: 17:00 a 00:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Sushi Gou y quiero hacer un pedido',
)}`

export const WA_LINK_DELIVERY = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero pedir delivery de Sushi Gou',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Sushi Gou, Av. Las Delicias Sur, Parral',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sushi Gou, Av. Las Delicias Sur, Parral, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/sushi-gou'
