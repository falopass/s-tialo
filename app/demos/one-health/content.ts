/**
 * app/demos/one-health/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * comuna, teléfono y rating/reseñas. La ficha no muestra dirección
 * exacta: solo la comuna de Maule. Todo lo demás es contenido de
 * ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Centro Médico Veterinario One Health',
  short: 'One Health',
  comuna: 'Maule',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9591 9497',
  phoneTel: '+56995919497',
  whatsapp: '56995919497',
  rating: 4.5,
  ratingLabel: '4,5',
  reviews: 150,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Centro Médico Veterinario One Health y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Centro Médico Veterinario One Health, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro Médico Veterinario One Health, Maule, Chile',
)}&output=embed`
