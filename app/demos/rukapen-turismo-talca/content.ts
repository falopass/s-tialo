/**
 * app/demos/rukapen-turismo-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * quinta El Rosario hijuela 7 (sector El Rosario, Talca), WhatsApp
 * (+56 9 6590 6660), nota 5,0 con 6 reseñas (citas textuales en la
 * página) y cierre a las 19:30. Las fotos son reales de la ficha
 * (piscina, quincho, pradera) y del Street View del camino de
 * acceso. El "domingo típico" de la página es una sugerencia de
 * cómo se disfruta el lugar según lo que muestran sus fotos —
 * horarios de servicio como tal solo el cierre confirmado.
 */

export const BIZ = {
  name: 'Rukapen Turismo Talca',
  short: 'Rukapen',
  rubro: 'Quinta de recreo y turismo',
  address: 'Quinta El Rosario, Hijuela 7',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6590 6660',
  phoneTel: '+56965906660',
  whatsapp: '56965906660',
  reviews: 6,
  rating: '5,0',
  cierre: '19:30',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Rukapen y quiero reservar un día en la quinta',
)}`

export const WA_LINK_PASEO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Rukapen y quiero cotizar un paseo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Rukapen Turismo Talca, Quinta El Rosario, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Rukapen Turismo Talca, Quinta El Rosario hijuela 7, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/rukapen-turismo-talca'
