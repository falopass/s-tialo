/**
 * app/demos/clinica-prosaluddental/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y Facebook):
 * nombre, dirección, las 7 reseñas, el teléfono fijo (73) 233 2070 —
 * solo llamadas, la clínica no publica WhatsApp — y la página
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
  facebook: 'https://www.facebook.com/clinicadent.prosalud/',
  reviews: 7,
} as const

// La clínica solo publica teléfono fijo: el CTA de contacto es una llamada.
export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica ProSaludDental, Curapalihue, Linares, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Curapalihue, 3581423 Linares, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/clinica-prosaluddental'
