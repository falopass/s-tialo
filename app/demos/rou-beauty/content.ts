/**
 * app/demos/rou-beauty/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram
 * @roubeauty.cl): nombre, dirección, WhatsApp, horario, rating, las
 * reseñas citadas, las categorías pintadas en el mural de la tienda,
 * los productos mencionados en sus posts y la ruleta de los sábados.
 * No hay precios publicados: las fichas invitan a consultar por WhatsApp.
 */

export const BIZ = {
  name: 'Rou Beauty',
  rubro: 'Tienda de belleza y skincare',
  address: 'Quechereguas 1696',
  place: 'Portal Molina',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 2393 3911',
  phoneTel: '+56923933911',
  whatsapp: '56923933911',
  rating: 5.0,
  reviews: 6,
  igUser: 'roubeauty.cl',
  igFollowers: '5.400',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Rou Beauty, vi su página y quiero consultar por un producto',
)}`

export const WA_LINK_ENVIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Rou Beauty, quiero comprar con envío a domicilio',
)}`

export const IG_URL = 'https://www.instagram.com/roubeauty.cl'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Rou Beauty, Quechereguas 1696, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Rou Beauty, Quechereguas 1696, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/rou-beauty'

export const HORARIO = [
  { days: 'Lunes a sábado', time: '10:00 - 19:30' },
  { days: 'Domingo', time: 'Cerrado' },
]

/** Categorías tal como están pintadas en el mural de la tienda. */
export const REPISAS = [
  {
    sign: 'Skincare coreano',
    photo: 'mural-glow.webp',
    photoAlt:
      'Interior de Rou Beauty: mural rosa con la frase Aquí comienza tu glow y repisas de productos',
    desc: 'La repisa más pedida: limpiadores, esencias, cremas y los virales de TikTok, traídos de Corea.',
    nota: 'el corazón de la tienda',
  },
  {
    sign: 'Hair care',
    photo: 'haircare.webp',
    photoAlt:
      'Clienta de Rou Beauty mostrando un producto de hair care frente a la repisa del mismo nombre',
    desc: 'Shampoos, tratamientos y aceites para el pelo: la pared lo dice en letras gigantes.',
    nota: 'repisa HAIR CARE',
  },
  {
    sign: 'Maquillaje',
    photo: 'entrada.webp',
    photoAlt:
      'Entrada de Rou Beauty en Portal Molina con la repisa de maquillaje al fondo',
    desc: 'Labiales, bases y todo lo que se agota primero. Si es viral, está en Rou.',
    nota: 'repisa MAQUILLAJE',
  },
  {
    sign: 'Perfumería y accesorios',
    photo: 'clienta-bolsas.webp',
    photoAlt:
      'Clienta de Rou Beauty saliendo de la tienda con dos bolsas de compras',
    desc: 'Perfumes, pines, pañoletas y el detalle que completa el regalo.',
    nota: 'repisas PERFUMERÍA + ACCESORIOS',
  },
] as const

/** Productos nombrados en los posts reales de @roubeauty.cl. */
export const VIRALES = [
  {
    photo: 'multi-balm.webp',
    photoAlt:
      'Multi balm rosado de Moisture Care: barra de colágeno presentada en sus posts de Instagram',
    nombre: 'Collagen Vita Wrinkle Multi Balm',
    marca: 'Moisture Care',
    desc: 'El “bálsamo en barra” para piel seca o con líneas de expresión: se lleva en la cartera y se aplica directo.',
  },
  {
    photo: 'melaxin.webp',
    photoAlt:
      'Stick morado Dr. Melaxin Calcium CX aplicado en el rostro, como aparece en el Instagram de Rou Beauty',
    nombre: 'Dr. Melaxin Calcium CX',
    marca: 'Dr. Melaxin',
    desc: 'El stick que llaman “botox en barra” en sus reels. De los más pedidos por las clientas.',
  },
  {
    photo: 'eye-cream.webp',
    photoAlt:
      'Crema de contorno de ojos Centellian24 PDRN Eye Cream 360 Shot sobre globos lilas',
    nombre: 'PDRN Eye Cream 360 Shot',
    marca: 'Centellian24',
    desc: 'Contorno de ojos con PDRN para la zona más delicada del rostro.',
  },
] as const

/** Reseñas textuales de la ficha de Google Maps (5,0 · 6 opiniones). */
export const RESENAS = [
  {
    autor: 'Neyla Guerra Navarro',
    texto: 'Muy buenos productos coreanos y excelente atención, 100% recomendado.',
  },
  {
    autor: 'barriodetablones',
    texto:
      'La mejor tienda: siempre gran variedad de productos y buena atención, una ayuda para un regalo.',
  },
  {
    autor: 'Gloria Navarro',
    texto: 'Amo los productos skin care, muy buena atención.',
  },
] as const
