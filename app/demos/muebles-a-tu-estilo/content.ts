/**
 * app/demos/muebles-a-tu-estilo/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps):
 * nombre, rubro, comuna, dirección (Teniente Berguño 1369, Molina),
 * WhatsApp, horario completo de la semana y 531 seguidores en
 * Facebook. Hoy no tiene reseñas en Google. Las fotos del galpón
 * y la consola son fotos reales publicadas en su ficha; los renders
 * marcados "bosquejo" son referencias generadas.
 */

export const BIZ = {
  name: 'muebles a tu estilo',
  rubro: 'Fábrica de muebles',
  address: 'Teniente Berguño 1369',
  postal: '3380000',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9933 5199',
  phoneTel: '+56999335199',
  whatsapp: '56999335199',
  reviews: 0,
  facebookFollowers: '531',
} as const

/** Horario real publicado en la ficha de Google Maps. */
export const HORARIO = [
  { d: 'Lunes', h: '9:30 – 19:00' },
  { d: 'Martes', h: '9:30 – 19:00' },
  { d: 'Miércoles', h: '9:30 – 19:30' },
  { d: 'Jueves', h: '9:30 – 19:30' },
  { d: 'Viernes', h: '9:30 – 19:30' },
  { d: 'Sábado', h: '10:00 – 18:30' },
  { d: 'Domingo', h: '10:30 – 13:00' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de muebles a tu estilo y quiero cotizar un mueble',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Teniente Berguño 1369, 3380000 Molina, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Teniente Berguño 1369, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/muebles-a-tu-estilo'
