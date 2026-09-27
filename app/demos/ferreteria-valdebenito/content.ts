/**
 * app/demos/ferreteria-valdebenito/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, WhatsApp y las 13 reseñas. Todo lo demás (productos,
 * precios, horarios, reseñas) es contenido de muestra para mostrar
 * cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Ferretería Valdebenito',
  short: 'F. Valdebenito',
  rubro: 'Tienda de herramientas',
  address: 'Rengo 435',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4647 3982',
  phoneTel: '+56946473982',
  whatsapp: '56946473982',
  reviews: 13,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ferretería Valdebenito y quiero consultar por un producto',
)}`

export const WA_LINK_BULTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ferretería Valdebenito y quiero cotizar por volumen',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ferretería Valdebenito, Rengo 435, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Ferretería Valdebenito, Rengo 435, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/ferreteria-valdebenito'
