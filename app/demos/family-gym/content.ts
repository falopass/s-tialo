/**
 * app/demos/family-gym/content.ts
 *
 * Datos del mockup. REALES:
 * - Ficha de Google Maps: nombre, dirección (Calle 10 417, San
 *   Clemente), teléfono, rating 5.0 (1 reseña) y horario.
 * - Instagram @familygym_2024 (1.355 seguidores): nombre público
 *   "Club FamilyGym San Clemente", bio "Club Familiar Deportivo",
 *   horario Lun–Vie 8:30–21:00, destacadas de valores y planes, y las
 *   fotos usadas en esta página.
 * - Precios: publicados por el propio gym en sus posts de Instagram
 *   (plan mensual semipersonalizado $29.990 / 12 tickets; plan
 *   personalizado $99.990 / 12 clases).
 */

export const BIZ = {
  name: 'Club Family Gym San Clemente',
  short: 'Family Gym',
  rubro: 'Gimnasio · club familiar deportivo',
  address: 'Calle 10 #417',
  commune: 'San Clemente, Maule',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 2759 3248',
  phoneTel: '+56927593248',
  whatsapp: '56927593248',
  rating: '5,0',
  reviews: 1,
  instagram: 'familygym_2024',
  instagramFollowers: '1.355',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Family Gym y quiero consultar por los planes',
)}`

export const WA_LINK_VISITA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Family Gym y quiero agendar una clase de prueba',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Family Gym, Calle 10 417, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 10 417, 3520000 San Clemente, Maule, Chile',
)}&output=embed`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

/** Horario publicado en Instagram (@familygym_2024): Lun–Vie 8:30–21:00. */
export const HOURS = { days: 'Lunes a viernes', time: '8:30–21:00' } as const

export const IMG = '/demos/family-gym'
