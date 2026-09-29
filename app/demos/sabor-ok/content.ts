/**
 * app/demos/sabor-ok/content.ts
 *
 * Datos verificados en la ficha de Google Maps (29-09-2026):
 * nombre, categoría (restaurante), dirección (J-60, Hualañé), teléfono,
 * rating 4,5 con 130 opiniones y horario publicado (mar–lun 18:00–22:00,
 * domingo cerrado). El detalle de los ~70 m de subida desde la carretera
 * sale de una reseña real del propio perfil.
 */

export const BIZ = {
  name: 'Sabor Ok',
  rubro: 'Sushi y cocina de noche',
  address: 'J-60',
  city: 'Hualañé',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7761 4770',
  phoneTel: '+56977614770',
  whatsapp: '56977614770',
  rating: '4,5',
  reviews: 130,
  horario: 'Mar a lun · 18:00 a 22:00',
  horarioCerrado: 'Domingo cerrado',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Sabor Ok y quiero consultar',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Sabor Ok y quiero hacer un pedido o reservar mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Sabor Ok, J-60, Hualañé, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sabor Ok, J-60, Hualañé, Chile',
)}&output=embed`

export const IMG = '/demos/sabor-ok'
