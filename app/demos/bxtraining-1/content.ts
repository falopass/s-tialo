/**
 * app/demos/bxtraining-1/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio): nombre,
 * dirección, comuna, WhatsApp, página de Facebook y las 17 reseñas en
 * Google Maps. Todo lo demás (servicios, precios, horarios y textos de
 * reseñas) es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Bxtraining 1',
  short: 'Bxtraining 1',
  rubro: 'Gimnasio',
  address: '3520000 San Clemente',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8236 8882',
  phoneTel: '+56982368882',
  whatsapp: '56982368882',
  facebookUrl: 'https://www.facebook.com/EntrenamientoyRendimiento',
  reviewsCount: '17',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Bxtraining 1 y quiero consultar por las membresías',
)}`

export const WA_LINK_CLASE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Bxtraining 1 y quiero probar una clase',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Bxtraining 1, San Clemente, Región del Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'San Clemente, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/bxtraining-1'
