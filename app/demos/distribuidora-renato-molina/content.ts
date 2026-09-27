/**
 * app/demos/distribuidora-renato-molina/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio): nombre,
 * rubro, dirección, comuna, WhatsApp, Instagram (2.039 seguidores) y el
 * dato de que la ficha de Google aún no acumula reseñas. Todo lo demás
 * (categorías, textos y tabla de precios) es contenido de muestra; los
 * precios quedan como marcadores para que el negocio ponga sus valores.
 * Las fotos son referenciales.
 */

export const BIZ = {
  name: 'Distribuidora Renato Molina',
  short: 'Renato',
  rubro: 'Mercado',
  address: 'C. Membrillar 1585',
  postal: '3380978',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 2966 8115',
  phoneTel: '+56929668115',
  whatsapp: '56929668115',
  instagram: 'distribuidora.renato',
  instagramFollowers: '2.039',
} as const

const wa = (text: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(text)}`

export const WA_LINK = wa(
  'Hola, vi la página de Distribuidora Renato Molina y quiero hacer un pedido',
)

export const WA_LINK_LISTA = wa(
  'Hola, les envío mi lista de productos para cotizar:',
)

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Distribuidora Renato Molina, C. Membrillar 1585, Molina, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'C. Membrillar 1585, 3380978 Molina, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/distribuidora-renato-molina'
