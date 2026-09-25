/**
 * app/demos/homyvet/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, teléfono y rating/reseñas. Todo lo demás es contenido de
 * ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Clínica Veterinaria Homyvet',
  short: 'Homyvet',
  address: 'Veintitrés Ote. 1334, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3201 2616',
  phoneTel: '+56932012616',
  whatsapp: '56932012616',
  rating: 4.6,
  ratingLabel: '4,6',
  reviews: 203,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica Veterinaria Homyvet y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Veterinaria Homyvet, 23 Oriente 1334, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clínica Veterinaria Homyvet, 23 Oriente 1334, Talca, Chile',
)}&output=embed`
