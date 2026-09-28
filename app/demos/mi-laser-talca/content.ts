/**
 * app/demos/mi-laser-talca/content.ts
 *
 * Datos verificados en Google Maps e Instagram: nombre (MI LÁSER TALCA),
 * dirección (Edificio Plaza Talca, 1 Sur 690, piso 9, of. 905), WhatsApp
 * (+56 9 7229 2171), rating 5.0/40 reseñas en Google, Instagram
 * @milaser_talca (~4.992 seguidores), profesional a cargo (Jessica
 * Cáceres Arriagada, kinesióloga — de su tarjeta publicada en el perfil)
 * y correo de contacto. Las láminas del sitio son material real de su
 * Instagram y de las fotos de su ficha de Google.
 */
export const BIZ = {
  name: 'Mi Láser Talca',
  short: 'Mi Láser',
  rubro: 'Depilación láser',
  address: '1 Sur 690, piso 9, of. 905 · Edificio Plaza Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7229 2171',
  phoneTel: '+56972292171',
  whatsapp: '56972292171',
  email: 'gerencia@milasertalca.com',
  googleRating: 5.0,
  googleReviews: 40,
  igHandle: '@milaser_talca',
  igUrl: 'https://www.instagram.com/milaser_talca/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mi Láser Talca y quiero agendar una evaluación',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mi Láser Talca, 1 Sur 690 piso 9, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Mi Láser Talca, Edificio Plaza Talca, 1 Sur 690, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/mi-laser-talca'
