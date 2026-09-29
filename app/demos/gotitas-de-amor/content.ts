/**
 * Datos verificados en Google Maps y jardinesinfantiles.net.
 *
 * Fuentes:
 * - Google Maps: ficha "Gotitas de amor" (jardín infantil JUNJI VTF),
 *   L-202 380, Villa Alegre (plus code 8749+W9). 4,3★ en 45 reseñas.
 *   Teléfono publicado: +56 9 5253 6630. Consultada el 28-09-2026 y
 *   re-verificada el 29-09-2026: la ficha no está reclamada (sin
 *   horario ni sitio web) y publica solo 2 fotos: fachada y entrada.
 * - jardinesinfantiles.net: Av. Certenejas 410, Villa Alegre.
 * No existe Instagram/Facebook del jardín ni logo propio (jardín VTF):
 * las demás imágenes del demo son escenas SVG marcadas como bosquejo.
 */
export const BIZ = {
  name: 'Jardín Infantil Gotitas de Amor',
  short: 'Gotitas de Amor',
  rubro: 'Sala cuna y jardín infantil',
  city: 'Villa Alegre',
  region: 'Región del Maule',
  address: 'Av. Certenejas 410 (camino L-202), Certenejas',
  phoneDisplay: '+56 9 5253 6630',
  whatsapp: '56952536630',
  rating: '4,3',
  reviews: '45',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Jardín Gotitas de Amor y quisiera consultar.',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Gotitas de amor, Certenejas, Villa Alegre, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Gotitas de amor, Certenejas, Villa Alegre, Chile',
)}&output=embed`
