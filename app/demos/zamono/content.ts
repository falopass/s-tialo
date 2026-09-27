/**
 * app/demos/zamono/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, comuna, WhatsApp y las 42 reseñas. Todo lo demás
 * (servicios, precios, pasos, horarios y reseñas) es contenido de
 * muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Lubricentro Zamono',
  short: 'Lubri Zamono',
  rubro: 'Lavado y lubricentro de autos',
  address: 'Luis Cruz Martínez 1441',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9000 5166',
  phoneTel: '+56990005166',
  whatsapp: '56990005166',
  reviews: 42,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Lubricentro Zamono y quiero agendar un lavado',
)}`

export const WA_LINK_ACEITE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Lubricentro Zamono y quiero consultar por un cambio de aceite',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Lubricentro Zamono, Luis Cruz Martínez 1441, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Luis Cruz Martínez 1441, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/zamono'
