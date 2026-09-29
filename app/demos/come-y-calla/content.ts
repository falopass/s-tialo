// Datos verificados del perfil real de Come y Calla (Google Maps, Talca).
// Teléfono confirmado contra el número enmascarado del brief (****7385).
// La carta y precios se leyeron de las imágenes de su menú publicadas en su ficha.
// Sin reseñas útiles en Maps (1 opinión de 1 estrella): no hay sección de reseñas — nunca inventadas.

export const BIZ = {
  name: 'Come y Calla',
  short: 'Come y Calla',
  rubro: 'Comida rápida · food truck',
  address: '22 Oriente, entre 21 y 22 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8622 7385',
  phoneTel: '+56986227385',
  whatsapp: '56986227385',
  hours: [
    { days: 'Lunes a viernes', time: '13:00 – 00:00' },
    { days: 'Sábado', time: '19:00 – 04:00' },
    { days: 'Domingo', time: '19:00 – 00:00' },
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Come y Calla! Vi su sitio y quiero hacer un pedido.',
)}`

export const WA_LINK_CARTA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola! Quiero pedir de la carta: ',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Come+y+calla+22+Oriente+Talca'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Come%20y%20calla%2C%2022%20Oriente%2C%20Talca&output=embed'

export const IMG = '/demos/come-y-calla'
