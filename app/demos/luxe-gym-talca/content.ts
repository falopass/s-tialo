/**
 * app/demos/luxe-gym-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, nombre en la
 * ficha: «luxegymtalca»): dirección (Cam. Las Rastras 3080, Talca),
 * WhatsApp (+56 9 4262 6566), horario completo actualizado por el
 * negocio, 36 reseñas con nota 5.0 y las fotos de la ficha. El detalle
 * de servicios y los textos descriptivos son de muestra; los valores
 * de los planes se confirman directo por WhatsApp.
 */

export const BIZ = {
  name: 'Luxe Gym',
  short: 'Luxe Gym',
  rubro: 'Gimnasio',
  address: 'Cam. Las Rastras 3080',
  addressFull: 'Cam. Las Rastras 3080, 3460000 Talca, Maule',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4262 6566',
  phoneTel: '+56942626566',
  whatsapp: '56942626566',
  rating: 5.0,
  reviews: 36,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Luxe Gym y quiero consultar por los planes',
)}`

export const WA_LINK_VISITA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Luxe Gym y quiero agendar una visita',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'luxegymtalca, Cam. Las Rastras 3080, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'luxegymtalca, Cam. Las Rastras 3080, 3460000 Talca, Maule, Chile',
)}&output=embed`

// Horario real de la ficha de Google Maps (actualizado por el negocio)
export const HOURS = [
  { d: 'Lunes a viernes', h: '6:00 – 22:00' },
  { d: 'Sábado y domingo', h: '9:00 – 14:00' },
]

export const IMG = '/demos/luxe-gym-talca'
