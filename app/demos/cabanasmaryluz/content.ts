/**
 * app/demos/cabanasmaryluz/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + su Instagram/Facebook,
 * según catálogo VivePelluhue): nombre, sector Mariscadero (Pelluhue),
 * nota 4,7 con 7 reseñas, WhatsApp (+56 9 5896 6626, publicado en sus
 * redes — la ficha de Maps no muestra teléfono) y dirección Las Viletas
 * 24, lote 6 (publicada por el negocio). Las reseñas citadas son texto
 * original en español. Las descripciones del "día en Mariscadero" son
 * redacción de muestra; las fotos son reales de la ficha.
 */

export const BIZ = {
  name: 'Cabañas Mar y Luz',
  short: 'Mar y Luz',
  rubro: 'Cabañas y hospedaje',
  sector: 'Sector Mariscadero',
  address: 'Las Viletas 24, lote 6',
  city: 'Pelluhue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5896 6626',
  phoneTel: '+56958966626',
  whatsapp: '56958966626',
  rating: 4.7,
  reviews: 7,
  igHandle: '@cabanasmaryluz',
  fbUrl: 'https://www.facebook.com/cabanasmary.luz.pelluhue',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Mar y Luz en Mariscadero y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Cabañas Mar y Luz, Mariscadero — Pelluhue',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Mar y Luz, Mariscadero, Pelluhue, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Mar y Luz, Mariscadero, Pelluhue, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanasmaryluz'
