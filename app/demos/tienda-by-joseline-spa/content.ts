/**
 * app/demos/tienda-by-joseline-spa/content.ts
 *
 * Datos REALES verificados en la ficha de Google Maps, la tarjeta de
 * marca que el negocio publica y su TikTok (@tienda.by.joseline.spa):
 * rubro (lencería + sexshop + ropa femenina + cuidado personal),
 * dirección en Pencahue, apertura 9:30, las 5 reseñas con textos,
 * el link corto de WhatsApp Business y el envío a todo Chile.
 * Los nombres de productos se tomaron de las fotos reales del perfil;
 * la tienda no publica precios en la web.
 */

export const BIZ = {
  name: 'Tienda By Joseline Spa',
  short: 'By Joseline',
  rubro: 'Tienda de lencería',
  address: 'Brisas de Pencahue 2 (ex calle 6), Calle 1, casa 832',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3545 7874',
  phoneTel: '+56935457874',
  whatsapp: '56935457874',
  rating: '5,0',
  reviews: 5,
  abre: '9:30',
  instagramUser: 'tienda.by.joseline.spa',
  tiktokUser: '@tienda.by.joseline.spa',
} as const

// Categorías tal como las publica el negocio en su material de marca.
export const CATEGORIAS = [
  { name: 'Ropa femenina', desc: 'Estilo, comodidad y confianza para cada día.' },
  { name: 'Lencería', desc: 'Siéntete increíble por dentro y por fuera.' },
  { name: 'Sexshop', desc: 'Descubre tu placer, explora sin límites.' },
  { name: 'Cuidado personal y más', desc: 'Productos que cuidan de ti y tu bienestar.' },
] as const

// Reseñas reales tal como aparecen en la ficha de Google Maps.
export const RESENAS = [
  {
    text: 'Excelente atención, muy amable para responder dudas y presencial muy amorosa. 100% recomendable.',
    author: 'Valeria Figueroa',
  },
  {
    text: 'Muy confiable y buena atención.',
    author: 'Nicole Campos Castillo',
  },
  {
    text: 'Excelentes productos, totalmente recomendable.',
    author: 'Miguel Ángel Valenzuela Machuca',
  },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Joseline, vi la página de la tienda y quiero consultar',
)}`

export const waLinkProducto = (producto: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola Joseline, vi la página de la tienda y quiero consultar por: ${producto}`,
  )}`

// Link corto real del WhatsApp Business de la tienda.
export const WA_CATALOG = 'https://wa.me/message/AYBQG7GOEGUHF1'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Tienda By Joseline Spa, Brisas de Pencahue 2, Calle 1 casa 832, Pencahue, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Brisas de Pencahue 2, Calle 1, Pencahue, Chile',
)}&output=embed`

export const IMG = '/demos/tienda-by-joseline-spa'
