/**
 * app/demos/jc-all-quick-wash/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram
 * @jc_allquickwash): nombre, dirección en Av. Pedro de Valdivia, Temuco,
 * WhatsApp, nota 4,6 con 32 opiniones en Google. Las fotos son reales
 * del negocio. El local no publica horarios ni lista de precios: no se
 * muestran en la página (la agenda se coordina por WhatsApp).
 */

export const BIZ = {
  name: 'Lavado de Autos JC All Quick Wash',
  short: 'JC All Quick Wash',
  rubro: 'Lavado de autos',
  address: 'Av. Pedro de Valdivia 0411',
  city: 'Temuco',
  region: 'Región de La Araucanía',
  phoneDisplay: '+56 9 9499 2772',
  phoneTel: '+56994992772',
  whatsapp: '56994992772',
  rating: 4.6,
  ratingDisplay: '4,6',
  reviews: 32,
  instagram: 'jc_allquickwash',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de JC All Quick Wash y quiero agendar un lavado',
)}`

export const INSTAGRAM_URL = 'https://www.instagram.com/jc_allquickwash'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Lavado de Autos JC All Quick Wash, Av. Pedro de Valdivia 0411, Temuco, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Lavado de Autos JC All Quick Wash, Av. Pedro de Valdivia 0411, Temuco, Chile',
)}&output=embed`

export const IMG = '/demos/jc-all-quick-wash'
