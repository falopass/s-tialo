/**
 * app/demos/jd-abogados/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, teléfono y rating/reseñas. Todo lo demás es contenido de
 * ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'J&D Abogados',
  address: 'Edificio Plaza Poniente, 1 Poniente 125, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8595 0428',
  phoneTel: '+56985950428',
  whatsapp: '56985950428',
  rating: 5,
  ratingLabel: '5,0',
  reviews: 34,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de J&D Abogados y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'J&D Abogados, Edificio Plaza Poniente, 1 Poniente 125, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'J&D Abogados, Edificio Plaza Poniente, 1 Poniente 125, Talca, Chile',
)}&output=embed`
