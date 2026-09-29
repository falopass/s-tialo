/**
 * app/demos/el-alero-de-anita/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps, su Instagram
 * @alerodeanita y directorios locales): nombre, dirección (Maipú 486,
 * interior del Mercado Central de Linares), teléfono/WhatsApp
 * (+56 9 4995 7757, publicado en sus propios avisos), horario
 * (lunes a sábado 8:00–17:30, domingo 9:00–16:00), rating 3,9 en
 * Google y la carta escrita en su pizarra real: lomo a lo pobre,
 * chorrillanas, pastel de choclo, ceviches, reineta, salmón,
 * merluza, curanto, mariscales, paila marina y escabechado.
 * La dueña es Ana María Leiva, «Anita». Las fotos son reales:
 * el interior con banderas chilenas y sus publicaciones de
 * Instagram. No se citan reseñas: solo el rating verificado.
 */

export const BIZ = {
  name: 'El Alero de Anita',
  short: 'De Anita',
  rubro: 'Restaurant · Mercado Central',
  duena: 'Ana María Leiva',
  address: 'Maipú 486, Mercado Central',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4995 7757',
  whatsapp: '56949957757',
  instagram: '@alerodeanita',
  instagramUrl: 'https://www.instagram.com/alerodeanita/',
  rating: '3,9',
  horarioSemana: 'Lunes a sábado · 8:00 a 17:30',
  horarioDomingo: 'Domingo · 9:00 a 16:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola El Alero de Anita, vi su página y quiero consultar',
)}`

export const WA_LINK_MENU = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Anita, ¿cuál es la carta de hoy en El Alero?',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'El Alero de Anita, Maipú 486, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'El Alero de Anita, Maipú 486, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/el-alero-de-anita'
