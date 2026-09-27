/**
 * app/demos/vivero-dona-ines/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * rubro, dirección en Itahue (sector Los Aromos), WhatsApp y las 37
 * reseñas. Todo lo demás (productos, horarios, reseñas citadas) es
 * contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Vivero Doña Inés',
  short: 'Doña Inés',
  rubro: 'Vivero y plantas',
  address: 'Itahue, caletera oriente S/N, Los Aromos',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6430 7017',
  phoneTel: '+56964307017',
  whatsapp: '56964307017',
  reviews: 37,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Vivero Doña Inés y quiero consultar por una planta',
)}`

export const WA_LINK_FRUTAL = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Vivero Doña Inés y quiero consultar por un frutal',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vivero Doña Inés, Los Aromos, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Vivero Doña Inés, Itahue, Los Aromos, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/vivero-dona-ines'
