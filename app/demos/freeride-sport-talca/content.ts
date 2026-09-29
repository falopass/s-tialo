/**
 * app/demos/freeride-sport-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y sitio oficial
 * de la marca): nombre, rubro, dirección, teléfono, horario, rating,
 * número de reseñas, fotos del local y logo. Las reseñas citadas son
 * opiniones reales publicadas en su ficha de Google Maps.
 * Textos descriptivos y lista de productos: muestra basada en lo que
 * se ve en las fotos y en el catálogo público de la marca.
 */

export const BIZ = {
  name: 'Freeride Sport Talca',
  short: 'Freeride Talca',
  rubro: 'Tienda de motocicletas',
  address: 'Av. San Miguel 3163',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4298 0580',
  phoneTel: '+56942980580',
  whatsapp: '56942980580',
  rating: '4.7',
  googleReviews: '83',
  plusCode: 'H988+QX Talca',
  instagram: 'https://instagram.com/freeridesportshop_talca_oficial',
  facebook: 'https://www.facebook.com/freeridechilestore',
} as const

export const HOURS = [
  { days: 'Lunes a viernes', time: '9:30 – 18:30' },
  { days: 'Sábado', time: '9:00 – 14:00' },
  { days: 'Domingo', time: 'Cerrado' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Freeride Sport Talca y quiero consultar por un repuesto para mi moto',
)}`

export const WA_LINK_ROPA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Freeride Sport Talca y quiero consultar por ropa y protección para moto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Freeride Sport Talca, Av. San Miguel 3163, Talca, Región del Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Freeride Sport Talca, Av. San Miguel 3163, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/freeride-sport-talca'
