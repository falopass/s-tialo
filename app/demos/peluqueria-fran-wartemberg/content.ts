/**
 * app/demos/peluqueria-fran-wartemberg/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, dirección (Matilde Pérez
 * 2268, Curicó), las 30 reseñas de la ficha de Google, la página de
 * Facebook (1.474 seguidores) y el WhatsApp. Todo lo demás — carta de
 * servicios, precios, horarios, respuestas de FAQ y textos de reseña —
 * es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Peluquería Fran Wartemberg',
  short: 'Fran Wartemberg',
  rubro: 'Peluquería',
  address: 'Matilde Pérez 2268',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7332 8096',
  phoneTel: '+56973328096',
  whatsapp: '56973328096',
  reviews: 30,
  followers: '1.474',
  facebook: 'https://www.facebook.com/peluqueriafranwartemberg/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Peluquería Fran Wartemberg y quiero agendar una hora',
)}`

export const WA_LINK_SERVICIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Peluquería Fran Wartemberg y quiero consultar por un servicio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Peluquería Fran Wartemberg, Matilde Pérez 2268, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Peluquería Fran Wartemberg, Matilde Pérez 2268, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/peluqueria-fran-wartemberg'
