/**
 * Datos verificados en la ficha pública de Google Maps (28-09-2026):
 * "Maestranza Parker", taller de metalurgia en Ruta 5 Sur Km 246,
 * Panguilemo, Talca. Teléfono 9 2745 1872, 5.0 estrellas (1 reseña).
 * Horario: lun–vie 9:00–18:00, sábado y domingo cerrado.
 * Las fotos del demo son reales y salen de esa misma ficha:
 * soldadura, reparación de carrocerías y cajas de camión, trabajo
 * en terreno con camión pluma, entregas de vehículos y el interior
 * de un módulo acondicionado. No tiene sitio web ni redes propias
 * publicadas.
 */
export const BIZ = {
  name: 'Maestranza Parker',
  longName: 'Maestranza Parker, Panguilemo',
  category: 'Taller de metalurgia y soldadura',
  city: 'Talca',
  address: 'Ruta 5 Sur Km 246, Panguilemo',
  phone: '56927451872',
  phoneDisplay: '+56 9 2745 1872',
  rating: '5.0',
  reviews: 1,
  horarioSemana: 'Lun a vie 9:00–18:00',
  horarioFinde: 'Sábado y domingo cerrado',
  source: 'https://www.google.com/maps/search/?api=1&query=Maestranza+Parker+Talca',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Maestranza Parker y quisiera cotizar un trabajo de soldadura o metalmecánica.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Maestranza Parker, Ruta 5 Sur Km 246, Panguilemo, Talca, Chile',
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Maestranza Parker, Ruta 5 Sur Km 246, Panguilemo, Talca, Chile`,
)}`
