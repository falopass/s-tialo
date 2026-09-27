/**
 * app/demos/distribuidora-mym-curico/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio):
 * nombre, rubro, dirección (Av. O'Higgins 1005, Curicó), las 47
 * reseñas de Google Maps, la página de Facebook (~10.000 seguidores)
 * y el WhatsApp (+56 9 6467 2641). Todo lo demás — textos,
 * productos, precios, horarios y reseñas — es contenido de muestra
 * para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Distribuidora MyM Curicó',
  short: 'MyM Curicó',
  rubro: 'Tienda de artículos para el hogar',
  address: "Av. O'Higgins 1005",
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6467 2641',
  phoneTel: '+56964672641',
  whatsapp: '56964672641',
  reviews: 47,
  followers: '10.000',
  facebook: 'https://www.facebook.com/detergentes.mym.9',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Distribuidora MyM Curicó y quiero consultar',
)}`

export const WA_LINK_PRECIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Distribuidora MyM Curicó y quiero consultar precios',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Distribuidora MyM Curicó, Av. O'Higgins 1005, Curicó, Chile",
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Av. O'Higgins 1005, Curicó, Chile",
)}&output=embed`

export const IMG = '/demos/distribuidora-mym-curico'
