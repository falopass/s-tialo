/**
 * app/demos/atlantix-clinica-odontologica-san-javier-de-lonc/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram):
 * nombre, dirección, las 58 reseñas, el WhatsApp y la cuenta
 * @clinicaatlantix. Todo lo demás (servicios, precios, horarios,
 * textos de reseñas) es contenido de muestra para mostrar cómo se
 * vería el sitio: va marcado como tal en la página.
 */

export const BIZ = {
  name: 'Atlantix Clínica Odontológica',
  short: 'Atlantix',
  rubro: 'Clínica dental',
  address: 'Sgto. Aldea 2610',
  city: 'San Javier de Loncomilla',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 2014 8665',
  phoneTel: '+56920148665',
  whatsapp: '56920148665',
  instagram: 'https://instagram.com/clinicaatlantix',
  reviews: 58,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Atlantix Clínica Odontológica y quiero agendar una hora',
)}`

export const WA_LINK_EVAL = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Atlantix Clínica Odontológica y quiero consultar por una evaluación',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Atlantix Clinica Odontologica, Sgto. Aldea 2610, San Javier de Loncomilla, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sgto. Aldea 2610, San Javier de Loncomilla, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/atlantix-clinica-odontologica-san-javier-de-lonc'
