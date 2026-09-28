/**
 * app/demos/salon-de-belleza-gabriela-saavedra-talca/content.ts
 *
 * Datos del mockup. REALES y verificados el 28-09-2026 en la ficha de
 * Google Maps y la página de Facebook @SalonGabrielaSaavedra: nombre,
 * categoría (centro de estética), dirección en Talca, fijo (71) 221 2381
 * para llamadas, WhatsApp +56 9 6821 5950 (portada de Facebook y
 * AgendaPro), 4.5 estrellas con 50 reseñas en Google, 1.824 seguidores
 * en Facebook, horario lunes a domingo 10:00-20:00 y las marcas que
 * exhibe el letrero (Wella Professionals, Sebastian Professional).
 * Los servicios citados salen de las publicaciones del salón (manicure:
 * extensiones acrílico/polygel/softgel, kapping, esmaltado permanente y
 * pedicura; depilación con cera; cabello y color). Precios: muestra.
 */

export const BIZ = {
  name: 'Salón de Belleza Gabriela Saavedra',
  short: 'Gabriela Saavedra',
  tagline: 'Concepto Estilo',
  rubro: 'Centro de estética',
  address: '32 Oriente 1327',
  sector: 'Las Rastras',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6821 5950',
  phoneTel: '+56968215950',
  whatsapp: '56968215950',
  rating: '4.5',
  reviews: 50,
  facebook: 'https://www.facebook.com/SalonGabrielaSaavedra',
  facebookFollowers: '1.824',
  horario: 'Todos los días 10:00-20:00',
  marcas: ['Wella Professionals', 'Sebastian Professional'],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Salón de Belleza Gabriela Saavedra y quiero agendar una hora',
)}`

export const waServicio = (servicio: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página del Salón de Belleza Gabriela Saavedra y quiero consultar por ${servicio}`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Salón de Belleza Gabriela Saavedra, Calle 32 Ote. 1327, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 32 Ote. 1327, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/salon-de-belleza-gabriela-saavedra-talca'
