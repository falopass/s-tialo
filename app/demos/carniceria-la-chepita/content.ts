/**
 * app/demos/carniceria-la-chepita/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre
 * "Carniceria La Chepita", categoría carnicería, dirección
 * (Av. 7 de Abril 2086, Lontué, Molina), teléfono/WhatsApp
 * (+56 9 3884 1626), horario (Lun–Sáb 9:00–20:00, Dom 9:30–14:30),
 * rating 4.5 con 11 reseñas y los textos de esas reseñas. El eslogan
 * "El equilibrio perfecto entre precio y calidad" está pintado en el
 * muro del local (foto real). Productos confirmados por foto y
 * reseñas: arrollado ($3.700 el que aparece en la vitrina), churrasco,
 * lomo laminado, longanizas, carbón, lomo liso, filete y lomo vetado
 * (carteles legibles en la vitrina). Lo demás es contenido de
 * muestra.
 */

export const BIZ = {
  name: 'Carnicería La Chepita',
  short: 'La Chepita',
  rubro: 'Carnicería',
  slogan: 'El equilibrio perfecto entre precio y calidad',
  address: 'Av. 7 de Abril 2086',
  city: 'Lontué',
  comuna: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3884 1626',
  phoneTel: '+56938841626',
  whatsapp: '56938841626',
  rating: '4,5',
  reviews: 11,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola La Chepita, quiero hacer un pedido de carnes',
)}`

export const waProducto = (producto: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola La Chepita, quiero consultar por ${producto}`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Carniceria La Chepita, Av. 7 de Abril 2086, Lontue, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. 7 de Abril 2086, Lontue, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/carniceria-la-chepita'
