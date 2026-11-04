/**
 * app/demos/tipico-de-la-claudia/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, dirección (Av. Las
 * Industrias 1000, Los Ángeles, Biobío), WhatsApp, Facebook, el
 * rating de 4,8 con 125 opiniones en Google y el rango de precio
 * publicado en Maps ($5.000 a $10.000). No hay carta ni horarios
 * públicos: el sitio invita a pedir la carta del día por WhatsApp.
 */

export const BIZ = {
  name: '¡¡Típico De La Claudia!!',
  short: 'Típico De La Claudia',
  rubro: 'Comida chilena casera',
  address: 'Av. Las Industrias 1000',
  city: 'Los Ángeles',
  region: 'Región del Biobío',
  phoneDisplay: '+56 9 8570 9036',
  phoneTel: '+56985709036',
  whatsapp: '56985709036',
  facebook: 'https://www.facebook.com/tipicodelaclaudia',
  rating: '4,8',
  ratingValue: 4.8,
  reviews: 125,
  priceRange: '$5.000 a $10.000',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de ¡¡Típico De La Claudia!! y quiero hacer un pedido',
)}`

export const WA_LINK_CARTA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de ¡¡Típico De La Claudia!! y quiero pedir la carta del día',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Típico De La Claudia, Av. Las Industrias 1000, Los Ángeles, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Típico De La Claudia, Av. Las Industrias 1000, Los Ángeles, Chile',
)}&output=embed`

export const IMG = '/demos/tipico-de-la-claudia'
