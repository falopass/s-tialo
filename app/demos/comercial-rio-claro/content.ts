/**
 * app/demos/comercial-rio-claro/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, dirección (Av. Ignacio
 * Carrera Pinto 088, Talca), las 3 reseñas de la ficha de Google, el
 * Instagram @comercial.rioclaro (982 seguidores) y el WhatsApp.
 * Todo lo demás — productos, precios, formatos, horarios y reseñas
 * citadas — es contenido de muestra para mostrar cómo se vería el
 * sitio.
 */

export const BIZ = {
  name: 'Comercial Río Claro',
  short: 'Río Claro',
  rubro: 'Mayorista de artículos para la higiene',
  address: 'Av. Ignacio Carrera Pinto 088',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8833 2424',
  phoneTel: '+56988332424',
  whatsapp: '56988332424',
  reviews: 3,
  instagram: 'comercial.rioclaro',
  instagramFollowers: '982',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Comercial Río Claro y quiero cotizar',
)}`

export const waLinkProducto = (producto: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página de Comercial Río Claro y quiero consultar por: ${producto}`,
  )}`

export const IG_URL = 'http://www.instagram.com/comercial.rioclaro'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Comercial Río Claro, Av. Ignacio Carrera Pinto 088, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Ignacio Carrera Pinto 088, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/comercial-rio-claro'

export const C = {
  forest: '#1E3D2F',
  deep: '#132318',
  crema: '#F6F1E7',
  brass: '#C8A24B',
  brassSoft: '#E9D9AE',
  brassInk: '#7A5E1E',
  ink: '#26282C',
  muted: '#5E5A4F',
  line: 'rgba(38,40,44,0.16)',
  card: '#FCF9F1',
} as const
