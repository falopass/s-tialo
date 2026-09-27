/**
 * app/demos/clinica-y-farmacia-veterinaria-angel-guardian/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y página de
 * Facebook): nombre, dirección, comuna, teléfono/WhatsApp, las 237
 * reseñas y los 2.675 seguidores. Todo lo demás (servicios, precios,
 * horarios, reseñas de ejemplo) es contenido de muestra para mostrar
 * cómo se vería el sitio publicado.
 */

export const BIZ = {
  name: 'Clínica y Farmacia Veterinaria Ángel Guardián',
  short: 'Ángel Guardián',
  rubro: 'Clínica y farmacia veterinaria',
  address: 'Maipú 774',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 (73) 221 4790',
  phoneTel: '+56732214790',
  whatsapp: '56732214790',
  reviews: 237,
  followers: '2.675',
  facebook:
    'https://m.facebook.com/Clinica-Veterinaria-Angel-Guardian-de-Linares-1734252833471432/?locale2=es_LA',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de la Clínica Veterinaria Ángel Guardián y quiero agendar una hora',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica y Farmacia Veterinaria Ángel Guardián, Maipú 774, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Maipú 774, Linares, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/clinica-y-farmacia-veterinaria-angel-guardian'
