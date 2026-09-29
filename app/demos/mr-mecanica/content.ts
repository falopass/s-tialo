/**
 * app/demos/mr-mecanica/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * comuna, WhatsApp (+56 9 8960 7187), nota 5,0 con 6 reseñas
 * (citas textuales en la página) y horario confirmado por el
 * negocio (Lun–Vie con colación, sábado hasta mediodía). La
 * dirección calle sale del georreferenciado de Street View
 * (Humberto Silva, San Clemente). Los servicios son los que
 * anuncia el letrero de la fachada: frenos, rectificado de
 * discos y tambores, mecánica general y cambio de aceite.
 * Las fotos son reales (ficha de Maps y Street View del lugar).
 */

export const BIZ = {
  name: 'MR Mecánica',
  short: 'MR Mecánica',
  rubro: 'Taller mecánico',
  address: 'Humberto Silva, San Clemente',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8960 7187',
  phoneTel: '+56989607187',
  whatsapp: '56989607187',
  reviews: 6,
  rating: '5,0',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de MR Mecánica y quiero agendar una revisión',
)}`

export const WA_LINK_PRESUPUESTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de MR Mecánica y quiero pedir un presupuesto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'MR MECÁNICA, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'MR MECÁNICA, Humberto Silva, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/mr-mecanica'
