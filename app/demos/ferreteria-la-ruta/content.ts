/**
 * app/demos/ferreteria-la-ruta/content.ts
 *
 * Datos REALES de la ficha pública de Google Maps y la página de
 * Facebook del negocio: nombre, rubro, dirección, comuna, WhatsApp,
 * rating 4,8 con 71 reseñas, horario, textos de reseñas y fotos del
 * local (bajadas de la ficha). Los nombres de familias de productos
 * son de muestra — la ferretería no publica catálogo ni precios.
 */

export const BIZ = {
  name: 'Ferretería La Ruta',
  short: 'La Ruta',
  rubro: 'Tienda de herramientas',
  address: 'Villa Santa Inés – K-60',
  postal: '3550000',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4275 4213',
  phoneTel: '+56942754213',
  whatsapp: '56942754213',
  rating: '4,8',
  reviews: 71,
  facebook: 'https://www.facebook.com/laruta.ferreteria.7',
} as const

// Horario real publicado en la ficha de Google Maps.
export const HORARIO = [
  { days: 'Lunes a viernes', time: '8:00 – 19:00' },
  { days: 'Sábado', time: '8:30 – 18:00' },
  { days: 'Domingo', time: '9:00 – 17:00' },
] as const

// Reseñas reales tal como aparecen en la ficha de Google Maps.
export const RESENAS = [
  {
    text: 'Excelentes productos, mucha variedad, excelente atención, muy buenos precios.',
    author: 'José Rojas Maraboli',
    meta: 'Local Guide · reseña de Google',
  },
  {
    text: 'Local muy bien abastecido, siempre he encontrado todo lo que necesito, además cabe destacar la amabilidad y buena disposición de las personas que atienden. Recomiendo 100%.',
    author: 'Valeria Bañados',
    meta: 'Reseña de Google',
  },
  {
    text: 'Muy buenos artículos, surtido y calidad, precios austeros.',
    author: 'Andrés Fuentes',
    meta: 'Local Guide · reseña de Google',
  },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ferretería La Ruta y quiero consultar por un producto',
)}`

export const WA_LINK_STOCK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ferretería La Ruta y quiero consultar stock y precio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ferretería La Ruta, K-60, Villa Santa Inés, Pencahue, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Villa Santa Inés K-60, Pencahue, Chile',
)}&output=embed`

export const IMG = '/demos/ferreteria-la-ruta'
