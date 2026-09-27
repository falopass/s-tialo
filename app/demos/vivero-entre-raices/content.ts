/**
 * app/demos/vivero-entre-raices/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y página de
 * Facebook): nombre, rubro, dirección en Los Cardenales 848 (Linares),
 * WhatsApp, las 5 reseñas de Google y los 1.964 seguidores de Facebook.
 * Todo lo demás (productos, precios, horarios, reseñas citadas, fotos)
 * es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Vivero Entre Raices',
  short: 'Entre Raices',
  rubro: 'Centro de jardinería',
  address: 'Los Cardenales 848',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4903 8278',
  phoneTel: '+56949038278',
  whatsapp: '56949038278',
  reviews: 5,
  facebook: 'https://www.facebook.com/Viveroentreraices',
  facebookFollowers: '1.964',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Vivero Entre Raices y quiero consultar por una planta',
)}`

export const WA_LINK_FRUTAL = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Vivero Entre Raices y quiero consultar por un frutal',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vivero Entre Raices, Los Cardenales 848, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Los Cardenales 848, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/vivero-entre-raices'
