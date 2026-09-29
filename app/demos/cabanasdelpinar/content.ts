/**
 * app/demos/cabanasdelpinar/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + directorio municipal
 * de Curepto): nombre, dirección Abate Molina 16C, WhatsApp
 * (+56 9 9991 8875), nota 4,8 con 16 reseñas, Facebook del negocio
 * y las reseñas citadas (texto original en español). El directorio
 * municipal publica cinco cabañas. Las descripciones de ambiente son
 * redacción de muestra; las fotos son reales de la ficha.
 */

export const BIZ = {
  name: 'Cabañas del Pinar',
  short: 'Del Pinar',
  rubro: 'Cabañas y hospedaje',
  address: 'Abate Molina 16C',
  city: 'Curepto',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9991 8875',
  phoneTel: '+56999918875',
  whatsapp: '56999918875',
  rating: 4.8,
  reviews: 16,
  cabins: 5,
  fbUrl: 'https://www.facebook.com/delpinarcurepto/',
  fbHandle: 'delpinarcurepto',
  plusCode: 'WX5H+37 Curepto',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas del Pinar en Curepto y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Cabañas del Pinar, Curepto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas del Pinar, Abate Molina 16C, Curepto, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas del Pinar, Abate Molina 16C, Curepto, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanasdelpinar'
