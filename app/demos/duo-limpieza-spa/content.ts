/**
 * app/demos/duo-limpieza-spa/content.ts
 *
 * Datos REALES (ficha de Google Maps + Instagram @duolimpiezaoficial):
 * nombre, servicio, teléfono/WhatsApp, horario, rating 5,0 con 9 reseñas,
 * zona de trabajo (Talca y Región del Maule) y los textos de las reseñas
 * citadas. Camilo y Luis aparecen nombrados por sus clientes.
 * Sin dirección de local: es servicio a domicilio.
 */

export const BIZ = {
  name: 'Dúo Limpieza SpA',
  short: 'Dúo Limpieza',
  rubro: 'Limpieza de hogares y empresas',
  address: 'Servicio a domicilio',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8263 8454',
  phoneTel: '+56982638454',
  whatsapp: '56982638454',
  rating: '5,0',
  reviews: 9,
  instagram: 'https://www.instagram.com/duolimpiezaoficial',
  instagramFollowers: '2.492',
  hogares: '+200',
  owners: 'Camilo y Luis',
  hours: [{ d: 'Lunes a domingo', h: '8:00 – 18:30' }],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Dúo Limpieza, vi su página y quiero cotizar una limpieza',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Dúo Limpieza SpA, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Dúo Limpieza SpA, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/duo-limpieza-spa'
