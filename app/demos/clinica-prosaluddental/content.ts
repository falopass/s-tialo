/**
 * app/demos/clinica-prosaluddental/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y Facebook):
 * nombre, dirección, las 7 reseñas, el teléfono/WhatsApp y la página
 * facebook.com/clinicadent.prosalud. Todo lo demás (servicios,
 * precios, horarios, textos de reseñas) es contenido de muestra para
 * mostrar cómo se vería el sitio: va marcado como tal en la página.
 */

export const BIZ = {
  name: 'Clínica ProSaludDental',
  short: 'ProSaludDental',
  rubro: 'Clínica dental',
  address: 'Curapalihue',
  postal: '3581423',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 73 233 2070',
  phoneTel: '+56732332070',
  whatsapp: '56732332070',
  facebook: 'https://www.facebook.com/clinicadent.prosalud/',
  reviews: 7,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica ProSaludDental y quiero agendar una hora',
)}`

export const WA_LINK_EVAL = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica ProSaludDental y quiero consultar por una evaluación',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica ProSaludDental, Curapalihue, Linares, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Curapalihue, 3581423 Linares, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/clinica-prosaluddental'
