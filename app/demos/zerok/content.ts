/**
 * app/demos/zerok/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram,
 * verificados para este encargo):
 * - Nombre «ZÉROK Refrigeración & Climatización Profesional», rubro
 *   refrigeración y climatización (instalación, mantención, reparación).
 * - Ciudad: Osorno. La ficha no publica dirección ni horario: el sitio
 *   dice «Osorno» y que la visita se coordina por WhatsApp.
 * - WhatsApp +56 9 7789 6895 (único teléfono publicado).
 * - Instagram público @zerok_osorno.
 * - Rating 5,0 con 9 opiniones en Google.
 * Todo lo demás (descripciones de servicios y textos) es contenido de
 * muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'ZÉROK Refrigeración & Climatización Profesional',
  short: 'ZÉROK',
  rubro: 'Refrigeración y climatización',
  city: 'Osorno',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 7789 6895',
  phoneTel: '+56977896895',
  whatsapp: '56977896895',
  instagramUser: 'zerok_osorno',
  rating: 5.0,
  reviews: 9,
} as const

export const waLink = (msg: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(msg)}`

export const WA_LINK = waLink(
  'Hola ZÉROK, vi su página y quiero cotizar un trabajo de refrigeración o climatización',
)

export const WA_FALLA = waLink(
  'Hola ZÉROK, tengo una falla de refrigeración o climatización en Osorno y necesito ayuda',
)

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagramUser}`

export const IMG = '/demos/zerok'
