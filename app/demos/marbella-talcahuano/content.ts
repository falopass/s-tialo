/**
 * app/demos/marbella-talcahuano/content.ts
 *
 * Datos verificados (Google Maps, turismo.talcahuano.cl, carta pública):
 * nombre, dirección, WhatsApp, rating, reseñas, horario, sucursal de
 * Concepción y platos de la carta. Las reseñas citadas son reales,
 * de la ficha de Google (iniciales del autor entre paréntesis).
 */

export const BIZ = {
  name: 'Café Marbella',
  listing: 'Marbella Talcahuano',
  short: 'Marbella',
  rubro: 'Café · Pastelería · Completos',
  address: 'San Martín 158',
  city: 'Talcahuano',
  region: 'Región del Biobío',
  phoneDisplay: '+56 9 5180 9380',
  phoneTel: '+56951809380',
  whatsapp: '56951809380',
  rating: '4,4',
  reviews: '2.177',
  hours: [
    { d: 'Lunes a sábado', h: '8:00 – 21:00' },
    { d: 'Domingo', h: 'Cerrado' },
  ],
  branch: 'O’Higgins 501, Concepción',
  price: '$5.000 – $25.000 por persona',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Café Marbella y quiero consultar',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Café Marbella y quiero hacer un pedido para retirar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Marbella Talcahuano, San Martín 158, Talcahuano, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Marbella Talcahuano, San Martín 158, Talcahuano, Chile',
)}&output=embed`

export const IMG = '/demos/marbella-talcahuano'
