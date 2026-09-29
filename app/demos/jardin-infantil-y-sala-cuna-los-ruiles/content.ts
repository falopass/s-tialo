/**
 * app/demos/jardin-infantil-y-sala-cuna-los-ruiles/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + su sitio oficial
 * losruiles.cl): nombre "Jardín Infantil y Sala Cuna Los Ruiles",
 * dirección 3 Oriente 2080, Talca, teléfono (71) 223 1022, WhatsApp
 * +56 9 9673 8744 y +56 9 8478 8295, correo jardinysalacuna@losruiles.cl,
 * horario lunes a viernes 7:30–18:00, nota Google 4,9, ~30 años de
 * trayectoria y enfoque en exploración y desarrollo sensorial.
 * Las fotos de public/demos/jardin-infantil-y-sala-cuna-los-ruiles/ y el
 * logo son activos reales publicados en su propio sitio web. Las reseñas
 * citadas son públicas de Google Maps. Los textos y momentos del día son
 * de muestra.
 */

export const BIZ = {
  name: 'Jardín Infantil y Sala Cuna Los Ruiles',
  short: 'Los Ruiles',
  rubro: 'Jardín infantil y sala cuna',
  address: '3 Oriente 2080',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '(71) 223 1022',
  phoneTel: '+56712231022',
  whatsapp: '+56996738744',
  whatsappDisplay: '+56 9 9673 8744',
  email: 'jardinysalacuna@losruiles.cl',
  rating: 4.9,
  hours: 'Lunes a viernes · 7:30–18:00',
  years: '~30 años',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quisiera información sobre el jardín y la sala cuna',
)}`

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Jardín Infantil y Sala Cuna Los Ruiles, 3 Oriente 2080, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '3 Oriente 2080, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/jardin-infantil-y-sala-cuna-los-ruiles'
