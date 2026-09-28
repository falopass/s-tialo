/**
 * app/demos/barberia-rulos-style-barberia-curico/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram):
 * nombre, rubro, dirección en Av. Rauquén 1967, Curicó, WhatsApp, el
 * 4,9 de Google sobre 277 reseñas, las fotos del local, el logo X|RS,
 * las reseñas citadas y los 7.158 seguidores de @rulos.styl3. Los
 * servicios, precios y horarios son de muestra para mostrar cómo se
 * vería el sitio.
 */

export const BIZ = {
  name: 'Barbería Rulos Style',
  short: 'Rulos Style',
  rubro: 'Barbería',
  address: 'Av. Rauquén 1967, 3340000',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4102 7880',
  phoneTel: '+56941027880',
  whatsapp: '56941027880',
  instagram: 'https://www.instagram.com/rulos.styl3/',
  instagramHandle: '@rulos.styl3',
  followers: '7.158',
  reviews: 277,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Barbería Rulos Style y quiero consultar',
)}`

export const WA_LINK_HORA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Barbería Rulos Style y quiero reservar una hora',
)}`

export function waServicio(servicio: string): string {
  return `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página de Barbería Rulos Style y quiero agendar ${servicio}`,
  )}`
}

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Barbería Rulos Style, Av. Rauquén 1967, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Barbería Rulos Style, Av. Rauquén 1967, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/barberia-rulos-style-barberia-curico'
