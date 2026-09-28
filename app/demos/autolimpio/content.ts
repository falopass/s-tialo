export const BIZ = {
  name: 'Autolimpio',
  marca: 'Auto Limpio DETAIL',
  rubro: 'Lavado y detailing de autos',
  address: '1 Oriente 705-785',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3349 1230',
  phoneTel: '+56933491230',
  // El WhatsApp publicado en las tarjetas más recientes de su Instagram (abr–may 2026)
  whatsapp: '56935735568',
  whatsappDisplay: '+56 9 3573 5568',
  instagram: 'https://www.instagram.com/autolimpio_detail',
  instagramHandle: '@autolimpio_detail',
  rating: '4,6',
  reviews: 36,
  anos: 23,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero consultar por un lavado para mi auto en Autolimpio (1 Oriente, Talca).',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Autolimpio, 1 Oriente 705, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Autolimpio, 1 Oriente 705, Talca',
)}&output=embed`

export const IMG = '/demos/autolimpio'

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '9:00–13:00 y 15:00–18:30' },
  { dias: 'Sábado y domingo', horas: 'Cerrado' },
]
