/**
 * app/demos/sangucheria-chico-garcia/content.ts
 *
 * Datos verificados en la ficha de Google Maps (nombre literal
 * "Sangucheria Chico Garci", sin tilde, como en el medallón del frontis),
 * dirección Avenida Poniente 2074 en Molina, teléfono de pedidos y
 * reparto, nota 4.6 con 224 reseñas y horario publicado. El menú
 * corresponde a la pizarra pintada en la muralla del local.
 */

export const BIZ = {
  name: 'Sanguchería Chico Garci',
  short: 'Chico Garci',
  rubro: 'Sanguchería y completos',
  address: 'Avenida Poniente 2074, Molina',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3207 7984',
  phoneTel: '+56932077984',
  whatsapp: '56932077984',
  rating: 4.6,
  reviews: 224,
  hours: [
    ['Lun a jue', '12:00 - 23:00'],
    ['Viernes', '12:00 - 01:00'],
    ['Sábado', '12:00 - 24:00'],
    ['Domingo', '17:00 - 23:00'],
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de la Sanguchería Chico Garci y quiero hacer un pedido',
)}`

export const WA_LINK_DELIVERY = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero pedir delivery a la Sanguchería Chico Garci',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Sangucheria Chico Garci, Molina, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sangucheria Chico Garci, Avenida Poniente 2074, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/sangucheria-chico-garcia'
