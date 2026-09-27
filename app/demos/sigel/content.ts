/**
 * app/demos/sigel/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, comuna, WhatsApp y las 7 reseñas. Todo lo demás
 * (servicios, pasos, zonas, horarios y reseñas) es contenido de
 * muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Eléctrico Domiciliario Sigel',
  short: 'Sigel',
  rubro: 'Electricista a domicilio',
  address: 'Av. Piduco Sur',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4867 9778',
  phoneTel: '+56948679778',
  whatsapp: '56948679778',
  reviews: 7,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Eléctrico Domiciliario Sigel y quiero cotizar un trabajo eléctrico',
)}`

export const WA_LINK_EMERGENCIA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, tengo una emergencia eléctrica en Talca, ¿estás disponible?',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Eléctrico domiciliario sigel, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Piduco Sur, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/sigel'
