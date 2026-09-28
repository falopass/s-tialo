/**
 * app/demos/la-pica-de-los-tatas/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y página de
 * Facebook): nombre, rubro, dirección, comuna, teléfono fijo
 * (75) 255 4076 (SERNATUR y Facebook; atienden por un grupo de
 * WhatsApp, no por un móvil directo), las 376 reseñas
 * y los 4.790 seguidores. Todo lo demás (carta, precios, horarios y
 * textos) es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'La Picá De Los Tatas',
  short: 'Los Tatas',
  rubro: 'Restaurante',
  address: 'Independencia 1843',
  postal: '3380972',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 (75) 255 4076',
  phoneTel: '+56752554076',
  reviews: 376,
  followers: '4.790',
  facebook: 'https://www.facebook.com/LaPicaDeLosTatas/',
} as const

// No publican un móvil con WhatsApp: el CTA de contacto es llamada al fijo.
export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Picá De Los Tatas, Independencia 1843, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Independencia 1843, Molina, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/la-pica-de-los-tatas'
