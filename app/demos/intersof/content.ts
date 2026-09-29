/**
 * app/demos/intersof/content.ts
 *
 * Datos del mockup. REALES (sitio propio intersof.cl + ficha pública de
 * Google Maps + letrero de la vitrina): nombre, dirección en 9 Oriente 1367
 * (Talca), teléfono, WhatsApp, correo, horarios, rating 4.5 con 44 reseñas
 * y las citas de clientes. Los textos de venta son de muestra.
 */

export const BIZ = {
  name: 'Intersof',
  legal: 'Intersof Ltda',
  rubro: 'Tienda de informática y soporte técnico',
  tagline: 'Tecnología al servicio de tus necesidades',
  address: '9 Oriente 1367',
  addressHint: 'entre 2 y 3 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '71 261 3610',
  phoneTel: '+56712613610',
  whatsapp: '56992884793',
  whatsappDisplay: '+56 9 9288 4793',
  email: 'ventas2@intersof.cl',
  web: 'intersof.cl',
  rating: 4.5,
  reviews: 44,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Intersof y quiero consultar por un producto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Intersof Ltda, 9 Oriente 1367, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Intersof Ltda, 9 Oriente 1367, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/intersof'

/** Horario publicado en su propio sitio (intersof.cl). */
export const HORAS = [
  { days: 'Lunes a jueves', time: '9:00 a 14:00 · 15:00 a 19:00' },
  { days: 'Viernes', time: '9:00 a 14:00 · 15:00 a 18:00' },
  { days: 'Sábado y domingo', time: 'Cerrado' },
] as const

/** Productos fotografiados en su tienda en línea (intersof.cl). */
export const VITRINA = [
  { src: `${IMG}/camara-eb3.webp`, alt: 'Cámara de seguridad EZVIZ EB3 con batería', cat: 'videovigilancia', name: 'Cámara EB3' },
  { src: `${IMG}/camara-h8c.webp`, alt: 'Cámara domo motorizada EZVIZ H8c', cat: 'videovigilancia', name: 'Cámara H8c' },
  { src: `${IMG}/tplink.webp`, alt: 'Equipo de red TP-Link en su caja', cat: 'redes', name: 'Equipo TP-Link' },
  { src: `${IMG}/nanostation.webp`, alt: 'Antena NanoStation para enlace inalámbrico', cat: 'redes', name: 'NanoStation' },
  { src: `${IMG}/ups.webp`, alt: 'UPS de respaldo de energía para computador', cat: 'energía', name: 'UPS de respaldo' },
  { src: `${IMG}/toner.webp`, alt: 'Tóner de repuesto para impresora láser', cat: 'insumos', name: 'Tóner 2370' },
  { src: `${IMG}/tinta.webp`, alt: 'Botella de tinta de repuesto para impresora', cat: 'insumos', name: 'Tinta de repuesto' },
] as const

/** Reseñas reales publicadas en su ficha de Google. */
export const RESENAS = [
  {
    author: 'Javier Puentes',
    stars: 5,
    text: 'Muy buena la atención, he llevado varios notebooks e impresoras a reparar y todo perfecto siempre.',
  },
  {
    author: 'Fabian Rivera Sepulveda',
    stars: 5,
    text: 'Un lugar muy cordial en su atención, variedad de productos.',
  },
] as const
